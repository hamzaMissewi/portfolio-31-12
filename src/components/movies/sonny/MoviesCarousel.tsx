import { Movie } from "../../../../tmdbTypings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = { title: string; movies: Movie[]; isVertical?: boolean };

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          // "flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          "flex space-x-4 scrollbar-hide px-5 overflow-hidden lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-4",
        )}
      >
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.title}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5",
                )}
              >
                <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                  <MovieCard movie={movie} />
                </Link>
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MoviesCarousel;