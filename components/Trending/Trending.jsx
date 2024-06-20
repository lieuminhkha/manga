import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import TredingList from "./TrendingList";
const Trending = () => {
  return (
    <div className="basis-1/4">
      <div className="title">
        <FontAwesomeIcon icon={faDiamond} />
        <span className="pl-15">Trending</span>
      </div>
      <TredingList />
    </div>
  );
};

export default Trending;
