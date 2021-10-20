import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://planets-fact-site-static-api.netlify.app/`, //endpoint
  withCredentials: false, // default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
//
// http://localhost:3000

export default {
  getPlanets() {
    const planets = apiClient.get("/planets.json/");
    console.log("the units array: " + planets);
    return planets;
  },
  getPlanet(planet_name) {
    return apiClient.get("/planets/" + planet_name + ".json");
  },
};
