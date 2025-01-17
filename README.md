# 🎬 Lights, Camera, Action! - 🍿 영화 검색 앱 (Movie Search App)

## Bookmark management WEB Application

- SAVE 💛 the favorites!
  Trending 영화를 탐색하고, 좋아하는 영화를 북마크에 추가하여 나만의 영화 목록을 만들어보세요!
  이 애플리케이션 서비스는 실시간 영화 API를 기반으로 인기있는 영화 목록과 상세 정보를 제공합니다.
  관심있는 영화를 북마크로 저장하고, 추가한 영화들을 관리할 수 있게 도와줍니다. Enjoy 💛

---

## 📦 프로젝트 구조

## 📝 기능

- **[Trending] 영화 목록 보기**: 실시간 TMDB API를 통해 Trending Movies 정보 (제목, 개요, 포스터 등)를 확인할 수 있습니다.
- **[Bookmark] 영화 북마크**: 영화 리스트에서 좋아하는 영화를 북마크로 저장할 수 있습니다. 북마크 목록을 보고, 원하는 영화의 북마크를 삭제할 수 있습니다.
- **[Responsive Web] 모바일 지원**: 반응형 웹 디자인을 적용하여 모바일에서도 편리하게 사용할 수 있습니다.

## 📑 기술 스택

- **HTML5**: <i class="fas fa-code"></i> 웹 페이지의 구조를 설계.
- **CSS3**: <i class="fas fa-paint-brush"></i> 스타일링과 레이아웃 구현.
- **JavaScript**: <i class="fab fa-js"></i> 기능 구현 (영화 목록 관리, 북마크 저장 등).
- **LocalStorage**: <i class="fas fa-database"></i> 북마크 데이터 처리.
- **Git**: <i class="fab fa-github"></i> 버전 관리.

🖼️ 화면 캡처

## 🚀 시작하기

이 프로젝트를 로컬에서 실행하려면 아래의 단계를 따라 주세요.

🛠️ 설치 및 실행 방법
저장소를 클론한 후, index.html 파일을 브라우저에서 열어보세요.
로컬 스토리지에 저장된 북마크 데이터를 확인하고, 영화 목록을 추가해보세요.
북마크 버튼을 클릭하면 해당 영화가 북마크 목록에 추가됩니다.
북마크 삭제 버튼을 클릭하면 북마크가 삭제됩니다.

### 1. 저장소 클론

```
bash
git clone https://github.com/ye21iin/sparta-js-project01.git
```

📌 사용법
웹 페이지를 열면 영화 목록과 함께 북마크 확인 버튼이 나타납니다.
마음에 드는 영화를 북마크하려면 해당 영화를 클릭하고, 하단에 있는 "북마크 추가" 버튼을 클릭하세요!
북마크를 확인하려면 페이지 상단의 "북마크 보기" 버튼을 클릭하세요. 그러면 저장된 북마크 목록을 확인할 수 있는 모달 창이 나타납니다!
목록에서 북마크 항목 옆의 "삭제" 버튼을 클릭하여 해당 항목을 삭제할 수 있습니다.
삭제된 북마크는 즉시 localStorage에서 제거되고 화면에서 갱신됩니다.

/SPARTA-JS-PROJECT01
├── .gitignore # Git에서 제외할 파일 목록
├── index.html # 메인 HTML 파일
├── style.css # 스타일 시트 (CSS)
├── README.md # 프로젝트 설명 (이 파일)
└── src
├── main.js # 애플리케이션 초기화 및 이벤트 리스너 설정
├── script.js # 주요 기능 구현 (JavaScript)
├── modal.js # 모달 관련 기능
├── bookmark.js # 북마크 주요 기능
├── card.js # 영화 카드 생성 기능
└── ui.js # UI 조작 관련 기능

### 주요 코드 설명

💾 localStorage 사용
북마크 항목은 localStorage에 저장되어 페이지를 새로고침하거나 브라우저를 종료한 후에도 데이터가 유지됩니다. 사용자가 북마크를 추가하거나 삭제할 때마다 localStorage에 저장된 데이터를 갱신합니다.

💡 모달(Modal) 기능
북마크 목록을 확인하기 위해 모달을 사용했습니다. 모달은 기본적으로 숨겨져 있으며, 영화 카드/버튼 클릭 시 표시됩니다. 모달을 닫으려면 "×" 버튼을 클릭하거나, 모달 외부를 클릭하면 됩니다.

```

🔒 라이센스
MIT 라이센스. 자세한 내용은 LICENSE 파일을 참조하세요.
```
