import React from "react";
import {
  Image,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import styled from "styled-components";

import avocado from "../assets/avocado.svg";
import ColumnWrapper from "./styled-wrappers/column-wrapper";
import Subheader from "./styled-wrappers/subheader";
import CodeWrapper from "./styled-wrappers/code-wrapper";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;

  dl {
    color: #faf9ed;
    text-align: left;

    dt {
      color: #c18e42;
    }

    dd {
      margin-bottom: 15px;

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
    width: 260px;
  }
`;

class AriaExampleSlide extends React.Component {
  constructor(props) {
    super(props);
    this.renderDefinition = this.renderDefinition.bind(this);
    this.setActiveDefinition = this.setActiveDefinition.bind(this);
    this.state = {
      activeDefinition: "atomic"
    }
  }

  setActiveDefinition(def) {
    this.setState({
      activeDefinition: def
    })
  }

  renderDefinition() {
    switch (this.state.activeDefinition) {
      case "atomic":
        return (
          <dl textColor="primary">
            <dt>aria-atomic: (true / false)</dt>
            <dd>When changes occur, treat all of my contents as a unit instead of just reading off what changed.</dd>
          </dl>
        )
      case "live":
        return (
          <dl textColor="primary">
            <dt>aria-live: ("off" / "assertive" / "polite")</dt>
            <dd>Should changes to my content interrupt what was already being read?</dd>
          </dl>
        )
      case "relevant":
        return (
          <dl textColor="primary">
            <dt>aria-relevant: ("additions" / "removals" / "text" / "all")</dt>
            <dd>What kind of changes are relevant for the screen reader to pay attention to?</dd>
          </dl>
        )
      default:
        return "";
    }
  }

  render() {
    return (
      <StyledSlide bgColor="secondary">
        <Subheader>Role and ARIA</Subheader>
        <CodeWrapper>
          <span>{`<`}
            <strong>{`div`}</strong>
            <em>{` role`}</em>
            <strong>{`=`}</strong>
            <b>{`"alert"`}</b>
            <br/>
            <em onClick={() => this.setActiveDefinition("atomic")}>{`\u00a0\u00a0aria-atomic`}</em>
            <br/>
            <em onClick={() => this.setActiveDefinition("live")}>{`\u00a0\u00a0aria-live`}</em>
            <strong>{`=`}</strong>
            <b>{`"assertive"`}</b>
            <br/>
            <em onClick={() => this.setActiveDefinition("relevant")}>{`\u00a0\u00a0aria-relevant`}</em>
            <strong>{`=`}</strong>
            <b>{`"additions removals"`}</b>
            {`>`}
            <br/>
            {`\u00a0\u00a0\u00a0\u00a0{alertMessage}`}
            <br/>
            {`</`}
            <strong>{`div`}</strong>
            {`>`}
          </span>
        </CodeWrapper>
        { this.renderDefinition(this.state.activeDefinition)}
        <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledSlide>
    );
  }
}

export default AriaExampleSlide;