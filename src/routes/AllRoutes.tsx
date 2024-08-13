import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={
            <MovieList apiPath="/movie/now_playing" title="Pagina principal" />
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="/movie/popular" title="Populares" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="/movie/top_rated" title="Mas vistas" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="/movie/upcoming" title="Estrenos" />}
        />
        <Route path="/search" element={<Search apiPath="/search/movie" />} />
        <Route
          path="*"
          element={<PageNotFound title="Error 404 | Página no encontrada" />}
        />
      </Routes>
    </div>
  );
};
export default AllRoutes;
