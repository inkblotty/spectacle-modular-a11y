import React from "react";
import {
  BlockQuote,
  Cite,
  Quote,
  Slide,
  Text
} from "spectacle";
// transition={["fade"]} 

class NinetyPercentSlide extends React.Component {
  render() {
    return (
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>92% of US .gov websites are not fully accessible</Quote>
          <Cite>Information Technology & Innovation Foundation</Cite>
        </BlockQuote>

        <Text transition={["fade"]} textColor="quarternary">
          And these sites are <strong>required</strong> to be!
        </Text>
      </Slide>
    );
  }
}

export default NinetyPercentSlide;
