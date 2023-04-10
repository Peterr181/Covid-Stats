import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuestionMarkClick = () => {
    setIsModalOpen(true);
    document.body.classList.add(styles.blurred); // add blurred class to body element
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(styles.blurred); // remove blurred class from body element
  };

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__container__left}>
        <p className={styles.navbar__container__left__icon}>
          <FontAwesomeIcon icon={faEarthAmericas} />
        </p>
        <span>Covid Stats</span>
      </div>
      <div className={styles.navbar__container__right}>
        <a
          href="https://github.com/Peterr181"
          className={styles.navbar__container__right__icon}
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <p
          className={styles.navbar__container__right__icon__question}
          onClick={handleQuestionMarkClick}
        >
          <FontAwesomeIcon icon={faCircleQuestion} />
        </p>
      </div>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Navbar;
