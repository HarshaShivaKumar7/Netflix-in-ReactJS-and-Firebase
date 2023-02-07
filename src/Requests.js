const API_KEY = "e8477fa34c3426585374a1d5bda67076"; //yashas
// const API_KEY = "a979b00d705b7632d271280a6f4ee863"; // My

const requests = {
  fetchTNetflixOriginals: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/discover/tv/?api_key=${API_KEY}&with_network=223`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=34`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDocumentaries1: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries2: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchDocumentaries3: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDocumentaries4: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchDocumentaries5: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};

export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=abc&language=en-US
