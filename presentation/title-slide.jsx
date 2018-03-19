import React from "react";
import {
  Heading,
  Image,
  Slide,
  Text
} from "spectacle";
import avocado from "../assets/avocado.svg";
import styled from "styled-components";

const StyledHeader = styled(Heading)`
  margin-bottom: 100px;
`;

// slide transition={["zoom"]}

class TitleSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="secondary">
        <StyledHeader size={1} caps fit textColor="primary">
          Modularizing A11y
        </StyledHeader>
        <Image src={avocado} alt="avocado" height="100px" />
        <Text textColor="tertiary" size={5}>
          <small>Katie Foster | March 20, 2018</small>
        </Text>
      </Slide>
    );
  }
}

export default TitleSlide;
