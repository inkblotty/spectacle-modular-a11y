import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import modalTransitionImg from "../assets/modal-transition.png";
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

const ModalTransitionSlide = () => {
  return (
    <Slide transition={["zoom"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>
          The Skin: Design
          <span><Image src={avocado} alt="avocado" height="50px" /></span>
        </Subheader>
        <div>
          Now we add a Transition and some styles, paying attention to contrast and readability.
        </div>
        <Image src={modalTransitionImg} alt="Modal transition and styling" height="400px" />
      </StyledWrapper>
    </Slide>
  );
}

export default ModalTransitionSlide;