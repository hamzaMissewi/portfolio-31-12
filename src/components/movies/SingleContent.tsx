import React, { useMemo } from "react";
import { img_300, unavailable } from "./config";
import "@/components/movies/SingleContent.css";
import ContentModal from "./ContentModal";
import axios from "axios";
import { Badge } from "@mui/material";
import { TMDB_API_KEY } from "@/lib/getMovies";

export const BASE_URL = "https://api.themoviedb.org/3";

export const movieDbInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY, //process.env.REACT_APP_API_KEY,
    language: "en-US",
  },
});

interface ISingleContent {
  id: number;
  poster?: string;
  title?: string;
  date?: string;
  media_type: "tv" | "movie" | "serie";
  vote_average: number;
}

// const SingleContent = ({movie: {id, title, vote_average, poster_path, release_date,original_title}}: { movie: Movie }) => {

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}: ISingleContent) => {
  const fetchMovieDetails = useMemo(async () => {
    const response = await movieDbInstance.get(`/movie/${id}`);
    console.log(response.data);
    return response.data;
  }, []);

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
