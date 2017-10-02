import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import { PropTypes } from "prop-types";
import { estimate } from "./reducers/Estimate";
import styled from "styled-components";
import LoggingReducer from "./reducers/LoggingReducer";
import EstimateDisplay from "./EstimateDisplay";
import EstimateButton from "./EstimateButton";
import PreviousEstimates from "./PreviousEstimateDisplay";
import Footer from "./Footer";
import Header from "./Header";

const store = createStore(
  combineReducers({
    estimate,
    LoggingReducer
  })
);

const Display = styled.div`
height:100%;
display:flex;
flex-direction:column;
background-color:black;
text-align:center;
max-width:100%;
margin:auto;
`;

const FifteenPercentHeight = styled.div`
height:15%`;

const Fourty = styled.div`
height:40%`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Display>
          <Header />
          <FifteenPercentHeight>
            <EstimateButton />
          </FifteenPercentHeight>
          <FifteenPercentHeight>
            <EstimateDisplay />
          </FifteenPercentHeight>
          <Fourty>
            <PreviousEstimates />
          </Fourty>
          <FifteenPercentHeight>
            <Footer />
          </FifteenPercentHeight>
        </Display>
      </Provider>
    );
  }
}

App.prototypes = {
  store: PropTypes.object
};

export default App;
