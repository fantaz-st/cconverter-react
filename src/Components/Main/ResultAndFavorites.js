import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import Favorites from '../Favorites/Favorites';
import Result from '../Result/Result';

const ResultAndFavorites = () => {
  const ctx = useContext(ConverterContext);

  return (
    <>
      {ctx.result.calc && <Result />}
      {ctx.error && <p>{ctx.error}</p>}
      {ctx.favorites.length > 0 && <Favorites />}
    </>
  );
};

export default ResultAndFavorites;
