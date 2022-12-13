import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { useDispatch, useSelector } from "react-redux";
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
  const [errors, setErrors] = useState({});
  const [portfolioImage, setPortfolioImage] = useState(null);
  const [showingImage, setShowingImage] = useState(data?.image);
  const portfolioError = useSelector((state) => state.profile.portfolioError);
  const [editPortfoData, setEditPortfoData] = useState();

  const onInputChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0) &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: `Field is required`,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  useEffect(() => {
    if (portfolioError) {
      setEditPortfoData(portfolioError);
    }
  }, [portfolioError]);

  const onImageChange = (e) => {
    setPortfolioImage(e.target.files[0]);
    setShowingImage(URL.createObjectURL(e.target.files[0]));
    setEditPortfoData("");
    setErrors({ ...errors, image: false });
  };

  const submitPortfolio = (e) => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values.title === "" ||
      values.title === null ||
      values.title === undefined
    ) {
      errorsObject.title = "Please enter title";
      errorExist = true;
    }

    if (
      values.description === "" ||
      values.description === null ||
      values.description === undefined
    ) {
      errorsObject.description = "Please enter description";
      errorExist = true;
    }

    if (!data?.id) {
      if (!portfolioImage) {
        errorsObject.image = "Please selece an image";
        errorExist = true;
      }
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const formData = new FormData();
    formData.append("title", values?.title);
    formData.append("description", values?.description);

    if (data?.id) {
      formData.append("id", data?.id);
      if (portfolioImage) {
        formData.append("image", portfolioImage);
      }
    } else {
      formData.append("image", portfolioImage);
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
        {data?.id ? <h5>Edit Portfolio</h5> : <h5>Add Portfolio</h5>}

        <div className="content">
          <div className="freelancer_popup_inps">
            <div className="popup_form_element">
              <Form.Label className="text-black font-size-13px font-weight-500 mb-1 mt-0 ">
                Project Title <span className="required_stars"> * </span>
              </Form.Label>
              <Form.Control
                type="text"
                className="font-size-13px"
                placeholder="Enter Title"
                name="title"
                value={values?.title}
                onChange={(e) => onInputChange(e)}
                style={{ padding: "7px 20px 7px 10px" }}
              />
              <span className="signup-error">
                {errors.title && errors.title}
              </span>
            </div>

            <div>
              <Form.Label className="text-black font-size-13px font-weight-500 my-2">
                Description <span className="required_stars"> * </span>
              </Form.Label>

              <div className="freelancer_popup_textarea">
                <Form.Control
                  as="textarea"
                  placeholder="Enter here"
                  className="p-2"
                  name="description"
                  value={values?.description}
                  onChange={(e) => onInputChange(e)}
                ></Form.Control>
                <span className="signup-error">
                  {errors.description && errors.description}
                </span>
              </div>
            </div>
            <div className="portfolio_attach mt-4">
              <Form.Label className="text-black font-size-13px font-weight-500 my-2 mb-0">
                Attachments <span className="required_stars"> * </span>
              </Form.Label>
              <div className="portfolio_img_pre pt-0">
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
              {errors?.image ? (
                <span className="signup-error">{errors?.image}</span>
              ) : (
                ""
              )}
              <span className="signup-error">{editPortfoData}</span>
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
            <Button variant="" onClick={submitPortfolio}>
              UPLOAD
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioPupup;
