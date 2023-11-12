import React from "react";

const QuoteCards = () => {
  return (
    <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
      <p className="text-gray-600 dark:text-white">
        <span className="text-lg font-bold text-indigo-500">“</span>
        If you want to go fast, go alone. If you want to go far, go together.
        <span className="text-lg font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center mt-4">
        <a href="#" className="relative block"></a>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-indigo-500">
            Africa famous quote
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCards;
