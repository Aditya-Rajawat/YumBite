import { CDN_URL } from "../utils/constants";
import star from "../utils/star3.png";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="w-64 h-72 m-4 -mb-2 text-lg hover:cursor-pointer transition ease-in duration-75 hover:scale-95">
      <div className="relative">
      <img
        className="w-64 h-40 object-cover rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="w-64 h-40 object-cover rounded-2xl bg-gradient-to-t from-black to-transparent z-50 absolute top-0 opacity-60"></div>
      </div>
      
      <div className="w-60 h-24 ml-3 mt-3 text-gray-700">
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="flex justify-start items-center -mt-1">
        <img src={star} alt="" className="w-4 h-4 mr-1 text-base" />
        {avgRating}
      </h4>
      <h4 className="font-extralight -mt-1 truncate text-base">{cuisines?.join(", ")}</h4>
      {/* <h4>{costForTwo}</h4> */}
      </div>
    </div>
  );
};

export default RestaurantCard;

