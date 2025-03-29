import { useEffect, useState } from "react";
import { getAllProducts } from "../services/apiService"; // Import API call function
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules"; // Import Scrollbar module
import "swiper/css"; 
import "swiper/css/scrollbar"; // Import Swiper scrollbar styles

const FlashSales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setFlashSaleProducts(products);
      } catch (error) {
        console.error("Error fetching flash sale products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">🔥 Flash Sales</h2>
      {flashSaleProducts.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          scrollbar={{ draggable: true }} // Enable draggable scrollbar
          modules={[Scrollbar]} // Pass Scrollbar module
        >
          {flashSaleProducts.map((product, index) => (
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

export default FlashSales;
