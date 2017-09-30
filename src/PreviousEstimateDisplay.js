import { connect } from 'react-redux';
import React from 'react';
import { PropTypes } from 'prop-types';

const PreviousEstimateDisplay = ({previousEstimates}) => {
    return (
        <div>
        {previousEstimates.map((item) => (
        <div>
            {item.units} {item.qualifier} {item.measure}
        </div>
        ))}
        </div>
    )
}

PreviousEstimateDisplay.prototypes = {
    previousEstimates: PropTypes.array
}

const mapDispatchToProps = dispatch => {
    return {};
  };

const mapStateToProps = state => {
    console.log(state);
    return {
        previousEstimates: state.estimate.previousEstimates
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousEstimateDisplay);