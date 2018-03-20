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
import ReviewSlide from "./review-slide.jsx";
import SpecCommonSlide from "./spec-common-slide.jsx";
import ModalCloseSlide from "./modal-close-slide.jsx";
import ModalAriaSlide from "./modal-aria-slide.jsx";
import ModalTransitionSlide from "./modal-transition-slide.jsx";
import ModalFunctionalitySlide from "./modal-functionality-slide.jsx";
import ReusableModalSlide from "./reusable-modal-slide.jsx";
import UseResourcesSlide from "./use-resources-slide.jsx";

// Require CSS
require("normalize.css");

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
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} bgColor="secondary">
        <div style={{backgroundColor: "#333"}} hasSlideChildren>
          {TitleSlide()}
          {StatsSlide()}
          {NinetyPercentSlide()}
          {ContentsSlide()}
          <SemanticSlide transition={["slide"]} />
          {SemanticSummarySlide()}
          {RoleSlide()}
          {AriaSlide()}
          <AriaExampleSlide transition={["slide"]} />
          <DesignSlide transition={["slide"]} />
          <ReviewSlide transition={["slide"]} />
          {ExampleSpecSlide()}
          {SpecCommonSlide()}
          {ModalCloseSlide()}
          {ModalAriaSlide()}
          {ModalTransitionSlide()}
          {ModalFunctionalitySlide()}
          <ReusableModalSlide transition={["slide"]} />
          {UseResourcesSlide()}
        </div>
      </Deck>
    );
  }
}
