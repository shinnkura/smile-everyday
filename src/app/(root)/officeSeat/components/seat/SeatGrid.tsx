import React from "react";
import EditableBox from "../editableBox/EditableBox";

interface SeatGridProps {
  rows: number;
  cols: number;
  color: string;
}

const SeatGrid: React.FC<SeatGridProps> = ({ rows, cols, color }) => {
  // 座席を生成する関数
  const renderSeats = (rowIndex: number) =>
    Array.from({ length: cols }, (_, colIndex) => (
      <div
        className={`border-2 border-gray-300 bg-${color}-300 p-2 m-1`}
        key={rowIndex}
      >
        {/* 座席 {rowIndex * cols + colIndex + 1} */}
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
