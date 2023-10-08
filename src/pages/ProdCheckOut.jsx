import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { useParams } from "react-router-dom";
import { prodInfo } from "../constants";

const ProdCheckOut = () => {

  const object = prodInfo;
  
  const {id} = useParams();
  
  const [images, setImages] = useState({
    img1: object[id].picture1,
    img2: object[id].picture2,
    img3: object[id].picture3,
    img4: object[id].picture4
  });



  
  
/*  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  }); */

  
  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  const [selectedSize, setSelectedSize] = useState(null);
  const availableSizes = ["S", "M", "L", "XL"];

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  return (
    <div className="ProdCheckOut flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
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
          <span className=" text-violet-600 font-semibold">
            {object[id].subDescription}
          </span>
          <h1 className="text-3xl font-bold">{object[id].title}</h1>
        </div>
        <p className="text-gray-700">{object[id].description}</p>
        <h6 className="text-2xl font-semibold">{object[id].price}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
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

          <div className=" card flex flex-row justify-content-center gap-3">
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                onChange={onIngredientsChange}
                checkbox
                checked={ingredients.includes("Cheese")}
              />
              <label htmlFor="ingredient1" className="ml-2">
                S
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient2"
                name="pizza"
                value="Mushroom"
                onChange={onIngredientsChange}
                checked={ingredients.includes("Mushroom")}
              />
              <label htmlFor="ingredient2" className="ml-2">
                M
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient3"
                name="pizza"
                value="Pepper"
                onChange={onIngredientsChange}
                checked={ingredients.includes("Pepper")}
              />
              <label htmlFor="ingredient3" className="ml-2">
                L
              </label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient4"
                name="pizza"
                value="Onion"
                onChange={onIngredientsChange}
                checked={ingredients.includes("Onion")}
              />
              <label htmlFor="ingredient4" className="ml-2">
                X
              </label>
            </div>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdCheckOut;
