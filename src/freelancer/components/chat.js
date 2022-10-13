import Container from "react-bootstrap/Container";
import Title from "../../components/title";
import { Row, Col } from "react-bootstrap";
import "./chat.css";
import Select from "react-select";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-box-chat">
        <div className="cbc_profile_img online_profile">
          <img src="/assets/PRO-2.png" alt="" />
        </div>
        <div className="cbc_lft">
          <div className="cbc_name_pf">Allen growd</div>
          <div className="cbc_time_pf">12:02 PM : July 20, 2020</div>
        </div>
      </div>
    </>
  );
};

const Message = (props) => {
  return (
    <div className={`message-box-r`}>
      <div className={`prof-mig dir-${props.dir}`}>
        <img src="/assets/PRO-2.png" alt="" />
      </div>
      <div className={`mbr_bw_node dir-${props.dir}`}>
        Our motivation is to enable computerized connections through
        versatility. By planning and creating custom applications and portable
        responsive…
      </div>
    </div>
  );
};

const PopupContact = (props) => {
  return (
    <>
      <div className="bg_wrap_chat">
        <div className="popup_boxwchat">
          <div className="header_pbcht">
            <div className="hding_cbox font-weight-600">Add People</div>
            <div className="close_btnchatpoup">
              <button
                onClick={() => {
                  props.SetPopup();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.781"
                  height="21.781"
                  viewBox="0 0 21.781 21.781"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M24.154,19.427h0l-6.608-6.608,6.608-6.608h0a.682.682,0,0,0,0-.962L21.032,2.127a.682.682,0,0,0-.962,0h0L13.461,8.735,6.854,2.127h0a.682.682,0,0,0-.962,0L2.77,5.248a.682.682,0,0,0,0,.962h0l6.608,6.608L2.77,19.427h0a.682.682,0,0,0,0,.962l3.121,3.121a.682.682,0,0,0,.962,0h0L13.462,16.9l6.608,6.608h0a.682.682,0,0,0,.962,0l3.121-3.121a.682.682,0,0,0,0-.962Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="cat_popup_boxy">
            <div className="htname_inp">
              <input type="text" placeholder="Start typing names" />
            </div>
            <div className="bht_headingchat font-weight-600">Permissions</div>
            <div className="prmision_rinput d-flex">
              <div className="pri_radiocwiu">
                <input type="radio" name="p" />
              </div>
              <div className="pri_name_desc">
                <div className="head_priname font-weight-500 font-size-15px">
                  Room admin
                </div>
                <div className="hp_desc">
                  Add as a participant who can also add and remove other
                  participants.
                </div>
              </div>
            </div>
            <div className="prmision_rinput d-flex">
              <div className="pri_radiocwiu">
                <input type="radio" name="p" />
              </div>
              <div className="pri_name_desc">
                <div className="head_priname font-weight-500 font-size-15px">
                  Room member
                </div>
                <div className="hp_desc">
                  Add as a participant in this conversation
                </div>
              </div>
            </div>

            <div className="btn_foot_sec justify-content-end flex-wrap no-border mt-2">
              <div className="fo_btn_c next_b_btn_c">
                <button
                  className="no-border newchat-pad mrright-gppnew"
                  onClick={() => {
                    props.SetPopup();
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="fo_btn_c next_b_btn_c">
                <button className="active_btn_blue newchat-pad bgcolor-dark">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Screen = () => {
  Title(" | Chat");
  const [Popup, SetPopup] = useState();
  const options1 = [
    {
      label: "All Recent",
      name: "All Recent",
    },
  ];
  return (
    <>
      <div className="chat-bg mt-2">
        <Container>
          <div className="chat-header align-items-center flex-wrap">
            <div className="chat_header_buttons align-items-center w-50 justify-content-between cewbrteve">
              <div className="d-flex cewbrtever">
                <Link to="/freelancer/contact-info">
                  <button>
                    <svg
                      id="tools"
                      xmlns="http://www.w3.org/2000/svg"
                      width="29.934"
                      height="34.947"
                      viewBox="0 0 29.934 34.947"
                    >
                      <g
                        id="Group_2445"
                        data-name="Group 2445"
                        transform="translate(0 19.036)"
                      >
                        <g
                          id="Group_2444"
                          data-name="Group 2444"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_4495"
                            data-name="Path 4495"
                            d="M33.794,256.668v11.075a4.747,4.747,0,1,0,9.493,0V256.668Zm6.329,11.075a1.582,1.582,0,1,1-3.164,0v-7.91h3.164v7.91Z"
                            transform="translate(-33.794 -256.668)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2447"
                        data-name="Group 2447"
                        transform="translate(3.164 0.05)"
                      >
                        <g id="Group_2446" data-name="Group 2446">
                          <rect
                            id="Rectangle_635"
                            data-name="Rectangle 635"
                            width="3.164"
                            height="15.734"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2449"
                        data-name="Group 2449"
                        transform="translate(11.217 0)"
                      >
                        <g
                          id="Group_2448"
                          data-name="Group 2448"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_4496"
                            data-name="Path 4496"
                            d="M201.11,1.343l-.159-.16c-2.227-2.24-4.939-1.128-4.939,2.028s0,4.75,0,4.75q-3.168,0-3.168-.007V3.211c0-3.157-2.71-4.27-4.945-2.044l-.193.192a8.85,8.85,0,0,0,.338,12.979l.989.887a2.545,2.545,0,0,1,.647,1.463V30.2a4.748,4.748,0,0,0,9.5,0V16.688a2.583,2.583,0,0,1,.658-1.484l.931-.843A8.936,8.936,0,0,0,201.11,1.343Zm-2.469,10.673-.931.843a5.65,5.65,0,0,0-1.7,3.829V30.2a1.584,1.584,0,0,1-3.167,0V16.688a5.609,5.609,0,0,0-1.7-3.819l-.989-.887a5.678,5.678,0,0,1-.477-8.106V7.954a3.169,3.169,0,0,0,3.164,3.171h3.169a3.163,3.163,0,0,0,3.164-3.171V3.91A5.765,5.765,0,0,1,198.642,12.016Z"
                            transform="translate(-185.039 0)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </Link>
                <Link to="/freelancer/chat">
                  <button>
                    <svg
                      id="chat"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.789"
                      height="35.839"
                      viewBox="0 0 35.789 35.839"
                    >
                      <g
                        id="Group_2437"
                        data-name="Group 2437"
                        transform="translate(0)"
                      >
                        <g
                          id="Group_2436"
                          data-name="Group 2436"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_4494"
                            data-name="Path 4494"
                            d="M32.092,0H4.237A3.969,3.969,0,0,0,.27,3.973V23.862a3.973,3.973,0,0,0,3.967,3.973H17.115l9.451,7.646c.846.684,1.54.358,1.54-.737V27.836h3.986a3.969,3.969,0,0,0,3.967-3.973V3.973A3.973,3.973,0,0,0,32.092,0Zm-.01,23.859H24.129V28.4l-5.607-4.536H4.247V3.977H32.082V23.859Z"
                            transform="translate(-0.27)"
                            fill="#fff"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2439"
                        data-name="Group 2439"
                        transform="translate(7.953 11.93)"
                      >
                        <g id="Group_2438" data-name="Group 2438">
                          <rect
                            id="Rectangle_632"
                            data-name="Rectangle 632"
                            width="3.977"
                            height="3.977"
                            fill="#fff"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2441"
                        data-name="Group 2441"
                        transform="translate(15.906 11.93)"
                      >
                        <g id="Group_2440" data-name="Group 2440">
                          <rect
                            id="Rectangle_633"
                            data-name="Rectangle 633"
                            width="3.977"
                            height="3.977"
                            fill="#fff"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2443"
                        data-name="Group 2443"
                        transform="translate(23.859 11.93)"
                      >
                        <g id="Group_2442" data-name="Group 2442">
                          <rect
                            id="Rectangle_634"
                            data-name="Rectangle 634"
                            width="3.977"
                            height="3.977"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </Link>
                <Link to="/freelancer/profile">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.77"
                      height="34.947"
                      viewBox="0 0 31.77 34.947"
                    >
                      <g
                        id="Group_2455"
                        data-name="Group 2455"
                        transform="translate(11.12 7.942)"
                      >
                        <g id="Group_2454" data-name="Group 2454">
                          <path
                            id="Path_4499"
                            data-name="Path 4499"
                            d="M175.432,106.667a4.77,4.77,0,0,0-4.765,4.768v3.172a4.765,4.765,0,1,0,9.531,0v-3.172A4.762,4.762,0,0,0,175.432,106.667Zm1.588,7.94a1.588,1.588,0,1,1-3.177,0v-3.172a1.588,1.588,0,1,1,3.177,0Z"
                            transform="translate(-170.667 -106.667)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2457"
                        data-name="Group 2457"
                        transform="translate(4.722 22.261)"
                      >
                        <g id="Group_2456" data-name="Group 2456">
                          <path
                            id="Path_4500"
                            data-name="Path 4500"
                            d="M103.73,300.854l-.191-.07c-.178-.064-.379-.136-.6-.213-.633-.219-1.306-.438-1.993-.643-.608-.181-1.2-.343-1.764-.481a14.513,14.513,0,0,0-3.291-.49,16.254,16.254,0,0,0-3.765.705q-.491.133-1.013.285c-.713.207-1.431.429-2.12.65-.241.078-.462.15-.657.215l-.249.083a4.89,4.89,0,0,0-3.337,4.394h3.177a1.773,1.773,0,0,1,1.154-1.376l.255-.085c.187-.062.4-.131.63-.206.662-.213,1.352-.426,2.034-.624.329-.1.649-.186.957-.269a15.1,15.1,0,0,1,2.934-.595,11.846,11.846,0,0,1,2.54.4c.509.124,1.049.272,1.607.438.64.191,1.27.4,1.862.6.353.122.613.216.751.268a2.01,2.01,0,0,1,1.2,1.448h3.177A5.084,5.084,0,0,0,103.73,300.854Z"
                            transform="translate(-84.748 -298.957)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2459"
                        data-name="Group 2459"
                        transform="translate(0)"
                      >
                        <g id="Group_2458" data-name="Group 2458">
                          <path
                            id="Path_4501"
                            data-name="Path 4501"
                            d="M49.926,0H24.51a3.177,3.177,0,0,0-3.177,3.177V31.77a3.177,3.177,0,0,0,3.177,3.177H49.926A3.177,3.177,0,0,0,53.1,31.77V3.177A3.177,3.177,0,0,0,49.926,0Zm0,31.77H24.51V3.177H49.926Z"
                            transform="translate(-21.333)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </Link>
                <button
                  className="round-chat-btn"
                  onClick={() => {
                    SetPopup(<PopupContact SetPopup={SetPopup} />);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.49"
                    height="21.49"
                    viewBox="0 0 21.49 21.49"
                  >
                    <path
                      id="Path_4508"
                      data-name="Path 4508"
                      d="M12.086,9.4V0H9.4V9.4H0v2.682H9.4v9.4h2.682v-9.4h9.4V9.4Z"
                      fill="#6d2ef1"
                    />
                  </svg>
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center w-50 seitsix_mtab_margin  flex-wrap cewbrtever">
                <div>
                  <div className="chat_p_name ml_svg_cpn">
                    Alex K.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.972"
                      height="15.264"
                      viewBox="0 0 16.972 16.264"
                    >
                      <path
                        id="star"
                        d="M16.927,6.642a.9.9,0,0,0-.776-.619l-4.9-.445L9.316,1.044a.9.9,0,0,0-1.66,0L5.72,5.577l-4.9.445A.9.9,0,0,0,.307,7.6l3.7,3.247L2.919,15.657a.9.9,0,0,0,1.342.975l4.225-2.526,4.224,2.526a.9.9,0,0,0,1.343-.975l-1.092-4.809,3.7-3.247a.9.9,0,0,0,.263-.959Zm-8.36,7.416"
                        transform="translate(0 -0.496)"
                        fill="#ff88fe"
                      />
                    </svg>
                  </div>
                  <div className="d-flex cewbrteve wdewcpo39wdbi">
                    <div className="chat_ucountry">Derby, United Kingdom</div>
                    <div className="chat_status_date">
                      Friday, July 20, 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat_header_buttons chb_fill_gray  flex-wrap">
              <div className="chat_header_buttons flex-wrap">
                <div className="vpropo_cbrntn">
                  <Link to="/freelancer/active-contract">
                    <button>VIEW PROPOSAL</button>
                  </Link>
                </div>
                <button>
                  <svg
                    id="video-camera"
                    xmlns="http://www.w3.org/2000/svg"
                    width="47.947"
                    height="38.826"
                    viewBox="0 0 47.947 38.826"
                  >
                    <g
                      id="Group_2461"
                      data-name="Group 2461"
                      transform="translate(0 0)"
                    >
                      <g id="Group_2460" data-name="Group 2460">
                        <path
                          id="Path_4502"
                          data-name="Path 4502"
                          d="M31.975,137.628H28.53l-2.416-6.221a4.568,4.568,0,0,0-4.258-2.914h-15v4.568h15L25.4,142.2h6.571a2.284,2.284,0,0,1,2.284,2.284v15.987a2.284,2.284,0,0,1-2.284,2.284H6.852a2.284,2.284,0,0,1-2.284-2.284V144.48A2.284,2.284,0,0,1,6.852,142.2h11.42v-4.568H6.852A6.852,6.852,0,0,0,0,144.48v15.987a6.852,6.852,0,0,0,6.852,6.852H31.975a6.852,6.852,0,0,0,6.852-6.852V144.48A6.852,6.852,0,0,0,31.975,137.628Z"
                          transform="translate(0 -128.493)"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2463"
                      data-name="Group 2463"
                      transform="translate(9.136 25.123)"
                    >
                      <g id="Group_2462" data-name="Group 2462">
                        <rect
                          id="Rectangle_636"
                          data-name="Rectangle 636"
                          width="20.555"
                          height="4.568"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2465"
                      data-name="Group 2465"
                      transform="translate(34.259 15.987)"
                    >
                      <g id="Group_2464" data-name="Group 2464">
                        <path
                          id="Path_4503"
                          data-name="Path 4503"
                          d="M978.81,580.38a2.284,2.284,0,0,0-2.981-1.243l-10.536,4.333V592.6l10.518,4.431a2.284,2.284,0,0,0,3.17-2.1V581.249A2.284,2.284,0,0,0,978.81,580.38Zm-4.4,11.111-4.553-1.918V586.53l4.553-1.872Z"
                          transform="translate(-965.293 -578.964)"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
                <button>
                  <svg
                    id="phone-call"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38.84"
                    height="38.827"
                    viewBox="0 0 38.84 38.827"
                  >
                    <g
                      id="Group_2466"
                      data-name="Group 2466"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_4504"
                        data-name="Path 4504"
                        d="M36.807,26.571,32.9,23.37a6.717,6.717,0,0,0-8.82.434l-.155.155a1,1,0,0,1-1.408,0l-7.55-7.55a.993.993,0,0,1-.021-1.383l.02-.021-.021.021h0l.021-.021a6.864,6.864,0,0,0,.507-8.859L12.3,2.141a5.174,5.174,0,0,0-7.9-.452l-.582.582c-4.125,4.125-5.1,11.558-2,16.5,0,0,1.821,4.224,7.967,10.37s10.37,7.967,10.37,7.967a14.145,14.145,0,0,0,16.5-2l.554-.554A5.285,5.285,0,0,0,36.807,26.571ZM34.4,31.748l-.554.554a10.2,10.2,0,0,1-11.635,1.41l-.233-.141-.25-.108a17.115,17.115,0,0,1-2.24-1.33,46.853,46.853,0,0,1-6.894-5.8A46.847,46.847,0,0,1,6.8,19.44,17.1,17.1,0,0,1,5.466,17.2l-.12-.278-.161-.257C3.1,13.338,3.774,7.934,6.63,5.078L7.212,4.5A1.219,1.219,0,0,1,9.191,4.6L12.36,8.611a2.9,2.9,0,0,1-.222,3.61,4.963,4.963,0,0,0,.022,7l7.55,7.55a4.97,4.97,0,0,0,7.023,0l.155-.155a2.754,2.754,0,0,1,3.5-.17l3.908,3.2A1.325,1.325,0,0,1,34.4,31.748Z"
                        transform="translate(-0.001 -0.07)"
                        fill="#6d2ef1"
                      />
                    </g>
                  </svg>
                </button>
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.136"
                  height="36.462"
                  viewBox="0 0 40.136 36.462"
                >
                  <g id="script" transform="translate(0 -21.547)">
                    <g
                      id="Group_2383"
                      data-name="Group 2383"
                      transform="translate(0 21.547)"
                    >
                      <g
                        id="Group_2382"
                        data-name="Group 2382"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_4463"
                          data-name="Path 4463"
                          d="M36.384,43.393V27a5.455,5.455,0,0,0-5.457-5.457H5.456A5.458,5.458,0,0,0,0,27v9.109H3.638V27a1.84,1.84,0,0,1,1.9-1.816A1.821,1.821,0,0,1,7.36,27V50.671H36.384v-3.64H32.746v0H14.552v3.636H10.914V47.031H11V27a5.442,5.442,0,0,0-.311-1.819h20.24A1.817,1.817,0,0,1,32.746,27V43.393Z"
                          transform="translate(0 -21.547)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2385"
                      data-name="Group 2385"
                      transform="translate(14.552 28.84)"
                    >
                      <g
                        id="Group_2384"
                        data-name="Group 2384"
                        transform="translate(0 0)"
                      >
                        <rect
                          id="Rectangle_601"
                          data-name="Rectangle 601"
                          width="14.552"
                          height="3.638"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2387"
                      data-name="Group 2387"
                      transform="translate(14.552 36.117)"
                    >
                      <g id="Group_2386" data-name="Group 2386">
                        <rect
                          id="Rectangle_602"
                          data-name="Rectangle 602"
                          width="7.276"
                          height="3.638"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2389"
                      data-name="Group 2389"
                      transform="translate(25.467 36.117)"
                    >
                      <g id="Group_2388" data-name="Group 2388">
                        <rect
                          id="Rectangle_603"
                          data-name="Rectangle 603"
                          width="3.638"
                          height="3.638"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2391"
                      data-name="Group 2391"
                      transform="translate(7.311 47.012)"
                    >
                      <g id="Group_2390" data-name="Group 2390">
                        <path
                          id="Path_4464"
                          data-name="Path 4464"
                          d="M92.979,320.252v5.489a1.784,1.784,0,0,1-1.788,1.787,1.848,1.848,0,0,1-1.813-1.845v-5.47H85.74v5.47a5.487,5.487,0,0,0,4.808,5.442v.066H113.1a5.456,5.456,0,0,0,5.462-5.453v-5.543Zm21.948,5.486a1.818,1.818,0,0,1-1.824,1.815h-16.8a5.428,5.428,0,0,0,.309-1.812v-1.859l18.31-.041v1.9Z"
                          transform="translate(-85.74 -320.194)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.713"
                  height="36.461"
                  viewBox="0 0 45.713 36.461"
                >
                  <g id="folder" transform="translate(0 -43.138)">
                    <g
                      id="Group_2478"
                      data-name="Group 2478"
                      transform="translate(0 43.138)"
                    >
                      <path
                        id="Path_4509"
                        data-name="Path 4509"
                        d="M38.853,47.848H19.545l.021.035c.014.019.029.049.057.094l-.057-.094a.069.069,0,0,0-.062-.035h-.1c.049,0,.08,0,.1,0h.041l-1.589-2.63a4.52,4.52,0,0,0-3.689-2.081H6.858A6.856,6.856,0,0,0,0,49.994V72.743A6.855,6.855,0,0,0,6.867,79.6H38.846a6.862,6.862,0,0,0,6.867-6.867V54.715A6.858,6.858,0,0,0,38.853,47.848Zm2.285,24.884a2.287,2.287,0,0,1-2.292,2.292H6.867a2.28,2.28,0,0,1-2.292-2.281V49.994a2.28,2.28,0,0,1,2.283-2.281h7.259l-.02-.033c-.014-.019-.03-.049-.058-.1l.058.1a.067.067,0,0,0,.058.033h-.038l1.589,2.63A4.517,4.517,0,0,0,19.4,52.424H38.852a2.283,2.283,0,0,1,2.285,2.292V72.732Z"
                        transform="translate(0 -43.138)"
                        fill="#afafaf"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.144"
                  height="34.635"
                  viewBox="0 0 29.144 34.635"
                >
                  <g id="user1" transform="translate(-32.129)">
                    <g
                      id="Group_2480"
                      data-name="Group 2480"
                      transform="translate(39.334)"
                    >
                      <g id="Group_2479" data-name="Group 2479">
                        <path
                          id="Path_4510"
                          data-name="Path 4510"
                          d="M123.744,0a7.293,7.293,0,0,0-7.292,7.283v3.663a7.292,7.292,0,0,0,14.583,0V7.283A7.286,7.286,0,0,0,123.744,0Zm3.646,10.946a3.646,3.646,0,0,1-7.292,0V7.283a3.646,3.646,0,0,1,7.292,0Z"
                          transform="translate(-116.453)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2482"
                      data-name="Group 2482"
                      transform="translate(32.129 20.052)"
                    >
                      <g id="Group_2481" data-name="Group 2481">
                        <path
                          id="Path_4511"
                          data-name="Path 4511"
                          d="M56.635,237.2l-.253-.1c-.231-.086-.494-.181-.782-.283-.823-.292-1.693-.584-2.574-.857-.666-.206-1.313-.394-1.934-.559a18.086,18.086,0,0,0-4.373-.735,17.981,17.981,0,0,0-4.3.7c-.656.171-1.341.368-2.046.587-.879.272-1.745.563-2.562.854-.286.1-.547.2-.776.282l-.295.111a7.313,7.313,0,0,0-4.607,6.567v5.479h3.646v-5.479a3.715,3.715,0,0,1,2.216-3.145l.312-.117c.214-.08.458-.169.728-.265.772-.275,1.59-.55,2.417-.806.655-.2,1.288-.385,1.888-.542a15.086,15.086,0,0,1,3.384-.584,15.309,15.309,0,0,1,3.437.613c.57.151,1.17.325,1.79.518.831.257,1.655.534,2.434.81.272.1.519.186.736.266l.26.1a3.713,3.713,0,0,1,2.251,3.154v5.479h3.646v-5.479A7.32,7.32,0,0,0,56.635,237.2Z"
                          transform="translate(-32.129 -234.667)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.207"
                  height="7.42"
                  viewBox="0 0 27.207 7.42"
                >
                  <g id="more" transform="translate(0 -170.667)">
                    <g
                      id="Group_2468"
                      data-name="Group 2468"
                      transform="translate(0 170.667)"
                    >
                      <g id="Group_2467" data-name="Group 2467">
                        <path
                          id="Path_4505"
                          data-name="Path 4505"
                          d="M3.71,170.667a3.71,3.71,0,1,0,3.71,3.71A3.71,3.71,0,0,0,3.71,170.667Zm0,4.947a1.237,1.237,0,1,1,1.237-1.237A1.237,1.237,0,0,1,3.71,175.614Z"
                          transform="translate(0 -170.667)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2470"
                      data-name="Group 2470"
                      transform="translate(9.893 170.667)"
                    >
                      <g id="Group_2469" data-name="Group 2469">
                        <path
                          id="Path_4506"
                          data-name="Path 4506"
                          d="M174.377,170.667a3.71,3.71,0,1,0,3.71,3.71A3.71,3.71,0,0,0,174.377,170.667Zm0,4.947a1.237,1.237,0,1,1,1.237-1.237A1.237,1.237,0,0,1,174.377,175.614Z"
                          transform="translate(-170.667 -170.667)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2472"
                      data-name="Group 2472"
                      transform="translate(19.787 170.667)"
                    >
                      <g id="Group_2471" data-name="Group 2471">
                        <path
                          id="Path_4507"
                          data-name="Path 4507"
                          d="M345.043,170.667a3.71,3.71,0,1,0,3.71,3.71A3.71,3.71,0,0,0,345.043,170.667Zm0,4.947a1.237,1.237,0,1,1,1.237-1.237A1.237,1.237,0,0,1,345.043,175.614Z"
                          transform="translate(-341.333 -170.667)"
                          fill="#afafaf"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <Row className="mt-3">
            <Col lg={3}>
              <div className="mt-1 mb-4">
                <div className="searchbox_hat">
                  <div className="bxshat_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33.5"
                      height="33.667"
                      viewBox="0 0 33.5 33.667"
                    >
                      <g id="magnifying-glass" transform="translate(-0.898)">
                        <g
                          id="Group_2490"
                          data-name="Group 2490"
                          transform="translate(22.524 21.681)"
                        >
                          <g id="Group_2489" data-name="Group 2489">
                            <path
                              id="Path_4513"
                              data-name="Path 4513"
                              d="M236.069,232.949a15.981,15.981,0,0,1-2.814,2.8l9.044,9.184,2.829-2.786Z"
                              transform="translate(-233.255 -232.949)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2492"
                          data-name="Group 2492"
                          transform="translate(0.898)"
                        >
                          <g
                            id="Group_2491"
                            data-name="Group 2491"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_4514"
                              data-name="Path 4514"
                              d="M12.811,0A11.913,11.913,0,1,0,24.725,11.913,11.913,11.913,0,0,0,12.811,0Zm0,19.856a7.942,7.942,0,1,1,7.942-7.942A7.942,7.942,0,0,1,12.811,19.856Z"
                              transform="translate(-0.898)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="searchbox_hat select_box_hat">
                  <div className="bxshat_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.414"
                      height="8.121"
                      viewBox="0 0 13.414 8.121"
                    >
                      <path
                        id="Path_4512"
                        data-name="Path 4512"
                        d="M7948-1915.291l6,6,6-6"
                        transform="translate(-7947.293 1915.998)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <Select
                    className="custom_css_select"
                    placeholder="All Recent"
                    options={options1}
                  />
                </div>
              </div>
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
            </Col>
            <Col lg={6}>
              <div className="chat-ul-area">
                <Message dir={`left`} />
                <Message dir={`right`} />
                <Message dir={`left`} />
                <Message dir={`right`} />
              </div>
            </Col>
            <Col lg={3}>
              <div className="profile-bx-whte">
                <div className="d-flex justify-content-center">
                  <div className="pimg_big online_profile_chat">
                    <img src="/assets/PRO-2.png" />
                  </div>
                </div>
                <div className="CHATPROFbox_min230px">
                  <div className="fnt-prof-sde mt-3">Allen Growd</div>
                  <div className="fnt_prof_sde">Website Designer</div>
                  <div className="fny_flag_flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.25"
                        height="19.5"
                        viewBox="0 0 29.25 19.5"
                      >
                        <g id="australia" transform="translate(0 -85.33)">
                          <rect
                            id="Rectangle_617"
                            data-name="Rectangle 617"
                            width="29.25"
                            height="19.5"
                            transform="translate(0 85.33)"
                            fill="#0052b4"
                          />
                          <g
                            id="Group_2410"
                            data-name="Group 2410"
                            transform="translate(0 85.33)"
                          >
                            <path
                              id="Path_4473"
                              data-name="Path 4473"
                              d="M223.39,255.132l.046-.052-.047.052Z"
                              transform="translate(-210.628 -245.383)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4474"
                              data-name="Path 4474"
                              d="M147.239,297.923l.626,1.309,1.414-.327-.633,1.306,1.137.9-1.415.319,0,1.451-1.132-.908-1.132.908,0-1.451-1.415-.319,1.137-.9-.633-1.306,1.414.327Z"
                              transform="translate(-136.43 -285.778)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4475"
                              data-name="Path 4475"
                              d="M367.054,326.387l.3.624.674-.156-.3.623.542.43-.675.152,0,.692-.54-.433-.54.433,0-.692-.675-.152.542-.43-.3-.623.674.156Z"
                              transform="translate(-344.941 -312.616)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4476"
                              data-name="Path 4476"
                              d="M318.43,210.448l.3.624.674-.156-.3.623.542.43-.675.152,0,.692-.54-.433-.54.433,0-.692-.675-.152.542-.43-.3-.623.674.156Z"
                              transform="translate(-299.095 -203.3)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4477"
                              data-name="Path 4477"
                              d="M367.054,144.2l.3.624.674-.156-.3.623.542.43-.675.152,0,.692-.54-.433-.54.433,0-.692-.675-.152.542-.43-.3-.623.674.156Z"
                              transform="translate(-344.941 -140.835)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4478"
                              data-name="Path 4478"
                              d="M409.525,193.886l.3.624.674-.156-.3.623.542.43-.675.152,0,.692-.54-.433-.54.433,0-.692-.675-.152.542-.43-.3-.623.674.156Z"
                              transform="translate(-384.986 -187.685)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4479"
                              data-name="Path 4479"
                              d="M382.758,251.856l.235.723h.76l-.615.447.235.723-.615-.447-.615.447.235-.723-.615-.447h.76Z"
                              transform="translate(-359.954 -242.343)"
                              fill="#f0f0f0"
                            />
                            <path
                              id="Path_4480"
                              data-name="Path 4480"
                              d="M14.625,85.333v1.745l-2.58,1.434h2.58V91.9H11.248l3.376,1.876v1.3H13.1L8.9,92.75v2.332H5.723V92.308L.728,95.083H0V93.337L2.58,91.9H0V88.512H3.376L0,86.636v-1.3H1.524l4.2,2.332V85.333H8.9v2.775L13.9,85.333Z"
                              transform="translate(0 -85.333)"
                              fill="#f0f0f0"
                            />
                          </g>
                          <path
                            id="Path_4481"
                            data-name="Path 4481"
                            d="M8.226,85.33H6.4v3.961H0v1.828H6.4V95.08H8.226V91.119h6.4V89.291h-6.4Z"
                            fill="#d80027"
                          />
                          <path
                            id="Path_4482"
                            data-name="Path 4482"
                            d="M155.826,200.344l5.723,3.179v-.9l-4.1-2.28Z"
                            transform="translate(-146.924 -108.443)"
                            fill="#0052b4"
                          />
                          <path
                            id="Path_4483"
                            data-name="Path 4483"
                            d="M155.826,200.344l5.723,3.179v-.9l-4.1-2.28Z"
                            transform="translate(-146.924 -108.443)"
                            fill="#f0f0f0"
                          />
                          <g
                            id="Group_2411"
                            data-name="Group 2411"
                            transform="translate(0 91.901)"
                          >
                            <path
                              id="Path_4484"
                              data-name="Path 4484"
                              d="M155.826,200.344l5.723,3.179v-.9l-4.1-2.28Z"
                              transform="translate(-146.924 -200.344)"
                              fill="#d80027"
                            />
                            <path
                              id="Path_4485"
                              data-name="Path 4485"
                              d="M4.1,200.344,0,202.624v.9H0l5.723-3.179Z"
                              transform="translate(0 -200.344)"
                              fill="#d80027"
                            />
                          </g>
                          <path
                            id="Path_4486"
                            data-name="Path 4486"
                            d="M5.723,88.509,0,85.33v.9l4.1,2.28Z"
                            fill="#0052b4"
                          />
                          <path
                            id="Path_4487"
                            data-name="Path 4487"
                            d="M5.723,88.509,0,85.33v.9l4.1,2.28Z"
                            fill="#f0f0f0"
                          />
                          <g
                            id="Group_2412"
                            data-name="Group 2412"
                            transform="translate(0 85.33)"
                          >
                            <path
                              id="Path_4488"
                              data-name="Path 4488"
                              d="M5.723,88.509,0,85.33v.9l4.1,2.28Z"
                              transform="translate(0 -85.33)"
                              fill="#d80027"
                            />
                            <path
                              id="Path_4489"
                              data-name="Path 4489"
                              d="M157.444,88.509l4.1-2.28v-.9h0l-5.723,3.179Z"
                              transform="translate(-146.924 -85.33)"
                              fill="#d80027"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>Victoria, Australia</div>
                  </div>
                  <div className="review_profile_tx mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.378"
                      height="23.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.378"
                      height="23.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.378"
                      height="23.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      />
                    </svg>
                    <div>Reviews</div>
                  </div>
                </div>
                <div className="prf_dise_btns">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85.817"
                      height="69.492"
                      viewBox="0 0 85.817 69.492"
                    >
                      <g id="Group_2460" data-name="Group 2460">
                        <path
                          id="Path_4502"
                          data-name="Path 4502"
                          d="M57.229,144.844H51.064L46.74,133.709a8.175,8.175,0,0,0-7.621-5.216H12.269v8.176h26.85l6.349,16.351H57.229a4.088,4.088,0,0,1,4.088,4.088v28.614a4.088,4.088,0,0,1-4.088,4.088H12.263a4.088,4.088,0,0,1-4.088-4.088V157.107c0-2.258-2.044-3.066,4.088-4.088s20.439,0,20.439,0v-8.176H12.263A12.263,12.263,0,0,0,0,157.107v28.614a12.263,12.263,0,0,0,12.263,12.263H57.229a12.263,12.263,0,0,0,12.263-12.263V157.107A12.263,12.263,0,0,0,57.229,144.844Z"
                          transform="translate(0 -128.493)"
                          fill="#d2d2d2"
                        />
                      </g>
                      <g
                        id="Group_2463"
                        data-name="Group 2463"
                        transform="translate(16.352 44.966)"
                      >
                        <g id="Group_2462" data-name="Group 2462">
                          <rect
                            id="Rectangle_636"
                            data-name="Rectangle 636"
                            width="36.79"
                            height="8.176"
                            fill="#d2d2d2"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2465"
                        data-name="Group 2465"
                        transform="translate(61.317 28.615)"
                      >
                        <g id="Group_2464" data-name="Group 2464">
                          <path
                            id="Path_4503"
                            data-name="Path 4503"
                            d="M989.486,581.5a4.088,4.088,0,0,0-5.335-2.226l-18.857,7.755v16.351l18.825,7.93a4.088,4.088,0,0,0,5.675-3.767V583.053A4.088,4.088,0,0,0,989.486,581.5Zm-7.868,19.886-8.149-3.432v-5.446l8.149-3.351Z"
                            transform="translate(-965.293 -578.964)"
                            fill="#d2d2d2"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <button>
                    <svg
                      id="phone-call"
                      xmlns="http://www.w3.org/2000/svg"
                      width="69.516"
                      height="69.492"
                      viewBox="0 0 69.516 69.492"
                    >
                      <g
                        id="Group_2466"
                        data-name="Group 2466"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_4504"
                          data-name="Path 4504"
                          d="M65.878,47.5l-6.994-5.73a12.022,12.022,0,0,0-15.786.777l-.278.278a1.788,1.788,0,0,1-2.52,0L26.789,29.318a1.777,1.777,0,0,1-.038-2.476l.036-.038-.037.037h0l.037-.037a12.285,12.285,0,0,0,.908-15.857L22.022,3.776a9.26,9.26,0,0,0-14.139-.81L6.842,4.009C-.541,11.391-2.28,24.7,3.257,33.543c0,0,3.26,7.56,14.26,18.56s18.56,14.26,18.56,14.26c8.929,5.4,22.147,3.8,29.528-3.578l.992-.992A9.458,9.458,0,0,0,65.878,47.5Zm-4.306,9.265-.992.992c-5.067,5.067-14.693,6.233-20.825,2.523l-.417-.252-.448-.193a30.633,30.633,0,0,1-4.01-2.381A83.858,83.858,0,0,1,22.542,47.078,83.847,83.847,0,0,1,12.163,34.739a30.611,30.611,0,0,1-2.381-4.01l-.215-.5-.287-.459C5.552,23.817,6.754,14.146,11.866,9.034l1.042-1.042a2.181,2.181,0,0,1,3.541.193l5.672,7.171a5.2,5.2,0,0,1-.4,6.461,8.883,8.883,0,0,0,.039,12.526L35.277,47.856a8.9,8.9,0,0,0,12.569,0l.278-.278a4.929,4.929,0,0,1,6.258-.3L61.375,53A2.371,2.371,0,0,1,61.572,56.767Z"
                          transform="translate(-0.001 -0.07)"
                          fill="#d2d2d2"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={3}></Col>
            <Col lg={9} sm={12}>
              <div className="d-flex align-items-center">
                <div className="file_link_cbtn">
                  <button style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>

                    <label className="d-flex align-items-center justify-content-center" htmlFor="attact_file_inp">
                      <input
                        type="file"
                        id="attact_file_inp"
                        style={{ visibility: "hidden", position: 'absolute', width: '1px', height: '1px' }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44.801"
                        height="64.57"
                        viewBox="0 0 44.801 64.57"
                      >
                        <g id="attachment" transform="translate(-65.607)">
                          <g
                            id="Group_2505"
                            data-name="Group 2505"
                            transform="translate(65.607)"
                          >
                            <path
                              id="Path_4515"
                              data-name="Path 4515"
                              d="M103.98,6.522V42.178a15.972,15.972,0,1,1-31.944-.021V16.082a9.578,9.578,0,1,1,19.156-.014V41.962a3.211,3.211,0,0,1-6.423.007V12.95H78.341V41.968a9.64,9.64,0,0,0,19.28-.007V16.068A16.083,16.083,0,0,0,81.689,0h-.15A16.069,16.069,0,0,0,65.607,16.082V42.157a22.4,22.4,0,1,0,44.8.02V6.522Z"
                              transform="translate(-65.607)"
                              fill="#afafaf"
                            />
                          </g>
                        </g>
                      </svg>
                    </label>
                  </button>
                </div>
                <div className="fl_input_chat">
                  <input type="text" />
                  <button>SEND</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {Popup}
    </>
  );
};
export default Screen;
