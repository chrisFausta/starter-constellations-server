const axios = require("axios");

const leo = {
  name: "Leo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

const url = "http://localhost:5001/constellations";
// axios
//   .get(url)
//   .then(({ data }) => {
//     const exists = data.find(({ name }) => name === leo.name);
//     if (exists) throw `Constellation "${leo.name}" already exists.`;
//     return axios
//       .post(url, leo)
//       .then(({ data }) => console.log(data));
//   })
//   .catch(console.log);

axios
  .get(url)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(url, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log);

  axios.get(url).then(({data}) => console.log(data));