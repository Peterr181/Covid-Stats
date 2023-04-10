import React, { useState } from "react";
import styles from "./WorldData.module.scss";
import WorldDataDetails from "./WorldDataDetails";
import WorldDataInput from "./WorldDataInput";
import WorldDataSelect from "./WorldDataSelect";

const WorldData = () => {
  const [inputValue, setInputValue] = useState("");
  const [sortOption, setSortOption] = useState("All");
  const [sortOption2, setSortOption2] = useState("All");

  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const handleSortChange2 = (event) => {
    setSortOption2(event.target.value);
  };

  return (
    <div className={styles.worlddata__container}>
      <div className={styles.worlddata__container__selectinput}>
        <WorldDataInput getInputValue={getInputValue} />
        <WorldDataSelect
          sortOption={sortOption}
          handleSortChange={handleSortChange}
          sortOption2={sortOption2}
          handleSortChange2={handleSortChange2}
        />
      </div>

      <WorldDataDetails
        inputValue={inputValue}
        sortOption={sortOption}
        sortOption2={sortOption2}
      />
    </div>
  );
};

export default WorldData;
