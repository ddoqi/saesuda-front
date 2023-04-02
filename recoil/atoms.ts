import { atom, selector } from "recoil";

// 사용자가 선택한 메뉴
export const userSelectMenuList = atom({
  key: "userSelectMenuList",
  default: [
    { memberUid: 0, orderDate: "", orderState: "", orderUid: "" },
    {
      menuUid: 0,
      menuName: "아이스 아메리카노",
      addMilk: 0,
      addShot: 0,
      addSyrup: 0,
      // count: 0,
      selectState: false,
    },
    {
      menuUid: 1,
      menuName: "핫초코",
      addMilk: 0,
      addShot: 0,
      addSyrup: 0,
      // count: 0,
      selectState: false,
    },
    {
      menuUid: 2,
      menuName: "바닐라 라떼",
      addMilk: 0,
      addShot: 0,
      addSyrup: 0,
      // count: 0,
      selectState: false,
    },
  ],
});

// export const userSelectMenuList = atom({
//   key: "userSelectMenuList",
//   default: getWholeCoffeeData().then(data => {
//     return [
//       { memberUid: data.uid, orderDate: "", orderState: "", orderUid: "" },
//       {
//         menuUid: 0,
//         addMilk: 0,
//         addShot: 0,
//         addSyrup: 0,
//         count: 0,
//       }
//     ];
//   }),
// });

// 회원가입

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const confirmPasswordState = atom({
  key: "confirmPasswordState",
  default: "",
});
