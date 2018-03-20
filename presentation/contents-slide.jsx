import React from "react";
import {
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import avocado from "../assets/avocado.svg";
import styled from "styled-components";

const StyledWrap = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
`;

const StyledList = styled(List)`
  width: 80%;
`;

const StyledLi = styled(ListItem)`
  margin-bottom: 10px;

  dl {
    display: inline-block;
    margin: 0;
  }

  dt {
    color: #B27214;
    display: inline-block;
    font-size: 0.8em;
    text-transform: uppercase;
  }

  dd {
    margin-left: 0px;
  }

  &:nth-of-type(even) {
    dt {
      color: #8abc43;
    }
  }
`;



const ContentsSlide = () => {
    return (
      <Slide transition={['fade']} transitionDuration={500} bgColor="secondary">
        <Heading size={5} fit caps lineHeight={1} textColor="tertiary">What are we talking about here?</Heading>
        <StyledWrap>
          <StyledList textColor="primary">
            <StyledLi>
              <dl>
                <dt>The <strong>pit</strong>:</dt>
                <dd>Semantic HTML</dd>
              </dl>
            </StyledLi>
            <StyledLi>
              <dl>
                <dt>The <strong>meat</strong>:</dt>
                <dd>Roles &amp; Aria Attributes</dd>
              </dl>
            </StyledLi>
            <StyledLi>
              <dl>
                <dt>The <strong>skin</strong>:</dt>
                <dd>Contrast, Color, &amp; Readability</dd>
              </dl>
            </StyledLi>
            <StyledLi>
              <dl>
                <dt>Putting it together:</dt>
                <dd>Building an Example</dd>
              </dl>
            </StyledLi>
          </StyledList>
          <Image src={avocado} alt="avocado" height="300px" width="250px" />
        </StyledWrap>
      </Slide>
    );
}

export default ContentsSlide;
