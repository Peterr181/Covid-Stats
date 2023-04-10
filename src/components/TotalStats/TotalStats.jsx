import React, { useEffect, useState } from "react";
import styles from "./TotalStats.module.scss";
import axios from "axios";
import TotalStatsItem from "./TotalStatsItem";
import { fetchWorldData } from "../../utils/fetchingFromAPI";

const TotalStats = () => {
  const [totalStats, setTotalStats] = useState([]);

  useEffect(() => {
    const fetchTotalStats = async () => {
      const data = await fetchWorldData();
      const allStats = data.find((stats) => stats.continent === "All");
      setTotalStats(allStats);
    };

    fetchTotalStats();
  }, []);

  console.log(totalStats.cases?.active);

  return (
    <div className={styles.totalstats__container}>
      {totalStats.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.totalstats__container__items}>
          <TotalStatsItem
            title="Confirmed Cases"
            newCount={totalStats.cases.new}
            totalCount={totalStats.cases.total}
            className="newconfirmed"
            summaryMessage="Total"
          />
          <TotalStatsItem
            title="Confirmed Deaths"
            newCount={totalStats.deaths.new}
            totalCount={totalStats.deaths.total}
            className="newdeads"
            summaryMessage="Total"
          />
          <TotalStatsItem
            title="Active cases"
            newCount={totalStats.cases.active}
            totalCount={totalStats.cases.critical}
            className="newrecovered"
            summaryMessage="Critical"
          />
        </div>
      )}
    </div>
  );
};

export default TotalStats;
