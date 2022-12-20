import React from "react";
import "./popup.css";

const SuccessPopup = ({ Popup, message, afterSuccess }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn success_popup pb-4 rounded">
          <div className="popup_header pb-0">
            <div className="p_header_hding"></div>
            {/* <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div> */}
          </div>
          <div className="success_heading ">
            {/* <h2> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 150 150"
            >
              <g
                id="check_1_"
                data-name="check (1)"
                transform="translate(0.322 0.239)"
              >
                <circle
                  id="Ellipse_785"
                  data-name="Ellipse 785"
                  cx="75"
                  cy="75"
                  r="75"
                  transform="translate(-0.322 -0.239)"
                  fill="#6d2ef1"
                />
                <path
                  id="Path_5049"
                  data-name="Path 5049"
                  d="M61.023,117.564q2.123-.412,4.219-.947,3.553-.993,6.993-2.337t6.735-3q3.291-1.675,6.4-3.672t6-4.293a73.8,73.8,0,0,0,5.548-4.877q2.646-2.57,5.025-5.394t4.465-5.874q2.084-3.042,3.856-6.28t3.211-6.643q1.44-3.4,2.534-6.932.936-3.088,1.6-6.249L73.755,17.219A39.978,39.978,0,1,0,17.226,73.766l43.8,43.791Z"
                  transform="translate(30.222 30.276)"
                  fill="#ff88fe"
                />
                <path
                  id="Path_5050"
                  data-name="Path 5050"
                  d="M43.008,2A41.036,41.036,0,1,1,14.022,14.016,40.859,40.859,0,0,1,43.008,2Zm18.66,28.382a3.171,3.171,0,0,0-1.639.649L36.994,48.3,26.321,37.638c-2.314-2.408-6.872,2.143-4.457,4.457L34.472,54.7a3.259,3.259,0,0,0,4.117.3L63.805,36.087c2.118-1.545.813-5.661-1.809-5.7a3.152,3.152,0,0,0-.322,0Z"
                  transform="translate(31.713 31.778)"
                  fill="#fff"
                />
              </g>
            </svg>
            {/* </h2> */}
            <h2 className="mt-2"> SUCCESS </h2>
          </div>
          <div className="sucess_message">
            <div>{message}</div>
          </div>

          <div className="success_popup_btn ">
            {afterSuccess ? (
              <button onClick={() => afterSuccess()}>Ok</button>
            ) : (
              <button onClick={() => Popup()}>Ok</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPopup;
