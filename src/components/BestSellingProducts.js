import { useEffect, useState } from "react";
import { getAllProducts } from "../services/apiService"; // Import API call function
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RedButton from "../components/Redbutton";

const BestSellingProducts = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        
        // Filter products based on best-selling criteria (e.g., high sales count)
        const bestSelling = products.filter((product) => product.isBestSeller);
        
        setBestSellingProducts(bestSelling);
      } catch (error) {
        console.error("Error fetching best-selling products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8">
        <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold mb-4">🔥 Best Selling Products</h2>
      <RedButton label="View all" to="/product" />
      </div>
      {bestSellingProducts.length > 0 ? (
        <Swiper spaceBetween={10} slidesPerView={3}>
          {bestSellingProducts.map((product, index) => (
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

export default BestSellingProducts;