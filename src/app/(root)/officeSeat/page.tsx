// TODO: 保育、栄養士、エンジニアなどで、席のカラーを決める
// TODO: 人の名前で検索できるようにする

import BottomRow from "./components/BottomRow";
import MainRow from "./components/MainRow";
import TopRow from "./components/TopRow";

const page = () => {
  return (
    <div>
      <div className="head-text text-left">OfficeSeat</div>
      <div className="p-5">
        <div className="mb-5">
          <h1 className="text-xl font-bold text-center">座席表</h1>
          <p className="text-center">[2023/08/17]</p>
        </div>
        <TopRow />
        <MainRow />
        <BottomRow />
      </div>
    </div>
  );
};

export default page;
