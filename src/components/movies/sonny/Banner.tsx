import CarouselBanner from "./CarouselBanner";
import { SearchResults } from "../../../../tmdbTypings";

async function Banner() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return (
    <div className="">
      <CarouselBanner movies={data.movies} />
    </div>
  );
}

export default Banner;
