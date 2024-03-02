import { useState } from "react";
import "./FaqBoxes.css";

const FaqBoxes = (props) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="main-box">
      <div className="headline-box">
        <h2>{props.headline}</h2>
        <img
          onClick={() => setHidden((hidden) => !hidden)}
          src={
            hidden
              ? "../../../public/img/icon-minus.svg"
              : "../../../public/img/icon-plus.svg"
          }
          alt="Plus Icon"
        />
      </div>

      <div className={hidden ? "shown-box" : "hidden-box"}>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default FaqBoxes;
