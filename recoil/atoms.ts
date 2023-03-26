import { atom, selector } from "recoil";

// 메뉴
export const menu1Atom = atom({
  key: "menu1",
  default: false,
});

export const menu2Atom = atom({
  key: "menu2",
  default: false,
});

export const menu3Atom = atom({
  key: "menu3",
  default: false,
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
