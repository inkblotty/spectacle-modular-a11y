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

// slide transition={["zoom"]}

const StyledWrapper = styled.div`
  table {
    text-align: left;
  }

  strong {
    color: #8abc43;
    font-weight: normal;
  }

  em {
    color: #c18e42;
    font-style: normal;
  }

  small {
    font-size: .7em;
  }

  ul {
    color: #faf9ed;
    display: block;
    list-style-type: disc;
    text-align: left;
    -webkit-margin-before: .5em;
    -webkit-margin-after: .5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  li {
    display: list-item;
    margin: 10px 0;
    padding-left: 1.25em;
    text-align: -webkit-match-parent;
    text-indent: -1.25em;

    &:nth-of-type(2) {
      color: #c18e42;
    }
  }
`;

const SemanticSummarySlide = () => {
  return (
    <Slide transition={["zoom"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>Semantic HTML</Subheader>
        <List>
          <ListItem>
            Use markup that describes the <strong>meaning</strong> of that element
          </ListItem>
          <ListItem>
            <em>Bad Semantics</em> are often hidden by <strong>Good CSS. </strong>
            <small>(Turn off styling if you need to)</small>
          </ListItem>
          <ListItem>
            Avoid Divception:<br/>Don't put divs inside divs inside divs
          </ListItem>
        </List>
        <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledWrapper>
    </Slide>
  );
}

export default SemanticSummarySlide;
