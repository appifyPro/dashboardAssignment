import { React, useState } from "react";
import CartTable from "./CartTable";

const Notyetpaid = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-11/12 m-auto mt-5">
      <div className="flex items-center justify-between">
        <div>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            display="inline-block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1667 7.50033H2.54209L8.90792 1.437C8.98718 1.36151 9.05079 1.27116 9.09513 1.17109C9.13947 1.07102 9.16367 0.963203 9.16634 0.853785C9.16901 0.744366 9.1501 0.635494 9.11069 0.533383C9.07129 0.431272 9.01215 0.337922 8.93667 0.258664C8.86119 0.179406 8.77083 0.115791 8.67076 0.0714521C8.5707 0.027113 8.46288 0.00291767 8.35346 0.000247984C8.24404 -0.0024217 8.13517 0.0164864 8.03306 0.0558925C7.93094 0.0952986 7.83759 0.154431 7.75834 0.229914L0.488338 7.15491C0.333105 7.30939 0.210024 7.49309 0.126206 7.69542C0.042388 7.89774 -0.000505532 8.11467 4.49544e-06 8.33366C4.49544e-06 8.77866 0.173754 9.19741 0.502921 9.52616L7.75875 16.437C7.92 16.5907 8.12667 16.667 8.33334 16.667C8.49998 16.6672 8.66286 16.6175 8.80093 16.5242C8.939 16.4309 9.04591 16.2983 9.10783 16.1436C9.16975 15.9889 9.18384 15.8191 9.14827 15.6563C9.11271 15.4935 9.02913 15.3451 8.90834 15.2303L2.51584 9.167H19.1667C19.3877 9.167 19.5996 9.0792 19.7559 8.92292C19.9122 8.76664 20 8.55468 20 8.33366C20 8.11265 19.9122 7.90069 19.7559 7.74441C19.5996 7.58813 19.3877 7.50033 19.1667 7.50033Z"
              fill="black"
              display="inline-block"
            />
          </svg>

          <h1 className="text-2xl text-gray-700 font-bold inline-block ml-5">
            Not yet paid (88)
          </h1>
        </div>
        <div className="bg-white rounded-md flex items-center p-2 gap-2">
          <p className="border-r-2 border-gray-600 pr-5 text-sm">2024</p>
          <span className="text-2xl font-bold text-black font-sans m-2">
            25.7K
          </span>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.06615 0.95004C5.15504 0.95004 5.23837 0.963818 5.31615 0.991374C5.39392 1.01893 5.46615 1.06626 5.53281 1.13337L9.93281 5.53337C10.0661 5.66671 10.1328 5.82493 10.1328 6.00804C10.1328 6.19115 10.0661 6.3496 9.93281 6.48337C9.79948 6.61671 9.64392 6.68337 9.46615 6.68337C9.28837 6.68337 9.13281 6.61671 8.99948 6.48337L5.73281 3.21671L5.73281 10.6834C5.73281 10.8723 5.66881 11.0278 5.54081 11.15C5.41281 11.2723 5.25459 11.3334 5.06615 11.3334C4.87726 11.3334 4.71881 11.2694 4.59081 11.1414C4.46281 11.0134 4.39903 10.8552 4.39948 10.6667L4.39948 3.21671L1.13281 6.48337C0.99948 6.61671 0.843923 6.68337 0.666146 6.68337C0.488367 6.68337 0.332813 6.61671 0.19948 6.48337C0.0661463 6.35004 -0.00052121 6.1916 -0.000521194 6.00804C-0.000521178 5.82448 0.0661464 5.66626 0.19948 5.53337L4.59948 1.13337C4.66615 1.06671 4.73837 1.01937 4.81615 0.991374C4.89392 0.963374 4.97726 0.949596 5.06615 0.95004Z"
              fill="#1EB564"
            />
          </svg>
          <span className="text-[#1EB564] font-semibold">6%</span>
          <p className="text-sm">vs last 7 days</p>
          <svg
            width="52"
            height="27"
            viewBox="0 0 52 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 25.5005C3.0362 15.291 11.2612 5.54922 22.0407 14.6428C44.552 33.6334 48.8507 5.56776 51 1"
              stroke="#1EB564"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      {/* form */}
      <div className="bg-white rounded-lg p-1 mt-5 text-sm">
        <div className="flex gap-4  w-11/12 m-auto py-4">
          <div className="input-container  ">
            <div className="flex flex-col ">
              <label htmlFor="status" className="mr-4 block ">
                Status
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="status"
                  className="w-64 p-3 border rounded-md border-gray-400 focus:outline-purple-400"
                  placeholder="Select"
                  onFocus={() => setIsDropdownOpen("status")}
                  onBlur={() => setIsDropdownOpen(false)}
                />
                <div className=" absolute right-3 top-3 pointer-events-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2733 6.40071C14.2767 6.24486 14.2315 6.09181 14.1439 5.96285C14.0564 5.83388 13.9307 5.7354 13.7846 5.68111C13.6385 5.62681 13.4791 5.6194 13.3285 5.65989C13.178 5.70039 13.0439 5.78678 12.9447 5.90706L9.01305 10.4964L5.0828 5.90706C5.02165 5.82386 4.94402 5.75418 4.85469 5.70238C4.76536 5.65059 4.66627 5.61779 4.56368 5.60606C4.46109 5.59432 4.3572 5.60389 4.25848 5.63417C4.15976 5.66445 4.06833 5.71479 3.98997 5.78203C3.9116 5.84927 3.84804 5.93197 3.80311 6.02495C3.75819 6.11792 3.73296 6.21917 3.72898 6.32235C3.725 6.42554 3.7423 6.52843 3.77993 6.62459C3.81756 6.72075 3.87463 6.8081 3.94758 6.88118L8.44324 12.1356C8.51365 12.2181 8.60105 12.2844 8.69956 12.3298C8.79806 12.3752 8.90527 12.3987 9.01375 12.3987C9.12222 12.3987 9.22944 12.3752 9.32794 12.3298C9.42644 12.2844 9.51393 12.2181 9.58434 12.1356L14.0843 6.88118C14.2022 6.74845 14.2693 6.5782 14.2734 6.40071H14.2733Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                {isDropdownOpen === "status" && (
                  <div className="p-3 z-10 text-gray-700 text-sm absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg ">
                    <div className="dropdown-item p-2 cursor-pointer ">
                      Option 1
                    </div>
                    <div className="dropdown-item p-2 cursor-pointer">
                      Option 2
                    </div>
                    <div className="dropdown-item p-2 cursor-pointer ">
                      Option 3
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="flex flex-col">
              <label htmlFor="search" className="mr-4">
                Search for
              </label>
              <div className="flex col border  border-gray-400 rounded-md">
                <div className="relative ">
                  <input
                    type="text"
                    id="search"
                    className="w-48 p-3 rounded-l-md outline-none border-0"
                    placeholder="Select"
                  />
                  <div className=" absolute right-3 top-3  pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2733 6.40071C14.2767 6.24486 14.2315 6.09181 14.1439 5.96285C14.0564 5.83388 13.9307 5.7354 13.7846 5.68111C13.6385 5.62681 13.4791 5.6194 13.3285 5.65989C13.178 5.70039 13.0439 5.78678 12.9447 5.90706L9.01305 10.4964L5.0828 5.90706C5.02165 5.82386 4.94402 5.75418 4.85469 5.70238C4.76536 5.65059 4.66627 5.61779 4.56368 5.60606C4.46109 5.59432 4.3572 5.60389 4.25848 5.63417C4.15976 5.66445 4.06833 5.71479 3.98997 5.78203C3.9116 5.84927 3.84804 5.93197 3.80311 6.02495C3.75819 6.11792 3.73296 6.21917 3.72898 6.32235C3.725 6.42554 3.7423 6.52843 3.77993 6.62459C3.81756 6.72075 3.87463 6.8081 3.94758 6.88118L8.44324 12.1356C8.51365 12.2181 8.60105 12.2844 8.69956 12.3298C8.79806 12.3752 8.90527 12.3987 9.01375 12.3987C9.12222 12.3987 9.22944 12.3752 9.32794 12.3298C9.42644 12.2844 9.51393 12.2181 9.58434 12.1356L14.0843 6.88118C14.2022 6.74845 14.2693 6.5782 14.2734 6.40071H14.2733Z"
                        fill="#050505"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative ">
                  <input
                    type="text"
                    id="search"
                    className="w-60 p-3 rounded-r-md outline-none border-0"
                    placeholder="Type and search"
                  />
                  <div className=" absolute rounded-r-md right-0 w-12 h-full top-0 p-3 bg-black pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      margin="auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1520_2896)">
                        <path
                          d="M17.7801 16.7197L12.6614 11.601C13.6529 10.3763 14.2498 8.82004 14.2498 7.12506C14.2498 3.1966 11.0534 0.00012207 7.12491 0.00012207C3.19645 0.00012207 0 3.19657 0 7.12503C0 11.0535 3.19648 14.25 7.12494 14.25C8.81991 14.25 10.3762 13.653 11.6009 12.6615L16.7196 17.7802C16.8658 17.9264 17.0578 17.9999 17.2498 17.9999C17.4419 17.9999 17.6339 17.9264 17.7801 17.7802C18.0733 17.487 18.0733 17.0129 17.7801 16.7197ZM7.12494 12.75C4.02296 12.75 1.5 10.227 1.5 7.12503C1.5 4.02305 4.02296 1.50008 7.12494 1.50008C10.2269 1.50008 12.7499 4.02305 12.7499 7.12503C12.7499 10.227 10.2269 12.75 7.12494 12.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1520_2896">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="flex flex-col">
              <label htmlFor="period" className="mr-4">
                Period
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="period"
                  className="w-64 p-3 border rounded-md border-gray-400 focus:outline-purple-400"
                  placeholder="Select"
                  onFocus={() => setIsDropdownOpen("period")}
                  onBlur={() => setIsDropdownOpen(false)}
                />

                <div className=" absolute right-3 top-3 pointer-events-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2733 6.40071C14.2767 6.24486 14.2315 6.09181 14.1439 5.96285C14.0564 5.83388 13.9307 5.7354 13.7846 5.68111C13.6385 5.62681 13.4791 5.6194 13.3285 5.65989C13.178 5.70039 13.0439 5.78678 12.9447 5.90706L9.01305 10.4964L5.0828 5.90706C5.02165 5.82386 4.94402 5.75418 4.85469 5.70238C4.76536 5.65059 4.66627 5.61779 4.56368 5.60606C4.46109 5.59432 4.3572 5.60389 4.25848 5.63417C4.15976 5.66445 4.06833 5.71479 3.98997 5.78203C3.9116 5.84927 3.84804 5.93197 3.80311 6.02495C3.75819 6.11792 3.73296 6.21917 3.72898 6.32235C3.725 6.42554 3.7423 6.52843 3.77993 6.62459C3.81756 6.72075 3.87463 6.8081 3.94758 6.88118L8.44324 12.1356C8.51365 12.2181 8.60105 12.2844 8.69956 12.3298C8.79806 12.3752 8.90527 12.3987 9.01375 12.3987C9.12222 12.3987 9.22944 12.3752 9.32794 12.3298C9.42644 12.2844 9.51393 12.2181 9.58434 12.1356L14.0843 6.88118C14.2022 6.74845 14.2693 6.5782 14.2734 6.40071H14.2733Z"
                      fill="#050505"
                    />
                  </svg>
                </div>
                {isDropdownOpen === "period" && (
                  <div className="p-3 z-10 text-gray-700 text-sm absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg ">
                    <div className="dropdown-item p-2 cursor-pointer ">
                      Option 1
                    </div>
                    <div className="dropdown-item p-2 cursor-pointer ">
                      Option 2
                    </div>
                    <div className="dropdown-item p-2 cursor-pointer">
                      Option 3
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-8"></hr>
        <div className="flex items-center w-11/12 m-auto mt-0 ">
          <h1 className="font-bold text-base text-gray-700 mr-4 ">
            Results: 1-10 from 88
          </h1>
          <p className="text-gray-700 text-base">Total:</p>{" "}
          <h1 className="font-bold text-base text-gray-700 ml-1">
            {" "}
            1.112232133 $
          </h1>
        </div>
        <div className="flex flex-row justify-between w-11/12 m-auto">
          <div className="flex gap-2 items-center my-4 text-xs">
            <button
              onFocus={() => setIsDropdownOpen("shipment")}
              onBlur={() => setIsDropdownOpen(false)}
              className="border border-gray-400  p-1 pl-2 pr-6  rounded-full relative focus:text-purple-700 focus:border-purple-700 text-left"
            >
              Shipment{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute  top-1 right-1"
              >
                <path
                  d="M12.6873 5.6895C12.6904 5.55097 12.6502 5.41492 12.5724 5.30029C12.4945 5.18565 12.3829 5.09812 12.253 5.04985C12.1231 5.00159 11.9814 4.995 11.8476 5.031C11.7138 5.06699 11.5945 5.14378 11.5064 5.2507L8.0116 9.33013L4.51805 5.2507C4.46369 5.17674 4.39468 5.1148 4.31528 5.06876C4.23587 5.02272 4.14779 4.99357 4.0566 4.98314C3.96541 4.97271 3.87307 4.98122 3.78532 5.00813C3.69757 5.03505 3.61629 5.07979 3.54664 5.13956C3.47698 5.19933 3.42048 5.27284 3.38055 5.35549C3.34061 5.43813 3.31819 5.52813 3.31465 5.61985C3.31111 5.71157 3.32649 5.80303 3.35994 5.8885C3.39338 5.97398 3.44412 6.05163 3.50896 6.11659L7.5051 10.7872C7.56769 10.8605 7.64538 10.9194 7.73294 10.9598C7.8205 11.0002 7.9158 11.0211 8.01222 11.0211C8.10864 11.0211 8.20394 11.0002 8.2915 10.9598C8.37906 10.9194 8.45682 10.8605 8.51942 10.7872L12.5194 6.11659C12.6242 5.9986 12.6838 5.84727 12.6875 5.6895H12.6873Z"
                  fill="#868584"
                />
              </svg>
              {isDropdownOpen === "shipment" && (
                <div className="p-3 z-10 text-gray-700 text-sm absolute top-9 left-0 w-56 bg-white border border-gray-300 rounded-lg shadow-lg ">
                  <div className="dropdown-item p-2 cursor-pointer ">
                    Option 1
                  </div>
                  <div className="dropdown-item p-2 cursor-pointer ">
                    Option 2
                  </div>
                  <div className="dropdown-item p-2 cursor-pointer">
                    Option 3
                  </div>
                </div>
              )}
            </button>
            <button className="border border-gray-400 p-1 px-4   rounded-full relative focus:text-purple-700 focus:border-purple-700 text-justify">
              Print Voucher
            </button>
            <button className="border border-gray-400 p-1 px-4  rounded-full relative focus:text-purple-700 focus:border-purple-700 text-justify">
              Relist
            </button>
            <button className="border border-gray-400 p-1 px-4  rounded-full relative focus:text-purple-700 focus:border-purple-700 text-justify">
              Leave a Review
            </button>
            <button className="border border-gray-400 p-1 px-4  rounded-full relative focus:text-purple-700 focus:border-purple-700 text-justify">
              Add to Archive
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <p>
              <span className="underline">Print</span> l
              <span className="underline"> Download Report</span>
            </p>
            <button
              onFocus={() => setIsDropdownOpen("sort")}
              onBlur={() => setIsDropdownOpen(false)}
              className="border border-gray-400 p-1 px-4 w-20 rounded-full relative focus:text-purple-700 focus:border-purple-700 text-justify"
            >
              Sort{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute  top-1 right-3"
              >
                <path
                  d="M12.6873 5.6895C12.6904 5.55097 12.6502 5.41492 12.5724 5.30029C12.4945 5.18565 12.3829 5.09812 12.253 5.04985C12.1231 5.00159 11.9814 4.995 11.8476 5.031C11.7138 5.06699 11.5945 5.14378 11.5064 5.2507L8.0116 9.33013L4.51805 5.2507C4.46369 5.17674 4.39468 5.1148 4.31528 5.06876C4.23587 5.02272 4.14779 4.99357 4.0566 4.98314C3.96541 4.97271 3.87307 4.98122 3.78532 5.00813C3.69757 5.03505 3.61629 5.07979 3.54664 5.13956C3.47698 5.19933 3.42048 5.27284 3.38055 5.35549C3.34061 5.43813 3.31819 5.52813 3.31465 5.61985C3.31111 5.71157 3.32649 5.80303 3.35994 5.8885C3.39338 5.97398 3.44412 6.05163 3.50896 6.11659L7.5051 10.7872C7.56769 10.8605 7.64538 10.9194 7.73294 10.9598C7.8205 11.0002 7.9158 11.0211 8.01222 11.0211C8.10864 11.0211 8.20394 11.0002 8.2915 10.9598C8.37906 10.9194 8.45682 10.8605 8.51942 10.7872L12.5194 6.11659C12.6242 5.9986 12.6838 5.84727 12.6875 5.6895H12.6873Z"
                  fill="#868584"
                />
              </svg>
              {isDropdownOpen === "sort" && (
                <div className="p-3 z-10 text-gray-700 text-sm absolute top-10 left-0 w-56 bg-white border border-gray-300 rounded-lg shadow-lg ">
                  <div className="dropdown-item p-2 cursor-pointer ">
                    Option 1
                  </div>
                  <div className="dropdown-item p-2 cursor-pointer ">
                    Option 2
                  </div>
                  <div className="dropdown-item p-2 cursor-pointer">
                    Option 3
                  </div>
                </div>
              )}
            </button>
            <p>Result per page</p>
            <button className="border border-gray-300 p-1 pr-4 rounded-sm relative focus:text-purple-700 focus:border-purple-700 text-left">
              50{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute  top-2 right-"
              >
                <path
                  d="M12.6873 5.6895C12.6904 5.55097 12.6502 5.41492 12.5724 5.30029C12.4945 5.18565 12.3829 5.09812 12.253 5.04985C12.1231 5.00159 11.9814 4.995 11.8476 5.031C11.7138 5.06699 11.5945 5.14378 11.5064 5.2507L8.0116 9.33013L4.51805 5.2507C4.46369 5.17674 4.39468 5.1148 4.31528 5.06876C4.23587 5.02272 4.14779 4.99357 4.0566 4.98314C3.96541 4.97271 3.87307 4.98122 3.78532 5.00813C3.69757 5.03505 3.61629 5.07979 3.54664 5.13956C3.47698 5.19933 3.42048 5.27284 3.38055 5.35549C3.34061 5.43813 3.31819 5.52813 3.31465 5.61985C3.31111 5.71157 3.32649 5.80303 3.35994 5.8885C3.39338 5.97398 3.44412 6.05163 3.50896 6.11659L7.5051 10.7872C7.56769 10.8605 7.64538 10.9194 7.73294 10.9598C7.8205 11.0002 7.9158 11.0211 8.01222 11.0211C8.10864 11.0211 8.20394 11.0002 8.2915 10.9598C8.37906 10.9194 8.45682 10.8605 8.51942 10.7872L12.5194 6.11659C12.6242 5.9986 12.6838 5.84727 12.6875 5.6895H12.6873Z"
                  fill="#868584"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>





      {/* cart table */}
      <div className="mt-8">
      <CartTable />
      </div>
    </div>
  );
};

export default Notyetpaid;
