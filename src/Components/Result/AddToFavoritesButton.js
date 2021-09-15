import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import classes from './AddToFavoritesButton.module.css';

const FavoriteButton = () => {
  const ctx = useContext(ConverterContext);

  const handleToggleFavorites = params => {
    ctx.toggleFavorites();
  };

  const fromTo = `${ctx.fromValute.code}-${ctx.toValute.code}`;

  return (
    <button className={classes['toggle-favorite']} onClick={handleToggleFavorites}>
      <i className={ctx.favorites.includes(fromTo) ? `fas fa-heart ${classes.heart}` : `far fa-heart ${classes.heart}`}></i>
      <p>{!ctx.favorites.includes(fromTo) ? 'Add favorite' : 'Remove favorite'}</p>
    </button>
  );
};

export default FavoriteButton;
