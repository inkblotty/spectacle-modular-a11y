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

  li {
    font-size: 1.2em;
  }
`;

const StyledDescription = styled("div")`
  color: #faf9ed;
  text-align: left;
`;

const StyledExample = styled("div")`
  background-color: #faf9ed;
  color: #333;
  height: 400px;
  padding: 15px 25px;
  text-align: left;

  h3 {
    margin: 0;
  }

  p {
    font-size: ${props => props.small ? "0.95em" : "1.1em"};
    margin-bottom: 1em;
  }
`;

const BadContrast = styled("p")`
  color: #c1c1c1;
`;

const GoodContrast = styled("p")``;

const StyledInput = styled("input")`
  border: 3px solid ${props => props.colorblind ? "#767735" : "#3EC300"};
  margin: 10px 0;
`;

const ErrorInput = styled("input")`
  border: 3px solid ${props => props.colorblind ? "#97954B" : "#DE3C4B"};
`;

class DesignSlide extends React.Component {
  constructor(props) {
    super(props);

    this.renderExample = this.renderExample.bind(this)
    this.toggleColorBlindMode = this.toggleColorBlindMode.bind(this)
    this.toggleExample = this.toggleExample.bind(this)
    this.state = {
      activeExample: "contrast",
      colorblindMode: true
    }
  }

  toggleColorBlindMode(isOn) {
    this.setState({
      colorblindMode: isOn
    })
  }

  toggleExample(example) {
    this.setState({
      activeExample: example
    })
  }

  renderExample() {
    switch(this.state.activeExample) {
      case "contrast":
        return (
          <StyledExample>
            <h3>Contrast</h3>
            <BadContrast>Minimalism is not always your friend</BadContrast>
            <GoodContrast>Minimalism is not always your friend</GoodContrast>
          </StyledExample>
        )
      case "color":
        // protanopia pictured
        return (
          <StyledExample small>
            <h3>Color</h3>
            <Text>
              Which of these inputs has an error?
            </Text>
            <div onClick={() => this.toggleColorBlindMode(!this.state.colorblindMode)}>
              Color Blind Mode: {this.state.colorblindMode ? 'On' : 'Off'}
            </div>
            <StyledInput
              colorblind={this.state.colorblindMode}
              type="text"
            />
            <ErrorInput
              colorblind={this.state.colorblindMode}
              type="text"
            />
            <StyledInput
              colorblind={this.state.colorblindMode}
              type="text"
            />
          </StyledExample>
        )
      default:
        return ""
    }
  }

  render() {
    return (
      <StyledSlide bgColor="secondary">
        <Subheader>Contrast, Color, and Readability</Subheader>
        <ColumnWrapper>
          <StyledDescription>
            <Text textColor="primary">
              Design needs to consider:
            </Text>
            <List>
              <ListItem>
                <a onClick={() => this.toggleExample("contrast")}>
                  vision impairments
                </a>
              </ListItem>
              <ListItem>
                <a onClick={() => this.toggleExample("color")}>
                  colorblindness
                </a>
              </ListItem>
            </List>
          </StyledDescription>
          {this.renderExample()}
        </ColumnWrapper>
        <Image src={avocado} alt="avocado" height="100px" width="250px" />
      </StyledSlide>
    );
  }
}

export default DesignSlide;