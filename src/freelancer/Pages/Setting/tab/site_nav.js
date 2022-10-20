import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  const [active, Setactive] = useState(
    window.location.pathname.replace("/", "")
  );

  return (
    <Col lg={3}>
      <div className="side_nav">
        <div className={`nav_box`}>
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.998"
              height="38.397"
              viewBox="0 0 31.998 38.397"
            >
              <g id="Layer_2" transform="translate(-3 -2)">
                <g
                  id="Group_3151"
                  data-name="Group 3151"
                  transform="translate(3 2)"
                >
                  <path
                    id="Path_4756"
                    data-name="Path 4756"
                    d="M13.5,18a8,8,0,1,0-8-8A8,8,0,0,0,13.5,18Zm0-12.8A4.8,4.8,0,1,1,8.7,10,4.793,4.793,0,0,1,13.5,5.2Z"
                    transform="translate(2.499 -2)"
                    fill="#bec7cf"
                  />
                  <path
                    id="Path_4757"
                    data-name="Path 4757"
                    d="M24.47,7.5H13.527C7.7,7.5,3,12.524,3,18.667V26.7a1.584,1.584,0,0,0,1.6,1.6H33.4A1.584,1.584,0,0,0,35,26.7V18.667C35,12.524,30.294,7.5,24.47,7.5ZM31.8,25.1H6.2V18.667c0-4.384,3.3-7.967,7.327-7.967H24.5c4.032,0,7.327,3.584,7.327,7.967V25.1Z"
                    transform="translate(-3 10.099)"
                    fill="#bec7cf"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/profile">Profile</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "title"
              ? "active_s_nav"
              : active === "freelancer/contact-info"
              ? "active_s_nav"
              : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38.231"
              height="34.73"
              viewBox="0 0 38.231 34.73"
            >
              <g
                id="Group_3153"
                data-name="Group 3153"
                transform="translate(-121.001 -355.77)"
              >
                <g
                  id="Group_2383"
                  data-name="Group 2383"
                  transform="translate(121.001 355.77)"
                >
                  <g
                    id="Group_2382"
                    data-name="Group 2382"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_4463"
                      data-name="Path 4463"
                      d="M34.657,42.356V26.745a5.2,5.2,0,0,0-5.2-5.2H5.2A5.2,5.2,0,0,0,0,26.742v8.676H3.465V26.742a1.753,1.753,0,0,1,1.814-1.729A1.735,1.735,0,0,1,7.01,26.745V49.288H34.657V45.821H31.191v0H13.861v3.463H10.4V45.821h.08V26.745a5.184,5.184,0,0,0-.3-1.733H29.459a1.731,1.731,0,0,1,1.733,1.733V42.356Z"
                      transform="translate(0 -21.547)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2385"
                  data-name="Group 2385"
                  transform="translate(134.862 362.717)"
                >
                  <g
                    id="Group_2384"
                    data-name="Group 2384"
                    transform="translate(0 0)"
                  >
                    <rect
                      id="Rectangle_601"
                      data-name="Rectangle 601"
                      width="13.861"
                      height="3.465"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2387"
                  data-name="Group 2387"
                  transform="translate(134.862 369.647)"
                >
                  <g id="Group_2386" data-name="Group 2386">
                    <rect
                      id="Rectangle_602"
                      data-name="Rectangle 602"
                      width="6.931"
                      height="3.465"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2389"
                  data-name="Group 2389"
                  transform="translate(145.258 369.647)"
                >
                  <g id="Group_2388" data-name="Group 2388">
                    <rect
                      id="Rectangle_603"
                      data-name="Rectangle 603"
                      width="3.465"
                      height="3.465"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2391"
                  data-name="Group 2391"
                  transform="translate(127.965 380.025)"
                >
                  <g id="Group_2390" data-name="Group 2390">
                    <path
                      id="Path_4464"
                      data-name="Path 4464"
                      d="M92.635,320.249v5.228a1.7,1.7,0,0,1-1.7,1.7,1.76,1.76,0,0,1-1.727-1.758v-5.21H85.74v5.21a5.226,5.226,0,0,0,4.58,5.184v.063H111.8a5.2,5.2,0,0,0,5.2-5.194v-5.28Zm20.906,5.225A1.732,1.732,0,0,1,111.8,327.2h-16a5.17,5.17,0,0,0,.294-1.726v-1.771l17.441-.039v1.807Z"
                      transform="translate(-85.74 -320.194)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/contact-info">Contact Information</Link>
          </div>
        </div>

        <div
          className={`nav_box ${
            active === "freelancer/billing-payment" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.973"
              height="34"
              viewBox="0 0 33.973 34"
            >
              <g id="wallet" transform="translate(-0.152)">
                <g
                  id="Group_2397"
                  data-name="Group 2397"
                  transform="translate(0.152)"
                >
                  <g id="Group_2396" data-name="Group 2396">
                    <path
                      id="Path_4467"
                      data-name="Path 4467"
                      d="M5.819,7.557a1.89,1.89,0,1,1,.006-3.78H30.318V0H5.825A5.663,5.663,0,0,0,.152,5.667c0,.09,0,.18,0,.269v22.34a5.671,5.671,0,0,0,5.662,5.666L28.454,34a5.65,5.65,0,0,0,5.672-5.649V7.557Zm24.53,20.794a1.873,1.873,0,0,1-1.886,1.872L5.824,30.166a1.9,1.9,0,0,1-1.9-1.89V11.01a5.651,5.651,0,0,0,1.89.323h24.53Z"
                      transform="translate(-0.152)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2399"
                  data-name="Group 2399"
                  transform="translate(20.876 15.158)"
                >
                  <g id="Group_2398" data-name="Group 2398">
                    <path
                      id="Path_4468"
                      data-name="Path 4468"
                      d="M239.956,175.024h5.858v-3.777h-5.858a5.67,5.67,0,1,0,0,11.339h5.858v-3.777h-5.858a1.893,1.893,0,1,1,0-3.786Z"
                      transform="translate(-234.285 -171.247)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/billing-payment">Billing & Payments</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/getpaid" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.973"
              height="34"
              viewBox="0 0 33.973 34"
            >
              <g id="wallet" transform="translate(-0.152)">
                <g
                  id="Group_2397"
                  data-name="Group 2397"
                  transform="translate(0.152)"
                >
                  <g id="Group_2396" data-name="Group 2396">
                    <path
                      id="Path_4467"
                      data-name="Path 4467"
                      d="M5.819,7.557a1.89,1.89,0,1,1,.006-3.78H30.318V0H5.825A5.663,5.663,0,0,0,.152,5.667c0,.09,0,.18,0,.269v22.34a5.671,5.671,0,0,0,5.662,5.666L28.454,34a5.65,5.65,0,0,0,5.672-5.649V7.557Zm24.53,20.794a1.873,1.873,0,0,1-1.886,1.872L5.824,30.166a1.9,1.9,0,0,1-1.9-1.89V11.01a5.651,5.651,0,0,0,1.89.323h24.53Z"
                      transform="translate(-0.152)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
                <g
                  id="Group_2399"
                  data-name="Group 2399"
                  transform="translate(20.876 15.158)"
                >
                  <g id="Group_2398" data-name="Group 2398">
                    <path
                      id="Path_4468"
                      data-name="Path 4468"
                      d="M239.956,175.024h5.858v-3.777h-5.858a5.67,5.67,0,1,0,0,11.339h5.858v-3.777h-5.858a1.893,1.893,0,1,1,0-3.786Z"
                      transform="translate(-234.285 -171.247)"
                      fill="#bec7cf"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/getpaid">Get Paid</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/my-teams" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36.4"
              height="36.4"
              viewBox="0 0 36.4 36.4"
            >
              <g
                id="Layer_20"
                data-name="Layer 20"
                transform="translate(-1 -1)"
              >
                <path
                  id="Path_4758"
                  data-name="Path 4758"
                  d="M17.28,24.56a7.28,7.28,0,1,1,7.28-7.28A7.28,7.28,0,0,1,17.28,24.56Zm0-12.133a4.853,4.853,0,1,0,4.853,4.853A4.853,4.853,0,0,0,17.28,12.427Z"
                  transform="translate(1.92 1.92)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4759"
                  data-name="Path 4759"
                  d="M23.987,32.923H11.853A4.853,4.853,0,0,1,7,28.07V24.976a1.213,1.213,0,0,1,.764-1.116l4.417-1.771a1.213,1.213,0,1,1,.886,2.257L9.427,25.8V28.07A2.427,2.427,0,0,0,11.853,30.5H23.987a2.427,2.427,0,0,0,2.427-2.427V25.8l-3.64-1.456a1.214,1.214,0,1,1,.9-2.257l4.417,1.771a1.213,1.213,0,0,1,.764,1.116V28.07a4.853,4.853,0,0,1-4.865,4.853Z"
                  transform="translate(1.28 4.477)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4760"
                  data-name="Path 4760"
                  d="M10.067,13.133a6.067,6.067,0,1,1,6.067-6.067A6.067,6.067,0,0,1,10.067,13.133Zm0-9.707a3.64,3.64,0,1,0,3.64,3.64A3.64,3.64,0,0,0,10.067,3.427Z"
                  transform="translate(0.64 0)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4761"
                  data-name="Path 4761"
                  d="M9.493,21.1H5.853A4.853,4.853,0,0,1,1,16.243V14.12a1.213,1.213,0,0,1,.764-1.128l3.871-1.517a1.2,1.2,0,1,1,.886,2.233L3.427,14.945v1.3A2.427,2.427,0,0,0,5.853,18.67h3.64a1.213,1.213,0,1,1,0,2.427Z"
                  transform="translate(0 2.216)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4762"
                  data-name="Path 4762"
                  d="M24.067,13.133a6.067,6.067,0,1,1,6.067-6.067A6.067,6.067,0,0,1,24.067,13.133Zm0-9.707a3.64,3.64,0,1,0,3.64,3.64A3.64,3.64,0,0,0,24.067,3.427Z"
                  transform="translate(3.627 0)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4763"
                  data-name="Path 4763"
                  d="M27.853,21.1h-3.64a1.213,1.213,0,1,1,0-2.427h3.64a2.427,2.427,0,0,0,2.427-2.427v-1.3l-3.094-1.213a1.218,1.218,0,0,1,.886-2.269l3.871,1.517a1.213,1.213,0,0,1,.764,1.128v2.123A4.853,4.853,0,0,1,27.853,21.1Z"
                  transform="translate(4.693 2.215)"
                  fill="#bec7cf"
                />
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/my-teams">My Teams</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/password-security" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.399"
              height="38.481"
              viewBox="0 0 28.399 38.481"
            >
              <g id="unlock" transform="translate(0 -0.242)">
                <g
                  id="Group_3152"
                  data-name="Group 3152"
                  transform="translate(0 0.242)"
                >
                  <path
                    id="Path_4764"
                    data-name="Path 4764"
                    d="M26.925,16.287h-2.4V10.579a10.327,10.327,0,1,0-20.654.007,1.488,1.488,0,0,0,2.977,0,7.353,7.353,0,1,1,14.706-.007v5.708H1.5A1.487,1.487,0,0,0,0,17.761V35.008a3.732,3.732,0,0,0,3.731,3.715H24.7a3.709,3.709,0,0,0,3.7-3.715V17.761A1.465,1.465,0,0,0,26.925,16.287Zm-1.5,18.72a.737.737,0,0,1-.734.745H3.731a.76.76,0,0,1-.76-.745V19.258H25.429Z"
                    transform="translate(0 -0.242)"
                    fill="#bec7cf"
                  />
                  <path
                    id="Path_4765"
                    data-name="Path 4765"
                    d="M566.485,1048.041a1.485,1.485,0,0,0,1.485-1.487V1041.2a1.485,1.485,0,1,0-2.97,0v5.353A1.485,1.485,0,0,0,566.485,1048.041Z"
                    transform="translate(-552.286 -1016.323)"
                    fill="#bec7cf"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/password-security">Password & Security</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/notification" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.667"
              height="34.075"
              viewBox="0 0 30.667 34.075"
            >
              <g id="g1249" transform="translate(-3 -292.65)">
                <path
                  id="rect1179"
                  d="M18.334,292.65A12.391,12.391,0,0,0,6.028,305.105v5.97A4.532,4.532,0,0,0,3,315.136a4.78,4.78,0,0,0,4.732,4.775h21.2a4.78,4.78,0,0,0,4.732-4.775,4.529,4.529,0,0,0-3.028-4.06v-5.97a12.391,12.391,0,0,0-12.305-12.455Zm8.9,12.455c0,2.263,0,4.648-.014,6.868a1.686,1.686,0,0,0,1.6,1.79,1.341,1.341,0,0,1,1.445,1.371,1.307,1.307,0,0,1-1.324,1.368H7.731a1.307,1.307,0,0,1-1.324-1.368,1.341,1.341,0,0,1,1.444-1.371,1.686,1.686,0,0,0,1.6-1.786c-.035-2.254-.014-4.587-.014-6.871a8.9,8.9,0,1,1,17.8,0Z"
                  transform="translate(0 0)"
                  fill="#bec7cf"
                />
                <path
                  id="path1199"
                  d="M10.7,310.65a1.7,1.7,0,0,0,0,3.407h6.815a1.7,1.7,0,0,0,0-3.407Z"
                  transform="translate(4.222 12.667)"
                  fill="#bec7cf"
                />
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/notification">Notifications</Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/identify-verification" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.667"
              height="31.858"
              viewBox="0 0 28.667 31.858"
            >
              <g id="g1275" transform="translate(-3 -292.647)">
                <path
                  id="path1265"
                  d="M16.649,292.8,4.583,298.544a1.593,1.593,0,0,0-.824.933A14.5,14.5,0,0,0,3,304.08c0,15.212,13.8,20.331,13.8,20.331a1.593,1.593,0,0,0,1.076,0s13.8-5.118,13.8-20.331a14.5,14.5,0,0,0-.759-4.6,1.593,1.593,0,0,0-.824-.933L18.018,292.8a1.56,1.56,0,0,0-1.369,0Zm.684,3.2,10.651,5.061a11.093,11.093,0,0,1,.5,3.011,17.866,17.866,0,0,1-11.148,17.086A17.866,17.866,0,0,1,6.185,304.081a11.093,11.093,0,0,1,.5-3.011Z"
                  fill="#bec7cf"
                />
                <path
                  id="path1271"
                  d="M19.456,299.306,13.63,307.25,10.8,303.981a1.593,1.593,0,0,0-2.408,2.087l4.14,4.778a1.593,1.593,0,0,0,2.488-.1l7.008-9.556a1.593,1.593,0,0,0-.342-2.227A1.549,1.549,0,0,0,19.456,299.306Z"
                  transform="translate(2.963 3.553)"
                  fill="#bec7cf"
                />
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/identify-verification">
              Identify Verification
            </Link>
          </div>
        </div>
        <div
          className={`nav_box ${
            active === "freelancer/my-stats" ? "active_s_nav" : ""
          }`}
        >
          <div className="s_nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.667"
              height="28.667"
              viewBox="0 0 28.667 28.667"
            >
              <g id="_1" data-name="1" transform="translate(-54.13 -53.73)">
                <path
                  id="Path_4766"
                  data-name="Path 4766"
                  d="M66.671,129.082a12.541,12.541,0,1,1,0-25.082,1.07,1.07,0,0,1,1.07,1.07v10.4h10.4a1.07,1.07,0,0,1,1.07,1.07A12.555,12.555,0,0,1,66.671,129.082ZM65.6,106.191A10.4,10.4,0,1,0,77.018,117.61H66.671a1.07,1.07,0,0,1-1.07-1.07Z"
                  transform="translate(0 -46.685)"
                  fill="#bec7cf"
                />
                <path
                  id="Path_4767"
                  data-name="Path 4767"
                  d="M274.059,67.628H262.3a1.07,1.07,0,0,1-1.07-1.07V54.8a1.07,1.07,0,0,1,1.07-1.07,12.843,12.843,0,0,1,12.829,12.829A1.07,1.07,0,0,1,274.059,67.628Zm-10.689-2.139h9.567a10.708,10.708,0,0,0-9.567-9.566Z"
                  transform="translate(-192.332)"
                  fill="#bec7cf"
                />
              </g>
            </svg>
          </div>
          <div className="s_nav_title">
            <Link to="/freelancer/my-stats">My Stats</Link>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default SideNav;
