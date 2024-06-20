import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
const Favoriteslist = () => {
  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faHeart} />
        <span className="pl-15">FavoritesList</span>
      </div>
      <div className=" grid grid-cols-5 grid-rows-1 gap-5 mb-5">
        <div className="p-15 bg-[rgb(48,48,48)] rounded-5">
          <div className="overflow-hidden pb-10 rounded-5">
            <Image
              alt="ảnh lỗi"
              src={
                "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
              }
              width={180}
              height={80}
              className="w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-20">Hero Academia</h3>
            <div>
              <p>
                Số Chapter : 180 - Tình Trạng{" "}
                <span className="text-[#ff6347]">Truyện đã hết</span>
              </p>
            </div>
            <div className="flex gap-3">
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
        <div className="p-15 bg-[rgb(48,48,48)]">
          <div className="overflow-hidden pb-10">
            <Image
              alt="ảnh lỗi"
              src={
                "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
              }
              width={180}
              height={80}
              className="w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-20">Hero Academia</h3>
            <div>
              <p>
                Số Chapter : 180 - Tình Trạng{" "}
                <span className="text-[#ff6347]">Truyện đã hết</span>
              </p>
            </div>
            <div className="flex gap-3">
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
        <div className="p-15 bg-[rgb(48,48,48)]">
          <div className="overflow-hidden pb-10">
            <Image
              alt="ảnh lỗi"
              src={
                "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
              }
              width={180}
              height={80}
              className="w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-20">Hero Academia</h3>
            <div>
              <p>
                Số Chapter : 180 - Tình Trạng{" "}
                <span className="text-[#ff6347]">Truyện đã hết</span>
              </p>
            </div>
            <div className="flex gap-3">
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
        <div className="p-15 bg-[rgb(48,48,48)]">
          <div className="overflow-hidden pb-10">
            <Image
              alt="ảnh lỗi"
              src={
                "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
              }
              width={180}
              height={80}
              className="w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-20">Hero Academia</h3>
            <div>
              <p>
                Số Chapter : 180 - Tình Trạng{" "}
                <span className="text-[#ff6347]">Truyện đã hết</span>
              </p>
            </div>
            <div className="flex gap-3">
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
        <div className="p-15 bg-[rgb(48,48,48)]">
          <div className="overflow-hidden pb-10">
            <Image
              alt="ảnh lỗi"
              src={
                "https://res.cloudinary.com/dpymhfrsd/image/upload/v1693930205/manga/23_rekby9.jpg"
              }
              width={180}
              height={80}
              className="w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-20">Hero Academia</h3>
            <div>
              <p>
                Số Chapter : 180 - Tình Trạng{" "}
                <span className="text-[#ff6347]">Truyện đã hết</span>
              </p>
            </div>
            <div className="flex gap-3">
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
      </div>
    </div>
  );
};

export default Favoriteslist;
