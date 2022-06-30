import React, { useEffect, useState } from "react";
import styles from "./ShowDetails.module.scss";
import showRatingStar from "./images/showRatingStar.svg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export const ShowDetails = () => {
  const location = useLocation();
  const { id } = location.state;
  const now = "now";
  const [data, setData] = useState({});
  const [dataSeasons, setDataSeasons] = useState([]);
  const [dataEpisodes, setDataEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        const responseSeasons = await axios.get(
          `https://api.tvmaze.com/shows/${id}/seasons`
        );
        const responseEpisodes = await axios.get(
          `https://api.tvmaze.com/shows/${id}/episodes`
        );
        setData(response.data);
        setDataSeasons(responseSeasons.data);
        setDataEpisodes(responseEpisodes.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading && (
        <div className={styles.spinnerContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {!loading && data && (
        <div className={styles.mainContainer}>
          <div className={styles.showMainImage}>
            <img
              src={`${data.image !== undefined && data.image.original}`}
              alt="main poster of show"
            ></img>
          </div>
          <div className={styles.showTitleContainer}>
            <div className={styles.pathToThisShow}>
              <Link to={"/"}>MaileHerenko</Link>
              <span>/</span>
              <Link to={"/"}>TV Shows</Link>
            </div>
            <div className={styles.showTitle}>{data.name}</div>
          </div>
          <div className={styles.showDescriptionContainer}>
            <div className={styles.showPosterImage}>
              <img
                src={`${data.image !== undefined && data.image.original}`}
                alt="poster of show"
              ></img>
            </div>
            <div className={styles.showDetails}>
              <div className={styles.showTagline}>About the show:</div>
              <div
                className={styles.showSummary}
                dangerouslySetInnerHTML={{ __html: `${data.summary}` }}
              ></div>
              <div className={styles.showRating}>
                <img src={showRatingStar} alt="icon of star"></img>
                {data.rating !== undefined && data.rating.average}
              </div>

              <div className={styles.showMainDetails}>
                <div className={styles.showMainDetailsCol1}>
                  <div className={styles.showType}>
                    <p className={styles.firstLine}>Type</p>
                    <p className={styles.secondLine}>TV Show</p>
                  </div>
                  <div className={styles.showReleaseFirstDate}>
                    <p className={styles.firstLine}>First air date</p>
                    <p className={styles.secondLine}>{data.premiered}</p>
                  </div>
                  <div className={styles.showSeasons}>
                    <p className={styles.firstLine}>No. of Seasons</p>
                    <p className={styles.secondLine}>
                      {dataSeasons !== undefined && dataSeasons.length}
                    </p>
                  </div>
                </div>
                <div className={styles.showMainDetailsCol2}>
                  <div className={styles.showStatus}>
                    <p className={styles.firstLine}>Status</p>
                    <p className={styles.secondLine}>{data.status}</p>
                  </div>
                  <div className={styles.showReleaseLastDate}>
                    <p className={styles.firstLine}>Last air date</p>
                    <p className={styles.secondLine}>{data.ended || now}</p>
                  </div>
                  <div className={styles.showEpisodes}>
                    <p className={styles.firstLine}>No. of episodes</p>
                    <p className={styles.secondLine}>
                      {dataEpisodes !== undefined && dataEpisodes.length}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.showRuntime}>
                <p className={styles.firstLine}>Episode run time</p>
                <p className={styles.secondLine}>{data.averageRuntime} min</p>
              </div>
              <div className={styles.showGenres}>
                <p className={styles.firstLine}>Genres</p>
                <p className={styles.secondLine}>
                  {data.genres !== undefined && data.genres.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
