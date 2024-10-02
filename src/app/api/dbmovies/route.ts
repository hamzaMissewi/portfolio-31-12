import { NextApiRequest, NextApiResponse } from "next";
import { fetchFromTMDB, TMDB_API_KEY } from "@/lib/getMovies";

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

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const page = req.body?.page ? Number(req.body.page) : undefined;
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  url.searchParams.set("api_key", TMDB_API_KEY!);

  if (page) {
    url.searchParams.set("page", req.body.page);
  }

  if (req.body.keywords) {
    url.searchParams.set("with_keywords", req.body.keywords);
  }

  if (req.body.id) {
    url.searchParams.set("with_genres", req.body.id);
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
    res.status(201).json(data);
    // res.status(200).json({results: data.results, totalPage: data.total_page})

    // return new Response({results: data.results, totalPage: data.total_page})
    // return new Response(JSON.stringify(data), {
    // headers: {'Content-Type': 'application/json'},
    // status: 201,
    // });
  } catch (error) {
    return new Response("Failed to fetch movies ", { status: 500 });
  }
}
