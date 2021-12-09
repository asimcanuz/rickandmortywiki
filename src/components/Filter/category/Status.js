import React from "react";
import Filterbtn from "../FilterBTN";

const Status = ({ setStatus, setPageNumber }) => {
  // TODO: dizi tanımlamadan api'den status'ler çekilecek
  let status = ["Alive", "Dead", "Unkown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseStatus"
          aria-expanded="true"
          aria-controls="collapseStatus"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseStatus"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <Filterbtn
              key={index}
              index={index}
              name="status"
              task={setStatus}
              setPageNumber={setPageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
