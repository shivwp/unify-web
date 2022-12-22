import { useDispatch, useSelector } from "react-redux";
import { onDislikeJobPost } from "../../../../redux/actions/jobActions";

const ReasonsList = ({ jobId, setDropdownOpen, setLoading }) => {
  const dislikeJobReasons = useSelector(
    (state) => state?.job?.dislikeJobReasons
  );
  const dispatch = useDispatch();

  const dislikeJobPost = (id) => {
    setLoading(true);
    dispatch(
      onDislikeJobPost(
        { job_id: jobId, reason_id: id },
        setDropdownOpen,
        setLoading
      )
    );
  };
  return (
    <>
      <div className="ddown_psr dislikeJobRreasonsList ps-absolute">
        <div className="ddown_mcotrct psearch-pnpou">
          {dislikeJobReasons?.map((item, index) => (
            <div
              key={index}
              className="ddwon_lis"
              onClick={() => dislikeJobPost(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReasonsList;
