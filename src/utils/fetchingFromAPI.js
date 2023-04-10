export const fetchWorldData = async () => {
  const apiKey = import.meta.env.VITE_REACT_MY_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      "https://covid-193.p.rapidapi.com/statistics",
      options
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};
