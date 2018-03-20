import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";

import modalFunctionImg from "../assets/modal-functions.png";
import modalEventsImg from "../assets/modal-events.png";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;
`;
const StyleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

class ModalFunctionalitySlide extends React.Component {
  render() {
    return (
      <StyledSlide bgColor="secondary" textColor="primary">
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
      </StyledSlide>
    );
  }
}

export default ModalFunctionalitySlide;