# 🎬 Lights, Camera, Action! 🍿 영화 검색 앱 (Movie Search)

## Bookmark management WEB Application

**"SAVE 💛 the favorites!"**

- Trending 영화를 탐색하고, 좋아하는 영화를 북마크에 추가하여 나만의 영화 목록을 만들어보세요!
- 이 애플리케이션 서비스는 실시간 영화 API를 기반으로 인기있는 영화 목록과 상세 정보를 제공합니다.
- 관심있는 영화를 북마크로 저장하고, 추가한 영화들을 관리할 수 있게 도와줍니다.

**Enjoy! 💛**

---

## 📦 프로젝트 구조

```
/SPARTA-JS-PROJECT01
├── .gitignore
├── index.html # 메인 HTML
├── style.css # 디자인
├── README.md # 프로젝트 설명
└── src
├── main.js # 메인 로직
├── api.js # API fetch 기능
├── modal.js # 모달 관련 기능
├── bookmark.js # 북마크 주요 기능
├── card.js # 영화 카드 생성 기능
└── ui.js # UI 조작 관련 기능
```

## 📝 기능

- **[Trending] 영화 목록 보기**  
  실시간 TMDB API를 통해 Trending Movies 정보 (제목, 개요, 포스터 등)를 확인할 수 있습니다.

- **[Bookmark] 영화 북마크**  
  영화 리스트에서 좋아하는 영화를 북마크로 저장할 수 있습니다. 북마크 목록을 보고, 원하는 영화의 북마크를 삭제할 수 있습니다.

- **[Responsive Web] 모바일 지원**  
  반응형 웹 디자인을 적용하여 모바일에서도 편리하게 사용할 수 있습니다.

---

### 📑 기술 스택

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

- **HTML5**: 웹 페이지의 구조를 설계.
- **CSS3**: 스타일링과 레이아웃 구현.
- **JavaScript**: 기능 구현 (영화 목록 관리, 북마크 저장 등).
- **LocalStorage**: 북마크 데이터 처리.
- **Git**: 버전 관리.

### 🖼️ 미리 보기

#### 메인 (Trending Movies)

![main](https://i.ibb.co/C5xwQYM/2025-01-17-10-18-00.png)

#### 영화 카드 (Description)

![movie](https://i.ibb.co/02FkP7f/2025-01-17-10-18-43.png)

#### 검색 (Search)

![search](https://i.ibb.co/tK3YhyF/2025-01-17-10-20-22.png)

#### 북마크 (Save)

![bookmark](https://i.ibb.co/MchjJNQ/2025-01-17-10-21-25.png)

---

## 🚀 시작하기

이 프로젝트를 로컬에서 실행하려면 아래의 단계를 따라 주세요.

### 🛠️ 설치 및 실행 방법

```
1. 저장소를 클론한 후, index.html 파일을 브라우저에서 열어보세요.
2. 로컬 스토리지에 저장된 북마크 데이터를 확인하고, 영화 목록을 추가해보세요.
3. 북마크 버튼을 클릭하면 해당 영화가 북마크 목록에 추가됩니다.
4. 북마크 삭제 버튼을 클릭하면 북마크가 삭제됩니다.
```

### 1. 저장소 클론

```
bash
git clone https://github.com/ye21iin/sparta-js-project01.git
```

### 2. 프로젝트 실행하기

클론한 프로젝트 폴더로 이동합니다.

```
bash
cd SPARTA-JS-PROJECT01
```

index.html 파일을 더블 클릭하거나 웹 브라우저에서 열어주세요!
프로젝트가 정상적으로 로드되면, 웹 애플리케이션을 사용하실 수 있습니다.

### 📌 사용법

- 웹 페이지를 열면 영화 목록과 함께 북마크 확인 버튼이 나타납니다.
- 마음에 드는 영화를 북마크하려면 해당 영화를 클릭하고, 하단에 있는 "북마크 추가" 버튼을 클릭하세요!
- 북마크를 확인하려면 페이지 상단의 "북마크 보기" 버튼을 클릭하세요. 그러면 저장된 북마크 목록을 확인할 수 있는 모달 창이 나타납니다!
- 목록에서 북마크 항목 옆의 "삭제" 버튼을 클릭하여 해당 항목을 삭제할 수 있습니다.
- 삭제된 북마크는 즉시 localStorage에서 제거되고 화면에서 갱신됩니다.

---

## 🔍 주요 코드 설명

### 💾 localStorage 사용

```
// localStorage의 북마크 불러오기
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// 북마크 추가
bookmarks.push(movie);
localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

// 북마크 삭제
bookmarks = bookmarks.filter(bookmark => bookmark.id !== movieId);
localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
```

북마크 항목은 localStorage에 저장되어 페이지를 새로고침하거나 브라우저를 종료한 후에도 데이터가 유지됩니다. 사용자가 북마크를 추가하거나 삭제할 때마다 localStorage에 저장된 데이터를 갱신합니다.

### 💡 모달(Modal) 기능

영화 상세 정보 표출과 북마크 목록을 확인을 위해 모달을 사용했습니다. 모달은 기본적으로 숨겨져 있으며, 영화 카드/버튼 클릭 시 표시됩니다. 모달을 닫으려면 "×" 버튼을 클릭하거나, 모달 외부를 클릭하면 됩니다.

## 🔒 라이센스

```
MIT 라이센스. 자세한 내용은 LICENSE 파일을 참조하세요.
```
