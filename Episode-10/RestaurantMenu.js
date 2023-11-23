import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BIKE_URL } from "../utils/constants";
import star from "../utils/greenstar.png";
import { VEG_LOGO } from "../utils/constants";
import veglogo from "../utils/veg-logo.png"

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRatingString,
    totalRatingsString,
    expectationNotifiers,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  console.log(expectationNotifiers[0].icon.imageId);
  return (
    <>
      <div className="flex justify-evenly items-center mt-14 mb-5">
        <div>
          <h1 className="text-[22px] font-semibold mb-1">{name}</h1>
          <p className="text-sm font-light text-gray-600">
            {cuisines.join(", ")}
          </p>
          <p className="text-sm font-light text-gray-600">
            {areaName}, {sla.lastMileTravelString}
          </p>
          <div className="flex mt-4">
            <img className="mr-2" src={BIKE_URL} alt="img" />
            <p className="text-[14px] font-light">
              {expectationNotifiers[0]?.text}
            </p>
          </div>
        </div>
        <div className="border-[1px] border-slate-300 rounded-md p-2 shadow-md">
          <div className="flex justify-evenly">
            <img className="w-5 h-5" src={star} alt="" />
            <p className="text-sm font-bold mb-3 text-green-700">
              {avgRatingString}
            </p>
          </div>
          <hr />
          <p className="text-[11px] font-semibold mt-3 text-gray-500">
            {totalRatingsString}
          </p>
        </div>
      </div>

      <hr className="w-[780px] ml-[369px]" />

      <div className="ml-[365px] mt-4 flex">
        <div className="mr-4 flex justify-center items-center ml-1">
          <svg
            class="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              stroke-width="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="text-[15px] font-bold text-slate-700 ml-2">
            {sla.deliveryTime} MINS
          </span>
        </div>
        <div className="flex justify-center items-center">
          <svg
            class="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              stroke-width="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="text-[15px] font-bold text-slate-700 ml-2">
            {costForTwoMessage}
          </span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-slate-700 mt-10 ml-[369px]">
        {title}
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <div className="w-[780px] ml-[369px] flex justify-between mb-10 mt-10 text-[17px] font-semibold text-slate-700">
              <div>
                <img className="w-4 h-4 mb-1" src={veglogo} alt="image" />
                {item.card.info.name}
                <p className="text-base font-normal">
                  ₹ {item.card.info.price}
                </p>
              </div>
              <br />
              <div>
                {/* {item.card.info.description} */}
                <img
                  className="w-[118px] h-[96px] rounded-md cursor-pointer relative"
                  src={IMG_URL + item.card.info.imageId}
                  alt="menu-images"
                />
                <button className="w-[94px] h-[34px] border-2 rounded absolute -mt-[25px] ml-[12px] bg-white hover:shadow-lg cursor-pointer text-green-600 text-sm font-semibold z-50">ADD</button>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
