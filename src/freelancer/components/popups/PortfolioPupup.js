import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import InputGroup from 'react-bootstrap/InputGroup';
import "./popup.css";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { onEditPortfolio } from "../../../redux/actions/profileAction";

const PortfolioPupup = ({
  open,
  onCloseModal,
  data,
  successPopup,
  setSuccessPopup,
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: data?.name,
    description: data?.description,
  });
  const [portfolioImage, setPortfolioImage] = useState(null);
  const [showingImage, setShowingImage] = useState(data?.image);
  const [editPortfoData, setEditPortfoData] = useState([]);


  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    setPortfolioImage(e.target.files[0]);
    setShowingImage(URL.createObjectURL(e.target.files[0]));
  };

  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    console.log("-ssss")  
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    submitPortfolio() 
    console.log("firstfirstfirst", form)
  }

  const submitPortfolio = () => {
    const formData = new FormData();
    formData.append("title", values?.title);
    formData.append("description", values?.description);
    if (data?.id) {
      if (portfolioImage) {
        formData.append("image", portfolioImage);
      }
    } else {
      formData.append("image", portfolioImage);
    }

    if (data) {
      formData.append("id", data?.id);
    }

    dispatch(
      onEditPortfolio(formData, onCloseModal, successPopup, setSuccessPopup)
    );
  };

  return (
    <>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{ modal: "freelancer_popups portfolio_popup" }}
          center
        >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h5>Add Portfolio</h5>
          <div className="content">
            <div className="freelancer_popup_inps">
              <div className="popup_form_element">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label className="text-black font-size-13px font-weight-500 mb-1 mt-0">
                    Project Title
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Enter Title"
                      name="title"
                      value={values?.title}
                      onChange={(e) => onInputChange(e)}
                      aria-describedby="inputGroupPrepend"
                      style={{ padding: "7px 20px 7px 10px" }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your job title.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>

              <div>
                <Form.Group controlId="validationCustome02" >
                  <Form.Label className="text-black font-size-13px font-weight-500 my-2">
                    Description
                  </Form.Label>

                  <div className="freelancer_popup_textarea">
                    <InputGroup hasValidation>
                      <Form.Control
                        as="textarea"
                        type="textarea"
                        placeholder="Enter here"
                        className="p-2"
                        name="description"
                        value={values?.description}
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your job Description.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </div>
                </Form.Group>
              </div>
              <div className="portfolio_attach mb-3">
                <Form.Label className="text-black font-size-13px font-weight-500 my-2">
                  Attachments
                </Form.Label>

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
                  <Form.Label htmlFor="drag_portfolio" className="drag_portfolio">
                    <Form.Control
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
                  </Form.Label>
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
              <Button variant="" type="submit" >
                UPLOAD
              </Button>
            </div>
          </div>
          </Form>
        </Modal>
    </>
  );
};

export default PortfolioPupup;
