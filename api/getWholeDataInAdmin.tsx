import axios from "axios";

const getWholeDataInAdmin = async () => {
  return axios
    .post("/admin/orderList", {
      memberUid: 0,
    })
    .then((response) => {
      console.log("요청 성공!");
      console.log("response", response);
      console.log("data어떻게와", response.data.data);
      const respopseData = [response.data.data];
      return respopseData;
    })
    .catch((error) => {
      alert("에러났다능!! 관리자 문의하라능!!!");
      console.log(error);
      throw error;
    });
};

export default getWholeDataInAdmin;
