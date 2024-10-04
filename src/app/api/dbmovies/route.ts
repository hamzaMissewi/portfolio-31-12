import { fetchFromTMDB, TMDB_API_KEY } from "@/lib/getMovies";
import { NextRequest } from "next/server";
import { NextApiResponse } from "next";

// Next js 9 example
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse,
// ) {
//     const data = req.body;
// }

// async function getDiscoverMoviesByPage(page: number, id?: string, keywords?: string) {
//     const url = new URL("https://api.themoviedb.org/3/discover/movie");
//     keywords && url.searchParams.set("with_keywords", keywords);
//     id && url.searchParams.set("with_genres", id);
//     const data = await fetchFromTMDB(url, undefined, page);
//     return {results: data.results, totalPages: data.total_pages, page: data.page};
// }

// TODO must use nextRequest and nextResponse
export async function GET(req: NextRequest, res: NextApiResponse) {
  const request = await req.json();
  const data = request.body;

  const page = data?.page ? Number(data.page) : undefined;
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  url.searchParams.set("api_key", TMDB_API_KEY!);

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
    // const {data} = await axios.get(
    //     // `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`, {
    //     `https://api.themoviedb.org/3/discover/movie`, {
    //         headers: {
    //             Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    //             'Content-Type': 'application/json'
    //         },
    //         params: {
    //             page: page,
    //             language: 'en-US',
    //             sort_by: 'popularity.desc',
    //             // api_key: process.env.TMDB_API_KEY,
    //             with_genres: genreForUrl,
    //             adult_search: "include_adult=true"
    //         },
    //     },
    // );

    const data = await fetchFromTMDB(url);
    console.log("movies data ", data);
    return res.status(201).json(data);
    // res.status(200).json({results: data.results, totalPage: data.total_page})
  } catch (error) {
    return new Response("Failed to fetch movies ", { status: 500 });
  }
}
