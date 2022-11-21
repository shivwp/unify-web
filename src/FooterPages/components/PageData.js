import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFooterPageData } from "../../redux/actions/authActions";

const PageData = () => {
  const { pagename } = useParams();
  const dispatch = useDispatch();
  const footerPageData = useSelector((state) => state?.auth?.footerPageData);
  console.log(footerPageData);
  useEffect(() => {
    dispatch(getFooterPageData(pagename));
    window.scrollTo(0, 0);
  }, [pagename]);
  return (
    <div className="container footerPage my-5" style={{ textAlign: "justify" }}>
      <div className="title">
        <h1>{footerPageData?.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: footerPageData?.content }}></div>
    </div>
  );
};

export default PageData;
