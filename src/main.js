import { closeModalFunc, closeModalWindow } from "./modal.js";
import { getMovieData, getSearchData } from "./api.js";
import { createCardNEvent, showNoResult, backToMain } from "./ui.js";

const searchInput = document.getElementById("movie-search");
const closeModal = document.getElementById("close-btn");
const addBookmark = document.getElementById("bookmark-btn");
const searchBtn = document.querySelector(".search-btn");
const movieList = document.querySelector("#movie-container");
const searchTitle = document.querySelector("#movie-search");

const urlTrending =
  "https://api.themoviedb.org/3/trending/movie/day?language=ko";

// [main] trending movie - Card List 표출
let dataset = [];
async function main() {
  try {
    dataset = await getMovieData(urlTrending);
    return dataset["results"].sort((a, b) => b.vote_count - a.vote_count);
  } catch (err) {
    throw new Error(`error! status : ${err}`);
  }
}
dataset = await main();
createCardNEvent(dataset);

// 검색 기능 - Search/Movie
async function performSearch() {
  try {
    if (!searchTitle) {
      return "";
    }
    const searchQuery = searchTitle.value.trim().toLowerCase();

    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko`;

    dataset = await getSearchData(urlSearch, searchQuery);
    dataset = dataset["results"].sort((a, b) => b.vote_count - a.vote_count);

    movieList.innerHTML = ""; // 기존 목록 초기화
    if (dataset.length > 0) {
      createCardNEvent(dataset);
    }
    // 검색결과가 없을 때
    else {
      showNoResult();
    }
    backToMain();
  } catch (err) {
    throw new Error(`status : ${err}`);
  }
}

// 버튼 검색
searchBtn.addEventListener("click", performSearch);

// 엔터키 검색
searchInput.addEventListener("keydown", (event) =>
  event.key === "Enter" ? performSearch() : ""
);

// 모달 닫기 기능: 닫기 버튼 클릭 시 모달을 숨김
closeModal.addEventListener("click", closeModalFunc);

// 모달 외부 클릭 시 모달 닫기 (배경 클릭 시 모달 닫힘)
window.addEventListener("click", closeModalWindow);

// 북마크 추가
addBookmark.addEventListener("click", function () {
  // 기능 추가 예정
});
