export const initialState = {
  activeDropdown: '',
  value: 'Please Select',
  inputValue: '1',
  valutes: [],
  valutesWithInfo: [],
  rates: [],
  result: {},
  // favorites: ['EUR-HRK', 'USD-HRK'],
  favorites: [],
  error: null,
  fromValute: '',
  toValute: '',
  assignValute: val => {},
  setActiveDropdown: val => {},
  setInputValue: val => {},
  setSelectedFavorite: val => {},
  toggleFavorites: () => {},
  switchValutes: (val1, val2) => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RATES':
      return { ...state, rates: action.value };
    case 'ADD_VALUTES':
      return { ...state, valutes: action.value };
    case 'ADD_VALUTES_WITH_INFO':
      return { ...state, valutesWithInfo: action.value };
    case 'ERROR':
      return { ...state, error: action.value };
    case 'SET_ACTIVE_DROPDOWN':
      return { ...state, activeDropdown: action.value };
    case 'SET_FROM':
      return { ...state, fromValute: action.value };
    case 'SET_TO':
      return { ...state, toValute: action.value };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.value };
    case 'SET_RESULT':
      return { ...state, result: action.value };
    case 'SET_SELECTED_FAVORITE':
      return { ...state, fromValute: action.payload.from, toValute: action.payload.to };
    case 'SWITCH_VALUTE':
      return { ...state, fromValute: action.payload.from, toValute: action.payload.to };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: action.value };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.value] };
    case 'LOAD_FROM_LS':
      return { ...state, favorites: action.value };
    default:
      return state;
  }
};
