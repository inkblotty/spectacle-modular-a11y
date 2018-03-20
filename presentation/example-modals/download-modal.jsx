import React from "react";
import { Button } from "bloom-forms";
import styled from "styled-components";

const StyledDiv = styled("div")`
  color: #333;
  padding: 0 30px 30px;

  h3 {
    margin-top: 0;
  }

  button {
    background-color: #438ABC;
    border: 4px;
    color: #eee;
    font-size: 1em;
    margin-top: 15px;
  }
`;

class DownloadProgress extends React.Component {
  constructor(props) {
    super(props);
    this.incrementProgress = this.incrementProgress.bind(this)
    this.state = {
      currentProgress: 0
    }
  }

  incrementProgress = () => {
    let downloadTimeout = window.setTimeout(() => {
    if (this.state.currentProgress < 40) {
        this.setState({
          currentProgress: this.state.currentProgress + 1
        })
        this.incrementProgress();
      }
    }, 1000)
  }

  componentDidMount() {
    this.incrementProgress();
  }

  render() {
    return (
      <StyledDiv>
        <h3>Download in Progress</h3>
        <progress max="40" min="0" value={this.state.currentProgress} />
        <Button
          onClick={this.props.closeModal}
          contents="Close this Modal"
        />
      </StyledDiv>
    )
  }
}

export default DownloadProgress
