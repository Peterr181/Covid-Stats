import React from "react";
import styles from "./WorldDataSelect.module.scss";

const WorldDataSelect = ({
  sortOption,
  handleSortChange,
  sortOption2,
  handleSortChange2,
}) => {
  return (
    <div className={styles.worlddata__container__select}>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="Default">Default</option>
        <option value="Confirmed">Sort by cases</option>
        <option value="Deaths">Sort by deaths</option>
        <option value="Actives">Sort by Active Cases</option>
        <option value="Alphabetic">Alphabetically</option>
      </select>
      <select
        className="worlddata__container__select__continent"
        value={sortOption2}
        onChange={handleSortChange2}
      >
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="North-America">North-America</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="South-America">South-America</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
};

export default WorldDataSelect;
