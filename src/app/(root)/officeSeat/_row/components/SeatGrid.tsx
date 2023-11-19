import React from "react";
import EditableBox from "./EditableBox";

interface SeatGridProps {
  rows: number;
  cols: number;
  color: string; // ここでは単に文字列として定義
}

const SeatGrid: React.FC<SeatGridProps> = ({ rows, cols, color }) => {
  // 色に基づいてスタイルを生成する関数
  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-300";
      case "green":
        return "bg-green-300";
      case "blue":
        return "bg-blue-300";
      // その他の色に対するケースも追加
      default:
        return "bg-gray-300"; // デフォルトの色
    }
  };

  // 座席を生成する関数
  const renderSeats = (rowIndex: number) =>
    Array.from({ length: cols }, (_, colIndex) => (
      <div
        className={`border-2 border-gray-300 ${getColorClass(color)} p-2 m-1`}
        key={`${rowIndex}-${colIndex}`}
      >
        <EditableBox />
      </div>
    ));

  // 行を生成する関数
  const renderRows = () =>
    Array.from({ length: rows }, (_, rowIndex) => (
      <div className="flex" key={rowIndex}>
        {renderSeats(rowIndex)}
      </div>
    ));

  return <div>{renderRows()}</div>;
};

export default SeatGrid;
