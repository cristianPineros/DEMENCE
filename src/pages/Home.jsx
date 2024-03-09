import { React, useEffect, useRef } from "react";
import { styles, layout } from "../style";
import { Video } from "../components";
import { useMediaQuery } from "react-responsive";
import Card from "../components/Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { cardsInfo } from "../constants";

const Home = () => {
  useEffect(() => {
    let currentLocation = window.location.href;
    const hasCommentAnchor = currentLocation.includes("/#");
    if (hasCommentAnchor) {
      const anchorCommentId = `${currentLocation.substring(
        currentLocation.indexOf("#") + 1
      )}`;
      const anchorComment = document.getElementById(anchorCommentId);
      if (anchorComment == "test") {
        anchorComment.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 10000;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 10000;
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const ref = useRef(null);

  return (
    <div className="bg-white w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <div className={`bg-primary sticky ${styles.flexStart}`}>
        <Video />
      </div>

      <div ref={ref} className="relative w-screen h-screen ">
        {isDesktopOrLaptop && (
          <div
            className={`${styles.boxWidth} ${styles.paddingY} ${styles.paddingX}`}
          >
            <div className="relative">
              <div className="absolute right-0 -top-5 ">
                <button
                  onClick={scrollLeft}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronRight />
                </button>
              </div>
              <div
                id="content"
                className="p-4 flex items-center justify-start  overflow-hidden  scroll-smooth  scrollbar-hide "
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
          </div>
        )}
        {isTabletOrMobile && (
          <div id="test"className={`flex-col flex items-center`}>
            {cardsInfo.map((card) => {
              return <Card {...card} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;