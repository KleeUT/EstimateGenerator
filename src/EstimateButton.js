import { connect } from 'react-redux';
import React from 'react';
import { PropTypes } from 'prop-types';
import { estimate } from './actions/Actions'
const EstimateButton = ({estimate}) => {
    return (
        <div>
            <button onClick={estimate}>New Estimate</button>
        </div>
    )
}

EstimateButton.prototypes = {
    estimate: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
    return {
        estimate: () => {
            dispatch(estimate)}
    };
  };

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EstimateButton);