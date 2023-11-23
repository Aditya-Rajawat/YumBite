import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <>
            <li key={item.card.info.id}>
              {item.card.info.name} - <b> ₹ {item.card.info.price}</b>
              <br />
              {item.card.info.description}
              <img src={IMG_URL + item.card.info.imageId} alt="menu-images" />
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
