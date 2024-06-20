import React from "react";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faFire } from "@fortawesome/free-solid-svg-icons";
const Content = () => {
  return (
    <div className="basis-3/4">
      <div className="title">
        <FontAwesomeIcon icon={faFire} />
        <span className="pl-15">Hot</span>
      </div>
      <div className="grid grid-cols-4 grid-rows-[8] gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
