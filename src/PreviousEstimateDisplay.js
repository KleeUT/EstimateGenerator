import { connect } from "react-redux";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import * as styleConst from "./styles/constants";
const PreviousEstimateDisplay = ({ previousEstimates }) => {
  const PreviousItem = styled.div`
    color:${styleConst.standardBlue};
    font-size:1.25em;
    padding:0.5em;
    `;
  return (
    <PreviousItemsDisplay>
      {previousEstimates.map(item => (
        <PreviousItem>
          {item.units} {item.qualifier} {item.measure}
        </PreviousItem>
      ))}
    </PreviousItemsDisplay>
  );
};

PreviousEstimateDisplay.prototypes = {
  previousEstimates: PropTypes.array
};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  console.log(state);
  return {
    previousEstimates: state.estimate.previousEstimates
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PreviousEstimateDisplay
);

const PreviousItemsDisplay = ({ children }) => {
  const Display = styled.div`
        overflow:auto;
        height:100%;
    `;
  return (
    <Display>
      {children}
    </Display>
  );
};
