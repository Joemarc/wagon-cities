import React from 'react';

import CityList from '../containers/city_list';
import SelectedCity from "../containers/selectedCity";

const App = () => {
  return (
    <div className="app">
      <CityList />
      <SelectedCity />
    </div>
  );
};

export default App;

