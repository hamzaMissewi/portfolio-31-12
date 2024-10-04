"use client";
import React, { useCallback, useEffect, useState } from "react";
import CustomPagination from "@/components/movies/CustomPagination";
import { Movie } from "@/../tmdbTypings";
import { fetchMoviesRouteByPage, getSearchedMovies } from "@/lib/getMovies";
import { Chip, IconButton, TextField } from "@mui/material";
import MovieCard from "@/components/movies/sonny/MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/movies/sonny/Banner";
// export type ContentType = Movie & TV

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [moviesRes, setMoviesRes] = useState<Movie[]>([]);
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const [page, setPage] = useState(1);
  // const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);

  // const [genres, setGenres] = useState<Genre[]>([]);
  // const [moviesRes, setMoviesRes] = useState<ContentType[]>([])
  // const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  // const genreForURL = useGenre(selectedGenres);

  const handleSearchMoviesByTerm = useCallback(async () => {
    // setSearchedMovies([]);
    try {
      // url.searchParams.set("query", term);
      // const data = await fetchFromTMDB(url);

      const response = await getSearchedMovies(searchTerm!);
      setMoviesRes(response.movies);
      // setSearchedMovies(response.movies);
      setNumOfPages(response.totalPages);
      setPage(1);
    } finally {
      // setSearchTerm(undefined)
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);

    async function getMovies() {
      // const result = await getDiscoverMoviesByPage(page)
      const result = await fetchMoviesRouteByPage(page);
      console.log("result movies ", result);
      setMoviesRes(result.movies);
      setNumOfPages(result.totalPages);
      // setPage(result.page);
    }

    () => getMovies();
  }, []);

  return (
    <div
      className={
        "h-screen relative flex flex-col overflow-hidden space-y-1 text-left max-w-full justify-evenly mx-auto items-center z-0"
      }
    >
      {/*className={"flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>*/}
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert"}
        />
      </Link>
      <Banner />
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Discover movies
      </h3>

      {/*<GenreDropdown*/}
      {/*// type="movie"*/}
      {/*// selectedGenres={selectedGenres}*/}
      {/*// setSelectedGenres={setSelectedGenres}*/}
      {/*// genres={genres}*/}
      {/*// setGenres={setGenres}*/}
      {/*// setPage={setPage}*/}
      {/*/>*/}
      <div className={"flex flex-row items-center"}>
        <TextField
          placeholder={"search movie"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size={"small"}
          className={"w-full px-4 py-2 leading-tight"}
        />
        <IconButton
          onClick={() => handleSearchMoviesByTerm()}
          disabled={!searchTerm}
        >
          <SearchIcon />
        </IconButton>
      </div>
      {page && (
        <Chip label={page.toString()} color="primary" variant="outlined" />
      )}
      {/*Search result */}
      {/*{searchedMovies?.length > 0 && searchTerm && (*/}
      {/*    <SearchPage params={{term: searchTerm}}/>*/}
      {/*)}*/}
      <div className="trending">
        {moviesRes &&
          moviesRes.map((movie) => (
            // <Stack key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
            // </Stack>
          ))}
      </div>
      {/*<SingleContent*/}
      {/*    id={movie.id}*/}
      {/*    // title={movie.title || movie.name}*/}
      {/*    // date={movie.first_air_date || movie.release_date}*/}
      {/*    poster={movie.poster_path}*/}
      {/*    title={movie.title || movie.original_title}*/}
      {/*    date={movie.release_date}*/}
      {/*    media_type="movie"*/}
      {/*    vote_average={movie.vote_average}*/}
      {/*/>*/}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}
