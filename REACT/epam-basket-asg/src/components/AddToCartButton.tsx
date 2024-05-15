//Todo: Renaame the component

import { useState } from "react";
import { addToCart, getAllCartItems } from "../store/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "../models/Product";

interface AddToCartButtonProps {
  disabled?: boolean;
  className?: string;
  isShowAddCounter?: boolean;
  resetShowAddCounter: (val: boolean) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  resetShowAddCounter,
  disabled = false,
  className = "",
  isShowAddCounter = false,
}) => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const cart: ICart = useSelector(getAllCartItems);
  console.log(cart);

  const handleAddClick = () => {
    resetShowAddCounter(false);
    setCounter(1);
    dispatch(addToCart({}));
  };

  const handlePlusBtnClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusBtnClick = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  if (isShowAddCounter) {
    return (
      <button
        className={className}
        onClick={handleAddClick}
        disabled={disabled}
        style={{ margin: "5px" }}
      >
        Add
      </button>
    );
  }

  return (
    <div style={{ display: "flex", maxWidth: "100px" }}>
      <button onClick={handlePlusBtnClick}>
        <b>+</b>
      </button>
      <input type="text" value={counter} style={{ width: "30px" }} />
      <button onClick={handleMinusBtnClick}>
        <b>-</b>
      </button>
    </div>
  );
};

export default AddToCartButton;
