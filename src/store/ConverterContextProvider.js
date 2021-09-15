import { useReducer, useEffect } from 'react';
import useHttp from '../Components/Hooks/use-http';

import ConverterContext from './converter-context';
import { initialState, reducer } from './helpers';

const URL_1 = `https://api.exchangerate.host/latest/`;
const URL_2 = `https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json`;

const ConverterContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { error: fetchRatesError, sendRequest: fetchRates } = useHttp();
  const { error: fetchRatesInformationError, sendRequest: fetchRatesInformation } = useHttp();

  //load favorites on INIT
  useEffect(() => {
    const storage = localStorage.getItem('convert-favorites');
    if (storage) {
      dispatch({
        type: 'LOAD_FROM_LS',
        value: JSON.parse(storage),
      });
    }
  }, []);

  useEffect(() => {
    const addRatesToState = data => {
      dispatch({
        type: 'ADD_RATES',
        value: data.rates,
      });
    };

    const addRatesInformationToState = data => {
      dispatch({
        type: 'ADD_VALUTES',
        value: data,
      });
    };

    fetchRates({ url: URL_1 }, addRatesToState);
    fetchRatesInformation({ url: URL_2 }, addRatesInformationToState);
  }, [fetchRates, fetchRatesInformation]);

  useEffect(() => {
    if (fetchRatesInformationError) {
      dispatch({
        type: 'ERROR',
        value: fetchRatesInformationError,
      });
    }
    if (fetchRatesError) {
      dispatch({
        type: 'ERROR',
        value: fetchRatesError,
      });
    }
  }, [fetchRatesError, fetchRatesInformationError]);

  const onSetActiveDropdown = value => {
    dispatch({ type: 'SET_ACTIVE_DROPDOWN', value: value });
  };

  const onAssignValute = valute => {
    if (state.activeDropdown === 'from') dispatch({ type: 'SET_FROM', value: valute });
    if (state.activeDropdown === 'to') dispatch({ type: 'SET_TO', value: valute });
    onSetActiveDropdown('');
  };

  const onSetInputValue = value => {
    dispatch({ type: 'SET_INPUT_VALUE', value: value });
  };

  const valutesArr = state.valutes;
  const ratesArr = state.rates;

  useEffect(() => {
    const valutes = Object.keys(ratesArr)
      .filter(rate => (rate = valutesArr[rate]))
      .map(rate => {
        return {
          code: rate,
          name: valutesArr[rate].name,
          rate: ratesArr[rate],
          symbol: valutesArr[rate].symbol_native,
          name_plural: valutesArr[rate].name_plural,
        };
      });
    dispatch({
      type: 'ADD_VALUTES_WITH_INFO',
      value: valutes,
    });
  }, [valutesArr, ratesArr]);

  const { rates, fromValute, toValute, inputValue, valutesWithInfo } = state;

  useEffect(() => {
    if (fromValute && toValute && inputValue) {
      let index1, index2;

      valutesWithInfo.forEach((cur, i) => {
        if (cur.code.includes(fromValute.code)) index1 = i;
        if (cur.code.includes(toValute.code)) index2 = i;
      });
      let result = {
        amount: inputValue,
        from: fromValute.code,
        to: toValute.code,
        calc: ((rates[toValute.code] / rates[fromValute.code]) * inputValue).toFixed(6),
        rate1: rates[toValute.code],
        rate0: rates[fromValute.code],
        symbol: valutesWithInfo[index1].symbol,
        nameFrom: valutesWithInfo[index1].name,
        nameTo: valutesWithInfo[index2].name_plural,
        //favorited: checkIfFavorited(from, to),
      };

      dispatch({
        type: 'SET_RESULT',
        value: result,
      });
    }
  }, [fromValute, toValute, inputValue, rates, valutesWithInfo]);

  const onSetSelectedFavorite = value => {
    const from = valutesWithInfo.filter(val => val.code === value.split('-')[0]);
    const to = valutesWithInfo.filter(val => val.code === value.split('-')[1]);
    dispatch({
      type: 'SET_SELECTED_FAVORITE',
      payload: {
        from: from[0],
        to: to[0],
      },
    });
  };

  const onSwitchValutes = (from, to) => {
    dispatch({
      type: 'SWITCH_VALUTE',
      payload: {
        from: to,
        to: from,
      },
    });
  };

  const onToggleFavorites = () => {
    const fromTo = `${state.fromValute.code}-${state.toValute.code}`;
    if (state.favorites.includes(fromTo)) {
      const newFavorites = state.favorites.filter(fav => fav !== fromTo);
      dispatch({
        type: 'REMOVE_FAVORITE',
        value: newFavorites,
      });
    } else {
      dispatch({
        type: 'ADD_FAVORITE',
        value: fromTo,
      });
    }
  };

  //persist favorites in local storage when favorite is added to state.favorites
  const favoritesForLocalStorage = state.favorites;

  useEffect(() => {
    localStorage.setItem('convert-favorites', JSON.stringify(favoritesForLocalStorage));
  }, [favoritesForLocalStorage]);

  const converterContext = {
    valutes: state.valutes,
    activeDropdown: state.activeDropdown,
    value: state.value,
    inputValue: state.inputValue,
    error: state.error,
    favorites: state.favorites,
    valutesWithInfo: state.valutesWithInfo,
    fromValute: state.fromValute,
    toValute: state.toValute,
    assignValute: onAssignValute,
    setActiveDropdown: onSetActiveDropdown,
    setInputValue: onSetInputValue,
    setSelectedFavorite: onSetSelectedFavorite,
    switchValutes: onSwitchValutes,
    toggleFavorites: onToggleFavorites,

    result: state.result,
  };
  return <ConverterContext.Provider value={converterContext}>{props.children}</ConverterContext.Provider>;
};

export default ConverterContextProvider;
