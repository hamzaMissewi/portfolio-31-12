export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResults = {
  page: number;
  movies: Movie[];
  total_pages: number;
  total_results: number;
};

// https://developer.themoviedb.org/reference/genre-movie-list
export type Genre = {
  id: number;
  name: string;
};

// id
// integer
// Defaults to 0
// name
// string

export type Genres = {
  genres: Genre[];
};
