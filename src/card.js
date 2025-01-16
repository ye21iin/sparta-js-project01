function showCardsContainer(card) {
  const movieContainer = document.getElementById("movie-container");
  return movieContainer.appendChild(card);
}
// 카드 생성 함수
function createMovieCard(movie) {
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC4CAMAAADHV+kyAAAAM1BMVEX////MzMyrq6vX19fq6urv7+/Y2NjAwMD19fX5+fmxsbHQ0NDf39+1tbXl5eXc3Ny7u7tOeLhWAAADrElEQVR4nO2b2WKjIBRAFTSiGMn/f+1wWdSYNtOxaTPiOQ+NEUzhyGVxqSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiQfrroXVym/t1lfym9rneji1Lh9ouoa/fu0r8S+x0T9t2lfyWxmV/+mRhU7y79K9ndyF2JJto9B7aYSGAic2YTfeO0m6dTJzbRxAHXTvHreU008ywiqjitCbOaUIX8pzUxrkxcZMdZTfTrWbmVXvO0Ju7WG6bCBCaq9WWMU0dHNa1MhBXbaU2su0wJjrOYMKNrNrvaWUVMOYcJI7UetzsvwYNOuU9hIkXCVkVlpmma857CRB4npmcHnsHEcrn7mYoTmFiPl9tuc0X5Jpp6zSppc5uneBPm/gaIzWmNtfexUrqJfnsnyIZpVAyZOxWlm7jUW0RF7x570MJNjA8i5MLlNC+/Vj1o2SamD0Tcs6go2kT7VxErayWbMF+5b27vtL2t2D/AYuJh2PhERRxMSjbxOGw8VVGuiY+GjU9UhNlmsSb+Pmws6JKvY35l2FiQWz+FmvjSsLHClWri3x9FdIWa2PEo4lSkiV0Pp+oSTezn3aV/JZjIYCKDiQwmMpjIYCLDWw0Z3nTJ8PbTDG/EAQAAAAAAAPwuWocn9Y3W8tG7uqtdvyQaSUmXH5zW8TmzlDlsuq7rnAl5I+YXC/9SlFLy1ESjlP87DUoY2jmxkRQVZfmNaMClPWEroMMPBZ484f1/48veVcmEGdTVn9VBDSYniomruskXO5u4xmO8ORUOuCkneeujt4mrnMZgolaDxEE/qDonionuFprN1ecMJlq/oUKFr8lIk/IeGn8q1TWZGFS8Rm1lT0wMJpzsn1TXRRO1sp20AomXafVDhzfh6+OiiVyxMXQa1WzCqEHqPyYTg2rH4Mof1K9+6PAmfBMY+mQiVqbZmKg6NfbeRjQhFvrQz8Z8nbD0mG+ryXfxRff9gn5uYooREk10EiuddCUxX6q/Urfk5KBIJWRUfBYdsbc00YRJ535YouNO42EJlZaKKvnIPeYtJyYTOoybwUSeQvgpRZvUFWSiiQ38s1E0NIQxmbjFbrOLTeXWV0WZ8PVKM6vBarudWUnot00VTbRpKjHKp8ysrNZdNBFnVof1EU206slse+4ExUSOHN9w3BIqq7FDP/yLg5AWU2NagY22s+NmBTa/TD36E+7ySR/DfuP8AeEN87wCO2ybAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAf5w/pNR2oA/UcowAAAABJRU5ErkJggg==";
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
