// TODO: 保育、栄養士、エンジニアなどで、席のカラーを決める
// TODO: 人の名前で検索できるようにする

import EditableBox from "./components/EditableBox";
import SeatChart from "./components/SeatChart";

const page = () => {
  return (
    <div>
      <div className="head-text text-left">OfficeSeat</div>
      <EditableBox />
      <SeatChart />
    </div>
  );
};

export default page;
