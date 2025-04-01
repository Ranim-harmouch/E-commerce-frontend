import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Swiper = ({ products }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handlePrev}
        className="p-2 bg-gray-200 rounded-full flex justify-center items-center"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="w-64">
        <div className="border p-4 text-center rounded-lg shadow-lg bg-white">
          <img
            src={products[index].image}
            alt={products[index].title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">{products[index].title}</h3>
        </div>
      </div>
      <button
        onClick={handleNext}
        className="p-2 bg-gray-200 rounded-full flex justify-center items-center"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Swiper;