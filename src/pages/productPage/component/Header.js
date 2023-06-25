import NavItem from "./NavItem";
import logo from "../../../assets/logo.svg";
import NavBar from "./NavBar";
import basket from "../../../assets/icon-cart.svg";
import profile from "../../../assets/image-avatar.png"
export default function Header({ list }) {
  return (
    <div style={{ background: "green" }}>
      <NavBar list={list} />
      <div>
        <img src={basket} />
        <img src={profile}/>
      </div>
    </div>
  );
}
