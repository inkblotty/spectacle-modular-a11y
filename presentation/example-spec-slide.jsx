import React from "react";
import {
  Image,
  List,
  ListItem,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import ColumnWrapper from "./styled-wrappers/column-wrapper";
import Subheader from "./styled-wrappers/subheader";
import CodeWrapper from "./styled-wrappers/code-wrapper";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;
`;

// create an image of I <3 modals -- several modals hovering over a page

class ExampleSpecSlide extends React.Component {
  render() {
    return (
      <StyledSlide bgColor="secondary">
        <Subheader>Building an Example: The Spec</Subheader>

        <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledSlide>
    );
  }
}

export default ExampleSpecSlide;
