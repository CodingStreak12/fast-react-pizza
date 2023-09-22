import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <SearchOrder />
      <Link to="/">Fast React Pizza co.</Link>
      <p>Nitin</p>
    </header>
  );
}

export default Header;
