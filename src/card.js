function showCardsContainer(card) {
  const movieContainer = document.getElementById("movie-container");
  return movieContainer.appendChild(card);
}
// 카드 생성 함수
function createMovieCard(movie) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "default-image.jpg";
  const title = movie.title;
  const overview = movie.overview || "개요가 없습니다.";
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

  return card;
}

export { showCardsContainer, createMovieCard };
