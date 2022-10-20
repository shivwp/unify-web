import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import heart from "../../../../icons/heart.svg";
import like from "../../../../icons/like.svg";
import Footer from "../../../../components/footer";
import Title from "../../../../components/title";
import $ from "jquery";
import "../../../../styles/freelancer.css";
import Select from "react-select";
import { useParams, Link } from "react-router-dom";

const ListCard = () => {
  const [dDown,Setddown] = useState(0)
  function TogglePopup(){
      if(dDown === 1){
          Setddown(0)
      } else{
          Setddown(1)
      }
  }
  const card = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {card.map((person, index) => (
        <div className="job_box_card" key={index}>
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Row>
            <Col lg={9}>
              <div className="com_name_s">VeeGaming Studio</div>
              <div className="job_head_s">
                <h2>IOS And Android SENIOR Mobile App Developer</h2>
              </div>
              <div className="dlex_sk_block flex-wrap">
                <div className="b_skil">Backend Developer</div>
                <div className="b_skil">Designer</div>
                <div className="b_skil">Support Agent</div>
                <div className="b_skil">IOS Developer</div>
              </div>
              <div className="job_d_par">
                <p>
                  We are a computerized wellbeing startup with a spry and
                  high-speed climate. We are searching for a Senior, RELIABLE
                  portable application…
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="price_ar_jjob">
                <h1>$140.00</h1>
                <p>(Hourly)</p>
              </div>
            </Col>
          </Row>
          <div className="jb_foot flex-wrap">
            <div className="flex_itm">
              <div className="f_b_obx">
                <div className="ex_name_fb">Expiry:</div>
                <div className="ex_val_f">914 DAYS LEFT</div>
              </div>
              <div className="f_b_obx">
                <div className="ex_name_fb">Proposals:</div>
                <div className="ex_val_f">9 Received</div>
              </div>
              <div className="f_b_obx">
                <div className="ex_name_fb">Location:</div>
                <div className="ex_val_f">Hamburg</div>
              </div>
            </div>
            <div className='ps-relative mt-sesix-5'>
              {dDown === 1 ? <Popup /> : ''}
              <div className="fb_btns_s_pro">
                <button className="bg-trans_s_pro btn_psnewrb" onClick={()=>{TogglePopup()}}>
                  <img src={like} alt="" className="heart_btn" />
                </button>
                <button className="bg-trans_s_pro btn_psnewrb">
                  <img src={heart} alt="" className="heart_btn" />
                </button>
                <Link to="/freelancer/project-detail">
                  <button>Send Proposal</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Popup = () =>{
  return(
      <>
      <div className="ddown_psr ps-absolute">
      <div className='ddown_mcotrct psearch-pnpou'>
          <Link to='/freelancer/getpaid'><div className='ddwon_lis'>Just not interested</div></Link>
          <Link to='/freelancer/transaction-history'><div className='ddwon_lis'>Vague Description</div></Link>
          <Link to='/freelancer/overview'><div className='ddwon_lis'>Unrealistic Expectations</div></Link>
          <Link to='/freelancer/overview'><div className='ddwon_lis'>Too Many Applicants</div></Link>
          <Link to='/freelancer/overview'><div className='ddwon_lis'>Job posted too long ago</div></Link>
          <Link to='/freelancer/overview'><div className='ddwon_lis'>Doesn't Match Skills</div></Link>
      </div>
      </div>
      </>
  )
}
const Project_Search = () => {
  let { saved } = useParams();
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  const [Tab, SetTab] = useState(<ListCard />);
  const [TabActive, SetTabActive] = useState("search");
  function changeTab(componentName) {
    if (componentName === "search") {
      SetTab(<ListCard />);
      Title(" | Project Search");
      SetTabActive("search");
    } else if (componentName === "saved") {
      Title(" | Project Saved");
      SetTab(<ListCard />);
      SetTabActive("saved");
    }
  }

  useEffect(() => {
    if (saved === "saved") {
      Title(" | Project Saved");
      SetTab(<ListCard />);
      SetTabActive("saved");
    }
  }, [saved]);
  const options1 = [{
    name:'what are you looking for',label:'what are you looking for'
  }]
  return (
    <>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="filter_area">
              <div className="sef_box">
                <div className="sef_na_ea ps_n_sef">
                  <h3>Search Filters</h3>
                </div>
                <div className="sef_p_c ps_n_sefp">
                  <p>Clear all</p>
                </div>
              </div>
              <div className="s_cat_bo">
                <div className="s_na_box">
                  <div className="s_na_h4">
                    <h4>search by keyword</h4>
                  </div>
                  <div className="s_na_inpu">
                    <input type="text" placeholder="what are you looking for" />
                  </div>
                </div>
                <div className="s_na_box">
                  <div className="s_na_h4">
                    <h4>Job type</h4>
                  </div>
                  <div className="s_na_inpu">
                  <Select
                    className=" smtxt_selct_newug"
                    placeholder="what are you looking for"
                    options={options1}
                  />
                  </div>
                </div>
                <div className="s_na_box">
                  <div className="s_na_h4">
                    <h4>Skills</h4>
                  </div>
                  <div className="s_na_inpu">
                    <input type="text" placeholder="Search skills" />
                    <div className="pls_s_na_input">+</div>
                  </div>
                </div>
              </div>
              <div className="s_na_box s_cat_bo">
                <div className="s_na_h4">
                  <h4>Category</h4>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Apps Developements (2)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>IOS (2)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Business (10)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Services (10)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Digital Marketing (10)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Video & animation (10)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Website Development (10)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>writing & Translation (10)</label>
                </div>
              </div>
              <div className="s_cat_bo">
                <div className="s_na_h4">
                  <h4>Price</h4>
                </div>
                <div className="ran_fl_inp">
                  <input type="num" value="0" placeholder="0" />
                  <input type="num" value="1,500" placeholder="1,500" />
                </div>
              </div>

              <div className="s_na_box s_cat_bo mb-0">
                <div className="s_na_h4">
                  <h4>English Level</h4>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Bilingual (1)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Fluent (4)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Native (3)</label>
                </div>
                <div className="s_na_categ">
                  <input type="checkbox" />
                  <label>Professional (1)</label>
                </div>
              </div>
              <div className="s_na_box s_cat_bo mt-0">
                <div
                  className="flex_slide_ta toggle_shutter p-0"
                  onClick={(e) => hanDleSlide(e)}
                >
                  <div className="s_na_h4">
                    <h4>Languages</h4>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slide_btnss slider_shutter">
                  <div className="s_na_categ">
                    <input type="checkbox" />
                    <label>English (1)</label>
                  </div>
                  <div className="s_na_categ">
                    <input type="checkbox" />
                    <label>Japinese (4)</label>
                  </div>
                </div>
              </div>
              <div className="desc_hin">
                <p>
                  Select the options and press the Filter Result button to apply
                  the changes
                </p>
              </div>
              <div className="fr_btn">
                <button>Filter Result</button>
              </div>
            </div>
          </Col>
          <Col lg={9} className="top_main_c_job">
            <div className="overflow-scroll">
              <div className="d-flex flex-wrap tab_m_nodea mb-4 tab_scroll_cont">
                <Link to="/freelancer/project-search">
                  <button
                    className={`tab_btn_vs ${
                      TabActive === "search" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      changeTab("search");
                    }}
                  >
                    SEARCH
                  </button>
                </Link>
                <Link to="/freelancer/project-search/saved">
                  <button
                    className={`tab_btn_vs ${
                      TabActive === "saved" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      changeTab("saved");
                    }}
                  >
                    SAVED JOB(3)
                  </button>
                </Link>
              </div>
            </div>
            {Tab}
          </Col>
          <Col lg={12}>
            <div className="pagiantion_node">
              <button className="pagi_butt">1</button>
              <button className="pagi_butt">2</button>
              <button className="pagi_butt">3</button>
              <button className="pagi_butt">4</button>
              <button className="pagi_butt">5</button>
              <div className="pagination_dots">...</div>
              <button className="pagi_butt">10</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Project_Search;
