import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }: { apiPath: string }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");

  useTitle(`Resultados de ${queryTerm}`);

  const { data: searchMovies } = useFetch(apiPath, queryTerm || "");

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {searchMovies.length > 0
            ? `Se encontraron ${searchMovies.length} resultados de  "${queryTerm}" `
            : "No se encontraron resultados"}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex xl:justify-start flex-wrap other:justify-center">
          {searchMovies.map((searchMovie) => (
            <Card key={searchMovie.id} movie={searchMovie} />
          ))}
        </div>
      </section>
    </main>
  );
};
