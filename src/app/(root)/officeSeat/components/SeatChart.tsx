import React from "react";

// SeatChart コンポーネント
const SeatChart = () => {
  return (
    <div className="p-5">
      <div className="mb-5">
        <h1 className="text-xl font-bold text-center">座席表</h1>
        <p className="text-center">[2023/08/17]</p>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-1/4 px-2">
          <div className="mb-4 p-2 bg-gray-200">ロッカー</div>
        </div>

        <div className="w-1/2 px-2">
          <div className="mb-4 p-2 bg-gray-300">お菓子</div>
        </div>

        <div className="w-1/4 px-2">
          <div className="mb-4 p-2 bg-gray-200">入り口</div>
        </div>
      </div>

      <div className="grid grid-cols-[4fr_4fr_1fr] gap-4">
        <div className="flex flex-col gap-2">
          <div className="bg-red-400 grid grid-rows-2 grid-cols-3 gap-2">
            <div>左上 1</div>
            <div>左上 2</div>
            <div>左上 3</div>
            <div>左上 4</div>
            <div>左上 5</div>
            <div>左上 6</div>
          </div>
          <div className="bg-red-500 grid grid-rows-2 grid-cols-3 gap-2">
            <div>左下 1</div>
            <div>左下 2</div>
            <div>左下 3</div>
            <div>左下 4</div>
            <div>左下 5</div>
            <div>左下 6</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-green-400 grid grid-rows-2 grid-cols-4 gap-2">
            <div>中央上 1</div>
            <div>中央上 2</div>
            <div>中央上 3</div>
            <div>中央上 4</div>
            <div>中央上 5</div>
            <div>中央上 6</div>
            <div>中央上 7</div>
            <div>中央上 8</div>
          </div>
          <div className="bg-green-500 grid grid-rows-2 grid-cols-4 gap-2">
            <div>中央下 1</div>
            <div>中央下 2</div>
            <div>中央下 3</div>
            <div>中央下 4</div>
            <div>中央下 5</div>
            <div>中央下 6</div>
            <div>中央下 7</div>
            <div>中央下 8</div>
          </div>
        </div>
        <div className="bg-blue grid grid-rows-2 grid-cols-1 gap-2">
          <div>右 1</div>
          <div>右 2</div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="bg-red-400">左 1x1</div>

        <div className="flex flex-col gap-2">
          <div className="bg-red-500 grid grid-rows-3 grid-cols-2 gap-2">
            <div>左中央上 1</div>
            <div>左中央上 2</div>
            <div>左中央上 3</div>
            <div>左中央上 4</div>
            <div>左中央上 5</div>
            <div>左中央上 6</div>
          </div>
          <div className="bg-red-600 grid grid-rows-2 grid-cols-2 gap-2">
            <div>左中央下 1</div>
            <div>左中央下 2</div>
            <div>左中央下 3</div>
            <div>左中央下 4</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-green-400">中央上 1x1</div>
          <div className="bg-green-500 grid grid-rows-3 grid-cols-2 gap-2">
            <div>中央上中央 1</div>
            <div>中央上中央 2</div>
            <div>中央上中央 3</div>
            <div>中央上中央 4</div>
            <div>中央上中央 5</div>
            <div>中央上中央 6</div>
          </div>
          <div className="bg-green-600">中央下中央 1x1</div>
          <div className="bg-green-700 grid grid-rows-2 grid-cols-2 gap-2">
            <div>中央下 1</div>
            <div>中央下 2</div>
            <div>中央下 3</div>
            <div>中央下 4</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-blue grid grid-rows-4 grid-cols-2 gap-2">
            <div>右中央上 1</div>
            <div>右中央上 2</div>
            <div>右中央上 3</div>
            <div>右中央上 4</div>
            <div>右中央上 5</div>
            <div>右中央上 6</div>
            <div>右中央上 7</div>
            <div>右中央上 8</div>
          </div>
          <div className="bg-blue grid grid-rows-1 grid-cols-2 gap-2">
            <div>右中央下 1</div>
            <div>右中央下 2</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-blue">右上 1x1</div>
          <div className="bg-blue">右下 1x1</div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>※座席は100席限定</p>
      </div>
    </div>
  );
};

export default SeatChart;
