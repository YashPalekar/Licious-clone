import { useContext, useEffect } from "react";
import { MyContext } from "../context/app-context";

const AddToCart = (props) => {
  const context = useContext(MyContext);

  const currentItem = {
    name: props.name,
    image: props.image,
    price: props.price,
    id: context.cart ? context.cart.length : 0,
  };

  const checkItemInCart = (item, arr) => {
    let found = false;
    arr.forEach((e) => {
      if (e.name === item.name) {
        e.quantity++;
        found = true;
        return;
      }
    });
    if (!found) {
      item.quantity = 1;
      arr.push(item);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    currentUser.cart = context.cart;
    sessionStorage.setItem("user", JSON.stringify(currentUser));
  }, [context.cart]);

  const addToCart = () => {
    let arr = context.cart;
    checkItemInCart(currentItem, arr);
    context.setCart(arr);
  };

  return (
    <button
      onClick={(e) => {
        addToCart();
        e.stopPropagation();
      }}
      className="add-to-cart-btn wide-btn">
      Add to cart
    </button>
  );
};

export default AddToCart;
