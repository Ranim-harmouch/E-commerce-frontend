// import React from "react";

// const ProductImages = ({ images }) => {
//   return (
//     <div>
//       <img src={images[0]} alt="Product" className="w-full mb-4" />
//       <div className="flex space-x-2">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index + 1}`}
//             className="w-20 cursor-pointer"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductImages;



import React from "react";

const ProductImages = ({ images }) => {
  return (
    <div className="w-1/2">
      <img
        src={images[0]}
        alt="Product"
        className="w-full h-90  object-cover mb-4"
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
