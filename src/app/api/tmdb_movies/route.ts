import { fetchFromTMDB } from "@/lib/getMovies";
import { NextRequest, NextResponse } from "next/server";

// async function getDiscoverMoviesByPage(page: number, id?: string, keywords?: string) {
//     const url = new URL("https://api.themoviedb.org/3/discover/movie");
//     keywords && url.searchParams.set("with_keywords", keywords);
//     id && url.searchParams.set("with_genres", id);
//     const data = await fetchFromTMDB(url, undefined, page);
//     return {results: data.results, totalPages: data.total_pages, page: data.page};
// }

// TODO must use nextRequest and nextResponse
export async function GET(req: NextRequest) {
  const request = await req.json();
  const data = request.body;

  const page = data?.page ? Number(data.page) : undefined;
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  url.searchParams.set("api_key", process.env.TMDB_API_KEY!);

  if (page) {
    url.searchParams.set("page", data.page);
  }

  if (data.keywords) {
    url.searchParams.set("with_keywords", data.keywords);
  }

  if (data.id) {
    url.searchParams.set("with_genres", data.id);
  }

  try {
    const data = await fetchFromTMDB(url);
    console.log("movies data ", data);
    // return res.status(201).json(data);
    return NextResponse.json(
      {
        movies: data.movies,
        totalResults: data.total_results,
        totalPages: data.total_pages,
        page: data.page,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch movies" },
      { status: 500 },
    );
  }
}
