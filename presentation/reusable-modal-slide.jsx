import React from "react";
import {
  Image,
  Slide
} from "spectacle";
import styled from "styled-components";
import { RadioGroup } from "bloom-forms";
import { Modal } from "bloom-layout";

import modalFunctionImg from "../assets/modal-functions.png";
import modalEventsImg from "../assets/modal-events.png";
import Subheader from "./styled-wrappers/subheader";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;

  fieldset {
    text-align: left;

    label div {
      margin-right: 15px;
    }
  }
`;

class ReusableModalSlide extends React.Component {
  constructor(props) {
    super(props);
    this.changeActiveModal = this.changeActiveModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      activeModal: 'none',
      contents: {
        'none': 'none',
        'login': 'login',
        'download': 'download',
        'react-meetup': 'meetup'
      },
      isOpen: false
    }
  }

  changeActiveModal(e) {
    this.setState({
      activeModal: e.target.id
    })
  }

  toggleModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const radioOptions = [
      {
        id: 'none',
        label: 'No Modal Contents'
      },
      {
        id: 'login',
        label: 'Login Modal'
      },
      {
        id: 'download',
        label: 'Download Progress Modal'
      },
      {
        id: 'react-meetup',
        label: 'React Denver Meetup Modal'
      }
    ]

    return (
      <StyledSlide bgColor="secondary" textColor="primary">
        <Subheader>The Final Result</Subheader>
        <RadioGroup
          name='activeModal'
          onChange={this.changeActiveModal}
          options={radioOptions}
          value={this.state.activeModal}
        />
        <button onClick={this.toggleModal}>
          Open Selected Modal
        </button>
        <Modal
          closeModal={this.toggleModal}
          modalContents={this.state.isOpen ? this.state.contents[this.state.activeModal] : null}
        />
      </StyledSlide>
    );
  }
}

export default ReusableModalSlide;