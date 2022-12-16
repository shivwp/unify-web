import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const UploadPublishProfilepic = ({
  Popup,
  setShowingImage,
  setProfileImage,
  showingImage,
  setIsChange,
}) => {
  const [showingImage2, setShowingImage2] = useState(null);
  const [showError, setShowError] = useState();

  const onImageChange = (e) => {
    let errorExist = false;
    const image = e.target.files[0];
    if (!image.name.match(/\.(jpg|jpeg|png)$/)) {
      setShowError("Image type must be jpg, jpeg or png format.");
      errorExist = true;
    }
    if (image.size > 1024 * 10) {
      setShowError("Image size must be maximum 10 MB");
      errorExist = true;
    }
    if (errorExist) {
      return false;
    }
    setShowingImage2(URL.createObjectURL(e.target.files[0]));
    setIsChange(true);
    setShowError("");
    console.log("image", image.size);
  };

  const onSave = () => {
    if (!showingImage2) {
      setShowError("Please select an image");
    } else {
      setShowingImage(showingImage2);
      Popup();
    }
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Profile Photo</div>

            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-2 pt-1 mb-4"></div>
            <Row className="mt-3">
              <div className="uploadPublishPhoto">
                <div className="image_to_show">
                  {showingImage2 ? (
                    <img
                      src={showingImage2}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : showingImage ? (
                    <img
                      src={showingImage}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 170 170"
                    >
                      <path
                        id="user_1_"
                        data-name="user (1)"
                        d="M87,172A85,85,0,1,0,2,87,85,85,0,0,0,87,172ZM112.5,70A25.5,25.5,0,1,1,87,44.5,25.5,25.5,0,0,1,112.5,70ZM36,129.5a63.75,63.75,0,0,1,102,0,63.75,63.75,0,0,1-102,0Z"
                        transform="translate(-2 -2)"
                        fill="#dedede"
                        fillRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                <label htmlFor="uploadImg" className="uploadPublish_button">
                  <input
                    type="file"
                    id="uploadImg"
                    name="profile"
                    accept="image/png, image/jpeg, image/jpg"
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => onImageChange(e)}
                  />
                  Select Profile Image
                </label>
              </div>
            </Row>
            <p className="uploadImgEror"> {showError} </p>
            <Row className="mt-4">
              <h5 className="uploadImgDetailsTitle"> Your Photo Should: </h5>
              <ul className="uploadImageDetails">
                <li>Make sure it is a clear picture of your face</li>
                <li>
                  Professional photo's are good, think Linkedin or your CV!
                </li>
                <li>No sunglasses (we'll reject these)</li>
                <li>Clear backgrounds preferred</li>
              </ul>
            </Row>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant="" className="trans_btn" onClick={() => Popup()}>
                Cancel
              </Button>
              <Button variant="" className="btnhovpple" onClick={onSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPublishProfilepic;
