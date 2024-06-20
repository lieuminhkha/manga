import React from "react";

const Manga = () => {
  return (
    <div className="relative">
      <div class="background_styles"></div>
      <div className="absolute left-[2%] bottom-[5%] right-[2%] text-white bg-black bg-opacity-20 p-10 rounded-10">
        <h1 className="text-40 font-bold">One Piece</h1>
        <h2 className="text-20 font-bold">
          Số Chapter : <span>1089</span> <span> - Còn tiếp</span>
        </h2>
        <p className="text-16">
          One Piece xoay quanh 1 nhóm cướp biển được gọi là Băng Hải tặc Mũ Rơm
          - Straw Hat Pirates - được thành lập và lãnh đạo bởi thuyền trưởng
          Monkey D. Luffy. Cậu bé Luffy có ước mơ tìm thấy kho báu vĩ đại nhất,
          One Piece, của Vua Hải Tặc đời trước Gold D. Roger và trở thành Vua
          Hải Tặc đời kế tiếp.
        </p>
      </div>
    </div>
  );
};

export default Manga;
