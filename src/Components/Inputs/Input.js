import { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import classes from './Input.module.css';

const Input = () => {
  const ctx = useContext(ConverterContext);

  const handleInput = e => {
    ctx.setInputValue(e.target.value);
  };

  return (
    <div className={classes.row}>
      <p className={classes.label}>Amount</p>
      <div className={classes['flex-me']}>
        <p className={classes['input-symbol']}>{ctx.result.symbol}</p>
        <input onChange={handleInput} type="number" className={classes['input-amount']} placeholder="Amount" value={ctx.inputValue} />
      </div>
    </div>
  );
};

export default Input;
