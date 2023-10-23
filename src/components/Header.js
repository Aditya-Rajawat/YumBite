import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import swiggylogo from "../utils/swiggylogo";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  // console.log("header render");

  // If no dependency array => useEffect is called on every render
  // If there is empty dependency array => [], then useEffect will be called on initial render only(just once)
  // If [btnName] is passed as a dependency, then useEffect will be called only when there is a updation in [btnName]

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  return (
    <div className="flex justify-evenly items-center bg-white shadow-lg h-20">
      <div className="w-36 flex justify-between items-center -ml-9">
        <Link to="/">
          <img
            className=" ml-4 hover:w-10  transition ease-in-out duration-150 hover:scale-105"
            src="https://w7.pngwing.com/pngs/205/720/png-transparent-free-delivery-delivery-take-out-online-food-ordering-restaurant-business-delivery-food-company-text-thumbnail.png"
            alt="logo"
          />
        </Link>
        <p className="">Mathura</p>
      </div>
      <div className="flex items-center">
        <ul className="flex m-3 p-2 font-medium justify-center items-center">
          {/* <li className="px-4">
            <p>Online Status : {onlineStatus ? "✅" : "🔴"}</p>
          </li> */}
          <li className="px-4 hover:text-orange-500">
            <Link
              to="/"
              className="w-24 flex justify-center items-center hover:fill-orange-500 hover:text-orange-500 text-gray-700 fill-gray-700"
            >
              <svg
                className="w-6 h-6 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/about"
              className="w-24 flex justify-center items-center hover:fill-orange-500 hover:text-orange-500 text-gray-700 fill-gray-700"
            >
              <svg
                className="w-6 h-6 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M2.01,3L2,23l4-4h16V3H2.01z M11,7h2v2h-2V7z M11,11h2v4h-2V11z"></path>
              </svg>
              <span>About</span>
            </Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link
              to="/contact"
              className="w-24 flex justify-center items-center hover:fill-orange-500 hover:text-orange-500 text-gray-700 fill-gray-700"
            >
              <svg
                className="w-6 h-6 pr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
              <span>Contact</span>
            </Link>
          </li>
          {/* <li className="px-4 hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 hover:text-orange-500">
            <Link
              to="/cart"
              className="w-24 flex justify-center items-center hover:fill-orange-500 hover:text-orange-500 text-gray-700 fill-gray-700"
            >
              <svg
                className="w-6 h-6 pr-2 -ml-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
              </svg>
              <span>Cart({cartItems.length} items)</span>
            </Link>
          </li>
          <button
            className="bg-amber-500 w-20 pt-2 pb-2 text-white rounded-lg hover:text-orange-500 hover:bg-white hover:border-orange-500 hover:border-2"
            onClick={() =>
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <div className="font-bold">{LoggedInUser}</div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
