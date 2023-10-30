import React from "react";
import { CartContext } from "../service/CartContext";
import { useContext } from "react";
import { prodInfo } from "../constants";


const ShoppingCart = ({closeShoppingCart}) => {
  const cart = useContext(CartContext);
  const object = prodInfo;
  const items = cart.items;

  return (
    <div className="w-screen h-screen flex absolute z-10 over">
      <div className="bg-opacity-30 backdrop-blur-sm bg-white flex-1" onClick={closeShoppingCart}></div>
      <div className="w-full md:w-[400px] bg-white  ani">
        <div className="block box-border w-10/12 mx-10 my-10 h-4/6 overflow-y-auto hide-scrollbar">
          {items.map((card) => {
            const id = card.id;
            return (
              <div className="grid grid-rows-2 grid-flow-col gap-2">
                <div className="row-span-2 ...">
                  {" "}
                  <img
                    src={object[id].picture1}
                    alt=""
                    className="my-3 w-40 h-auto rounded-md cursor-pointer"
                  />
                </div>
                <div className="col-span-1 ...">
                  <p className="mx-5 my-5  font-bold">{object[id].title}</p>
                  <h6 className="mx-5 my-5 font-semibold">
                    {card.size} - {object[id].price}
                  </h6>
                </div>
                <div class="row-span-1 col-span-2 ...">
                  <button
                    className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                    onClick={() => cart.decreaseQuantity(id,card.size)}
                  >
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">{card.quantity}</span>
                  <button
                    className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                    onClick={() => cart.increaseQuantity(id,card.size)}
                  >
                    +
                  </button>
                  <button className="mx-4" 
                  onClick={() => {
                    cart.deleteFromCart(id, card.size);
                  }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      
                    >
                      <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-5 w-full border-t-2 border-primary">
          <div className="flex w-full">
            <div className="w-1/2">
              <h4 className="text-start">TOTAL</h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-end font-bold">
                <span>${cart.getTotalCost()}</span>
              </h4>
            </div>
          </div>
          <div className="text-center my-12">
            <button className="w-full border border-[#9BC444] text-lg font-bold">
              <span>Proceed To Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
