import React from "react";
import { CriticReview } from "./critic-review";
import { ICriticReview } from "@/lib/query-types";
import { StarRating } from "./star-rating";

export default function CriticsReviews({
  reviews,
}: {
  reviews: ICriticReview[];
}) {
  const averageRating =
    reviews.reduce((sum, review) => {
      return review.rating + sum;
    }, 0) / reviews.length;
  return (
    <div>
      {/* REVIEW RATING */}
      <div>
        {/* AVERAGE RATING  */}
        <div className="flex flex-col justify-center text-center w-56 bg-gray-100 space-y-2 py-7">
          <div className="font-bold font-merriweather text-5xl">
            {averageRating.toFixed(1)}
          </div>
          <StarRating
            value={averageRating}
            className="justify-center"
            showValue={false}
          />
          <p>({reviews.length} Critics Reviews)</p>
        </div>
        {/* END AVERAGE RATING */}

        {/* RATING CHART */}
        <div></div>
        {/* END RATING CHART */}
      </div>
      {/* END REVIEW RATING */}

      {/* REVIEWS */}
      <div className="mt-8">
        <div className="font-bold text-xl font-merriweather">
          {reviews.length} Review(s)
        </div>

        <div className="divide-y">
          {reviews.map((review) => (
            <CriticReview review={review} key={review._id} />
          ))}
        </div>
      </div>
      {/* END REVIEWS */}
    </div>
  );
}
