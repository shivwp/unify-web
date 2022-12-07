import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css"
import { getFooterPageData } from "../redux/actions/authActions";

const TermsAndConditionPopup = ({ onCloseModel, open }) => {
  const dispatch = useDispatch();
  const pagename = "term-conditions";
  const footerPageData = useSelector((state) => state?.auth?.footerPageData);

  useEffect(() => {
    dispatch(getFooterPageData(pagename));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Modal
      open={open}
      onClose={onCloseModel}
      classNames={{ modal: "page-popup" }}
      center
    >
      <div
        className="container footerPage my-5"
        style={{ textAlign: "justify" }}
      >
        <div className="title">
          <h1>{footerPageData?.title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: footerPageData?.content }}
        ></div>
      </div>
    </Modal>
  );
};

export default TermsAndConditionPopup;
