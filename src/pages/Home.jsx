import React from "react";
import styles from "../style";
import { Video, Carousel } from "../components";

const Home = () => (
  <div className="bg-primary w-screen h-screen overflow-y-scroll overflow-x-hidden">
    <div className={`bg-primary sticky ${styles.flexStart}`}>
      <Video />
    </div>

    <div
      className={`bg-white w-screen h-screen ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Carousel />
      </div>
    </div>
  </div>
);

export default Home;
