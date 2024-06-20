"use client";
import Image from "next/image";
import NewManga from "../../components/NewManga/NewManga";
import Trending from "../../components/Trending/Trending";
import Favoriteslist from "../../components/Favorite/Favoriteslist";
import Actor from "../../components/Actor/Actor";
import MemberList from "../../components/Member/MemberList";
import Content from "../../components/Content";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const fecthMangas = async () => {
      try {
        console.log(1);
        const response: any = await axios.get(
          "http://localhost:5001/api/allmanga"
        );
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log("Fetching manga failed:", error);
      }
    };
    fecthMangas();
  }, []);
  return (
    <div className="w-content mx-auto">
      <div className="flex gap-4 mb-5">
        <NewManga />
        <Trending />
      </div>
      <Favoriteslist />
      <div className="flex gap-3">
        <Content />
        <div className="basis-1/4 ">
          <Actor />
          <MemberList />
        </div>
      </div>
    </div>
  );
}
