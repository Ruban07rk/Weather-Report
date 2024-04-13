import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherComponent from './components/WeatherComponent';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherComponent />
      </div>
    </Provider>
  );
}

export default App;
