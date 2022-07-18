import React, { useContext } from "react";
import WishlistItem from "./WishlistItem";
import { FilterContext } from "./store/FilterProvider";

const Wishlist = () => {
    const { wishlist } = useContext(FilterContext);

    return (
        <div>
            <h1>Cat safe plant wishlist!</h1>
            {wishlist.map((plant, index) => (
                <WishlistItem plant={plant} index={index} key={index} />
            ))}
        </div>
    );
};

export default Wishlist;
