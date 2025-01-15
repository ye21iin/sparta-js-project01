import { openModal, closeModalFunc, closeModalWindow } from "./modal.js";
import { showCardsContainer, createMovieCard } from "./card.js";

const closeModal = document.getElementById("close-btn");
const addBookmark = document.getElementById("bookmark-btn");
const searchBtn = document.querySelector(".search-btn");
const searchTitle = document.querySelector("#movie-search");
const movieList = document.querySelector("#movie-container");

// [main] trending movie - Card List 표출
let dataset = [];

fetch("https://api.themoviedb.org/3/trending/movie/day?language=ko", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
  },
})
  .then((res) => res.json())
  .then((res) => {
    let rows = res["results"];
    dataset = rows;

    // 평가한 사람이 많은 순으로 정렬 (내림차순)
    rows.sort((a, b) => b.vote_count - a.vote_count);

    // 각 영화에 대해 카드 생성
    rows.forEach((movie) => {
      const card = createMovieCard(movie);
      showCardsContainer(card);

      // 카드 클릭 시 openModal
      card.addEventListener("click", () => {
        openModal(movie.id, dataset);
      });
    });
  })
  .catch((err) => console.error(err));


// // [main] trending movie - Card List 표출
// let dataset = [];

// fetch("https://api.themoviedb.org/3/trending/movie/day?language=ko", {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => {
//     let rows = res["results"];
//     dataset = rows;

//     // 평가한 사람이 많은 순으로 정렬 (내림차순)
//     rows.sort((a, b) => b.vote_count - a.vote_count);

//     // 각 영화에 대해 카드 생성
//     rows.forEach((movie) => {
//       const card = createMovieCard(movie);
//       showCardsContainer(card);

//       // 카드 클릭 시 openModal
//       card.addEventListener("click", () => {
//         openModal(movie.id, dataset);
//       });
//     });
//   })
//   .catch((err) => console.error(err));

// 모달 닫기 기능: 닫기 버튼 클릭 시 모달을 숨김
closeModal.addEventListener("click", closeModalFunc);

// 모달 외부 클릭 시 모달 닫기 (배경 클릭 시 모달 닫힘)
window.addEventListener("click", closeModalWindow);

// 북마크 추가
addBookmark.addEventListener("click", function () {
  // 기능 추가 예정
});

// 검색 기능 - Search/Movie
searchBtn.addEventListener("click", async function () {
  const searchQuery = searchTitle.value.trim().toLowerCase();

  if (!searchQuery) {
    alert(`[오류] 키워드를 입력해주세요!\n검색어가 입력되지 않았습니다.`);
    return;
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYzNGFmOGY1YzkzOTZiYWZmYWVmZWFlMWI4MDI5MCIsIm5iZiI6MTczNjMxNzQzOS44NDYwMDAyLCJzdWIiOiI2NzdlMTlmZjg5ZmM1ZDk0NDI0ZTYyY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b0KjjTJ82aZ_cGqIxwOrsLNMngvvQeKlrGETGx7KlF4",
        },
      }
    );
    if (!response.ok) {
      throw new Error("API 요청 실패");
    }
    const data = await response.json();
    const sortedSearchResult = data.results.sort(
      (a, b) => b.vote_count - a.vote_count
    );
    dataset = sortedSearchResult;

    movieList.innerHTML = ""; // 기존 목록 초기화
    if (sortedSearchResult.length > 0) {
      sortedSearchResult.forEach((movie) => {
        const card = createMovieCard(movie);
        showCardsContainer(card);
        card.addEventListener("click", () => {
          openModal(movie.id, dataset);
        });
      });
    }
    // 검색결과가 없을 때
    else {
      const noResultContainer = document.createElement("div");
      noResultContainer.classList.add("no-result-container");

      const noResultMessage = document.createElement("p");
      noResultMessage.textContent = "검색 결과가 없습니다.";

      noResultContainer.appendChild(noResultMessage);
      movieList.appendChild(noResultContainer);
    }
  } catch (error) {
    console.error(error); // 오류 발생 시 콘솔에 출력
  }
  backToMain();
});

// 메인화면 돌아가기
function backToMain() {
  const footer = document.querySelector("footer");
  const backToMainBtn = document.createElement("button");
  if (!footer.querySelector(".back-to-main-btn")) {
    const backToMainBtn = document.createElement("button");
    backToMainBtn.classList.add("back-to-main-btn");
    backToMainBtn.textContent = "메인으로 돌아가기";

    backToMainBtn.addEventListener("click", function () {
      window.location.reload();
    });

    footer.appendChild(backToMainBtn);
  }
}
