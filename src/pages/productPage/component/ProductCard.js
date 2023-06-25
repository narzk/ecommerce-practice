import NavItem from "./NavItem";
import logo from "../../../assets/logo.svg";
import NavBar from "./NavBar";
import basket from "../../../assets/icon-cart.svg";
import profile from "../../../assets/image-avatar.png";
import { useCallback, useState } from "react";
export default function ProductCard({ list, productImage, images }) {
  const [mainPage, setMainPage] = useState(images[0].mainValue);
  function handleImage(image) {
    setMainPage(image.mainValue);
  }

  return (
    <div style={{ background: "green" }}>
      <img src={mainPage} style={{ width: "300px", height: "300px" }} />

      <div>
        {images.map((image) => (
          <img
            key={image.id}
            style={{ width: "50px", height: "50px", margin: "0 8px" }}
            src={image.value}
            onClick={() => handleImage(image)}
          />
        ))}
      </div>

      <div>
        {/* todo
        
        make title, desc , price, discount , prevPrice
        add button 
        count button 
        
        */}
      </div>
    </div>
  );
}
