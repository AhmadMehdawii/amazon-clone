import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Dropdown = ({ handleAuthentication, user, basket }) => {
  const [isActive, setActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setActive((prev) => !prev);
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

  return (
    <div>
      <div
        className={`hamburger ${isActive ? "hamburger-active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger__icon">&nbsp;</span>
      </div>
      <div className={`header-links-container ${isActive ? "change" : ""}`}>
        <div className="header-links">
          <a href="/" onClick={() => setActive(false)}>
            <div className="header__option">Main Page</div>
          </a>
          <Link to="/orders" onClick={() => setActive(false)}>
            <div className="header__option">Returns & Orders</div>
          </Link>
          <Link to="/checkout" onClick={() => setActive(false)}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo">
                <span className="header__basketCount">{basket?.length}</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
