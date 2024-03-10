import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
      <div className=" bg-white w-96 m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            onClick={() => navigate(`/prod/${props.id}`)}
            className=" object-cover  cursor-pointer p-2"
            src={props.photo}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div
            onClick={() => navigate(`/prod/${props.id}`)}
            className="title font-semibold text-xs my-1 cursor-pointer"
          >
            {props.title}
          </div>
          <div className="pricing flex items-center">
            {" "}
            <div className="price ">${props.price}</div>
          </div>
        </div>
      </div>
  );
}
export default Card;

/*
                <div className="ml-2 text-xs ">
                $<del>1000</del>
              </div>

  <div className="flex items-center my-2">
              <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                Buy Now
              </button>
              <button className="border px-3 py-1 text-xs rounded-lg ">
                Add to Cart
              </button>
  </div>




   */
