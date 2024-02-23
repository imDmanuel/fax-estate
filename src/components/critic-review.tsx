import Image from "next/image";
import React from "react";
import { StarRating } from "./star-rating";
import { ICriticReview } from "@/lib/query-types";

export function CriticReview({ review }: { review: ICriticReview }) {
  return (
    <div className="py-4 flex space-x-5">
      {/* LEFT */}
      {/* CRITIC AVATAR */}
      {/* TODO: SET DEFAULT IMAGE */}
      <Image
        src={review.reviewerImageUrl || ""}
        alt=""
        width={200}
        height={200}
        className="size-12 rounded-full"
      />
      {/* END CRITIC AVATAR */}
      {/* END LEFT */}

      {/* RIGHT */}
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <div>
            {/* NAME */}
            <div className="font-merriweather text-gray-600 font-semibold">
              {review.name}
            </div>
            {/* END NAME */}

            {/* DATE */}
            <div className="font-merriweather text-sm font-semibold">
              {review.date}
            </div>
            {/* END DATE */}
          </div>

          {/* STAR RATING */}
          <div>
            <StarRating value={review.rating} showValue={false} />
          </div>
          {/* END STAR RATING */}
        </div>

        {/* REVIEW */}
        <p className="text-gray-600 text-sm mt-3">{review.content}</p>
        {/* END REVIEW */}
      </div>
      {/* END RIGHT */}
    </div>
  );
}
