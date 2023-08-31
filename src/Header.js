import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase.js";
import Dropdown from "./Dropdown";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function NavOptions({ handleAuthentication, user }) {
    return (
      <>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </>
    );
  }

  return (
    <div className="header">
      <div className="logo_container">
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          />
        </Link>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {screenWidth < 622 ? (
          <Dropdown
            handleAuthentication={handleAuthentication}
            user={user}
            basket={basket}
          />
        ) : (
          <NavOptions handleAuthentication={handleAuthentication} user={user} />
        )}
      </div>
    </div>
  );
}

export default Header;
