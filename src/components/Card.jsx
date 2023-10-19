import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {

  useEffect(

    () => {
      console.log([props])
    }, []
  )

 
  const navigate = useNavigate();
    return (
      <>
        <div className="card bg-white w-96 m-2 rounded-lg shadow-lg">
          <div className="top">
            <img
              className=" object-cover  p-2"
              src={props.photo}
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div onClick={()=>navigate(`/prod/${props.id}`)} className= "title font-semibold text-xs my-1 cursor-pointer" >
            {props.title}
            </div>
            <div className="pricing flex items-center">
              {" "}
              <div className="price ">${props.price}</div>
              <div className="ml-2 text-xs ">
                $<del>1000</del>
              </div>
            </div>
            <div className="flex items-center my-2">
              <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                Buy Now
              </button>
              <button className="border px-3 py-1 text-xs rounded-lg ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Card;