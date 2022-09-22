import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterIncremant = () => {
    setCounter(counter + 1);
  };

  const counterDecrement = () => {
    return counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  };
  return (
    
    <div className="text-center container forSize">
      <div className="text-center">
        <div>
          <h1 className="mt-5">{counter}</h1>
        </div>
        <div>
          <button className="btn btn-success mt-3" onClick={counterIncremant}>
            Increment
          </button>
          <button
            className="btn btn-danger mt-3 mx-2"
            onClick={counterDecrement}
          >
            Decrement
          </button>
          <p className="text-bottom">Tahir</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
