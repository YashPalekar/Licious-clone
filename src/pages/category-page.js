import { useLocation } from "react-router-dom";
import AddToCart from "../components/add-to-cart-btn";
import SmallCard from "../components/small-card";
import { Items } from "../data/items";

const CategoryPage = () => {
  const location = useLocation();
  let spam = 1;
  const filterName =
    location.state.name.toLowerCase() === "fish & seafood"
      ? "fish"
      : location.state.name.toLowerCase();
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Showing search result for {location.state.name}</h3>
      </div>
      <div className="list">
        {Items.filter((e) => e.name.toLowerCase().includes(filterName)).map(
          (e) => {
            return (
              <SmallCard
                key={spam++}
                image={e.imgUrl}
                name={e.name}
                price={e.price}>
                <AddToCart image={e.imgUrl} name={e.name} price={e.price} />
              </SmallCard>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
