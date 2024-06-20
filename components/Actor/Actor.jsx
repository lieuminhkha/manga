import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faUser } from "@fortawesome/free-solid-svg-icons";
const Actor = () => {
  const Actors = [
    {
      name: "Oda Eiichiro",
      description:
        "Oda Eiichiro sinh ngày 1 tháng 1 năm 1975 tại thành phố Kumamoto, tỉnh Kumamoto) là một họa sĩ truyện tranh người Nhật Bản, hiện đang sáng tác cho nhà xuất bản Shūeisha. Ông là tác giả của bộ truyện nổi tiếng thế giới One Piece.",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1694093008/Actors/t%E1%BA%A3i_xu%E1%BB%91ng_ndfvj3.jpg",
    },
    {
      name: "Kazuki Takahashi",
      image:
        "https://res.cloudinary.com/dpymhfrsd/image/upload/v1694093065/Actors/t%E1%BA%A3i_xu%E1%BB%91ng_1_lmrepa.jpg",
      description:
        "Takahashi Kazuki (4 tháng 10 năm 1961 – 4 tháng 7 năm 2022) là một họa sĩ truyện tranh, người sáng tạo trò chơi Nhật Bản. Ông là tác giả của bộ manga nổi tiếng Yu-Gi-Oh!, thường được biết đến với tên gọi Vua trò chơi trong phiên bản tiếng Việt.",
    },
  ];
  return (
    <div>
      <div className="title">
        <FontAwesomeIcon icon={faUser} />
        <span className="pl-15">Actors</span>
      </div>
      <div className="h-[500px] bg-[#303030] bg-opacity-50 rounded-10 text-white">
        {Actors.map((card, index) => (
          <div className=" flex pt-15 px-10 overflow-hidden" key={index}>
            <div className="flex-center gap-3 basis-1/3">
              <h1 className="text-20 font-bold">{index}</h1>
              <div>
                <Image
                  alt="ảnh không còn"
                  src={card.image}
                  height={60}
                  width={60}
                />
              </div>
            </div>
            <div className="basis-2/3">
              <div className="pb-5">
                <h2 className="text-20 font-bold">{card.name}</h2>
              </div>
              <div>
                <p className="line-clamp-3">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actor;
