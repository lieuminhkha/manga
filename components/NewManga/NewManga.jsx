import React from "react";
import Image from "next/image";
import Manga from "./Manga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
const NewManga = () => {
  return (
    <div className="basis-3/4">
      <div className="title">
        <FontAwesomeIcon icon={faDiamond} />
        <span className="pl-15">New</span>
      </div>
      <Manga />
    </div>
  );
};

export default NewManga;
