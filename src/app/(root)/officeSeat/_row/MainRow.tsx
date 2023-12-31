import SeatGrid from "./components/SeatGrid";

const MainRow = () => (
  <div className="grid grid-cols-[6fr_7fr_1fr] gap-4 text-center">
    <div className="flex flex-col gap-6 mb-8">
      <SeatGrid color="red" rows={2} cols={3} gridId={"1"} />
      <SeatGrid color="red" rows={2} cols={3} gridId={"2"} />
    </div>
    <div className="flex flex-col gap-6 mb-8">
      <SeatGrid color="gray" rows={2} cols={4} gridId={"3"} />
      <SeatGrid color="gray" rows={2} cols={4} gridId={"4"} />
    </div>
    <div className="bg-gray-200 grid grid-rows-2 grid-cols-1 gap-2 mb-5">
      <div>水</div>
      <div>備品</div>
    </div>
  </div>
);

export default MainRow;
