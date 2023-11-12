import React from "react";

const CalendarCards = () => {
  // 現在の日付と時刻を取得
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentMonth = months[date.getMonth()];
  const currentDay = date.getDate();
  const currentWeekday = weekdays[date.getDay()];

  // 時刻をフォーマットする
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  return (
    <div className="min-w-32 min-h-48 p-3 mb-4 font-medium">
      <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
        <div className="block rounded-t overflow-hidden  text-center ">
          <div className="bg-dark-2 text-white py-1">{currentMonth}</div>
          <div className="pt-1 border-l border-r border-white bg-white">
            <span className="text-5xl font-bold leading-tight">
              {currentDay}
            </span>
          </div>
          <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
            <span className="text-sm">{currentWeekday}</span>
          </div>
          <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
            <span className="text-xs leading-normal">{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCards;
