import React from "react";
import {
  Image,
  List,
  ListItem,
  Slide
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;

  li {
    &:nth-child(2n) {
      color: #c18e42;
    }
  }
`;

class UseResourcesSlide extends React.Component {
  render() {
    return (
      <StyledSlide bgColor="secondary" textColor="primary">
        <Subheader>
          Use Your Resources
          <span><Image src={avocado} alt="avocado" height="50px" /></span>
        </Subheader>
        <List>
          <ListItem>
            W3.org
          </ListItem>
          <ListItem>
            Webaim.org
          </ListItem>
          <ListItem>
            usability.gov
          </ListItem>
          <ListItem>
            aXe / deque labs
          </ListItem>
          <ListItem>
            Chrome accessibility dev tools
          </ListItem>
          <ListItem>
            Use your screen reader
          </ListItem>
          <ListItem>
            React a11y: <small>https://github.com/reactjs/react-a11y</small>
          </ListItem>
          <ListItem>
            Many sites have tools to complement accessible design and dev
            <br/>
            <small>coolors.co</small>
          </ListItem>
        </List>
      </StyledSlide>
    );
  }
}

export default UseResourcesSlide;