import React from "react";
import SeatGrid from "./SeatGrid";

const SeatChart = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h1 className="text-xl font-bold text-center">座席表</h1>
        <p className="text-center">[2023/08/17]</p>
      </div>

      <div className="flex flex-wrap -mx-2 text-center">
        <div className="w-1/4 px-2">
          <div className="mb-6 p-2 bg-gray-200">ロッカー</div>
        </div>
        <div className="w-1/2 px-2">
          <div className="mb-6 p-2 bg-gray-300">お菓子</div>
        </div>
        <div className="w-1/4 px-2">
          <div className="mb-6 p-2 bg-gray-200">入り口</div>
        </div>
      </div>

      <div className="grid grid-cols-[7fr_7fr_1fr] gap-4 text-center">
        <div className="flex flex-col gap-2 mb-8">
          <SeatGrid color="red" rows={2} cols={3} sectionName="左上" />
          <SeatGrid color="red" rows={2} cols={3} sectionName="左下" />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <SeatGrid color="green" rows={2} cols={4} sectionName="中央上" />
          <SeatGrid color="green" rows={2} cols={4} sectionName="中央下" />
        </div>
        <div className="bg-gray-200 grid grid-rows-2 grid-cols-1 gap-2 mb-5">
          <div>水</div>
          <div>備品</div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_8fr_8fr_8fr_1fr] gap-4 text-center">
        <div className="bg-gray-200">集中ブース</div>
        <div className="flex flex-col gap-2">
          <SeatGrid color="red" rows={3} cols={2} sectionName="左中央上" />
          <div className="bg-red-400 py-2">左中央中央 1x1</div>
          <SeatGrid color="red" rows={2} cols={2} sectionName="左中央下" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-green-400 py-2">中央上 1x1</div>
          <SeatGrid color="green" rows={3} cols={2} sectionName="中央上中央" />
          <div className="bg-green-600 py-2">中央下中央 1x1</div>
          <SeatGrid color="green" rows={2} cols={2} sectionName="中央下" />
        </div>
        <div className="flex flex-col gap-2">
          <SeatGrid color="red" rows={4} cols={2} sectionName="右中央上" />
          <SeatGrid color="red" rows={1} cols={2} sectionName="右中央下" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gray-200">集中ブース</div>
          <div className="bg-gray-200">集中ブース</div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>※座席は100席限定</p>
      </div>
    </div>
  );
};

export default SeatChart;
