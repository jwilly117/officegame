import React from "react";
import "./style.css";



function ClickItem(props) {
    return (
        // Create a div that will contain the images and their clicked reactions.

        <div
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`picBox${props.shake ? "" : ""}`}
        >
        </div>
    );
}
export default ClickItem;