import React from "react";
import Header from "./text/Header";
import TopRow from "./row/TopRow";
import MainArea from "./row/MainArea";
import Footer from "./text/Footer";
import BottomRow from "./row/BottomRow";
import SeatGrid from "./SeatGrid";

const SeatChart = () => {
  return (
    <div className="p-5">
      <Header />
      <TopRow />
      <MainArea />
      <SeatGrid rows={2} cols={3} />
      <BottomRow />
      <Footer />
    </div>
  );
};

export default SeatChart;
