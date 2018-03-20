import React from "react";
import styled from "styled-components";

import reactLogo from "../../assets/react_logo.svg";

const StyledDiv = styled("div")`
  color: #333;
  padding: 0 30px 30px;
  text-align: center;

  h3 {
    margin-top: 0;
  }

  label {
    text-align: left;
  }

  button {
    background-color: #438ABC;
    border: 4px;
    color: #eee;
    font-size: 1em;
    margin-top: 15px;
  }
`;

const MeetupModal = (props) => {
  return (
    <StyledDiv>
      <img src={reactLogo} alt="React JS" />
      <h3>Thanks, React{'\u00a0'}Denver!</h3>
    </StyledDiv>
  )
}

export default MeetupModal
