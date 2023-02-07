import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";
import "./HomeScreen.css";
const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTNetflixOriginals} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Documentaries1" fetchUrl={requests.fetchDocumentaries1} />
      <Row title="Documentaries2" fetchUrl={requests.fetchDocumentaries2} />
      <Row title="Documentaries3" fetchUrl={requests.fetchDocumentaries3} />
      <Row title="Documentaries4" fetchUrl={requests.fetchDocumentaries4} />
      <Row title="Documentaries5" fetchUrl={requests.fetchDocumentaries5} />
    </div>
  );
};

export default HomeScreen;
