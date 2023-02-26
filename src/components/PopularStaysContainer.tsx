import { FunctionComponent } from "react";
import HotelCard1 from "./HotelCard1";
import styles from "./PopularStaysContainer.module.css";

const PopularStaysContainer: FunctionComponent = () => {
  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button className={styles.viewAllStaysButton}>
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCard1
          matterhornSuitesImage="/unsplashrlwe8f8anoc@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          video="/video.svg"
          reviews="(60 reviews)"
          prop="4.9"
          vector="/vector3.svg"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashtsn8bpopveo@2x.png"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          video="/video1.svg"
          reviews="(116 reviews)"
          prop="4.8"
          vector="/vector4.svg"
          propFlex="1"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashrlwe8f8anoc1@2x.png"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          video="/video.svg"
          reviews="(78 reviews)"
          prop="4.7"
          vector="/vector5.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCard1
          matterhornSuitesImage="/unsplashyqrybvxug5q@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          video="/video2.svg"
          reviews="(63 reviews)"
          prop="4.6"
          vector="/vector6.svg"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
