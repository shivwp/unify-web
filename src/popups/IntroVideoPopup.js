import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
// import { Link } from "react-router-dom";

const IntroVideoPopup = ({ open, onCloseModal, videoUrl }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "intro_video_popup" }}
        center
        closeOnOverlayClick={false}
      >
        <h5>Introduction Video</h5>
        <div className="intro_video">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            height={200}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default IntroVideoPopup;
