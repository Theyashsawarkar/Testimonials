import React from "react";
import Card from "./Card";
import { useState } from "react";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md"
    >
      <Card
        review={reviews[index]}
        setIndex={setIndex}
        leftShiftHandler={leftShiftHandler}
        rightShiftHandler={rightShiftHandler}
      ></Card>
    </div>
  );
};

export default Testimonials;
