// <div>
//           Quick review going back to avocado -- we start with the pit, then meat, then the skin
//         </div>

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

  button {
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
  }
`;

class TitleSlide extends React.Component {
  constructor(props) {
    super(props);

    this.showContent = this.showContent.bind(this)
    this.state = {
      visible: []
    }
  }

  showContent(type) {
    if (this.state.visible.indexOf(type) === -1) {
      this.setState({
        visible: this.state.visible.concat(type)
      })
    }
  }

  render() {
    const showHtml = this.state.visible.indexOf('semantics') > -1;
    const showAria = this.state.visible.indexOf('aria') > -1;
    const showDesign = this.state.visible.indexOf('design') > -1;
    return (
      <Slide bgColor="secondary">
        <Heading size={5} fit caps lineHeight={1} textColor="tertiary">Quick Review</Heading>
        <StyledWrap>
          <StyledList textColor="primary">
            <StyledLi>
              <dl>
                <dt>The <strong>pit</strong>:</dt>
                <dd>{ showHtml
                  ? "Semantic HTML"
                  : <button onClick={() => this.showContent('semantics')}>show</button> }
                </dd>
              </dl>
            </StyledLi>
            <StyledLi>
              <dl>
                <dt>The <strong>meat</strong>:</dt>
                <dd>{ showAria
                  ? "Roles & Aria Attributes"
                  : <button onClick={() => this.showContent('aria')}>show</button> }
                </dd>
              </dl>
            </StyledLi>
            <StyledLi>
              <dl>
                <dt>The <strong>skin</strong>:</dt>
                <dd>{ showDesign
                  ? "Contrast, Color, & Readability"
                  : <button onClick={() => this.showContent('design')}>show</button> }
                </dd>
              </dl>
            </StyledLi>
          </StyledList>
          <Image src={avocado} alt="avocado" height="300px" width="250px" />
        </StyledWrap>
      </Slide>
    );
  }
}

export default TitleSlide;