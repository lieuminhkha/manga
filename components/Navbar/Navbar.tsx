import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../../constants/Navbar";
import SearchBar from "./SearchBar";
interface NavbarProps {
  showModalLogin: boolean;
  setShowModalLogin: (b: boolean) => void;
}
const Navbar = ({ showModalLogin, setShowModalLogin }: NavbarProps) => {
  return (
    <div className="header">
      <div className="w-2/3 flex-around ">
        <div className="flex-around gap-4">
          <Image src={"/icon/1.jpg"} alt="main_logo" width={80} height={60} />
          <div>
            <span className="text-white text-20"> WaifuKokushi </span>
          </div>
        </div>
        <div>
          <ul className="flex-between text-white">
            {NavLink.map((item, index) => (
              <li className="p-15" key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/3 flex-center">
        <SearchBar />
      </div>
      <div className="p-2">
        <button
          className="px-6 py-3 rounded-md bg-oy text-white"
          onClick={(e) => setShowModalLogin(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
