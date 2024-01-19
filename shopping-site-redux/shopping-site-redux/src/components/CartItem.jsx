/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed successfully");
  };
  return (
    <div className=" border relative border-black rounded-xl">
      <div className="flex p-3 gap-5 ">
        <div className="w-[300px] ">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <div>
              <p className="text-green-500 font-semibold ">₹ {item.price}</p>
            </div>
            <div
              className="bg-red-300 p-2 rounded-full cursor-pointer"
              onClick={removeFromCart}
            >
              <MdDelete className="text-red-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
