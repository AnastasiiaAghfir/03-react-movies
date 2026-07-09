import axios from "axios";

export default async function fetchMovies(query: string) {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: query,
          api_key: import.meta.env.VITE_TMDB_TOKEN,
        },
    })
    return response.data.results;
}