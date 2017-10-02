import { connect } from "react-redux";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const EstimateDisplay = ({ units, qualifier, measure }) => {
  const Display = styled.div`
        color: #409ced;
        font-size: 2em;
        padding: 1em;
    `;
  return (
    <Display>
      {units ? "That'll take about" : ""} {units} {qualifier} {measure}
    </Display>
  );
};

EstimateDisplay.prototypes = {
  units: PropTypes.string,
  qualifier: PropTypes.string,
  measure: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    units: state.estimate.currentEstimate.units,
    qualifier: state.estimate.currentEstimate.qualifier,
    measure: state.estimate.currentEstimate.measure
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimateDisplay);
