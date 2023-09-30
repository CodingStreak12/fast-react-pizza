/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentItemQuantity,
  increaseItemQuantity,
} from "./cartItemsSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currentItemQuantity = useSelector(getCurrentItemQuantity(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span className="text-xs font-semibold">{currentItemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
