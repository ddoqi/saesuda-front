import axios from "axios";

const getWholeCoffeeData = async () => {
  try {
    const response = await axios.get("/menu/menulist");
    console.log("res.data['data'][0]", response.data["data"]);
    return response.data["data"];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get coffee data");
  }
};

export default getWholeCoffeeData;
