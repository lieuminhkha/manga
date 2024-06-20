import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  return (
    <div className="p-15 bg-[rgb(48,48,48)] rounded-5 relative">
      <div className="absolute top-0 right-0 bg-[#ff6347] z-10 px-15 text-white py-5 hover:scale-125 skew-y-12 rotate-9 ">
        Đã hết
      </div>
      <div className="overflow-hidden  rounded-5">
        <Image
          alt="ảnh lỗi"
          src={
            "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
          }
          width={80}
          height={80}
          className="w-full p-10"
        />
      </div>
      <div className="text-white px-10 text-center">
        <h3 className="text-20 ">Hero Academia</h3>
        <div>
          <p>Số Chapter : 180 </p>
        </div>
        <div className="flex-around gap-2">
          <div className="flex-center gap-2">
            <FontAwesomeIcon icon={faEye} />
            <span>100.100</span>
          </div>
          <div className="flex-center gap-2">
            <FontAwesomeIcon icon={faHeart} />
            <span>100.200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
