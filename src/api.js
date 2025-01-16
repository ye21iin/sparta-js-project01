const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
  },
};

async function getTrendingMovies(url) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`error! status : ${response.status}`);
    }

    const data = await response.json();
    return data; // 데이터를 반환
  } catch (err) {
    console.error(err);
    throw new Error(`error! status : ${err.message}`);
  }
}

export { getTrendingMovies };
