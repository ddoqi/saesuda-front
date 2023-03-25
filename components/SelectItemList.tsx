import { menu1Atom, menu2Atom, menu3Atom } from "@/recoil/atoms";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SelectItemList = () => {
  const [menu1Checked, setMenu1Checked] = useRecoilState(menu1Atom);
  const [menu2Checked, setMenu2Checked] = useRecoilState(menu2Atom);
  const [menu3Checked, setMenu3Checked] = useRecoilState(menu3Atom);
  const [menu1Name, setMenu1Name] = useState("");
  const [menu2Name, setMenu2Name] = useState("");
  const [menu3Name, setMenu3Name] = useState("");

  useEffect(() => {
    if (menu1Checked == true) {
      setMenu1Name("메뉴명1");
    } else {
      setMenu1Name("");
    }
  }, [menu1Checked]);

  useEffect(() => {
    if (menu2Checked == true) {
      setMenu2Name("메뉴명2");
    } else {
      setMenu2Name("");
    }
  }, [menu2Checked]);

  useEffect(() => {
    if (menu3Checked == true) {
      setMenu3Name("메뉴명3");
    } else {
      setMenu3Name("");
    }
  }, [menu3Checked]);

  return (
    <div>
      <div className="flex flex-col bg-brand100 h-full ml-[20px]">
        <div className="bg-brandbeige text-center flex flex-col items-center justify-center">
          <h3 className="text-red-400 text-lg bold">
            선택한 Menu가 아래 보여용
          </h3>
          <div className="h-[300px] bg-brandyellow w-[300px]">
            <h3> {menu1Name}</h3>
            <h3> {menu2Name}</h3>
            <h3> {menu3Name}</h3>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              alert("주문번호랑 같이 주문데이터 전송?");
            }}
            type="button"
            className="bg-black
        text-white w-[100px] h-[50px]"
          >
            주문하러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectItemList;
