import React from "react";
import "./Footer.css";

function Footer(props) {
  const{steps,minSteps}=props;
  return (
    <>
      <footer>
        <div className="Footer">
          <div className="Score">
            <h4>Steps Taken: {steps}</h4>
            <h5>Least Steps Taken: {
              (minSteps == Number.MAX_VALUE) ? "Yor are the first player": minSteps
              }</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;