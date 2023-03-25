import React, { useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";

const Main = () => {
  return (
    <div>
      <div className="container py-24 mx-auto flex flex-wrap">
        <div className="flex flex-row justify-between text-left">
          <ItemCard />
          <SelectItemList />
        </div>
      </div>
    </div>
  );
};

export default Main;
