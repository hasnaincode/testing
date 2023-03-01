
import { FunctionComponent } from "react";
import styles from "./RecentSearchesContainer.module.css";

const RecentSearchesContainer: FunctionComponent = () => {
  return (
    <div className={styles.upcomingFlightSection}>
      <div className={styles.upcomingFlightSection1}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightDetails}>
          <div className={styles.recentSearches1}>
            <div className={styles.flightMainContainer}>
              <div className={styles.toAndFrom}>
                <div className={styles.fromDetails}>
                  <b className={styles.sin}>SIN</b>
                </div>
                <img
                  className={styles.durationIcon}
                  alt=""
                  src="/duration.svg"
                />
                <div className={styles.toDetails}>
                  <b className={styles.lax}>LAX</b>
                </div>
              </div>
              <div className={styles.departOn7}>Depart on: 7 Sep 2021</div>
            </div>
            <div className={styles.flightMainContainer}>
              <div className={styles.toAndFrom}>
                <div className={styles.fromDetails}>
                  <b className={styles.sin}>MY</b>
                </div>
                <img
                  className={styles.durationIcon}
                  alt=""
                  src="/duration1.svg"
                />
                <div className={styles.toDetails}>
                  <b className={styles.lax}>DUB</b>
                </div>
              </div>
              <div className={styles.departOn9Container}>
                <b>Depart on:</b>
                <span> 9 Sep 2021</span>
              </div>
            </div>
          </div>
          <div className={styles.prepareMenu}>
            <div className={styles.recentSearches}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel}>
                <img
                  className={styles.hotelIcon}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background} />
                  <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
                </div>
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.hotel}>
                <img className={styles.hotelIcon} alt="" src="/eats-icon.svg" />
                <div className={styles.attractions1}>Eats</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background1} />
                  <img className={styles.trainIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.attractions1}>Commute</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.taxiIcon}>
                  <div className={styles.background2} />
                  <img className={styles.taxiIcon1} alt="" src="/vector1.svg" />
                </div>
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background3} />
                  <img className={styles.movieIcon} alt="" src="/vector2.svg" />
                </div>
                <div className={styles.attractions1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
