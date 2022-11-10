import React, { useContext, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AuthContext } from "../../../contexts/AuthProvider";

const GiveRatings = ({ initialValue, zindex }) => {
  const { setRating } = useContext(AuthContext);
  const initStars = parseInt(initialValue);

  const [stars, setStarts] = useState(initStars);
  //   Hangle ClickCapture
  const handleClickCapture = (e) => {
    const activeIndex = e.target.getAttribute("data-index");
    const ratingGiven = parseInt(activeIndex);

    if (ratingGiven) {
      setStarts(ratingGiven);
      setRating(ratingGiven);
    }

    console.log(ratingGiven);
    console.log(e.target);
  };

  let filledStars = stars;
  let emptyStars = 5 - filledStars;

  console.log(filledStars, emptyStars);

  let filled = Array(filledStars).fill(
    <AiFillStar
      className={`text-woodLight cursor-pointer hover:text-woodDark text-3xl  absolute  -z-[${zindex}px] pointer-events-none`}
    />
  );
  let empty = Array(emptyStars).fill(
    <AiOutlineStar
      className={`text-woodLight cursor-pointer hover:text-woodDark text-3xl absolute  -z-[${zindex}px] pointer-events-none`}
    />
  );

  let totalStars = [...filled, ...empty];
  console.log(totalStars);

  return (
    <div className="flex items-center" onClickCapture={handleClickCapture}>
      {totalStars.map((elem, index) => {
        return (
          <span
            key={index}
            data-index={++index}
            className={`w-[30px] h-[30px] relative cursor-pointer z-[${
              zindex + 10
            }px]`}
          >
            {elem}
          </span>
        );
      })}
    </div>
  );

  //   const empty = Array(5).fill(
  //     <AiOutlineStar
  //       onMouseOver={handleRating}
  //       className="text-woodLight cursor-pointer hover:text-woodDark text-3xl"
  //     />
  //   );

  //   return <div className="flex items-center">{empty?.map((elem) => elem)}</div>;
};

export default GiveRatings;
