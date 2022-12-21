import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onDislikeJobPost,
  onDislikePostReasons,
} from "../../../../redux/actions/jobActions";

const ReasonsList = ({ jobId, data, setDropdownOpen, setLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onDislikePostReasons(setLoading));
  }, []);
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
          {data?.map((item, index) => (
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
