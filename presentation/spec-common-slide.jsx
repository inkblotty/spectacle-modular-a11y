import React from "react";
import {
  Image,
  List,
  ListItem,
  Slide
} from "spectacle";
import styled from "styled-components";

import modalImg from "../assets/Modal.png";
import avocado from "../assets/avocado.svg";
import ColumnWrapper from "./styled-wrappers/column-wrapper";
import Subheader from "./styled-wrappers/subheader";
import CodeWrapper from "./styled-wrappers/code-wrapper";

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

    li {
      color: #8abc43;
      font-size: .9em;
      margin-left: 50px;

      &:nth-of-type(2n) {
        color: #c18e42;
      }
    }
  }
`;

// create an image of I <3 modals -- several modals hovering over a page

const SpecCommonSlide = () => {
  return (
    <Slide transition={["slide"]} transitionDuration={500} bgColor="secondary" textColor="primary">
      <StyledWrapper>
        <Subheader>So what's common to all of these modals?</Subheader>
        <StyleWrapper>
          <List transition={["fade"]}>
            <ListItem>
              close button
            </ListItem>
            <ListItem>
              appearing / disappearing from the top
            </ListItem>
            <ListItem>
              Accessibility:
              <List>
                <ListItem>
                  Role = "dialog" & ARIA attributes
                </ListItem>
                <ListItem>
                  cover the page in a semi-opaque gray & prevent clicking behind the modal content
                </ListItem>
                <ListItem>
                  trap tab focus so tabbing doesn't go below the modal
                </ListItem>
                <ListItem>
                  ESC and click off close the modal
                </ListItem>
                <ListItem>
                  focuses on close button when first opening
                </ListItem>
              </List>
            </ListItem>
          </List>
        </StyleWrapper>
      </StyledWrapper>
    </Slide>
  );
}

export default SpecCommonSlide;