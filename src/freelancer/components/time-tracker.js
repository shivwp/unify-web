import * as React from "react";
import Container from "react-bootstrap/Container";
import Title from "../../components/title";
import Table from "react-bootstrap/Table";

const Screen = () => {
  Title(" | Time Tracker");

  const TimeTable = () => {
    return <>
      <div className='timerackbox'>
        <Table>
          <thead>
            <tr>
              <th className='w-4 border-r-none'></th>
              <th className="track_th_hme d-flex align-items-center">Members</th>
              <th className='w-8'>
                <div className='tth_bgheading'>MON</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading'>TUE</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading'>WED</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading'>TUE</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading'>FRI</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading'>SAT</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className='w-8'>
                <div className='tth_bgheading' s>SUN</div>
                <div className='thh_smheading'>MAN 25</div>
              </th>
              <th className="d-flex align-items-center">
                <div className="track_th_hme">230.00</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-center cewi_trak align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
              </td>
              <td className='d-flex align-items-center'>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="profle_tbls"><img src="/assets/PRO-2.png" alt=""/></div>
                  <div>
                    <div className='nme_profe_track'>Steve Thomas</div>
                    <div className='nme_pero_tranes'>Sr. Developer</div>
                  </div>
                  <div className='ewon_track_rc'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <path id="Icon_material-watch-later" data-name="Icon material-watch-later" d="M10.5,3A7.5,7.5,0,1,0,18,10.5,7.522,7.522,0,0,0,10.5,3Zm3.15,10.65-3.9-2.4V6.75h1.125v3.9l3.375,2.025Z" transform="translate(-3 -3)" fill="#e9c43a" />
                  </svg> pending</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">36.00</div>
              </td>
            </tr>
            <tr className='slide_box_tracker_tbl'>
              <td></td>
              <td className='d-flex align-items-center'>
                <div>
                  <div className='nme_profe_track'>Meetings</div>
                  <div className='nme_pero_tranes'>Mobile App</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">3.00</div>
              </td>
            </tr>
            <tr className='slide_box_tracker_tbl'>
              <td></td>
              <td className='d-flex align-items-center'>
                <div>
                  <div className='nme_profe_track'>Meetings</div>
                  <div className='nme_pero_tranes'>Mobile App</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">3.00</div>
              </td>
            </tr>
            <tr className='slide_box_tracker_tbl'>
              <td></td>
              <td className='d-flex align-items-center'>
                <div>
                  <div className='nme_profe_track'>Meetings</div>
                  <div className='nme_pero_tranes'>Mobile App</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">3.00</div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-center cewi_trak align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
              </td>
              <td className='d-flex align-items-center'>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="profle_tbls"><img src="/assets/PRO-2.png" alt=""/></div>
                  <div>
                    <div className='nme_profe_track'>Steve Thomas</div>
                    <div className='nme_pero_tranes'>Sr. Developer</div>
                  </div>
                  <div className='ewon_track_rc'>pending</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">36.00</div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-center cewi_trak align-items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
              </td>
              <td className='d-flex align-items-center'>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="profle_tbls"><img src="/assets/PRO-2.png" alt=""/></div>
                  <div>
                    <div className='nme_profe_track'>Steve Thomas</div>
                    <div className='nme_pero_tranes'>Sr. Developer</div>
                  </div>
                  <div className='ewon_track_rc'>pending</div>
                </div>
              </td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>7:00</td>
              <td className='cewoh_ew'>8:00</td>
              <td className='cewoh_ew'>6:00</td>
              <td className='cewoh_ew'>7:30</td>
              <td></td>
              <td></td>
              <td className="d-flex align-items-center">
                <div className="track_th_hme">36.00</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>;
  };

  return (
    <>
      <div className="tracker_header">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="inpptracker w-40">
            <input type="text" placeholder="What are you working on?" />
          </div>
          <div className="d-flex align-items-center th_bthns_tracker flex-wrap">
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                </svg>
              </button>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-tag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
              </button>
            </div>
            <div className="css-etxt-trak">230.00</div>
            <div>
              <button className="play_btn_blew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </button>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
              </button>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="wm_3_hdr">
          <div className="wod_hding">Week of 25 March-31</div>
          <div className="d-flex flex-wrap bnt_trackre">
            <button className="active_bnt_trak">Timesheet</button>
            <button>Timecard</button>
          </div>
        </div>
        {TimeTable()}
      </Container>
    </>
  );
};
export default Screen;
