import React from "react";
import {
  BlockQuote,
  Cite,
  Quote,
  Slide,
  Text
} from "spectacle";

const NinetyPercentSlide = () => {
  return (
    <Slide transition={["slide"]} transitionDuration={500} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>92% of US .gov websites are not fully accessible</Quote>
        <Cite>Information Technology & Innovation Foundation</Cite>
      </BlockQuote>

      <Text transition={["fade"]} textColor="quarternary">
        And these sites are <strong>required</strong> to be!
      </Text>
    </Slide>
  );
};

export default NinetyPercentSlide;
