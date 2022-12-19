import Card from "../components/card";
import { Category } from "../data/category";

const Home = () => {
  const horizontalScroll = (evt) => {
    document.querySelector(".horizontal-list").scrollLeft += 3 * evt.deltaY;
  };
  let spam = 1;
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Shop by category</h3>
      </div>

      <div
        onWheel={(evt) => {
          horizontalScroll(evt);
        }}
        className="horizontal-list">
        {Category.map((e) => {
          return <Card key={spam++} image={e.imgUrl} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default Home;
