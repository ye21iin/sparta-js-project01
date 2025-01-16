const searchTitle = document.querySelector("#movie-search");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
  },
};

async function getMovieData(url) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`error! status : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`error! status : ${err.message}`);
  }
}

async function getSearchData() {
  const searchQuery = searchTitle.value.trim().toLowerCase();
  console.log("검색어 : ", searchQuery);
  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko`;

  if (!searchQuery) {
    alert(`[오류] 키워드를 입력해주세요!\n검색어가 입력되지 않았습니다.`);
    return;
  }

  try {
    const response = await fetch(urlSearch, options);

    if (!response.ok) {
      throw new Error(`error! status : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`error! status : ${err.message}`);
  }
}

export { getMovieData, getSearchData };
