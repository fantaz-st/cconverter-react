import React, { useContext } from 'react';

import Dropdown from './Dropdown';
import Input from './Input';
import SwitchButton from './SwitchButton';
import classes from './Inputs.module.css';
import ConverterContext from '../../store/converter-context';

const Inputs = () => {
  const ctx = useContext(ConverterContext);

  return (
    <div className={classes.flex}>
      <Input />
      <Dropdown value={ctx.fromValute} usedFor={'from'} isActive={ctx.activeDropdown === 'from' ? true : false} />
      <SwitchButton />
      <Dropdown value={ctx.toValute} usedFor={'to'} isActive={ctx.activeDropdown === 'to' ? true : false} />
    </div>
  );
};

export default Inputs;
