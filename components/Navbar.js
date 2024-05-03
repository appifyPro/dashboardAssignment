import React from "react";
import Image from "next/image";

const Navbar = () => {
  const iconStyle = {
    position: "relative",
    cursor: "ponter",
  };
  const countStyle = {
    position: "absolute",
    top: "-5px",
    left: "26px",
    width: "15px",
    height: "14px",
    borderRadius: "37%",
    fontStyle: "bold",
    backgroundColor: "#6945f4",
    color: "white",
    fontSize: "11px",
    textAlign: "center",
    lineHeight: "14px",
  };

  return (
    <nav className="w-full bg-white h-16 shadow-gray-500 shadow-md relative">
      <div className="w-11/12 m-auto flex h-full items-center justify-between shadow-md">
        <div className="flex">
          <Image
            src="/logo.svg"
            width={55}
            height={26.4}
            alt="website logo"
          ></Image>
          <div className="w-[350px] h-11 flex ml-4 p-3 items-center rounded-3xl  bg-[#f1f5f9]">
            <Image
              className="mr-3"
              src="search.svg"
              width={18}
              height={18}
              alt="search icon"
            ></Image>
            <input
              className="w-[340px] h-10 rounded-3xl focus:outline-none  "
              type="text"
              placeholder="Search Friends, Products, Services..."
            ></input>
          </div>
        </div>
        <div className="flex gap-8 h-full">
          <Image
            className=""
            src="newsfeed.svg"
            width={25}
            height={40}
            alt="news feed icon"
          ></Image>
          <Image
            className=""
            src="market.svg"
            width={25}
            height={40}
            alt="market icon"
          ></Image>
          <Image
            className=""
            src="calender.svg"
            width={24}
            height={40}
            alt="calender icon"
          ></Image>
          <Image
            src="people.svg"
            width={30}
            height={40}
            alt="people icon"
          ></Image>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/heart.svg" width={20} height={18}></Image>
            <span style={countStyle}>0</span>
          </div>
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/message.svg" width={20} height={18}></Image>
            <span style={countStyle}>0</span>
          </div>
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/cart.svg" width={20} height={18}></Image>
            <span style={countStyle}>0</span>
          </div>
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/arrow.svg" width={20} height={20}></Image>
            <span style={countStyle}>0</span>
          </div>
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/bell.svg" width={20} height={18}></Image>
            <span style={countStyle}>0</span>
          </div>
          <div className="bg-img-custom relative w-10 h-10 bg-no-repeat flex items-center justify-center ">
            <Image src="/profileimage.svg" width={40} height={45}></Image>
            <OnlineIndicator online={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const OnlineIndicator = ({ online }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full absolute bottom-0 right-0 border-2 border-white ${
        online ? "bg-green-500" : "bg-gray-500"
      }`}
    ></div>
  );
};
