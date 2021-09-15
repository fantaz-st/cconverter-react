import React from 'react';
import classes from './FavoritesButton.module.css';

const FavoritesButton = props => {
  const handleFavoriteClick = () => {
    props.onHandleFavoriteClick(props.value);
  };

  return (
    <button
      onClick={handleFavoriteClick}
      key={props.fav}
      className={classes['favorite-button']}
      datachange={`${props.fav.split('-')[0]}-${props.fav.split('-')[1]}`}
    >
      {`${props.fav.split('-')[0]} > ${props.fav.split('-')[1]}`}
    </button>
  );
};

export default FavoritesButton;
