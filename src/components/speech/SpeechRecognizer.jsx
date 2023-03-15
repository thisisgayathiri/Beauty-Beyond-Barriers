import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import SpeechRecognition from "react-speech-recognition";
import { useSpeechRecognition } from "react-speech-recognition";

const SpeechRecognizer = () => {
  const navigate = useNavigate();
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "150px",
      height: "100px",
      transform: "translate(-50%, -50%)",
    },
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  if (transcript.toLowerCase().includes("search")) {
    setTimeout(() => {
      navigate("/salons");
    }, 1000);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    SpeechRecognition.startListening();
  }

  function closeModal() {
    setIsOpen(false);
    SpeechRecognition.stopListening();
  }

  return (
    <div>
      <img
        onClick={openModal}
        style={{ position: "fixed", bottom: "1%", right: "5%" }}
        src="/images/mic.svg"
      />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Speech Modal"
      >
        <div
          style={{ color: "black", display: transcript == "" ? "" : "none" }}
        >
          Listening..
        </div>
        <div style={{ color: "black" }}>{transcript}</div>
      </Modal>
    </div>
  );
};
export default SpeechRecognizer;
