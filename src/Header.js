import { connect } from "react-redux";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import * as styleContsatns from "./styles/constants";
const Header = () => {
  const Display = styled.div`
    width: 100%;
    height: 15%;
    background-color:${styleContsatns.headerFooterBackground};
    margin:auto;
    `;
  const Title = styled.h1`
    text-align:center;
    font-size:3em;
    `;
  return (
    <Display>
      <Title>Estimate Generator</Title>
    </Display>
  );
};

Header.prototypes = {};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
