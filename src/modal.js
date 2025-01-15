// Open-Modal - 영화 클릭 시 상세 정보 표출
function openModal(findId, dataset) {
  const movie = dataset.find((e) => e.id === findId);
  if (!movie) {
    console.error("영화 데이터를 찾을 수 없습니다.");
    return;
  }

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
function closeModalFunc() {
  const modal = document.getElementById("movie-modal");
  modal.style.display = "none"; // 모달을 숨김
}

// 모달 외부 클릭 시 모달 닫기 (배경 클릭 시 모달 닫힘)
function closeModalWindow(event) {
  const modal = document.getElementById("movie-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
export { openModal, closeModalFunc, closeModalWindow };
