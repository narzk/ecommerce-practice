import Content from "./component/Content";
import Header from "./component/Header";

export default function ProductPage() {
  return (
    <div>
      <Header list={["Collections", "men", "women", "contact"]} />

      <Content/>
    </div>
  );
}
