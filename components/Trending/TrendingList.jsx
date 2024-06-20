import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
const TrendingList = () => {
  const list = [
    {
      serial: "01",
      title: "Hero Academia",
      view: "200.000",
      heart: "200.200",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg",
    },
    {
      serial: "02",
      title: "One Piece",
      view: "200.100",
      heart: "100.200",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693921520/manga/One-Piece_qghlyp.jpg",
    },
    {
      serial: "02",
      title: "One Piece",
      view: "200.100",
      heart: "100.200",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693921520/manga/One-Piece_qghlyp.jpg",
    },
    {
      serial: "02",
      title: "One Piece",
      view: "200.100",
      heart: "100.200",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693921520/manga/One-Piece_qghlyp.jpg",
    },
    {
      serial: "02",
      title: "One Piece",
      view: "200.100",
      heart: "100.200",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693921520/manga/One-Piece_qghlyp.jpg",
    },
  ];
  return (
    <div className="h-[500px] bg-[#303030] bg-opacity-50 rounded-10 text-white pb-10">
      {list.map((card, index) => (
        <div
          className="h-1/5 flex-center pt-15 px-10 overflow-hidden"
          key={index}
        >
          <div className="flex-center gap-3 ">
            <h1 className="text-20 font-bold">{card.serial}</h1>
            <div>
              <Image
                alt="ảnh không còn"
                src={card.image}
                height={80}
                width={80}
              />
            </div>
          </div>
          <div className="pl-15">
            <div className="pb-10">
              <h2>{card.title}</h2>
            </div>
            <div className="flex gap-3">
              <div className="flex-center gap-2">
                <FontAwesomeIcon icon={faEye} />
                <span>{card.view}</span>
              </div>
              <div className="flex-center gap-2">
                <FontAwesomeIcon icon={faHeart} />
                <span>{card.heart}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingList;
