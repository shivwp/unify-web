import React from "react";
import "./popup.css";
import PopupsCloseIcon from "./PopupsCloseIcon";

const ErrorPopup = ({ popup, message, afterError }) => {
  setTimeout(() => {
    popup(false);
  }, 5000);
  return (
    <>
      <div className="error_popup">
        <div className="error_container">
          <div className="message">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path
                style={{ fill: "#fff" }}
                d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
              ></path>
            </svg>
            {message}
          </div>
          <div
            className="close_pp_btn"
            onClick={() => {
              afterError ? afterError() : popup(false);
            }}
          >
            <PopupsCloseIcon />
          </div>
        </div>
        <div className="error_progress"></div>
      </div>
    </>
  );
};

export default ErrorPopup;
