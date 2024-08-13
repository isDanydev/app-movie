import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../env";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

export const useFetch = (url: string, term: string = "") => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        API_URL + `${url}?api_key=${API_KEY}&query=${term}&language=es-ES`
      );
      const data = await response.json();
      setData(data.results);
    };
    fetchMovies();
  }, [url, term]);
  return { data };
};
