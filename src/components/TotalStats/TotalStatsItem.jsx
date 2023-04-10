import React from "react";
import styles from "./TotalStatsItem.module.scss";

const TotalStatsItem = ({
  title,
  newCount,
  totalCount,
  className,
  summaryMessage,
}) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={styles.totalstats__container__items__item}>
      <h2>{title}</h2>
      <span
        className={`${styles.totalstats__container__items__item__newcount} ${
          styles[`totalstats__container__items__item__${className}`]
        }`}
      >
        {numberWithCommas(newCount)}
      </span>
      <span className={styles.totalstats__container__items__item__total}>
        {numberWithCommas(totalCount)} {summaryMessage}
      </span>
    </div>
  );
};

export default TotalStatsItem;
