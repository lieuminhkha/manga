import Link from "next/link";
import React from "react";

const Genres = () => {
  return (
    <div className="w-content mx-auto mt-3">
      <div className="flex justify-center flex-wrap text-[#ddd] mb-3">
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          All
        </button>
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          A
        </button>
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          B
        </button>
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          C
        </button>
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          D
        </button>
        <button className="border-[1px] border-solid border-125 rounded-5 px-10 py-5 m-1 bg-btn text-center inline-block align-middle font-medium hover:cursor-pointer hover:text-lg1 ">
          E
        </button>
      </div>
      <div className="px-15 rounded-5 bg-lg flex flex-wrap justify-center">
        <div className=" text-gc w-full pt-10">
          <ul>
            <li className="w-1/6 float-left py-5 hover:text-white">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/6 float-left py-5 hover:text-white ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
            <li className="w-1/5 float-left py-5 hover:text-white list-disc ">
              <Link href={"/"}>Yua Mikami</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-32 p-10">Page 1 of 12</h3>
        </div>
      </div>
    </div>
  );
};

export default Genres;
