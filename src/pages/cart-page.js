import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SmallCard from "../components/small-card";
import { MyContext } from "../context/app-context";

const CartPage = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  let spam = 1;
  let total = 0;
  context.cart.forEach((e) => (total += e.price * e.quantity));
  const remove = (id) => {
    let itemIndex = -1;
    context.cart.forEach((element, index) => {
      if (element.id === id) itemIndex = index;
    });
    console.log(itemIndex);
    let tempArr = context.cart;
    if (itemIndex !== -1) {
      tempArr.splice(itemIndex, 1);
      context.setCart(tempArr);
    }
  };

  const toPaymentPage = () => {
    navigate("/payment-page", { state: total });
  };
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>
          Your cart
          <span>
            {" >"} Total : ₹{total}
          </span>
        </h3>
        <button
          onClick={toPaymentPage}
          className="active-color-btn checkout-btn">
          Checkout{">>>"}
        </button>
      </div>
      <div className="list">
        {context.cart.map((e) => {
          return (
            <SmallCard
              key={spam++}
              image={e.image}
              name={e.name}
              price={e.price}
              quantity={e.quantity}>
              <button
                onClick={(e) => {
                  remove(e.id);
                  e.stopPropagation();
                }}
                className="active-color-btn">
                Remove from cart
              </button>
            </SmallCard>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
