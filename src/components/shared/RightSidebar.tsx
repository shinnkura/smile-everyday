import QuoteCards from "../cards/QuoteCards";

function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-dark-1">カレンダー</h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-dark-1 m-2">本日の名言</h3>
        <QuoteCards />
      </div>
    </section>
  );
}

export default RightSidebar;
