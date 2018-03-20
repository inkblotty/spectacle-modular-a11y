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

    dd:first-of-type {
      margin-bottom: 15px;
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
    width: 210px;
  }
`;

const RoleSlide = () => {
  return (
    <Slide transition={["zoom"]} transitionDuration={500} bgColor="secondary">
      <StyledWrapper>
      <Subheader>Role and ARIA</Subheader>
      <dl>
        <dt>The ROLE Attribute</dt>
        <dd>An attribute added to HTML element tags to describe its purpose when the native tag doesn't.</dd>
        <dd>Examples include:
          <ul>
            <li>alert</li>
            <li>banner</li>
            <li>dialog</li>
            <li>group</li>
            <li>menuitem</li>
            <li>option</li>
            <li>separator</li>
            <li>tab</li>
            <li>tooltip</li>
            <li>timer</li>
          </ul>
        </dd>
      </dl>
      <CodeWrapper>
        <span>{`<`}
          <strong>{`div`}</strong>
          <em>{` role`}</em>
          <strong>{`=`}</strong>
          <b>{`"alert"`}</b>
          {`>{alertMessage}</`}
          <strong>{`div`}</strong>
          {`>`}
        </span>
      </CodeWrapper>
      <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledWrapper>
    </Slide>
  );
}

export default RoleSlide;
