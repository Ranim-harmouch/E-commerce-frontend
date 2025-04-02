import React from "react";

const reviews = [
  {
    id: 1,
    name: "User 1",
    rating: 5,
    review: "The image quality is stunning, with crisp details and vibrant colors. The autofocus is fast and incredibly accurate, even in low light.",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "User 2",
    rating: 4,
    review: "This Canon camera is a great choice for both beginners and enthusiasts. The image quality is sharp and the colors are well-balanced.",
    image: "https://via.placeholder.com/50",
  },
];

const Reviews = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold">{review.name}</h3>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            <p className="text-gray-700">{review.review}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
