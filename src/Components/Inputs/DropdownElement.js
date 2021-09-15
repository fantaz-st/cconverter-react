import React from 'react';

import classes from './DropdownElement.module.css';

const DropdownElement = props => {
  const onListItemClick = e => {
    props.onValuteClick({ code: props.code, name: props.name });
  };

  return (
    <li className={`${classes['currency-list-item']} ${classes[props.isActive]}`} onClick={onListItemClick}>
      <div className={`${classes['currency-flag']} ${classes['currency-flag-' + props.code.toLowerCase()]}`}></div>
      <span data-value={props.code}>{props.code}</span> - {props.name}
    </li>
  );
};

export default DropdownElement;
