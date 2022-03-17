import React from "react";

function GridElement({ element }: any) {
  return (
    <div key={element.tab_id} className="gridElement">
      <h2>{element.title}</h2>
      <div className="elementBody">
        <div className="elementBodyChild">
          <div className="childLable">Artist:</div>
          <div className="childValue">{element.artist.artist_name}</div>
        </div>
        <div className="elementBodyChild">
          <div className="childLable">Views:</div>
          <div className="childValue">
            {element.views_overall
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridElement;
