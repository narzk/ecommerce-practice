import ProductCard from "./ProductCard";
import img1 from "../../../assets/image-product-1-thumbnail.jpg";
import img2 from "../../../assets/image-product-2-thumbnail.jpg";
import img3 from "../../../assets/image-product-3-thumbnail.jpg";
import img4 from "../../../assets/image-product-4-thumbnail.jpg";

import bImage1 from "../../../assets/image-product-1.jpg";
import bImage2 from "../../../assets/image-product-2.jpg";
import bImage3 from "../../../assets/image-product-3.jpg";
import bImage4 from "../../../assets/image-product-4.jpg";

export default function Content({ list }) {
  const thumbnailImages = [
    { id: "1", value: img1, mainValue: bImage1 },
    { id: "2", value: img2, mainValue: bImage2 },
    { id: "3", value: img3, mainValue: bImage3 },
    { id: "4", value: img4, mainValue: bImage4 },
  ];
  return (
    <div style={{ background: "#34aeeb" }}>
      <ProductCard images={thumbnailImages} />
    </div>
  );
}
