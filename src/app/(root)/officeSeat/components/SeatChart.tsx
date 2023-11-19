import React from "react";
import Header from "./text/Header";
import TopRow from "./row/TopRow";
import MainArea from "./row/MainArea";
import Footer from "./text/Footer";
import BottomRow from "./row/BottomRow";

const SeatChart = () => {
  return (
    <div className="p-5">
      <Header />
      <TopRow />
      <MainArea />
      <BottomRow />
      <Footer />
    </div>
  );
};

export default SeatChart;
