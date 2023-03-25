import { atom, selector } from "recoil";

// const mySelector = selector({
//   key: "mySelector",
//   get: () => {
//     return Date.now();
//   },
// });

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
