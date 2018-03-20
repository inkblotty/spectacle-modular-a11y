import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import modalAriaImg from "../assets/modal-aria.png";
import Subheader from "./styled-wrappers/subheader";

const StyledWrapper = styled.div`
  text-align: left;
`;

const ModalAriaSlide = () => {
  return (
    <Slide textColor="primary" transition={["fade"]} transitionDuration={500} bgColor="secondary">
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