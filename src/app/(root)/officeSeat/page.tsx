// TODO: 保育、栄養士、エンジニアなどで、席のカラーを決める
// TODO: 人の名前で検索できるようにする

import EditableBox from "./components/EditableBox";

const page = () => {
  return (
    <div>
      <div className="head-text text-left">OfficeSeat</div>
      <EditableBox />
    </div>
  );
};

export default page;
