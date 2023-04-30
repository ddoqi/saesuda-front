import { atom } from "recoil";

export const userStateAtom = atom({
  key: "userState",
  default: "guest",
});

// 사용자가 선택한 메뉴
export const userSelectMenuList = atom({
  key: "userSelectMenuList",
  default: [{ memberUid: 0 }, { frontOrderUid: 0 }],
});

export const menuListAtom = atom({
  key: "menuListAtom",
  default: [],
});

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
