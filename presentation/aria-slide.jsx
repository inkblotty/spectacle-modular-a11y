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

const StyledWrapper = styled.div`
  text-align: left;

  dl {
    color: #faf9ed;
    text-align: left;

    dt {
      color: #c18e42;
    }

    dd {
      margin-bottom: 15px;

      &:first-of-type {
        em {
          color: #c18e42;
          font-style: normal;
          font-weight: 600;
        }
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ul {
    color: #faf9ed;
    display: flex;
    flex-wrap: wrap;
    list-style-type: disc;
    text-align: left;
    -webkit-margin-before: .5em;
    -webkit-margin-after: .5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  li {
    color: #8abc43;
    display: list-item;
    margin: 10px 0;
    padding-left: 1.25em;
    text-align: -webkit-match-parent;
    text-indent: -1.25em;
    width: 265px;
  }
`;

const AriaSlide = () => {
  return (
    <Slide transition={["spin"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
        <Subheader>Role and ARIA</Subheader>
        <dl>
          <dt>ARIA Attributes</dt>
          <dd><em>A</em>ccessible <em>R</em>ich <em>I</em>nternet <em>A</em>pplications</dd>
          <dd>A whole category of attributes created to futher describe purpose, meaning, relationships, etc.</dd>
          <dd>Examples include:
            <ul>
              <li>aria-atomic</li>
              <li>aria-controls</li>
              <li>aria-expanded</li>
              <li>aria-hidden</li>
              <li>aria-label</li>
              <li>aria-live</li>
              <li>aria-relevant</li>
              <li>aria-valuemax</li>
              <li>aria-valuemin</li>
            </ul>
          </dd>
          <dd>
            Each one has its own purpose and context.
          </dd>
        </dl>
        <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledWrapper>
    </Slide>
  );
}

export default AriaSlide;
