import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Title from "../../components/title";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import Switch from "react-switch";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as Titlee,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {faker} from "@faker-js/faker";

const Profile = () => {
  return (
    <>
      <div className="card_pcwuguoequ d-flex justify-content-between">
        <div className="d-flex">
          <div className="profile_crign">
            <img src="/assets/PRO-2.png" alt="" />
          </div>
          <div className="pcrign_name">
            <div className="rign_nem">Lauren Palmer</div>
            <div className="rign_mali">laurenpalmera@gmx.com</div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <svg
            id="chat"
            xmlns="http://www.w3.org/2000/svg"
            width="35.789"
            height="35.839"
            viewBox="0 0 35.789 35.839"
          >
            <g id="Group_2437" data-name="Group 2437" transform="translate(0)">
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
                  fill="#adbbc7"
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
                  fill="#adbbc7"
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
                  fill="#adbbc7"
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
                  fill="#adbbc7"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
const ProfilePayment = () => {
  return (
    <>
      <div className="card_pcwuguoequ d-flex justify-content-between">
        <div className="d-flex">
          <div className="profile_crign">
            <img src="/assets/PRO-2.png" alt="" />
          </div>
          <div className="pcrign_name">
            <div className="rign_nem">Lauren Palmer</div>
            <div className="rign_mali">laurenpalmera@gmx.com</div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <div className="efty_smtxt">850</div>
          <div className="eedy_smtxt">AED</div>
        </div>
      </div>
    </>
  );
};
const RecomendedProject = () => {
  return (
    <>
      <div className="card_pcwuguoequ d-flex justify-content-between no-border">
        <div className="d-flex">
          <div className="profile_crign rcomend_proj_pfile"></div>
          <div className="pcrign_name wwbkit-avaol">
            <div className="rign_nem font_recomproject">
              Stay on top of your messages
            </div>
            <div className="rign_mali font_rec_ldesc">
              Looking for a talented UI/UX designer to create all the branding
              material for my new startup.
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="efty_smtxt tblew_bbltr">90%</div>
          <div className="eedy_smtxt progress_w10px"></div>
        </div>
      </div>
    </>
  );
};
const Pdata = () => {
  return (
    <>
      <div className="d-flex box_bbl_data">
        <div className="w-20 tr_bblhead tblew_bbltr">IBM</div>
        <div className="w-20 tr_bblhead">Design</div>
        <div className="w-20 tr_bblhead">AED 300.00</div>
        <div className="w-20 tr_bblhead">Pending</div>
        <div className="w-20 tr_bblhead">Pending</div>
      </div>
    </>
  );
};
const Screen = () => {
  const [active, Setactive] = useState(
    window.location.pathname.replace("/", "")
  );
  Title(" | Dashboard");
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const options1 = [
    {
      name: "Month",
      label: "Month",
    },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Titlee,
    Tooltip,
    Legend
  );
  const options = {
    responsive: false,
    scales: {
    },
    plugins: {
      legend: {
        position: "top",
        display:false,
        maxHeight:210,
        fullSize:true,
        labels:{
          boxWidth:0,
        }
      },
      title: {},
    },
    layout:{
      autoPadding:true,
    },
    elements:{
      bar:{
        backgroundColor:'#000'
      },
      point:{
        borderWidth:0
      },
      line:{
        borderWidth:0
      },
      arc:{
        borderWidth:1,
        borderColor:'#000'
      }
    }
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
  // add +10 on each data to view graph line accurate
  const addition = 9; 
  const data = {
    labels,
    datasets: [
      {
        label: "Projects",
        data: [(20+addition ),(15+addition),(60+addition),(80+addition),(40+addition)],
        backgroundColor: "#0777FD",
        borderWidth:17,
        borderColor:'#fff0'
      },
    ],
  };
  return (
    <div className="min_pad_m mt-min180px">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="side_nav nav_box_mone">
              <div className={`nav_box active_s_nav`}>
                <div className="s_nav_icon">
                  <svg
                    id="settings2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.979"
                    height="35"
                    viewBox="0 0 34.979 35"
                  >
                    <g
                      id="Group_2512"
                      data-name="Group 2512"
                      transform="translate(3.179)"
                    >
                      <g id="Group_2511" data-name="Group 2511">
                        <rect
                          id="Rectangle_672"
                          data-name="Rectangle 672"
                          width="3.179"
                          height="9.537"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2514"
                      data-name="Group 2514"
                      transform="translate(3.179 12.706)"
                    >
                      <g id="Group_2513" data-name="Group 2513">
                        <rect
                          id="Rectangle_673"
                          data-name="Rectangle 673"
                          width="3.179"
                          height="22.294"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2516"
                      data-name="Group 2516"
                      transform="translate(0 6.358)"
                    >
                      <g
                        id="Group_2515"
                        data-name="Group 2515"
                        transform="translate(0)"
                      >
                        <rect
                          id="Rectangle_674"
                          data-name="Rectangle 674"
                          width="9.547"
                          height="3.179"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2518"
                      data-name="Group 2518"
                      transform="translate(15.896)"
                    >
                      <g id="Group_2517" data-name="Group 2517">
                        <rect
                          id="Rectangle_675"
                          data-name="Rectangle 675"
                          width="3.179"
                          height="25.433"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2520"
                      data-name="Group 2520"
                      transform="translate(15.896 28.612)"
                    >
                      <g id="Group_2519" data-name="Group 2519">
                        <rect
                          id="Rectangle_676"
                          data-name="Rectangle 676"
                          width="3.179"
                          height="6.388"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2522"
                      data-name="Group 2522"
                      transform="translate(28.612)"
                    >
                      <g id="Group_2521" data-name="Group 2521">
                        <rect
                          id="Rectangle_677"
                          data-name="Rectangle 677"
                          width="3.179"
                          height="15.925"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2524"
                      data-name="Group 2524"
                      transform="translate(28.612 19.075)"
                    >
                      <g id="Group_2523" data-name="Group 2523">
                        <rect
                          id="Rectangle_678"
                          data-name="Rectangle 678"
                          width="3.179"
                          height="15.925"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2526"
                      data-name="Group 2526"
                      transform="translate(12.716 22.254)"
                    >
                      <g id="Group_2525" data-name="Group 2525">
                        <rect
                          id="Rectangle_679"
                          data-name="Rectangle 679"
                          width="9.547"
                          height="3.179"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2528"
                      data-name="Group 2528"
                      transform="translate(25.433 12.716)"
                    >
                      <g id="Group_2527" data-name="Group 2527">
                        <rect
                          id="Rectangle_680"
                          data-name="Rectangle 680"
                          width="9.547"
                          height="3.179"
                          fill="#6d2ef1"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="s_nav_title">
                  <Link to="/freelancer/profile">Dashboard</Link>
                </div>
              </div>
              <div className={`nav_box`}>
                <div className="s_nav_icon">
                  <svg
                    id="folder"
                    xmlns="http://www.w3.org/2000/svg"
                    width="37.141"
                    height="29.624"
                    viewBox="0 0 37.141 29.624"
                  >
                    <g id="Group_2478" data-name="Group 2478">
                      <path
                        id="Path_4509"
                        data-name="Path 4509"
                        d="M31.567,46.965H15.88l.017.028c.011.016.024.04.046.076l-.046-.076a.056.056,0,0,0-.051-.028h-.083c.04,0,.065,0,.083,0h.033l-1.291-2.137a3.672,3.672,0,0,0-3-1.691H5.572A5.57,5.57,0,0,0,0,48.708V67.192a5.57,5.57,0,0,0,5.579,5.57H31.562a5.575,5.575,0,0,0,5.579-5.579V52.544A5.572,5.572,0,0,0,31.567,46.965Zm1.857,20.218a1.858,1.858,0,0,1-1.862,1.862H5.579a1.852,1.852,0,0,1-1.862-1.853V48.708a1.853,1.853,0,0,1,1.855-1.853h5.9l-.016-.027c-.011-.016-.024-.04-.047-.078l.047.078a.055.055,0,0,0,.047.027H11.47l1.291,2.137a3.67,3.67,0,0,0,3,1.691h15.8a1.855,1.855,0,0,1,1.857,1.862V67.183Z"
                        transform="translate(0 -43.138)"
                        fill="#bec7cf"
                      />
                    </g>
                  </svg>
                </div>
                <div className="s_nav_title">
                  <Link to="/freelancer/contact-info">Projects</Link>
                </div>
              </div>

              <div className={`nav_box`}>
                <div className="s_nav_icon">
                  <svg
                    id="suitcase"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.495"
                    height="31.333"
                    viewBox="0 0 34.495 31.333"
                  >
                    <g
                      id="Group_2530"
                      data-name="Group 2530"
                      transform="translate(0 6.246)"
                    >
                      <g
                        id="Group_2529"
                        data-name="Group 2529"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_4516"
                          data-name="Path 4516"
                          d="M31.358,106.492H3.137A3.139,3.139,0,0,0,0,109.631V128.44a3.136,3.136,0,0,0,3.137,3.139h28.22a3.139,3.139,0,0,0,3.137-3.139V109.631A3.136,3.136,0,0,0,31.358,106.492Zm0,21.951q-28.222,0-28.222,0,0-18.812,0-18.812,28.222,0,28.222,0Q31.357,128.443,31.358,128.443Z"
                          transform="translate(0 -106.492)"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2532"
                      data-name="Group 2532"
                      transform="translate(6.292 9.382)"
                    >
                      <g
                        id="Group_2531"
                        data-name="Group 2531"
                        transform="translate(0 0)"
                      >
                        <rect
                          id="Rectangle_686"
                          data-name="Rectangle 686"
                          width="3.136"
                          height="18.815"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2534"
                      data-name="Group 2534"
                      transform="translate(25.087 9.382)"
                    >
                      <g
                        id="Group_2533"
                        data-name="Group 2533"
                        transform="translate(0 0)"
                      >
                        <rect
                          id="Rectangle_687"
                          data-name="Rectangle 687"
                          width="3.136"
                          height="18.815"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2536"
                      data-name="Group 2536"
                      transform="translate(6.272 12.518)"
                    >
                      <g
                        id="Group_2535"
                        data-name="Group 2535"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_4517"
                          data-name="Path 4517"
                          d="M85.333,191.826v9.408H97.877v-9.408Zm9.408,6.272H88.469v-3.136h6.272Z"
                          transform="translate(-85.333 -191.826)"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2538"
                      data-name="Group 2538"
                      transform="translate(9.412)"
                    >
                      <g
                        id="Group_2537"
                        data-name="Group 2537"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_4518"
                          data-name="Path 4518"
                          d="M139.9,21.508h-7.932a3.913,3.913,0,0,0-3.912,3.907v2.339H131.2V25.415a.777.777,0,0,1,.776-.771H139.9a.775.775,0,0,1,.776.771v2.339h3.136V25.415A3.911,3.911,0,0,0,139.9,21.508Z"
                          transform="translate(-128.061 -21.508)"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="s_nav_title">
                  <Link to="/freelancer/billing-payment">Clients</Link>
                </div>
              </div>
              <div className={`nav_box`}>
                <div className="s_nav_icon">
                  <svg
                    id="wallet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.788"
                    height="30.813"
                    viewBox="0 0 30.788 30.813"
                  >
                    <g id="Group_2397" data-name="Group 2397">
                      <g id="Group_2396" data-name="Group 2396">
                        <path
                          id="Path_4467"
                          data-name="Path 4467"
                          d="M5.288,6.849a1.713,1.713,0,1,1,.005-3.426h22.2V0H5.293A5.132,5.132,0,0,0,.152,5.136c0,.082,0,.163,0,.244V25.625a5.14,5.14,0,0,0,5.131,5.135l20.517.052a5.12,5.12,0,0,0,5.14-5.119V6.849Zm22.23,18.845a1.7,1.7,0,0,1-1.709,1.7L5.292,27.338a1.717,1.717,0,0,1-1.717-1.713V9.978a5.121,5.121,0,0,0,1.713.293h22.23Z"
                          transform="translate(-0.152)"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_2399"
                      data-name="Group 2399"
                      transform="translate(18.781 13.737)"
                    >
                      <g id="Group_2398" data-name="Group 2398">
                        <path
                          id="Path_4468"
                          data-name="Path 4468"
                          d="M239.424,174.67h5.309v-3.423h-5.309a5.138,5.138,0,1,0,0,10.276h5.309V178.1h-5.309a1.715,1.715,0,1,1,0-3.431Z"
                          transform="translate(-234.285 -171.247)"
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="s_nav_title">
                  <Link to="/freelancer/billing-payment">Payments</Link>
                </div>
              </div>
              <div className={`nav_box`}>
                <div className="s_nav_icon">
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
                          fill="#bec7cf"
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
                          fill="#bec7cf"
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
                          fill="#bec7cf"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="s_nav_title">
                  <Link to="/freelancer/billing-payment">Settings</Link>
                </div>
              </div>
            </div>
            <div>
              <div className="des_heading_dboard">Description</div>
              <div className="des_para_dboadr">
                We are a group of Print Media Experts with over 9 years of
                involvement. We can offer pixel-ideal plans for your
                Brand/Products. We do all sort of illustrations related work.
                Brand Logo, Product Labels, Product Packaging, Stickers,
                Business Cards, Brochures, Flyer, Web Banners and Ads, E-Books
                Covers, Flex/Hoarding, and App Icons. On the off chance that you
                need HIGH-QUALITY work with a FAST TURNAROUND, reach me. 100% .
              </div>
            </div>
            <div className="vmode_slide mt-5 d-flex justify-content-between">
              <div className="vmode_heading">Vacation Mode</div>
              <div className="d-flex justify-content-center align-items-center">
                <Switch
                  boxShadow={false}
                  activeBoxShadow={false}
                  offColor={`#EEEEEE`}
                  onColor={`#EEEEEE`}
                  onHandleColor={`#006DF5`}
                  offHandleColor={`#E2E2E2`}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
              </div>
            </div>
            <div className="vmode_slide border-top-none d-flex justify-content-between">
              <div className="vmode_heading">Earning Summary</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.707"
                  height="7.061"
                  viewBox="0 0 12.707 7.061"
                >
                  <path
                    id="Path_4521"
                    data-name="Path 4521"
                    d="M7948-1915.291l6,6,6-6"
                    transform="translate(-7947.646 1915.645)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </svg>
              </div>
            </div>
            <div className="vmode_slide border-top-none">
              <div className="vmode_heading">Hiring Rates</div>
              <div className="mt-3">
                <div className="d-flex justify-content-between hrate_li">
                  <div>Designing</div>
                  <div>30.00</div>
                </div>
                <div className="d-flex justify-content-between hrate_li">
                  <div>Development</div>
                  <div>45.34</div>
                </div>
                <div className="d-flex justify-content-between hrate_li">
                  <div>Content writting</div>
                  <div>34.34</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="dboard_bbox">
              <div className="dbaors_h1">
                Find verified freelance content writers and <br /> translators
                for your business today
              </div>
              <div className="dbaors_btn">
                <button>Find new Project</button>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between">
              <div>
                <div className="welcome_ax_dboard">Welcome to Alex K!</div>
                <div className="wdesc_ax_dboard mt-3">
                  Hope you're having a grate time freelancing. <br /> Your DBX
                  project is still pending. Hope you remember.
                </div>
              </div>
              <div className="minwidth-200px">
                <div className="hourly_amout_node flex-wrap">
                  <div className="wallet_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="88.455"
                      height="88.525"
                      viewBox="0 0 88.455 88.525"
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
                              d="M14.907,19.677a4.922,4.922,0,1,1,.015-9.843H78.694V0H14.921A14.745,14.745,0,0,0,.152,14.755c0,.235.006.469,0,.7V73.622A14.766,14.766,0,0,0,14.894,88.376l58.946.149A14.71,14.71,0,0,0,88.607,73.818V19.677ZM78.774,73.818a4.877,4.877,0,0,1-4.909,4.874l-58.946-.149a4.933,4.933,0,0,1-4.934-4.921V28.668a14.714,14.714,0,0,0,4.922.842H78.774Z"
                              transform="translate(-0.152)"
                              fill="#eee"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2399"
                          data-name="Group 2399"
                          transform="translate(54.111 39.466)"
                        >
                          <g id="Group_2398" data-name="Group 2398">
                            <path
                              id="Path_4468"
                              data-name="Path 4468"
                              d="M249.05,181.08H264.3v-9.833H249.05a14.762,14.762,0,1,0,0,29.523H264.3v-9.833H249.051a4.928,4.928,0,1,1,0-9.857Z"
                              transform="translate(-234.285 -171.247)"
                              fill="#eee"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="hourly_am">
                    <span>Total Earnings</span>
                    <h1 className="line-hei-1">
                      640<sup>00</sup>
                    </h1>
                  </div>
                </div>
                <div className="pd_flex flex-wrap hrly_dboard_ntxt">
                  <div className="flex_pt no-border pt-3">
                    <div className="pt_title">Total projects</div>
                    <div className="pt_num pt_n1 color-red font-weight-600">
                      109
                    </div>
                  </div>
                  <div className="flex_pt no-border pt-3">
                    <div className="pt_title">Rank</div>
                    <div className="pt_num pt_n2 font-weight-600 color-blew">
                      609
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Row>
              <Col lg={4} md={6}>
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="dcard_htext">Total Projects</div>
                    <div className="dcard_htext">105</div>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="dcard_lghthead">
                      <span>20</span> projects in this month
                    </div>
                    <div className="ps-relative select_drd_mth">
                      <Select
                        className="custom_css_select"
                        placeholder="Month"
                        options={options1}
                      />
                      <div className="pls_s_na_input">+</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center" style={{height:'210px'}}>
                    <Bar options={options} height={200} data={data} />
                  </div>
                  <div></div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="dcard_htext">Clients</div>
                    <div className="dcard_ltxt">
                      <Link to="/">View All</Link>
                    </div>
                  </div>
                  <Profile />
                  <Profile />
                  <Profile />
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="dcard_htext">Recent Payments</div>
                    <div className="dcard_ltxt cpink_ltxt">
                      <Link to="/">View All</Link>
                    </div>
                  </div>
                  <ProfilePayment />
                  <ProfilePayment />
                  <ProfilePayment />
                </div>
              </Col>
            </Row>
            <div className="d-flex box_ylow_dboard flex-wrap mt-5 pt-3 mb-5">
              <div className="bylow_iconbox">
                <svg
                  id="flag"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.5"
                  height="59.331"
                  viewBox="0 0 50.5 59.331"
                >
                  <g id="Group_2566" data-name="Group 2566">
                    <g id="Group_2565" data-name="Group 2565">
                      <rect
                        id="Rectangle_716"
                        data-name="Rectangle 716"
                        width="5.951"
                        height="59.331"
                        fill="#ffd500"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_2568"
                    data-name="Group 2568"
                    transform="translate(3.74 5.951)"
                  >
                    <g id="Group_2567" data-name="Group 2567">
                      <path
                        id="Path_4519"
                        data-name="Path 4519"
                        d="M58.465,42.667v5.951H78.586V66.472H66.628v5.951H84.537V42.667Z"
                        transform="translate(-58.465 -42.667)"
                        fill="#ffd500"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_2570"
                    data-name="Group 2570"
                    transform="translate(23.806 11.903)"
                  >
                    <g id="Group_2569" data-name="Group 2569">
                      <path
                        id="Path_4520"
                        data-name="Path 4520"
                        d="M229.016,85.333H202.322V115.08h26.694L217.9,100.206Zm-11.876,23.8h-8.867V91.284h8.867l-6.667,8.922Z"
                        transform="translate(-202.322 -85.333)"
                        fill="#ffd500"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <div className="blow_hoen">
                  Your availability is set to vacation mode
                </div>
                <div className="bwos_heon">
                  Your profile ill not be visible to clients on the platform
                  until you switch off the vacation mode.
                </div>
              </div>
            </div>
            <Row>
              <Col lg={8}>
                <div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="dcard_htext">Projects</div>
                    <div className="dcard_ltxt">
                      <Link to="/">Manage Projects</Link>
                    </div>
                  </div>
                  <div className="d-flex bbl_head_gay">
                    <div className="w-20 tr_bblhead">Project Name</div>
                    <div className="w-20 tr_bblhead">Work Assigned</div>
                    <div className="w-20 tr_bblhead">Project Cost</div>
                    <div className="w-20 tr_bblhead">Status</div>
                    <div className="w-20 tr_bblhead">Payment</div>
                  </div>
                  <Pdata />
                  <Pdata />
                  <Pdata />
                  <Pdata />
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="dcard_htext">Recommended</div>
                    <div className="dcard_ltxt">
                      <Link to="/">View All</Link>
                    </div>
                  </div>
                  <div className="d-flex mt-4 mb-3">
                    <div className="profile_crign">
                      <img src="/assets/PRO-2.png" alt="" />
                    </div>
                    <div className="pcrign_name">
                      <div className="rign_nem">Lauren Palmer</div>
                      <div className="rign_mali">laurenpalmera@gmx.com</div>
                    </div>
                  </div>
                  <div className="recome_blextxt">
                    Need a designer to from branding essentials for my business.
                  </div>
                  <div className="recome_ltctx">
                    Looking for a talented UI/UX designer to create all the
                    branding material for my new startup.
                  </div>
                  <div className="d-flex justify-content-between recomen_bgraybox align-items-center mt-4">
                    <div className="fname_recm_txe">
                      AED 345 <span>/ month</span>
                    </div>
                    <div>
                      <button>FULL TIME</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <div className="mt-3">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="dcard_htext">Recommended Project</div>
                  </div>
                  <RecomendedProject />
                  <RecomendedProject />
                  <RecomendedProject />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Screen;
