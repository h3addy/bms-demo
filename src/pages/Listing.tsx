import { useState, useEffect } from "react";
import { fetchData } from "../services/apis";
import Card from "../components/Card";
import "../styles/Listing.css";

type ProductsType = {
  id: 1;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Listing = () => {
  const [productData, setProductData] = useState<Array<ProductsType> | null>(
    null
  );

  const makeApiCall = async () => {
    const res = await fetchData();
    const data = await res.data.products;
    setProductData(data);
  };

  useEffect(() => {
    if (!productData) {
      makeApiCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(productData);
  return (
    <div className="listing-wrapper">
      {productData &&
        productData?.map((d: ProductsType, i: number) => (
          <Card
            img={d.thumbnail}
            title={d.title}
            price={d.price}
            key={`${d.id}_${i}`}
          />
        ))}
    </div>
  );
};

export default Listing;
