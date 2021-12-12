import React, { useState } from "react";

// import CSS file for this component
import "./dogsCard.css";

function DogsCard({ dogs }) {
  const [showMore, setShowMore] = useState(false);

  const addFrank = () => {};

  return (
    <div className="col-3">
      <div className="col dog-card">
        <h4 className="dog-name">{dogs.name}</h4>
        <img src={dogs.img} alt="hot-dog" className="dawg-avi col-12" />
        {/* show more and show less function */}
        <div className="show-btn">
          {showMore ? dogs.description : `${dogs.description.substring(0, 49)}`}
          {!showMore ? (
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              read more...
            </button>
          ) : (
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              read less...
            </button>
          )}
        </div>
        <div className="details-box">
          <strong className="p-tags">price: {dogs.solo}</strong>
          <p className="p-tags">combo: {dogs.combo}</p>
          <div className="add-btn-section">
            <button className="btn btn-primary button-text" onClick={addFrank}>
              Add Frank
            </button>
            <br></br>
            {/* <button className="btn btn-success button-text" onClick={addCombo}>
              Add Combo
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogsCard;
