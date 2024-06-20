"use client";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const handleContent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    (e.target as HTMLTextAreaElement).style.height = "62px";
    let sch: number = (e.target as HTMLTextAreaElement).scrollHeight;
    console.log(sch);
    (e.target as HTMLTextAreaElement).style.height = `${sch}px`;
  };
  return (
    <div className="w-content mx-auto mt-3 rounded-5 overflow-hidden">
      <div className="p-20 text-32 text-white bg-[#b380ff] font-semibold">
        <h1>Chào bạn, tui giúp gì được cho bạn?</h1>
      </div>
      <div className="bg-white flex">
        <div className="basis-1/3">
          <Image
            src={"/icon/wp3646344.jpg"}
            alt="toga_himiko"
            width={500}
            height={500}
            className="w-full h-[500px] object-cover object-left"
          />
        </div>
        <div className="basis-2/3">
          <form className="pt-30 w-2/3 mx-auto">
            <div className="py-15 relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute right-[15px] top-1/2 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border-b-slate-300 border-b-[1px] border-solid outline-none p-1 hover:border-b-black"
              ></input>
            </div>
            <div className="py-15 flex-center">
              <div className="relative w-1/2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-slate-300 border-b-[1px] border-solid outline-none p-1 hover:border-b-black"
                ></input>
              </div>
              <div className="relative w-1/2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="w-full border-b-slate-300 border-b-[1px] border-solid outline-none p-1 hover:border-b-black"
                ></input>
              </div>
            </div>
            <div className="py-15">
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full border-b-slate-300 border-b-[1px] border-solid outline-none p-1 hover:border-b-black"
              ></input>
            </div>
            <div className="py-15">
              <textarea
                placeholder="Nội dung"
                maxLength={1000}
                required
                className={`w-full border-slate-300 border-[1px] border-solid text-16 p-15 rounded-5 h-[60px] max-h-[120px] outline-none resize-none  focus:border-black`}
                onKeyUp={handleContent}
              ></textarea>
            </div>
            <div className="w-1/5 mx-auto py-10">
              <button className="bg-[#b380ff] rounded-5 p-10 text-white">
                Gửi ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
