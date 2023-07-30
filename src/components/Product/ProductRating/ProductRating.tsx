import React from "react";

import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface IProps {
  numberOfReviews: number;
  rating: number;
}

const ProductRating: React.FC<IProps> = ({ numberOfReviews, rating }) => {
  return (
    <div className="inline-flex justify-center items-center space-x-2 pt-3 pb-2">
      <Rating
        readOnly
        style={{ maxWidth: 120, height: 20 }}
        value={rating}
        key={rating}
        itemStyles={{
          itemShapes: ThinStar,
          activeFillColor: "#ffaa4d",
          inactiveFillColor: "#ffedd5",
        }}
      />
      <div className="font-bold text-[14px]">
        {rating.toFixed(1)}({numberOfReviews})
      </div>
    </div>
  );
};

export default ProductRating;
