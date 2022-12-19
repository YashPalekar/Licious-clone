import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate("/cart");
  const toCart = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    if (currentUser.name !== null) {
      let arr = [];
      JSON.parse(localStorage.getItem("accounts"))?.forEach((element) => {
        if (element.username === currentUser.username) {
          element.cart = currentUser.cart;
          arr.push(element);
          arr.push(element);
        } else arr.push(element);
      });

      localStorage.setItem("accounts", JSON.stringify(arr));
    }
    navigate("/cart");
  };

  return (
    <div onClick={toCart}>
      Cart
      <div className="cart-indicator"></div>
    </div>
  );
};

export default Cart;
