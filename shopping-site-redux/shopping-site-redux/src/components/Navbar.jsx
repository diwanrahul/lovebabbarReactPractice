/* eslint-disable no-unused-vars */
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 rounded-full flex justify-center items-center gap-3 text-2xl text-slate-100">
            <img
              className="rounded-full"
              src="https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/303098798_411562557742620_6162220780797501858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=tC01-pwT2CgAX9jEnrO&_nc_ht=scontent.fbho3-2.fna&oh=00_AfDYJE3OIgYz0u4U0QEB6YVVzBRh6lwzlKMBU_9V5jtA2Q&oe=6591D842"
              alt=""
              width="60px"
              height="60px"
            />{" "}
            DatteBayo Store
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaCartShopping className="text-2xl" />
              {cart.length > 0 && (
                <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
