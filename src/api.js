const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
  },
};

// [main] trending movie
async function getMovieData(url) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`status : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`status : ${err.message}`);
  }
}

// search movie
async function getSearchData(url, searchQuery) {
  console.log("검색어 : ", searchQuery);
  if (!searchQuery) {
    alert(`[오류] 키워드를 입력해주세요!\n검색어가 입력되지 않았습니다.`);
    return;
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`status : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`status : ${err.message}`);
  }
}

export { getMovieData, getSearchData };
