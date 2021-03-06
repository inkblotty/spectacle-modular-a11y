import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import modalCloseImg from "../assets/modal-close.png";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledWrapper = styled.div`
  text-align: left;
`;

const ModalCloseSlide = () => {
  return (
    <Slide textColor="primary" transition={["slide"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>
          The Pit: Semantic Elements
          <span><Image src={avocado} alt="avocado" height="50px" /></span>
        </Subheader>
        <div>
          We don't have a native element for modals, but we do for buttons.
        </div>
        <Image src={modalCloseImg} alt="Modal Close markup and styling" height="500px" />
      </StyledWrapper>
    </Slide>
  );
};

export default ModalCloseSlide;
