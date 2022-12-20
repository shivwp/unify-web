import React from "react";
import "./popup.css";

const ErrorPopup = ({ Popup, message, afterError }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn error_popup pb-4 rounded">
          <div className="popup_header pb-0">
            <div className="p_header_hding"></div>
          </div>
          <div className="error_heading ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 150 150"
            >
              <g
                id="cancel_1_"
                data-name="cancel (1)"
                transform="translate(-0.023 0.055)"
              >
                <circle
                  id="Ellipse_784"
                  data-name="Ellipse 784"
                  cx="75"
                  cy="75"
                  r="75"
                  transform="translate(0.024 -0.055)"
                  fill="#6d2ef1"
                />
                <path
                  id="Path_5047"
                  data-name="Path 5047"
                  d="M61.165,117.841q2.128-.413,4.23-.95,3.562-1,7.01-2.343t6.751-3.009q3.3-1.679,6.418-3.681t6.011-4.3a73.978,73.978,0,0,0,5.561-4.889q2.652-2.576,5.037-5.407t4.476-5.888q2.089-3.049,3.866-6.3t3.218-6.659q1.443-3.409,2.54-6.949.938-3.1,1.6-6.264L73.928,17.248A40.077,40.077,0,1,0,17.26,73.935l43.905,43.9Z"
                  transform="translate(30.407 30.364)"
                  fill="#ff88fe"
                />
                <path
                  id="Path_5048"
                  data-name="Path 5048"
                  d="M43.1,1.994A41.178,41.178,0,1,1,14.065,14.039,40.957,40.957,0,0,1,43.1,1.994Zm15.59,22.257a.025.025,0,0,0-.025.013,3.2,3.2,0,0,0-2.161.961l-13.416,13.4-13.4-13.4a3.2,3.2,0,0,0-2.256-.961c-2.509-.013-4.013,3.691-2.212,5.428l13.4,13.4-13.4,13.4c-2.42,2.326,2.149,6.888,4.468,4.468l13.4-13.4,13.416,13.4c2.326,2.42,6.888-2.149,4.468-4.468l-13.4-13.4,13.4-13.4C62.806,27.935,61.226,24.169,58.692,24.251Z"
                  transform="translate(31.909 31.872)"
                  fill="#fff"
                />
              </g>
            </svg>

            <h2 className="mt-2 mb-0 errorMessage"> ERROR </h2>
          </div>
          <div className="error_message mt-0">
            <div>{message || "Somthing went wrong"}</div>
          </div>

          <div className="error_popup_btn ">
            {afterError ? (
              <button onClick={() => afterError()}>OK</button>
            ) : (
              <button onClick={() => Popup()}>OK</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPopup;
