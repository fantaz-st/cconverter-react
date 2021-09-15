import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import classes from './Favorites.module.css';
import FavoritesButton from './FavoritesButton';

const Favorites = props => {
  const ctx = useContext(ConverterContext);

  const handleFavoriteClick = val => {
    ctx.setSelectedFavorite(val);
  };

  return (
    <>
      <p className={classes['sub-title']}>Favorites</p>
      <div className={classes.favorites}>
        {ctx.favorites.map(fav => (
          <FavoritesButton key={fav} value={fav} onHandleFavoriteClick={handleFavoriteClick} fav={fav} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
