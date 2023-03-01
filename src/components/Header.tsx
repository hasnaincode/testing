
import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <button className={styles.fickleflightLogo}>
          <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <button className={styles.explore}>Explore</button>
            <div className={styles.search}>Search</div>
            <div className={styles.search}>Hotels</div>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.profilePictureIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
