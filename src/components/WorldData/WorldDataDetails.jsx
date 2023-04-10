import React, { useState, useEffect } from "react";
import styles from "./WorldDataDetails.module.scss";
import { fetchWorldData } from "../../utils/fetchingFromAPI";

const WorldDataDetails = ({ inputValue, sortOption, sortOption2 }) => {
  const [worldDataDetails, setWorldDataDetails] = useState([]);

  useEffect(() => {
    const fetchWorldDataFromApi = async () => {
      const data = await fetchWorldData();
      setWorldDataDetails(data);
    };

    fetchWorldDataFromApi();
  }, []);

  console.log(worldDataDetails);

  const getSortedCountries = () => {
    let sortedCountries = [...worldDataDetails];

    switch (sortOption) {
      // Case Confirmed so sorting by the highest count of deaths in each country
      case "Confirmed":
        sortedCountries = sortedCountries.sort(
          (a, b) => b.cases.total - a.cases.total
        );
        break;
      // Case Deaths so sorting by the highest count of deaths in each country
      case "Deaths":
        sortedCountries = sortedCountries.sort(
          (a, b) => b.deaths.total - a.deaths.total
        );
        break;
      case "Actives":
        sortedCountries = sortedCountries.sort(
          (a, b) => b.cases.active - a.cases.active
        );
        break;
      // Default sorting method so it's initially array
      case "Default":
        sortedCountries = [...worldDataDetails];
        break;
      case "Alphabetic":
        sortedCountries = sortedCountries.sort((a, b) =>
          a.country.localeCompare(b.country)
        );
        break;
    }

    // Filter by continent
    if (sortOption2 !== "All") {
      sortedCountries = sortedCountries.filter(
        (item) => item.continent === sortOption2
      );
    }

    if (inputValue) {
      sortedCountries = sortedCountries.filter((country) => {
        return country.country.toLowerCase().includes(inputValue.toLowerCase());
      });
    }

    sortedCountries = sortedCountries.filter((country) => {
      return country.country !== country.continent;
    });

    return sortedCountries;
  };

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      style={{
        height: "350px",

        overflowX: "hidden",
        backgroundColor: "#1e2b3e",
      }}
    >
      <table
        className={styles.worlddatadetails__container}
        style={{ tableLayout: "fixed" }}
      >
        <thead className={styles.worlddatadetails__container__head}>
          <tr>
            <th>Country </th>
            <th>Confirmed Cases</th>
            <th>Today's Cases</th>
            <th>Total Deaths</th>
            <th>New Deaths</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {getSortedCountries().map((worlddetail) => (
            <tr key={worlddetail.country}>
              <td>{worlddetail.country}</td>
              <td style={{ color: "greenyellow" }}>
                {numberWithCommas(worlddetail.cases.total)}
              </td>
              <td style={{ color: "greenyellow" }}>
                {worlddetail.cases.new !== null
                  ? numberWithCommas(worlddetail.cases.new)
                  : "+0"}
              </td>
              <td style={{ color: "red" }}>
                {worlddetail.deaths && worlddetail.deaths.total
                  ? numberWithCommas(worlddetail.deaths.total)
                  : "0"}
              </td>
              <td style={{ color: "red" }}>
                {worlddetail.deaths.new !== null
                  ? numberWithCommas(worlddetail.deaths.new)
                  : "+0"}
              </td>
              <td style={{ color: "blueviolet" }}>
                {worlddetail.cases.active !== null
                  ? numberWithCommas(worlddetail.cases.active)
                  : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorldDataDetails;
