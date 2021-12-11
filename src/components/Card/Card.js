import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
  let display;
  if (results) {
    display = cardRender(page, results);
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
};

function cardRender(page, results) {
  return results.map((data) => {
    let { id, name, status, location, image } = data;
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`${page}${id}`}
        key={id}
        className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
      >
        <div
          className={`${styles.card} d-flex flex-column justify-content-center`}
        >
          <img
            className={`${styles.img} img-fluid`}
            src={image}
            alt={`${name}`}
          />
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
          <div className={styles.contet}>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div>
              <div className="fs-6 fw-normal">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
}

export default Card;
