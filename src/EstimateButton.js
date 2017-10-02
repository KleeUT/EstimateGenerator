import { connect } from "react-redux";
import React from "react";
import { PropTypes } from "prop-types";
import { estimate } from "./actions/Actions";
import styled from "styled-components";
import * as styleConstants from "./styles/constants";
const Footer = ({ estimate }) => {
  const Button = styled.button`
        background-color: ${styleConstants.actionBlue};
        border:2px solid ${styleConstants.standardBlue};
        font-size:2em;
        color:${styleConstants.standardBlue};
        width:12em;
        max-width:90%;
        margin:auto;
        height:3em;
        font-family: 'Geo', sans-serif;  
        
    `;
  return <Button onClick={estimate}>New Estimate</Button>;
};

Footer.prototypes = {
  estimate: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    estimate: () => {
      dispatch(estimate);
    }
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
