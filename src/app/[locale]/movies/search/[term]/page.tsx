// "use client";
// import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "../../../../../components/movies/sonny/MoviesCarousel";
import {
  getPopularMovies,
  getSearchedMovies,
} from "../../../../../lib/getMovies";
import { notFound } from "next/navigation";
import { Typography } from "@mui/material";
import CarouselBanner from "../../../../../components/movies/sonny/CarouselBanner";
import AIAzureSuggestion from "../../../../../components/movies/sonny/OpenAIAzureSuggestion";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  console.log("term to search: ", term);

  const { movies, totalPages } = await getSearchedMovies(term);

  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {term}</h1>
        <AIAzureSuggestion term={term} />

        <CarouselBanner movies={movies} />

        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <Typography>{totalPages}</Typography>
        <MoviesCarousel
          title="You may also like"
          movies={popularMovies.movies}
        />
      </div>
    </div>
  );
}

export default SearchPage;
