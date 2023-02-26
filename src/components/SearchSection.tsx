import { FunctionComponent } from "react";
import SearchForm from "./SearchForm";
import styles from "./SearchSection.module.css";

const SearchSection: FunctionComponent = () => {
  return (
    <div className={styles.searchSection}>
      <div className={styles.bannerGradient} />
      <img
        className={styles.bannerBackground}
        alt=""
        src="/banner--background@2x.png"
      />
      <div className={styles.searchContainer}>
        <div className={styles.title}>
          <div
            className={styles.letsExplore}
          >{`Let’s explore & travel the world`}</div>
          <div className={styles.findTheBest}>
            Find the best destinations and the most popular stays!
          </div>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchSection;
