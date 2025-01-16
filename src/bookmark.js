// 북마크 추가
function addBookmarkFunc(event) {
  //   console.log(event);
  const movieId = event.target.getAttribute("data-movie-id");
  const movieTitle = event.target.getAttribute("data-movie-title");

  if (movieId) {
    // 기존 북마크 불러오기
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    // 새로운 영화 저장
    const movieExists = bookmarks.some((bookmark) => bookmark.id === movieId);
    if (!movieExists) {
      const newBookmark = {
        id: movieId,
        title: movieTitle,
      };
      bookmarks.push(newBookmark);

      // 업데이트된 북마크 -> localStorage 저장
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

      console.log(
        `[Log] 북마크 저장 완료 (movie ID: ${movieId}, Title: ${movieTitle})`
      );
    } else {
      console.log(
        `[Alert] 이미 북마크에 추가된 영화입니다. (movie ID: ${movieId}, Title: ${movieTitle})`
      );
    }
  } else {
    console.error("[Error] 영화 ID 또는 제목을 찾을 수 없습니다.");
  }
}

// 북마크 보기
function showBookmarkFunc(event) {
  const modal = document.getElementById("bookmark-modal");
  modal.style.display = "flex";
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const bookmarkContainer = document.getElementById("bookmark-container");

  if (bookmarks.length === 0) {
    bookmarkContainer.innerHTML = "<li>북마크된 영화가 없습니다.</li>";
    return;
  }

  // 북마크 목록 순회
  bookmarkContainer.innerHTML = "";
  bookmarks.forEach((bookmark) => {
    const listItem = document.createElement("li");
    listItem.textContent = bookmark.title;

    // 삭제 버튼 추가
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => removeBookmark(bookmark.id));

    listItem.appendChild(deleteBtn);
    bookmarkContainer.appendChild(listItem);
  });
}

// 북마크 삭제
function removeBookmark(movieId) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  // 제거할 ID를 제외하고 새로운 배열 생성 - 업데이트
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== movieId);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  showBookmarkFunc(); // 삭제 후 화면 새로고침
  console.log(`[Log] 북마크 제거 완료 (movie ID: ${movieId})`);
}

export { addBookmarkFunc, showBookmarkFunc };
