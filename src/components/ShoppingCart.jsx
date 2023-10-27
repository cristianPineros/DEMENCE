import React from "react";
import { CartContext } from "../service/CartContext";
import { useContext } from "react";
import { prodInfo } from "../constants";
import { useState } from "react";

const ShoppingCart = () => {
  const cart = useContext(CartContext);
  const object = prodInfo;
  const items = cart.items;
  const [amount, setAmount] = useState(1);

  return (
    <div className="w-screen h-screen flex absolute z-10">
      <div className="bg-opacity-30 backdrop-blur-sm bg-white flex-1"></div>
      <div className="w-full md:w-[400px] bg-white ani">
        <div className=" block box-border w-auto mx-10 my-10 h-full overflow-hidden">
          {items.map((card) => {
            const id = card.id;
            return (
              <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div class="row-span-2 ...">
                  {" "}
                  <img
                    src={object[id].picture1}
                    alt=""
                    className="my-3 w-40 h-auto rounded-md cursor-pointer"
                  />
                </div>
                <div class="col-span-1 ...">
                  <p className="mx-5 my-5  font-bold">{object[id].title}</p>
                  <h6 className="mx-5 my-5 font-semibold">
                    {object[id].price}
                  </h6>
                </div>
                <div class="row-span-1 col-span-2 ...">
                  <button
                    className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                    onClick={() => setAmount((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">{amount}</span>
                  <button
                    className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
