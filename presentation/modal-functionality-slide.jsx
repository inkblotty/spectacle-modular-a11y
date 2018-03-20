import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import modalFunctionImg from "../assets/modal-functions.png";
import modalEventsImg from "../assets/modal-events.png";
import Subheader from "./styled-wrappers/subheader";

const StyledWrapper = styled.div`
  text-align: left;
`;
const StyleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const ModalFunctionalitySlide = () => {
  return (
    <Slide textColor="primary" transition={["fade"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>
          The Finishing Touches: Functionality
        </Subheader>
        <div>
          Finally, add all the accessibility methods we need
        </div>
        <StyleWrapper>
          <Image src={modalFunctionImg} alt="Modal functionality methods" height="350px" />
          <Image src={modalEventsImg} alt="Modal events markup" height="300px" />
        </StyleWrapper>
      </StyledWrapper>
    </Slide>
  );
};

export default ModalFunctionalitySlide;
