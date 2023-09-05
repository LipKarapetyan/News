import React, { useState } from "react";

function Save() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <img
        className={`save ${clicked ? "clicked" : ""}`}
        src="save1.webp"
        onClick={handleClick}
        alt="Carrot"
      />
    </div>
  );
}

export default Save;