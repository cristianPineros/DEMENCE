import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { cardsInfo } from "../constants";
import { useEffect, useState } from "react";
function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= isMobile ? 150 : 1000;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += isMobile ? 150 : 1000;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 -top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start  overflow-hidden  scroll-smooth  scrollbar-hide "
      >
        {cardsInfo.map((card) => {
          return (
            <div>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
