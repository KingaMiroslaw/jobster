import { useEffect } from "react";
import { StatsContainer, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  const { monthlyApplications } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
