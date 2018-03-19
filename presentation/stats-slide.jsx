import React from "react";
import {
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";
import styled from "styled-components";

import blindImg from "../assets/blind-walking.svg";
import earImg from "../assets/ear.svg";
import mobilityImg from "../assets/mobility.svg";

const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  img {
    height: 80px;
  }
`;
const ListWrapper = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  li {
    font-size: 0.85em;
    list-style: none;
    padding: 5px 15px;
    white-space: nowrap;
  }
`;

const StyledSlide = styled(Slide)`
  p {
    text-align: left;
  }
`;

// slide transition={["zoom"]}

class TitleSlide extends React.Component {
  render() {
    return (
      <StyledSlide bgColor="secondary">
        <Heading size={5} fit caps lineHeight={1} textColor="tertiary">
          Why Accessibility?
        </Heading>
        <Text textColor="primary">
          1 in 5 Americans have a disability
        </Text>
        <ImageWrapper>
          <Image src={mobilityImg} alt="figure moving in wheelchair" />
          <Image src={earImg} alt="ear" />
          <Image src={blindImg} alt="figure with blind assistance cane" />
        </ImageWrapper>
        <ListWrapper textColor="quarternary">
          <ListItem>
            Mobility
          </ListItem>
          <ListItem>
            Deaf & Hard of Hearing
          </ListItem>
          <ListItem>
            Mental Health Condition
          </ListItem>
          <ListItem>
            Motor Control
          </ListItem>
          <ListItem>
            Acquired Brain Injury
          </ListItem>
          <ListItem>
            Intellectual Impairment
          </ListItem>
        </ListWrapper>
        <Text textColor="primary">
          2 million Americans are Legally Blind
        </Text>
      </StyledSlide>
    );
  }
}

export default TitleSlide;