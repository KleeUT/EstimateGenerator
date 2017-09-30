import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { PropTypes } from 'prop-types'; 
import { estimate } from "./reducers/Estimate";
import LoggingReducer from './reducers/LoggingReducer';
import EstimateDisplay from './EstimateDisplay'
import EstimateButton from './EstimateButton';
import PreviousEstimates from './PreviousEstimateDisplay'
const store = createStore(
  combineReducers({
    estimate, LoggingReducer
  })
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <EstimateDisplay />
          <EstimateButton />
          <hr />
          <PreviousEstimates />
        </div>
      </Provider>
    );
  }
}

App.prototypes = {
  store: PropTypes.object
}

export default App;
