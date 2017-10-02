import { connect } from "react-redux";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import * as styleContsatns from "./styles/constants";
const EstimateDisplay = () => {
  const Display = styled.div`

    width: 100%;
    height: 100%;
    background-color:${styleContsatns.headerFooterBackground}        
    `;
  const Icons = styled.div`
        color:white;
        margin:auto;
        width:110px;
        display:flex;
        flex-direction:row;
    `;

  const KleeutLink = styled.div`
        height:50px;
        width:50px;
        background-image:url('kleeut.png');
        background-size:cover;
        background-position:center;
    `;

  const GithubLink = styled.div`
    height:50px;
    width:50px;
    background-image:url('github.png');
    background-size:cover;
    background-position:center;
`;

  return (
    <Display>
      <Icons>
        <a href="http://kleeut.com"><KleeutLink /></a>
        <a href="https://github.com/KleeUT/EstimateGenerator"><GithubLink /></a>
      </Icons>
    </Display>
  );
};

EstimateDisplay.prototypes = {};

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimateDisplay);
