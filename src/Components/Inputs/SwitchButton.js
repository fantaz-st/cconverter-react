import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import classes from './SwitchButton.module.css';

const SwitchButton = () => {
  const ctx = useContext(ConverterContext);

  const handleValuteSwitch = () => {
    const fromValute = ctx.fromValute;
    const toValute = ctx.toValute;
    ctx.switchValutes(fromValute, toValute);
  };

  return (
    <button className={classes.switch} onClick={handleValuteSwitch}>
      <i className="fas fa-exchange-alt"></i>
    </button>
  );
};

export default SwitchButton;
