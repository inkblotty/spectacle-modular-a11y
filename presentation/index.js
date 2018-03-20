// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import styled from "styled-components";

import TitleSlide from "./title-slide.jsx";
import StatsSlide from "./stats-slide.jsx";
import NinetyPercentSlide from "./ninety-percent-slide.jsx";
import ContentsSlide from "./contents-slide.jsx";
import SemanticSlide from "./semantic-slide.jsx";
import SemanticSummarySlide from "./semantic-summary-slide.jsx";
import RoleSlide from "./role-slide.jsx";
import AriaSlide from "./aria-slide.jsx";
import AriaExampleSlide from "./aria-example-slide.jsx";
import DesignSlide from "./design-slide.jsx";
import ExampleSpecSlide from "./example-spec-slide.jsx";

// Require CSS
require("normalize.css");

const StyledDeck = styled(Deck)`
  background-color: #333333;
`;

const theme = createTheme({
  primary: "#faf9ed",
  secondary: "#333333",
  tertiary: "#8abc43",
  quarternary: "#c18e42"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <StyledDeck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {TitleSlide()}
        {StatsSlide()}
        {NinetyPercentSlide()}
        {ContentsSlide()}
        <SemanticSlide />
        {SemanticSummarySlide()}
        {RoleSlide()}
        {AriaSlide()}
        <AriaExampleSlide />
        <DesignSlide />
      </StyledDeck>
    );
  }
}
