// import React from "react";
// import { img_300, unavailable } from "./config";
// import "@/components/movies/SingleContent.css";
// import ContentModal from "./ContentModal";
// import { Badge } from "@mui/material";
// import { movieDbInstance } from "@/lib/getMovies";
//
// interface ISingleContent {
//   id: number;
//   poster?: string;
//   title?: string;
//   date?: string;
//   media_type: "tv" | "movie" | "serie";
//   vote_average: number;
// }
//
// const SingleContent = ({
//   id,
//   poster,
//   title,
//   date,
//   media_type,
//   vote_average,
// }: ISingleContent) => {
//   // const fetchMovieDetails = useMemo(async () => {
//   //   const response = await movieDbInstance.get(`/movie/${id}`);
//   //   console.log(response.data);
//   //   return response.data;
//   // }, []);
//
//   return (
//     <ContentModal media_type={media_type} id={id}>
//       <Badge
//         badgeContent={vote_average}
//         color={vote_average > 6 ? "primary" : "secondary"}
//       />
//       <img
//         className="poster"
//         src={poster ? `${img_300}${poster}` : unavailable}
//         alt={title}
//       />
//       <b className="title">{title}</b>
//       <span className="subTitle">
//         {media_type === "tv" ? "TV Series" : "Movie"}
//         <span className="subTitle">{date}</span>
//       </span>
//     </ContentModal>
//   );
// };
//
// export default SingleContent;
