import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({
  apiPath,
  title,
}: {
  apiPath: string;
  title: string;
}) => {
  //eslint-disable-next-line
  const pageTitle = useTitle(`${title}`);
  {
    /* La data de movies se obtiene de la api usando el hook personalizado useFetch */
  }
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex xl:justify-start flex-wrap other:justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
