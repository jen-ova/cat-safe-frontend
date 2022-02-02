// import axios from "axios";
import PlantData from "../data/catplants.json";

const getPlants = () => {
  const plants = PlantData.map((name) => name.plantName);
  console.log(plants);
  return plants;
};

export default getPlants;
