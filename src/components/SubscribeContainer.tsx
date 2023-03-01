
import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./SubscribeContainer.module.css";

const SubscribeContainer: FunctionComponent = () => {
  return (
    <div className={styles.subscribeSection}>
      <img
        className={styles.subscribeSectionBackground}
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.formText}>
              <TextField
                className={styles.input}
                color="primary"
                variant="outlined"
                type="text"
                label="Your name"
                size="medium"
                margin="none"
              />
            </div>
            <div className={styles.formText}>
              <TextField
                className={styles.input}
                color="primary"
                variant="outlined"
                type="text"
                label="Email address"
                size="medium"
                margin="none"
              />
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.unstyledbutton}>
              <div className={styles.button1}>submit</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeContainer;
