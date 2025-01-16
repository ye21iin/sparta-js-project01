import { showCardsContainer, createMovieCard } from "./card.js";
import { openModal } from "./modal.js";

// 카드 생성 및 모달 이벤트 생성
function createCardNEvent(dataset) {
  dataset.forEach((movie) => {
    const card = createMovieCard(movie);
    showCardsContainer(card);

    card.addEventListener("click", () => {
      openModal(movie.id, dataset);
    });
  });
}

// 검색 시 결과 없음 표출
function showNoResult() {
  const noResultContainer = document.createElement("div");
  noResultContainer.classList.add("no-result-container");

  const noResultMessage = document.createElement("p");
  noResultMessage.textContent = "검색 결과가 없습니다.";

  noResultContainer.appendChild(noResultMessage);
  movieList.appendChild(noResultContainer);
}

// 메인화면 돌아가기
function backToMain() {
  const footer = document.querySelector("footer");
  const existingBtn = footer.querySelector(".back-to-main-btn");

  if (!existingBtn) {
    const backToMainBtn = document.createElement("button");
    backToMainBtn.classList.add("back-to-main-btn");
    backToMainBtn.textContent = "메인으로 돌아가기";

    backToMainBtn.addEventListener("click", () => {
      window.location.reload();
      window.scrollTo(0, 0);
    });

    footer.appendChild(backToMainBtn);
  }
}

export { createCardNEvent, showNoResult, backToMain };
