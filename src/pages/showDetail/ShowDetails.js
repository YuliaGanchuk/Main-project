import React from "react";
import styles from "./ShowDetails.module.scss";
import showMainImage from "./images/showMainImage.svg";
import showPosterImage from "./images/showPosterImage.svg";
import showRatingStar from "./images/showRatingStar.svg";
import showRatingNumber from "./images/showRatingNumber.svg";

export const ShowDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.showMainImage}>
          <img src={showMainImage} alt="main poster of show"></img>
        </div>
        <div className={styles.showTitleContainer}>
          <div className={styles.pathToThisShow}>
            <a href="/">MaileHerenko</a>
            <span>/</span>
            <a href="/">Movies</a>
          </div>
          <div className={styles.showTitle}>Avengers: Endgame</div>
        </div>
        <div className={styles.showDescriptionContainer}>
          <div className={styles.showPosterImage}>
            <img src={showPosterImage} alt="poster of show"></img>
          </div>
          <div className={styles.showDetails}>
            <div className={styles.showTagline}>
              Part of the journey is the end.
            </div>
            <div className={styles.showSummary}>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </div>
            <div className={styles.showRating}>
              <img src={showRatingStar} alt="icon of star"></img>
              <img src={showRatingNumber} alt="rating number of show"></img>
            </div>
            <div className={styles.showType}>
              <p className={styles.firstLine}>Type</p>
              <p className={styles.secondLine}>Movie</p>
            </div>
            <div className={styles.showReleaseDate}>
              <p className={styles.firstLine}>Release Date</p>
              <p className={styles.secondLine}>2019-04-24</p>
            </div>
            <div className={styles.showRunTime}>
              <p className={styles.firstLine}>Run time</p>
              <p className={styles.secondLine}>181 min</p>
            </div>
            <div className={styles.showGenres}>
              <p className={styles.firstLine}>Genres</p>
              <p className={styles.secondLine}>
                Adventure, Science Fiction, Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
