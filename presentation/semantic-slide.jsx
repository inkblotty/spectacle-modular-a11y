import React from "react";
import {
  Heading,
  Image,
  Slide,
  Text
} from "spectacle";
import styled from "styled-components";

import ColumnWrapper from "./styled-wrappers/column-wrapper";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  table {
    text-align: left;
  }

  ul {
    display: block;
    list-style-type: disc;
    text-align: left;
    -webkit-margin-before: .5em;
    -webkit-margin-after: .5em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  li {
    display: list-item;
    list-style-type: dot;
    text-align: -webkit-match-parent;
  }
`;

const StyledExample = styled("div")`
  background-color: #faf9ed;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.9);
  font-size: .9em;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin: 15px; 0;
  }

  button {
    background-color: #FFA500;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 1em;
    padding: 10px;
    text-align: center;
    width: 200px;
  }

  ul {
    display: block;
    list-style-type: disc; 
    list-style-position: inside;
    margin: 20px auto;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;

    li {
      display: list-item;
      list-style: square;
      width: 150px;
    }
  }

  table {
    border: 1px solid #333;
    border-collapse: collapse;
    margin: 10px auto;
    text-align: left;

    thead {
      border-bottom: 1px solid #333;
    }

    th {
      padding: 5px 10px;
      width: 80px;
    }

    td {
      padding: 5px 10px;
    }

    th:first-of-type {
      width: 150px;
    }

    th:last-of-type {
      width: 200px;
    }
  }

  & > div {
    &:first-child {
      font-size: 2em;
      font-weight: bold;
      margin: 15px; 0;
    }

    &:nth-child(2) {
      background-color: #FFA500;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
      box-sizing: border-box;
      cursor: pointer;
      font-family: Montserrat;
      font-size: 1em;
      margin: 0 auto;
      padding: 10px;
      text-align: center;
      width: 200px;
    }

    &:nth-child(3) {
      display: block;
      list-style-type: disc; 
      list-style-position: inside;
      margin: 20px auto;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      -webkit-padding-start: 40px;

      div {
        display: list-item;
        list-style: square;
        width: 150px;
      }
    }

    &:nth-child(4) {
      border: 1px solid #333;
      border-collapse: collapse;
      margin: 10px auto;
      text-align: left;
      width: calc(100% - 20px);

      & > div {
        display: flex;

        &:first-of-type {
          border-bottom: 1px solid #333;
          font-weight: bold;
        }

        div:nth-child(1) {
          padding: 5px 10px;
          width: 150px;
        }

        div:nth-child(2) {
          padding: 5px 10px;
          width: 80px;
        }

        div:nth-child(3) {
          padding: 5px 10px;
          width: 200px;
        }
      }
    }
  }
`;

const StyledHeader = styled("div")`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledCheckWrapper = styled("div")`
  color: #faf9ed;
  display: inline-block;

  input {
    position: absolute;
    left: -1000px;
  }
`;

class SemanticSlide extends React.Component {
  constructor(props) {
    super(props);

    this.renderExamples = this.renderExamples.bind(this)
    this.state = {
      viewCSS: true
    }
  }

  toggleCSS = () => {
    this.setState({
      viewCSS: !this.state.viewCSS
    })
  }

  renderExamples() {
    if (this.state.viewCSS) {
      return (
        <ColumnWrapper>
          <StyledExample>
            <div>Header</div>
            <div>Button</div>
            <div>
              <div>Lions</div>
              <div>Tigers</div>
              <div>Bears</div>
            </div>
            <div>
              <div>
                <div>Name</div>
                <div>Age</div>
                <div>Breed</div>
              </div>
              <div>
                <div>Weasley</div>
                <div>8</div>
                <div>Chihuahua</div>
              </div>
              <div>
                <div>Bianca</div>
                <div>2</div>
                <div>Terrier</div>
              </div>
              <div>
                <div>Donut</div>
                <div>4</div>
                <div>Pug</div>
              </div>
            </div>
          </StyledExample>
          <StyledExample>
            <h1>Header</h1>
            <button>Button</button>
            <ul>
              <li>Lions</li>
              <li>Tigers</li>
              <li>Bears</li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Breed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weasley</td>
                  <td>8</td>
                  <td>Chihuahua</td>
                </tr>
                <tr>
                  <td>Bianca</td>
                  <td>2</td>
                  <td>Terrier</td>
                </tr>
                <tr>
                  <td>Donut</td>
                  <td>4</td>
                  <td>Pug</td>
                </tr>
              </tbody>
            </table>
          </StyledExample>
        </ColumnWrapper>
      )
    } else {
      return (
        <ColumnWrapper>
          <div style={{ backgroundColor: "#faf9ed", height: "493px", overflow: "scroll" }}>
            <div>Header</div>
            <div>Button</div>
            <div>
              <div>Lions</div>
              <div>Tigers</div>
              <div>Bears</div>
            </div>
            <div>
              <div>
                <div>Name</div>
                <div>Age</div>
                <div>Breed</div>
              </div>
              <div>
                <div>Weasley</div>
                <div>8</div>
                <div>Chihuahua</div>
              </div>
              <div>
                <div>Bianca</div>
                <div>2</div>
                <div>Terrier</div>
              </div>
              <div>
                <div>Donut</div>
                <div>4</div>
                <div>Pug</div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#faf9ed", height: "493px", overflow: "scroll" }}>
            <h1>Header</h1>
            <button>Button</button>
            <ul>
              <li>Lions</li>
              <li>Tigers</li>
              <li>Bears</li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Breed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weasley</td>
                  <td>8</td>
                  <td>Chihuahua</td>
                </tr>
                <tr>
                  <td>Bianca</td>
                  <td>2</td>
                  <td>Terrier</td>
                </tr>
                <tr>
                  <td>Donut</td>
                  <td>4</td>
                  <td>Pug</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ColumnWrapper>
      )
    }
  }

  render() {
    return (
      <StyledSlide bgColor="secondary">
        <StyledHeader>
          <Subheader>Semantic HTML</Subheader>
          <StyledCheckWrapper>
            <label htmlFor="viewCSS" onClick={this.toggleCSS}>
              CSS: {this.state.viewCSS ? 'On' : 'Off'}
            </label>
            <input type="checkbox" name="viewCSS" checked={this.state.viewCSS} readOnly />
          </StyledCheckWrapper>
        </StyledHeader>
        { this.renderExamples() }
      </StyledSlide>
    );
  }
}

export default SemanticSlide;
