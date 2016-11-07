require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SearchPanel from './SearchPanel';
import DateList from './DateList';
import SideFilterPanel from './SideFilterPanel';
import LowPriceCalendar from './LowPriceCalendar';
import SearchResultSummary from './SearchResultSummary';
import SearchResultTopFilter from './SearchResultTopFilter';
import FlightListDetail from './FlightListDetail';
import Header from './Header';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchPanel />
        <SideFilterPanel />
        <SearchResultTopFilter />

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;