import React, { useContext } from 'react';
import ConverterContext from '../../store/converter-context';
import classes from './Dropdown.module.css';
import DropdownElement from './DropdownElement';

const Dropdown = props => {
  const ctx = useContext(ConverterContext);

  /* const ref = useRef();

  const activeDropdown = ctx.activeDropdown;
  const contextSetActiveDropdown = ctx.setActiveDropdown;
  useEffect(() => {
    const checkIfClickedOutside = e => {
      console.log(ref.current);
      if (activeDropdown && ref.current && !ref.current.contains(e.target)) {
        contextSetActiveDropdown('');
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [activeDropdown, contextSetActiveDropdown]); */

  let userChoseValute = 'Please Select...';

  if (props.value) {
    userChoseValute = (
      <div>
        <div className={`${classes['currency-flag']} ${classes['currency-flag-' + props.value.code.toLowerCase()]}`}></div>
        <span data-value={props.value.code}>{props.value.code} </span> - {props.value.name}
      </div>
    );
  }

  const onDropdownClick = () => {
    if (ctx.activeDropdown === props.usedFor) ctx.setActiveDropdown('');
    if (ctx.activeDropdown !== props.usedFor) ctx.setActiveDropdown(props.usedFor);
    if (ctx.activeDropdown === '') ctx.setActiveDropdown(props.usedFor);
  };

  const handleValuteClick = valute => {
    ctx.assignValute(valute);
  };

  return (
    <div className={classes.row}>
      <p className={classes.label}>{props.usedFor}</p>
      <div className={classes.dropdown} id={`${props.usedFor}-dropdown`}>
        <div className={`button-${props.usedFor} ${classes['dropdown-button']}`} onClick={onDropdownClick}>
          {userChoseValute}
        </div>
        <span className={classes.triangle}>&#9660;</span>
        <ul className={`currency-${props.usedFor} ${classes['dropdown-selection']} ${props.isActive ? classes.active : ''}`}>
          {ctx.valutesWithInfo.map(val => (
            <DropdownElement
              key={val.code}
              code={val.code}
              isActive={props.value.code === val.code ? 'active' : ''}
              name={val.name}
              onValuteClick={handleValuteClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
