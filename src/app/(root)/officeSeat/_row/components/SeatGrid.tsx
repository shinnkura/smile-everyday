import React from "react";
import EditableBox from "./EditableBox";
import { getColorClass } from "../util/colorUtils";

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
        className={`${getColorClass(color)} p-2 m-1`}
        key={`${rowIndex}-${colIndex}`}
      >
        <EditableBox color={color} />
      </div>
    ));

  // 行を生成する関数
  const renderRows = () =>
    Array.from({ length: rows }, (_, rowIndex) => (
      <div className="flex justify-evenly" key={rowIndex}>
        {renderSeats(rowIndex)}
      </div>
    ));

  // rowsとcolsが1の場合のスタイル
  const centerStyle =
    rows === 1 && cols === 1 ? "flex justify-center items-center" : "";

  return <div className={`${centerStyle}`}>{renderRows()}</div>;
};

export default SeatGrid;
