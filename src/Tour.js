import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "EXPAND":
      return { ...state, expanded: !state.expanded };
    default:
      throw new Error(`Unsupported action ${action}`);
  }
};

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [state, dispatch] = useReducer(reducer, {
    expanded: false,
  });

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {state.expanded ? info : `${info.substring(0, 200)}...`}{" "}
          <button
            onClick={() => {
              dispatch({ type: "EXPAND" });
            }}
          >
            {state.expanded ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
