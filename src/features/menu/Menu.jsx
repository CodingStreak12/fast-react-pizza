import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useLoaderData } from "react-router-dom";
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className=" p-x-2 divide-y-2 divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
