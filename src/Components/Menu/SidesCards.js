import React, { useState } from "react";

function SidesCards({ sides }) {
  const [showMore, setShowMore] = useState(false);

  const addSide = () => {
    let combo = [];
    console.log(combo);
  };

  return (
    <div className="col">
      <div className="col sides-card">
        <h4 className="side-name">{sides.name}</h4>
        <img src={sides.img} alt="side-item" className="side-avi col-12" />
        <div className="show-btn">
          {showMore
            ? sides.description
            : `${sides.description.substring(0, 30)}`}
          {!showMore ? (
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              show more
            </button>
          ) : (
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              show less
            </button>
          )}
        </div>
        <div className="details-box">
          <strong className="p-tags">price: {sides.price}</strong>
          <div className="add-btn-section">
            <button className="btn btn-primary button-text" onClick={addSide}>
              Add to combo
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidesCards;
