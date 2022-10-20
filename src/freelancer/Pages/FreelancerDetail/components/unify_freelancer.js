import * as React from "react";
import Title from "../../../../components/title";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import heart from '../../../../icons/heart.svg';


function Listaward() {
  const card = [1, 2, 3, 4];
  return (
      <>
          {card.map((person, index) => (
              <div className='col-12' key={index}>
                  <div className='award_box'>
                      <div className="awrd_flex">
                          <div className='award_img'>
                              <img src="/assets/awad.jpg" alt="" />
                          </div>
                          <div className='award_con'>
                              <div>
                                  <div className='awrd_name'>Best Game Designer</div>
                                  <div className='awrd_date'>October 5, 2020</div>
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
          image:"../../../assets/Magdiel-Lopez-3.jpg"
      },
      {
          image:"../../../assets/Magdiel-Lopez-6.jpg"
      },
      {
          image:"../../../assets/Magdiel-Lopez-5.jpg"
      }
  ];
  return (
      <>
          {card.map((person, index) => (
              <Col md={4} xs="0" key={index}>
                  <div className='servi_box'>
                      <div className="heat_lef"> <img src={heart} alt="" /></div>
                      <div className='ser_hei'><img src={person.image} alt="" /></div>
                      <div className='flex_f_pro'>
                          <div className='mar_min'>
                              <div className="profile_box">
                                  <div className='user_profile_bg sm_upb'>
                                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="" />
                                  </div>
                                  <div className='profile_thumb'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                      </svg>
                                  </div>
                              </div>
                          </div>
                          <div className="star_paddin">
                              <div className='flex_stars'>
                                  <div className='review_star'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                      </svg>
                                  </div>
                                  <div className='review_star'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                      </svg>
                                  </div>
                                  <div className='review_star'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill fill-none" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                      </svg>
                                  </div>
                                  <div className='review_par'><p>Reviews</p></div>
                              </div>
                          </div>
                      </div>
                      <div className='f_para'>I will deal with your item Description and assets</div>
                      <div className='priec_b'>
                          <div className='st_fro'>Starting From</div>
                          <div className='st_pri'>$40.00</div>
                      </div>
                  </div>
              </Col>
          ))}
      </>
  );
}
const Screen = () => {
  Title(" | Profile");

  return (
    <>
      <div className="mt-5 mb-5">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="border_bx_sec">
                <div className="heat_lef">
                  <img src={heart} alt="" />
                </div>
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
                <div className="hire_now_node">
                  <button>Hire Now</button>
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

                <div className="profile_detail">
                  <div className="pd_flex flex-wrap">
                    <div className="flex_pt">
                      <div className="pt_title">
                        Ongoing <br />
                        Projects
                      </div>
                      <div className="pt_num pt_n1">206</div>
                    </div>
                    <div className="flex_pt">
                      <div className="pt_title">
                        Services in <br />
                        Queue
                      </div>
                      <div className="pt_num pt_n2">08</div>
                    </div>
                  </div>
                  <div className="pd_flex flex-wrap">
                    <div className="flex_pt no-border">
                      <div className="pt_title">
                        Completed <br />
                        Projects
                      </div>
                      <div className="pt_num pt_n3">196</div>
                    </div>
                    <div className="flex_pt no-border">
                      <div className="pt_title">
                        Completed <br />
                        Services
                      </div>
                      <div className="pt_num pt_n4">120</div>
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
                <div className="award_sec">
                  <div className="my_skil_head">
                    <h3>Awards and Certificates</h3>
                  </div>
                  <div className="row">{Listaward()}</div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="border_bx_sec">
                <div className="about_head_ma uf_n_abh">
                  <h1>About Me</h1>
                </div>
                <div className="about_et">
                  <div className="flex_ab_et no_juscenter_inmob">
                    <div className="ab_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-badge"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                      </svg>
                    </div>
                    <div className="r_ri">
                      <div className="ab_et_ne">Gender</div>
                      <div className="ab_et_val">Male</div>
                    </div>
                  </div>
                  <div className="flex_ab_et no_juscenter_inmob">
                    <div className="ab_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-workspace"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                      </svg>
                    </div>
                    <div className="r_ri">
                      <div className="ab_et_ne">Freelancer Type</div>
                      <div className="ab_et_val">Individual</div>
                    </div>
                  </div>
                  <div className="flex_ab_et no_juscenter_inmob">
                    <div className="ab_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-gem"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                      </svg>
                    </div>
                    <div className="r_ri">
                      <div className="ab_et_ne">English Level</div>
                      <div className="ab_et_val">Professional</div>
                    </div>
                  </div>
                  <div className="flex_ab_et no_juscenter_inmob">
                    <div className="ab_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>
                    </div>
                    <div className="r_ri">
                      <div className="ab_et_ne">Language</div>
                      <div className="ab_et_val">English</div>
                    </div>
                  </div>
                </div>
                <div className="featured_serv hid_f_serv">
                  <div className="my_skil_head uf_n_msh">
                    <h3>Featured Services</h3>
                  </div>
                  <Row>{ListService()}</Row>
                </div>

                <div className="featured_serv">
                  <div className="my_skil_head">
                    <h3>Description</h3>
                  </div>
                  <div className="description_my_p uf_dmpn">
                    We are a group of Print Media Experts with over 9 years of
                    involvement. We can offer pixel-ideal plans for your
                    Brand/Products. We do all sort of illustrations related
                    work. Brand Logo, Product Labels, Product Packaging,
                    Stickers, Business Cards, Brochures, Flyer, Web Banners and
                    Ads, E-Books Covers, Flex/Hoarding, and App Icons. On the
                    off chance that you need HIGH-QUALITY work with a FAST
                    TURNAROUND, reach me. 100% fulfillment Guaranteed. My
                    services include: Cross-platform games Game concept and
                    level designing Game Optimisations 2D/3D Animation Graphic
                    DesigningSocial Network IntegrationVirtual Reality
                    (VR)Augmented Reality (AR)Game con promotional graphics and
                    video app store and Playstore publishing f you have a custom
                    game idea in mind then feel free to discuss it with me. The
                    cost/time of your custom game idea will depend upon the
                    complexity of your game idea.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Screen;
