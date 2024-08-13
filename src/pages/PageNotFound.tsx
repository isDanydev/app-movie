import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import imgPageNotFound from "../assets/img/not-found-404.png";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = ({ title }: { title: string }) => {
  useTitle(`${title}`);

  return (
    <main className=" flex flex-col justify-center">
      <section className="flex flex-col justify-center px-2 items-center">
        <div className="flex flex-col items-center my-4">
          <div className="max-w-lg">
            <img src={imgPageNotFound} alt="404 error" className="rounded-lg" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/" className="flex flex-col justify-center sm:flex-row ">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
