import axios from "axios";

const getWholeCoffeeData = () => {
  return axios({
    method: "get",
    url: "/menu/menulist",
  })
    .then((res) => {
      return res.data["data"][0];
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getWholeCoffeeData;
