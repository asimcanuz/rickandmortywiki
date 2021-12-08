import React from "react";
import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;
  if (results) {
    display = cardRender(results);
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
};

function cardRender(results) {
  return results.map((data) => {
    let { id, name, status, species, type, location, image } = data;
    return (
      <div
        key={id}
        className="col-lg-4 col-md-6 col-sm-6 col-12 position-relative text-dark"
      >
        <div
          className={`${styles.card} d-flex flex-column justify-content-center`}
        >
          <img
            className={`${styles.img} img-fluid`}
            src={image}
            alt={`${name}`}
          />
          <div className={styles.contet}>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div>
              <div className="fs-6 fw-normal">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {/* Anonymus Function sample */}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      </div>
    );
  });
}

export default Card;
