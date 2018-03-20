import React from "react";
import { Button } from "bloom-forms";
import styled from "styled-components";

const StyledDiv = styled("div")`
  color: #333;
  padding: 0 30px 30px;

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

const DownloadProgress = (props) => {
  console.log(props)
  return (
    <StyledDiv>
      <h3>Download in Progress</h3>
      <progress />
      <Button
        onClick={props.closeModal}
        contents="Close this Modal"
      />
    </StyledDiv>
  )
}

export default DownloadProgress
