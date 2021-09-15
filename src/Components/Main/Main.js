import ConverterContextProvider from '../../store/ConverterContextProvider';
import Description from '../Description/Description';
import Inputs from '../Inputs/Inputs';

import classes from './Main.module.css';
import ResultAndFavorites from './ResultAndFavorites';

const Main = () => {
  return (
    <div className={classes.main}>
      <ConverterContextProvider>
        <Inputs />
        <ResultAndFavorites />
        <Description />
      </ConverterContextProvider>
    </div>
  );
};

export default Main;
