import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionFetchData} from "./store/coworker/coworker.actions";
import {Coworker, Page} from "./types";
import CoworkerCard from './components/coworker/coworker.component';
import FilterAreaComponent from './components/filterArea/filterArea.component';
import PaginationComponent from './components/pagination/pagination.components';
import {selectFilteredCoworkers, selectPage} from "./store/pagination/pagination.selectors";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentPage: Coworker[] = useSelector(selectPage);

  React.useEffect((): void => {
    dispatch(actionFetchData());
  }, [dispatch]);

  const renderCoworkers = (): JSX.Element[] => currentPage.length
    ? currentPage.map((coworker: Coworker):JSX.Element => <CoworkerCard key={coworker.email} coworker={coworker}/>)
    : [];

  const renderPagination = (): JSX.Element | null => currentPage.length
    ? <PaginationComponent />
    : null;

  return (
    <div className="App">
      <FilterAreaComponent />
      <div style={{ height: '64vh', overflowY: 'auto' }}>
        { renderCoworkers() }
      </div>
      { renderPagination() }
    </div>
  );
}

export default App;
