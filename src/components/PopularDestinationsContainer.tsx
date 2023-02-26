import { FunctionComponent, useCallback } from "react";
import DestinationCard from "./DestinationCard";
import styles from "./PopularDestinationsContainer.module.css";

const PopularDestinationsContainer: FunctionComponent = () => {
  const onCol1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCol4Click = useCallback(() => {
    window.open("https://www.bing.com/");
  }, []);

  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationCard
          destinationImageUrl="/parisimage@2x.png"
          destinationName="Paris"
          destinationPrice="$699"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
          onCol1Click={onCol1Click}
        />
        <DestinationCard
          destinationImageUrl="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPrice="$1079"
          propWidth="99.92px"
          propDisplay="unset"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationCard
          destinationImageUrl="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPrice="$895"
        />
        <DestinationCard
          destinationImageUrl="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPrice="$1245"
          propWidth="100.62px"
          propWidth1="100.62px"
          propLeft="48.09px"
          onCol1Click={onCol4Click}
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
