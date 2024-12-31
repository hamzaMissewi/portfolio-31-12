import { Genre, SearchResults } from "./tmdbTypings";
import axios from "axios";

export const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function fetchMoviesRouteByPage(page?: number) {
  try {
    const response = await fetch("/api/tmdb_movies", {
      method: "GET",
      body: JSON.stringify({ page: page || 1 }),
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch movies data, ${response.ok}`);
    }

    const data = (await response.json()) as SearchResults;
    return { movies: data.movies, totalPages: data.total_pages };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchFromTMDB(
  url: URL,
  cacheTime?: number,
  page?: number,
) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", `${page || 1}`);
  url.searchParams.set("api_key", TMDB_API_KEY!);

  console.log("url.toString() ", url.toString());

  // `https://api.themoviedb.org/3/discover/movie`, {
  // params: {
  //     language: 'en-US',
  //     sort_by: 'popularity.desc',
  //     page: page,
  //     api_key: TMDB_API_KEY,
  //     // with_genres: genreForUrl,
  //     adult_search: "include_adult=true"
  // },

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  // const response = await fetch(url.toString(), options);
  const urlWithKey = `${url.toString()}?api_key=${TMDB_API_KEY}`;
  const response = await fetch(urlWithKey, options);
  const data = (await response.json()) as SearchResults;
  return data;

  // const response = await axios.get(url.toString(), {
  //     method: "GET",
  //     data: {url: url.toString()},
  //     headers: {
  //         // "Content-Type": "application/json",
  //         accept: "application/json",
  //         Authorization: `Bearer ${TMDB_API_KEY}`,
  //     },
  //     // beforeRedirect: {fetchFromTMDB: {url: url}}
  //     // fetchOptions: {url: url.toString()},
  //     // next: {
  //     //     revalidate: cacheTime || 60 * 60 * 24,
  //     // },
  // });
  // return response.data as SearchResults;
}

// const {data} = await axios.get(
//     `https://api.themoviedb.org/3/discover/movie`, {
//         headers: {
//             Authorization: `Bearer ${TMDB_API_KEY}`,
//             'Content-Type': 'application/json'
//         },
//         params: {
//             page: page,
//             language: 'en-US',
//             sort_by: 'popularity.desc',
//             // api_key: TMDB_API_KEY,
//             with_genres: genreForUrl,
//             adult_search: "include_adult=true"
//         },
//     },
// );
export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL(`https://api.themoviedb.org/3/discover/movie`);
  // const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
  // You can change 'en-US' to your preferred language
  if (keywords) {
    url.searchParams.set("with_keywords", keywords);
  }
  if (id) {
    url.searchParams.set("with_genres", id);
  }

  const data = await fetchFromTMDB(url);
  return { movies: data.movies, totalPages: data.total_pages };
}

export async function getDiscoverMoviesByPage(
  page: number,
  id?: string,
  keywords?: string,
) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);
  const data = await fetchFromTMDB(url, undefined, page);
  return { movies: data.movies, totalPages: data.total_pages, page: data.page };
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);
  // const data = await fetchFromTMDB(url);
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as SearchResults;

  return { movies: data.movies, totalPages: data.total_pages };
  // return data
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);

  // return data.results;
  return { movies: data.movies, totalPages: data.total_pages };
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);

  return { movies: data.movies, totalPages: data.total_pages };
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);

  return { movies: data.movies, totalPages: data.total_pages };
}

export async function getPopularMoviesByPage(page: number) {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url, undefined, page);

  return { movies: data.movies, totalPages: data.total_pages };
}

export const BASE_URL = "https://api.themoviedb.org/3";

export const movieDbInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY, //process.env.REACT_APP_API_KEY,
    language: "en-US",
  },
});

//merlin AI

// 2. Create a function to fetch movie details:
export async function getMovieDetails(movieId: string) {
  const apiKey = "YOUR_API_KEY";
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  ); // You can change 'en-US' to your preferred language
  return response.data;
}

// 3. (Optional) Create a function to fetch genre names (for better readability):

export async function getGenreNames(): Promise<Genre[]> {
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en`,
      options,
    );
    return response.data.genres;
  } catch (error) {
    throw new Error("Cannot fetch list of movies genres");
  }
}
