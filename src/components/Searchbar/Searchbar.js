import React from "react";
import "./style.css";

const Searchbar = () => {
    return (
        <div id="searchbar-div">
            <form>
                <input id="searchbar-input" type="text" placeholder="Search for songs" />
            </form>
        </div>
    );
}

export default Searchbar; 