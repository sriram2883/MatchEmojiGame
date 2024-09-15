import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <>
            <div className="Card">
                <img src={props.image} alt={props.name} />
            </div>
        </>
    );
}
export default Card;