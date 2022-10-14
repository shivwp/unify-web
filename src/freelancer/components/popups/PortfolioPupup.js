import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const PortfolioPupup = ({ open, onCloseModal }) => {
  const options1 = [{ name: "india", label: "india" }];
  const fileTypes = [".JPG", " .PNG", ".GIF", ".WEBP"];
  const [file, setFile] = useState('');

  const handleFileChange = (e) => {
    setFile(file + e.target.files[0].name + " ");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "freelancer_popups portfolio_popup" }}
        center
      >
        <h5>Add Portfolio</h5>
        <div className="content">
          <div className="freelancer_popup_inps">
            <div className="popup_form_element">
              <label className="text-black font-size-13px font-weight-500 mb-1 mt-0">
                Project Title
              </label>
              <input
                type="text"
                className="font-size-13px"
                placeholder="Enter Title"
                name="title"
              />
            </div>

            <div>
              <label className="text-black font-size-13px font-weight-500 my-2">
                Description
              </label>

              <div className="freelancer_popup_textarea">
                <textarea placeholder="Enter here" className="p-2"></textarea>
                {/* <div className="left_Characters">
                  <span>140 Characters left</span>
                </div> */}
              </div>
            </div>
            <div className="portfolio_attach mb-3">
              <label className="text-black font-size-13px font-weight-500 my-2">
                Attachments
              </label>
              <div
                className="drag_portfolio d-flex justify-content-center align-items-center"
                style={{
                  height: "50px",
                  backgroundColor: "#E1EDFB",
                  fontSize: 13,
                }}
              >
                <label htmlFor="drag_portfolio" className="drag_portfolio">
                  <input
                    accept={fileTypes}
                    type="file"
                    onChange={(e) => handleFileChange(e)}
                    id="drag_portfolio"
                    name="file"
                    style={{
                      visibility: "hidden",
                      width: "1px",
                      height: "1px",
                    }}
                  />
                  {file != false ? (
                    file
                  ) : (
                    <>
                      {" "}
                      Drag or{" "}
                      <span
                        style={{
                          color: "#6D2EF1",
                          fontWeight: 600,
                          cursor: "pointer",
                          margin: "0 4px ",
                        }}
                      >
                        upload
                      </span>{" "}
                      project templates
                    </>
                  )}
                </label>
              </div>
            </div>
            <p style={{fontSize: 13, color: '#304E71'}}>You may attach up to 10 files under the size of 25MB each. Include work samples or other documents to support your application.</p>
          </div>
        </div>

        <div className="freelancer_popup_btns">
          {/* <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div> */}
          <div className="_save_submit">
            <button>UPLOAD</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioPupup;
