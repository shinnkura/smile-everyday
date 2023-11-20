import React from "react";
import SeatGrid from "./components/SeatGrid";

const BottomRow = () => {
  return (
    <div className="grid grid-cols-[1fr_8fr_8fr_8fr_1fr] gap-4 text-center">
      <div className="bg-gray-200">集中ブース</div>
      <div className="flex flex-col gap-2">
        <SeatGrid color="red" rows={3} cols={2} />
        <SeatGrid color="red" rows={1} cols={1} />
        <SeatGrid color="red" rows={2} cols={2} />
      </div>
      <div className="flex flex-col gap-2">
        <SeatGrid color="green" rows={1} cols={1} />
        <SeatGrid color="green" rows={3} cols={2} />
        <SeatGrid color="green" rows={1} cols={1} />
        <SeatGrid color="green" rows={2} cols={2} />
      </div>
      <div className="flex flex-col gap-2">
        <SeatGrid color="red" rows={4} cols={2} />
        <SeatGrid color="red" rows={1} cols={2} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-200">集中ブース</div>
        <div className="bg-gray-200">集中ブース</div>
      </div>
    </div>
  );
};

export default BottomRow;
