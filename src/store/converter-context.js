import React from 'react';

const initialState = {
  activeDropdown: '',
  value: 'Please Select',
  inputValue: '1',
  valutes: [],
  valutesWithInfo: [],
  rates: [],
  result: [],
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

const ConverterContext = React.createContext(initialState);

export default ConverterContext;
