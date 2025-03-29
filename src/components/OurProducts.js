import { useEffect, useState } from "react";
import { getAllProducts } from "../services/apiService"; // Import API call function
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
      {products.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={3} // 3 products per row
          grid={{ rows: 2, fill: "row" }} // 2 rows
          modules={[Grid]} // Import Swiper Grid module
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default OurProducts;