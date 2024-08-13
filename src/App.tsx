//import { API_URL } from "../env";
// import { useState } from "react";
// import data from "./data/search-data.json";
// import dataTypes from "./data/search-types";

import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";
const App = () => {
  // console.log(data);
  // const urlImageTMDB = "https://image.tmdb.org/t/p/w300";
  // const [dataMovie, setDataMovie] = useState<dataTypes[]>(data.results);
  // console.log(data.total_results);
  return (
    // <div className="bg-slate-500 grid md:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4 p-4 justify-center items-center max-w-[1280px] m-auto justify-items-center ">
    //   {dataMovie.map((item: dataTypes, index: number) => {
    //     return (
    //       <div
    //         key={index}
    //         className="md:w-[200px] w-[350px] transition-all duration-300 ease-in-out hover:scale-105 "
    //       >
    //         <h2 className="truncate text-center">{item.title}</h2>
    //         <div className="flex justify-center items-center">
    //           <img src={urlImageTMDB + item.poster_path} alt="" />
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};
export default App;
