import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faCat } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
            <NavLink to="/">
                <FontAwesomeIcon icon={faSeedling} className="icon" />
                <FontAwesomeIcon icon={faCat} className="icon" />
            </NavLink>
            <NavLink to="/wishlist">Wishlist</NavLink>
        </div>
    );
};

export default Header;
