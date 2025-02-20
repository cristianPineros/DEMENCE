import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../service/CartContext";
import { useContext } from "react";
import { prodInfo } from "../constants";

const ProdCheckOut = ({ openShoppingCart }) => {
  const { id } = useParams();

  const object = prodInfo;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(object[id].id);

  const [images, setImages] = useState({
    img1: object[id].picture1,
    img2: object[id].picture2,
    img3: object[id].picture3,
    img4: object[id].picture4,
  });

  const [selectedSize, setSelectedSize] = useState(""); // State to store the selected size

  console.log(cart.items);
  const sizeOptions = ["S", "M", "L"];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="ProdCheckOut flex flex-col justify-between lg:flex-row gap-16 lg:items-center ">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-[#9BC444] font-semibold">
            {object[id].subDescription}
          </span>
          <h1 className="text-3xl font-bold">{object[id].title}</h1>
        </div>
        <p className="text-gray-700">{object[id].description}</p>
        <h6 className="text-2xl font-semibold">{object[id].price}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center gap-10">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-[#9BC444] text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-[#9BC444] text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className="w-64">
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="block w-full mt-1 p-2 border rounded-md bg-white text-gray-700"
            >
              <option value="">Select a size</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={() => {
            cart.addMultipleToCart(object[id].id, selectedSize, amount);
            openShoppingCart();
          }}
          className="bg-[#9BC444] text-white font-semibold py-3 px-16 rounded-xl h-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdCheckOut;