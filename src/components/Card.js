import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({
  review,
  leftShiftHandler,
  rightShiftHandler,
  surpriseHandler,
}) {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={review.image}
          alt="testimonie"
        />
        <div
          className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute
         top-[-6px] z-[-10] left-[10px]"
        ></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">
          {review.name}
        </p>
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={() => leftShiftHandler()}
          className="cursor-pointer hover:text-violet-500 "
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => rightShiftHandler()}
          className="cursor-pointer hover:text-violet-500 "
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={() => surpriseHandler()}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Card;
