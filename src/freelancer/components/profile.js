import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import heart from "../../icons/heart.svg";

function Listaward() {
  const card = [1, 2, 3, 4];
  return (
    <>
      {card.map((person, index) => (
        <div className="col-12" key={index}>
          <div className="award_box">
            <div className="awrd_flex">
              <div className="award_img">
                <img src="/assets/awad.jpg" alt="" />
              </div>
              <div className="award_con">
                <div>
                  <div className="awrd_name">Best Game Designer</div>
                  <div className="awrd_date">October 5, 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function ListService() {
  const card = [
    {
      image: "../../../assets/Magdiel-Lopez-3.jpg",
    },
    {
      image: "../../../assets/Magdiel-Lopez-6.jpg",
    },
    {
      image: "../../../assets/Magdiel-Lopez-5.jpg",
    },
  ];
  return (
    <>
      {card.map((person, index) => (
        <Col md={4} xs="0" key={index}>
          <div className="servi_box">
            <div className="heat_lef">
              {" "}
              <img src={heart} alt="" />
            </div>
            <div className="ser_hei">
              <img src={person.image} alt="" />
            </div>
            <div className="flex_f_pro">
              <div className="mar_min">
                <div className="profile_box">
                  <div className="user_profile_bg sm_upb">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt=""
                    />
                  </div>
                  <div className="profile_thumb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="star_paddin">
                <div className="flex_stars">
                  <div className="review_star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="review_star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="review_star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill fill-none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="review_par">
                    <p>Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="f_para">
              I will deal with your item Description and assets
            </div>
            <div className="priec_b">
              <div className="st_fro">Starting From</div>
              <div className="st_pri">$40.00</div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
}
const UnifyFreelancer = () => {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="border_bx_sec">
              <div className="flex_profile_frel">
                <div className="profile_box">
                  <div className="user_profile_bg">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt=""
                    />
                  </div>
                  <div className="profile_thumb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                  </div>
                </div>
                <div className="han_oad">
                  <div className="freelancer_name">Hannah Finn</div>
                  <div className="freelancer_work">Website Designer</div>
                  <div className="freelance_map">Victoria, Australia</div>
                  <div className="flex_stars">
                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-none"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_par">
                      <p>Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_pf_btn">
                <button>See Public View</button>
                <button>Profile Setting</button>
              </div>
              <div className="hourly_amout_node flex-wrap">
                <div className="wallet_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </div>
                <div className="hourly_am">
                  <h1>$140.00</h1>
                  <span>(Per Hourly)</span>
                </div>
              </div>
              <div className="myskill_prof_node">
                <div className="myskill_hdingn">
                  My Skills
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.715"
                      viewBox="0 0 15.709 15.715"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.003)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
                <div className="myskill_hdingn">Mobile App Development</div>
                <div className="myskill_hdingn">Full Stack Development</div>
                <div className="myskill_hdingn">All Work</div>
              </div>
              <div className="profile_detail">
                <div className="pd_flex flex-wrap">
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Earning
                    </div>
                    <div className="pt_num pt_n1">$100K</div>
                  </div>
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Jobs
                    </div>
                    <div className="pt_num pt_n2">18</div>
                  </div>
                </div>
                <div className="pd_flex flex-wrap">
                  <div className="flex_pt no-border">
                    <div className="pt_title">
                      Total <br />
                      Hours
                    </div>
                    <div className="pt_num pt_n3">2065</div>
                  </div>
                  <div className="flex_pt no-border">
                    <div className="pt_title">
                      Pending <br />
                      Projects
                    </div>
                    <div className="pt_num pt_n4">05</div>
                  </div>
                </div>
              </div>
              <div className="my_skill_sec">
                <div className="my_skil_head">
                  <h3>My Skills</h3>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Graphich Designer</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Front End Developer</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Video Editor</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
              </div>
              <div className="myskill_prof_node">
                <div className="myskill_hdingn">
                  Video introduction
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
                <div className="myskill_hdingn">
                  Hours per week
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.714"
                      viewBox="0 0 15.709 15.714"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.002)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
                <div className="myskill_hdingn ms_hdsmall">
                  As Needed - Open to Offers
                </div>
                <div className="myskill_hdingn ms_hdsmall">
                  3+ days response time
                </div>
                <div className="myskill_hdingn">
                  Languages
                  <div className="d-flex justify-content-start">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.709"
                        height="15.714"
                        viewBox="0 0 15.709 15.714"
                      >
                        <path
                          id="_8665767_pen_icon"
                          data-name="8665767_pen_icon"
                          d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                          transform="translate(-0.047 0.002)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="myskill_hdingn">Verification</div>
                <div className="myskill_hdingn ms_hdsmall">
                  ID: Verified{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgverifie"
                    width="17.079"
                    height="17.869"
                    viewBox="0 0 17.079 17.869"
                  >
                    <path
                      id="Path_4727"
                      data-name="Path 4727"
                      d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                      transform="translate(-0.54 -0.02)"
                      fill="#6d2ef1"
                    />
                  </svg>
                </div>
                <div className="myskill_hdingn ms_hdsmall">Hannah Finn</div>
                <div className="myskill_hdingn">
                  Education
                  <div className="d-flex justify-content-start">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.709"
                        height="15.714"
                        viewBox="0 0 15.709 15.714"
                      >
                        <path
                          id="_8665767_pen_icon"
                          data-name="8665767_pen_icon"
                          d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                          transform="translate(-0.047 0.002)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="myskill_hdingn ms_hdsmall">
                  Tallinna University Bachelor or Engineering (BEng), Computer
                  science 2016-2017
                  <div className="d-flex justify-content-start">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.709"
                        height="15.714"
                        viewBox="0 0 15.709 15.714"
                      >
                        <path
                          id="_8665767_pen_icon"
                          data-name="8665767_pen_icon"
                          d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                          transform="translate(-0.047 0.002)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="award_sec">
                <div className="my_skil_head">
                  <h3>Diplomas, certificates</h3>
                </div>
                <div className="row">{Listaward()}</div>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Portfolio (2)</div>
                <div className="myskill_hdingn">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="imgbox_bccp">
                    <img src="/assets/123.png" alt="" />
                  </div>
                  <div className="imgbox_bccp">
                    <img src="/assets/1234.png" alt="" />
                  </div>
                  <div className="imgbox_bccp">
                    <img src="/assets/12345.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Skills</div>
                <div className="myskill_hdingn">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex flex-wrap">
                  <div className="skill_bxr_gry">Mobile App Design</div>
                  <div className="skill_bxr_gry">Website Design</div>
                  <div className="skill_bxr_gry">Logo Design</div>
                  <div className="skill_bxr_gry">Web development</div>
                  <div className="skill_bxr_gry">Banner Design</div>
                  <div className="skill_bxr_gry">App Development</div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Skills</div>
                <div className="myskill_hdingn">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex flex-wrap">
                  <div className="skill_bxr_gry">Mobile App Design</div>
                  <div className="skill_bxr_gry">Website Design</div>
                  <div className="skill_bxr_gry">Logo Design</div>
                  <div className="skill_bxr_gry">Web development</div>
                  <div className="skill_bxr_gry">Banner Design</div>
                  <div className="skill_bxr_gry">App Development</div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck">
              <div className="d-flex justify-content-end myskill_hdingn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <path
                      id="_134224_add_plus_new_icon_2_"
                      data-name="134224_add_plus_new_icon (2)"
                      d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                      transform="translate(-2 -2)"
                      fill="#6d2ef1"
                    />
                  </svg>
                </button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Testimonials</div>
                <div className="bpck_para">Endorsements from past clients</div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="img_min_bpck">
                  <img src="/assets/consumer.png" alt="" />
                </div>
                <div className="bpck_sm_txt_a mt-4">
                  Showcase your skills with non-Unify client testimonials
                </div>
                <div className="bpck_sm_txt_a">
                  <a href="">Request a testimonial</a>
                </div>
              </div>
            </div>
            <div className="box-profile-bck">
              <div className="d-flex justify-content-end myskill_hdingn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <path
                      id="_134224_add_plus_new_icon_2_"
                      data-name="134224_add_plus_new_icon (2)"
                      d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                      transform="translate(-2 -2)"
                      fill="#6d2ef1"
                    />
                  </svg>
                </button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Certifications</div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="img_min_bpck">
                  <img src="/assets/Graduate.png" alt="" />
                </div>
                <div className="bpck_sm_txt_a mt-4">
                  Listing your certifications can help prove your specific
                  knowledge or abilities. (+10%)
                  <br />
                  You can add them manually
                </div>
                <div className="bpck_sm_txt_a">
                  <a href="">Add manually</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UnifyFreelancer;
