const axios = require("axios");

const url = "http://localhost:5001/constellations";
axios
  .get(url)
  .then(({data}) => {
    const result = data.filter(constellation => constellation.starsWithPlanets < 10);
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });


