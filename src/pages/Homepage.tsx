import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import SubscribeContainer from "../components/SubscribeContainer";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
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
    <div className={styles.homepage}>
      <div className={styles.heroSection}>
        <Header />
        <SearchSection />
      </div>
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <div
        className={styles.footerSection}
        data-scroll-to="footerSectionContainer"
      >
        <SubscribeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
