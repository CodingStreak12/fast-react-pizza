import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <SearchOrder />
      <Link to="/" className="tracking-widest">
        Fast React Pizza co.
      </Link>
      <Username />
    </header>
  );
}

export default Header;
