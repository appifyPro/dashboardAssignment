import React, { useState } from "react";
import Image from "next/image";
const CartTable = () => {
  const [selectAllOrders, setSelectAllOrders] = useState(false);
  const handleSelectAllOrders = () => {
    setSelectAllOrders(!selectAllOrders);
    const radioButtons = document.querySelectorAll('input[name="orderSelect"]');
    radioButtons.forEach((button) => {
      button.checked = !selectAllOrders;
    });
  };
  return (
    <div>
      <table className="w-full text-xs border-spacing-y-4">
        <thead>
          <tr>
            <th className="px-4 py-2 outline-none ">
              <input
                type="radio"
                name="selectAllOrders"
                checked={selectAllOrders}
                onChange={handleSelectAllOrders}
              />
            </th>

            <th className="px-4 py-2 outline-none ">Order</th>
            <th className="px-4 py-2 ">{/* image */}</th>
            <th className="px-4 py-2 ">Quantity</th>
            <th className="px-4 py-2  border-gray-300">Subtotal</th>
            <th className="px-4 py-2 ">In Total</th>
            <th className="px-4 py-2 ">Sold On</th>
            <th className="px-4 py-2 ">Paid On</th>
            <th className="px-4 py-2 ">Delivery Status</th>
            <th className="px-4 py-2 ">Custom Loyalty</th>
            <th className="px-4 py-2 ">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y-[15px] divide-gray-100 rounded-4xl">
          <tr className="bg-white rounded-4xl ">
            <td className="px-4 py-2 rounded-lg">
              <input type="radio" name="orderSelect" />
            </td>
            <td className="px-4 py-2  text-purple-600 text-xs font-semibold">
              <p className="underline">28732318723812u21oi</p>
              <div className="h-28 w-28 mt-2 rounded-md flex justify-center items-center bg-slate-200">
                <Image src="/imageicon.svg" width={20} height={20}></Image>
              </div>
            </td>
            <td className="px-4 py-2  text-xs max-w-44 align-baseline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur eum, quasi expedita ipsam eveniet, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem reprehenderit
              praesentium ullam eaque,{" "}
            </td>
            <td className="px-4 py-2 text-xs align-baseline">
              <span className="font-bold mr-1">1</span>
              <span>(8 available)</span>
            </td>
            <td className="px-4 py-2 font-bold align-baseline">$234</td>
            <td className="px-4 py-2  align-baseline text-purple-500 underline font-bold">
              $20
            </td>
            <td className="px-4 py-2 align-baseline">2024-05-01</td>
            <td className="px-4 py-2 align-baseline">2024-05-01</td>
            <td className="px-4 py-2  align-baseline">Shipped</td>
            <td className="px-4 py-2 align-baseline">5%</td>
            <td className="px-4 py-2  align-baseline">
              <div className="dropdown inline-block relative">
                <button className=" text-gray-700 font-bold py-2 px-4 rounded inline-flex text-2xl items-center">
                  <span className="mr-1">...</span>
                </button>
                <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>

          {/* second row */}
          <tr className="bg-white rounded-4xl mb-5">
            <td className="px-4 py-2 rounded-lg">
              <input type="radio" name="orderSelect" />
            </td>
            <td className="px-4 py-2  text-purple-600 text-xs font-semibold">
              <p className="underline">28732318723812u21oi</p>
              <div className="h-28 w-28 mt-2 rounded-md flex justify-center items-center bg-slate-200">
                <Image src="/imageicon.svg" width={20} height={20}></Image>
              </div>
            </td>
            <td className="px-4 py-2  text-xs max-w-44 align-baseline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur eum, quasi expedita ipsam eveniet, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Autem reprehenderit
              praesentium ullam eaque,{" "}
            </td>
            <td className="px-4 py-2 text-xs align-baseline">
              <span className="font-bold mr-1">1</span>
              <span>(8 available)</span>
            </td>
            <td className="px-4 py-2 font-bold align-baseline">$234</td>
            <td className="px-4 py-2  align-baseline text-purple-500 underline font-bold">
              $20
            </td>
            <td className="px-4 py-2 align-baseline">2024-05-01</td>
            <td className="px-4 py-2 align-baseline">2024-05-01</td>
            <td className="px-4 py-2  align-baseline">Shipped</td>
            <td className="px-4 py-2 align-baseline">5%</td>
            <td className="px-4 py-2  align-baseline">
              <div className="dropdown inline-block relative">
                <button className=" text-gray-700 font-bold py-2 px-4 rounded inline-flex text-2xl items-center">
                  <span className="mr-1">...</span>
                </button>
                <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 1
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 2
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
