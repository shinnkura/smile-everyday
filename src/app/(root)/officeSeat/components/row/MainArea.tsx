import SeatGrid from "../seat/SeatGrid";

const MainArea = () => (
  <div className="grid grid-cols-[6fr_7fr_1fr] gap-4 text-center">
    <div className="flex flex-col gap-2 mb-8">
      <SeatGrid color="red" rows={2} cols={3} />
      <SeatGrid color="red" rows={2} cols={3} />
    </div>
    <div className="flex flex-col gap-2 mb-8">
      <SeatGrid color="sky" rows={2} cols={4} />
      <SeatGrid color="yellow" rows={2} cols={4} />
    </div>
    <div className="bg-gray-200 grid grid-rows-2 grid-cols-1 gap-2 mb-5">
      <div>水</div>
      <div>備品</div>
    </div>
  </div>
);

export default MainArea;
