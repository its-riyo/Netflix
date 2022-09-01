import { useEffect, useState } from "react";
import Tmdb from "./api/Tmdb";
import Lists from "./components/listing/Lists";
import "./css/index.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HighlightedMovie from "./components/listing/HighlightedMovie";

function App() {

  const [List, setList] = useState([]);
  const [HighlightedMovieData, setHighlightedMovieData] = useState({});

  useEffect(() => {

    const LoadData = async () => {

      let response = await Tmdb.GetData();

      console.log(response);

      let randomSlug = response[Math.floor(Math.random() * response.length)].Data.results;
      let randomMovie =  randomSlug[Math.floor(Math.random() * randomSlug.length)];

      setList(response);
      setHighlightedMovieData(randomMovie);

    };

    LoadData();

  }, []);

  return (
    <div className=" bg-ThemeColor">
      <Header />

      <HighlightedMovie data={HighlightedMovieData}/>

      <Lists Lists={ List } />

      <Footer />
    </div>
  );
}

export default App;
