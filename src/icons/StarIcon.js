import React from "react";

const StarIcon = ({ isFavorite, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={isFavorite ? "gold" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15 10 24 10 17 15 20 23 12 18 4 23 7 15 0 10 9 10" />
  </svg>
);

export default StarIcon;
