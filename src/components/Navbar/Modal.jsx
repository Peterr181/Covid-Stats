import React from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ handleCloseModal }) => {
  const handleCloseClick = () => {
    handleCloseModal();
  };

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__container}>
        <div className={styles.modal__header}>
          <h2>SHORT INTRO</h2>
          <p className={styles.modal__close} onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} />
          </p>
        </div>
        <div className={styles.modal__content}>
          <p>
            This is a simple page that is for checking actuall data about
            COVID-19. User can check how many confirmed cases and deaths is
            being actualized everyday, check total cases and deaths. Also user
            can see all countries all over the world where people were infected
            by this virus. User can inspect all countries or type in input
            specific name of country or even filter by highest confirmed cases
            or deaths!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
