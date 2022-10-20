import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { useDispatch } from "react-redux";
import { onEditPortfolio } from "../../../redux/actions/profileAction";

const PortfolioPupup = ({ open, onCloseModal }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [portfolioImage, setPortfolioImage] = useState("");
  const [showingImage, setShowingImage] = useState();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    setPortfolioImage(e.target.files[0]);
    setShowingImage(URL.createObjectURL(e.target.files[0]));
  };

  const submitPortfolio = (e) => {
    const formData = new FormData();

    formData.append("title", values?.title);
    formData.append("description", values?.description);
    formData.append("image", portfolioImage);

    dispatch(onEditPortfolio(formData, onCloseModal));
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
                value={values?.title}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <label className="text-black font-size-13px font-weight-500 my-2">
                Description
              </label>

              <div className="freelancer_popup_textarea">
                <textarea
                  placeholder="Enter here"
                  className="p-2"
                  name="description"
                  value={values.description}
                  onChange={(e) => onInputChange(e)}
                ></textarea>
              </div>
            </div>
            <div className="portfolio_attach mb-3">
              <label className="text-black font-size-13px font-weight-500 my-2">
                Attachments
              </label>

              <div className="portfolio_img_pre">
                <img src={showingImage} alt="" />
              </div>

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
                    type="file"
                    id="drag_portfolio"
                    name="file"
                    className="img-fluid"
                    onChange={(e) => onImageChange(e)}
                    style={{
                      visibility: "hidden",
                      width: "1px",
                      height: "1px",
                    }}
                  />
                  <>
                    {" "}
                    {/* Drag or{" "} */}
                    <span
                      style={{
                        color: "#6D2EF1",
                        fontWeight: 600,
                        cursor: "pointer",
                        margin: "0 4px ",
                      }}
                    >
                      Upload
                    </span>{" "}
                    project templates
                  </>
                </label>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#304E71" }}>
              You may attach up to 10 files under the size of 25MB each. Include
              work samples or other documents to support your application.
            </p>
          </div>
        </div>

        <div className="freelancer_popup_btns">
          {/* <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div> */}
          <div className="_save_submit">
            <button onClick={submitPortfolio}>UPLOAD</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioPupup;
