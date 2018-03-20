import React from "react";
import { Button, TextInput } from "bloom-forms";
import styled from "styled-components";

const StyledForm = styled("form")`
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

const LoginForm = (props) => {
  return (
    <StyledForm>
      <h3>Log In</h3>
      <TextInput
        label='email'
        name='email'
        showLabel
        onChange={() => ''}
      />
      <TextInput
        label='password'
        name='password'
        showLabel
        onChange={() => ''}
      />
      <Button onClick={(e) => {e.preventDefault()}}
        contents='Submit'
      />
    </StyledForm>
  )
}

export default LoginForm
