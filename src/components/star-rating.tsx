import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { HiStar } from "react-icons/hi2";

export function StarRating({ value }: { value: number }) {
  const hasHalfStar = Math.round(value % 1) === 1;
  const emptyStars = 5 - Math.floor(value) - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1">
        {new Array(Math.floor(value)).fill(0).map((_, index) => {
          return <FaStar className="text-[#ffa800]" key={index} />;
        })}
        {hasHalfStar && <FaStarHalf className="text-[#ffa800]" />}
        {new Array(Math.floor(emptyStars)).fill(0).map((_, index) => {
          return <FaStar className="text-gray-600" key={index} />;
        })}
      </div>
      <div>{value.toFixed(1)}</div>
    </div>
  );
}
