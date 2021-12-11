import React from "react";

const Inputgroup = ({ name, setID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(event) => setID(event.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
              {name}-{x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Inputgroup;
