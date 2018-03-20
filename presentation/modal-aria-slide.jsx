import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import modalAriaImg from "../assets/modal-aria.png";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledWrapper = styled.div`
  text-align: left;
`;
const StyleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  li {
    font-size: 1.2em;
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ModalAriaSlide = () => {
  return (
    <Slide textColor="primary" transition={["zoom"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>
          <span>The Meat: Role and ARIA</span>
          <span><Image src={avocado} alt="avocado" height="50px" /></span>
        </Subheader>
        <div>
          Our modal needs: role='dialog' and ARIA related to showing & hiding.
        </div>
        <Image src={modalAriaImg} alt="Modal markup and styling" height="500px" />
      </StyledWrapper>
    </Slide>
  );
}

export default ModalAriaSlide;