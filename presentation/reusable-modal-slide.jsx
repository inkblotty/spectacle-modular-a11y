import React from "react";
import {
  Slide
} from "spectacle";
import styled from "styled-components";
import { RadioGroup } from "bloom-forms";
import { Modal } from "bloom-layout";

import Subheader from "./styled-wrappers/subheader";
import LoginModal from "./example-modals/login-modal.jsx";
import DownloadModal from "./example-modals/download-modal.jsx";
import MeetupModal from "./example-modals/meetup-modal.jsx";

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

const StyledModalWrapper = styled("div")`
  margin-top: 400px; // why? these slides do weird things to css
`;

class ReusableModalSlide extends React.Component {
  constructor(props) {
    super(props);
    this.changeActiveModal = this.changeActiveModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      activeModal: "none",
      contents: {
        "none": ".",
        "login": <LoginModal />,
        "download": <DownloadModal closeModal={this.toggleModal} />,
        "react-meetup": <MeetupModal />
      },
      isOpen: false
    };
  }

  changeActiveModal(e) {
    this.setState({
      activeModal: e.target.id
    });
  }

  toggleModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      if (!this.state.isOpen) {
        document.getElementById("trigger-modal-button").focus();
      }
    })
  }

  render() {
    const radioOptions = [
      {
        id: "none",
        label: "No Modal Contents"
      },
      {
        id: "login",
        label: "Login Modal"
      },
      {
        id: "download",
        label: "Download Progress Modal"
      },
      {
        id: "react-meetup",
        label: "React Denver Meetup Modal"
      }
    ];

    return (
      <StyledSlide bgColor="secondary" textColor="primary">
        <Subheader>The Final Result</Subheader>
        <RadioGroup
          name="activeModal"
          onChange={this.changeActiveModal}
          options={radioOptions}
          value={this.state.activeModal}
        />
        <button onClick={this.toggleModal} id="trigger-modal-button">
          Open Selected Modal
        </button>
        <StyledModalWrapper>
          <Modal
            closeModal={this.toggleModal}
            modalContents={this.state.isOpen ? this.state.contents[this.state.activeModal] : null}
          />
        </StyledModalWrapper>
      </StyledSlide>
    );
  }
}

export default ReusableModalSlide;