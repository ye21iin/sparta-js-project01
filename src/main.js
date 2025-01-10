const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=ko", options)
  .then((res) => res.json())
  .then((res) => {
    let rows = res["results"];

    // 평가한 사람이 많은 순으로 정렬 (내림차순)
    rows.sort((a, b) => b.vote_count - a.vote_count);

    // 영화 컨테이너 선택
    const movieContainer = document.getElementById("movie-container");

    // 각 영화에 대해 카드 생성
    rows.forEach((movie) => {
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "default-image.jpg";
      const title = movie.title;
      const overview = movie.overview || "개요가 없습니다."; // 개요가 없으면 기본 텍스트 설정
      const voteAverage = Math.round(movie.vote_average * 10) / 10;
      const voteCount = movie.vote_count;
      const releaseDate = movie.release_date;

      // 카드 생성
      const card = document.createElement("div");
      card.classList.add("card");

      // 카드 이미지 부분
      const cardImg = document.createElement("div");
      cardImg.classList.add("card-img");
      const img = document.createElement("img");
      img.src = posterPath; // 포스터 이미지 경로 설정
      img.alt = title; // alt 속성에 영화 제목 설정
      cardImg.appendChild(img);

      // 카드 헤더 부분 (제목)
      const cardHead = document.createElement("div");
      cardHead.classList.add("card-head");
      const titleElem = document.createElement("h2");
      titleElem.textContent = title;
      cardHead.appendChild(titleElem);

      // 카드 푸터 부분 (평점, 투표 수)
      const cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer");
      const voteAverageElem = document.createElement("span");
      voteAverageElem.textContent = `평점 : ${voteAverage} / 10`; // 평균 평점
      const voteCountElem = document.createElement("span");
      voteCountElem.textContent = `${voteCount}명의 평가`; // 투표 수
      cardFooter.appendChild(voteAverageElem);
      cardFooter.appendChild(voteCountElem);

      // 생성된 카드에 내용 추가
      card.appendChild(cardImg);
      card.appendChild(cardHead);
      card.appendChild(cardFooter);

      // 영화 컨테이너에 카드 추가
      movieContainer.appendChild(card);

      // 카드 클릭 시 openModal 함수 호출
      card.addEventListener("click", () => {
        openModal(movie); // 클릭된 영화의 정보를 전달
      });
    });
  })
  .catch((err) => console.error(err));

function openModal(movie) {
  const modal = document.getElementById("movie-modal");
  const moviePoster = document.getElementById("movie-poster");
  const movieTitle = document.getElementById("movie-title");
  const movieDescription = document.getElementById("movie-description");
  const releaseDate = document.getElementById("release-date");
  const voteAverage = document.getElementById("vote-average");

  // 모달에 영화 상세 정보 세팅
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "default-image.jpg";
  moviePoster.src = posterPath;
  movieTitle.textContent = movie.title;
  movieDescription.textContent = movie.overview || "개요가 없습니다.";
  releaseDate.textContent = movie.release_date;
  voteAverage.textContent = `${Math.round(movie.vote_average * 10) / 10} / 10`;

  modal.style.display = "block";
}

// 모달 닫기 기능: 닫기 버튼 클릭 시 모달을 숨김
document.getElementById("close-btn").addEventListener("click", function () {
  const modal = document.getElementById("movie-modal");
  modal.style.display = "none"; // 모달을 숨김
});

// 모달 외부 클릭 시 모달 닫기 (배경 클릭 시 모달 닫힘)
window.addEventListener("click", function (event) {
  const modal = document.getElementById("movie-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("bookmark-btn").addEventListener("click",function (){
  
})