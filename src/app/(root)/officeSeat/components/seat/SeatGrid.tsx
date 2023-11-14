interface SectionProps {
  color: string;
  rows: number;
  cols: number;
  sectionName: string;
}

const SeatGrid: React.FC<SectionProps> = ({
  color,
  rows,
  cols,
  sectionName,
}) => {
  const seats = Array.from(
    { length: rows * cols },
    (_, i) => `${sectionName} ${i + 1}`
  );
  return (
    <div className={` grid grid-rows-${rows} grid-cols-${cols} gap-2 py-4`}>
      {seats.map((seat) => (
        <div className={`bg-${color}-400 py-2`} key={seat}>
          {seat}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
