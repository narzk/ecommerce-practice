import NavItem from "./NavItem";
import logo from "../../../assets/logo.svg";

export default function NavBar({ list }) {
  // list -> ["Collections", "men", "women", "contact"]
  return (
    <div style={{ background: "green" }}>
      {/* <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}

      <ul>
        {list.map((item, index) => (
          <NavItem key={index} title={item} />
        ))}
      </ul>

      <div>
        <img src={logo} />
      </div>
    </div>
  );
}
