import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionFetchData} from "./store/coworker/coworker.actions";
import {Coworker} from "./types";
import CoworkerCard from './components/coworker/coworker.component';
import FilterAreaComponent from './components/filterArea/filterArea.component';
import {selectFilteredCoworkers} from "./store/coworker/coworker.selectors";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const filteredCoworkers: Coworker[] = useSelector(selectFilteredCoworkers);

  React.useEffect((): void => {
    dispatch(actionFetchData());
  }, [dispatch]);

  const renderCoworkers = (): JSX.Element[] => filteredCoworkers
    ? filteredCoworkers.map((coworker: Coworker):JSX.Element => <CoworkerCard coworker={coworker}/>)
    : [];

  return (
    <div className="App">
      <FilterAreaComponent />
      { renderCoworkers() }
    </div>
  );
}

export default App;
