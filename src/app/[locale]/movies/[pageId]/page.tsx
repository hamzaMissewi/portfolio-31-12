import { Typography } from "@mui/material";
import { getDiscoverMoviesByPage } from "../../../../lib/getMovies";
import MovieCard from "../../../../components/movies/sonny/MovieCard";

export default async function Page({
  params,
  searchParams,
}: {
  params: { pageId: string };
  searchParams?: { title: string; trailer?: string; description?: string };
}) {
  const movies = await getDiscoverMoviesByPage(
    params?.pageId ? parseInt(params.pageId) : 1,
  );

  return (
    <div className={"flex flex-col max-w-7xl mx-auto"}>
      <Typography component={"h1"} className={"text-lg gray-100"}>
        Details of movie {params.pageId}
        {searchParams?.title}
      </Typography>
      {movies.movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
