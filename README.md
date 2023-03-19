# Enjoy Trip 
(Perfection: 60%)

### 🛠 Skiis 🛠
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>

### :bulb: Maker - [Brojjun](https://github.com/Brojjun) & [thdqudgns](https://github.com/thdqudgns)

### Introduce
여행을 가기 위해서는 어느곳에 무엇이 있는지 알아야 한다   
그래서 어느 지역에 어떤 컨텐츠가 있는지 검색하고, 정보를 공유하는 웹 사이트를 만들었다   

---

# 1. 메인페이지

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/footer.css">
</head>
<body>
    <!-- header -->
    <header>
        <!-- title -->
        <div id="header-title">
            <a href="main.html"><span>Enjoy Trip</span></a>
        </div>
        <!-- header-right -->
        <div id="header-right">
            <!-- menu -->
            <div id="header-right-menu">
                <!-- 공지사항 -->
                <div><a href="#">공지사항</a></div>
                <!-- 공유게시판 -->
                <div><a href="#">공유게시판</a></div>
                <!-- 관광지역 -->
                <div><a href="trip.html">관광지역</a></div>
            </div>
            <!-- login -->
            <div id="header-right-login">
                <!-- 로그인 -->
                <div><a href="/login.html" id="loginCheck">로그인</a></div>
                <!-- 회원가입 -->
                <div><a href="/makeId.html" id="registerCheck">회원가입</a></div>
                <!-- 로그아웃 -->
                <div><a href="main.html" onclick="logout()" id="logoutCheck">로그아웃</a></div>
                <!-- 내 정보 조회 -->
                <div><a href="/mypage.html" id="mypageCheck">내 정보 조회</a></div>
            </div>
        </div>
    </header>
    
    <!-- main -->
    <main>
        <section>
            <!-- 메인 이미지 + 관관지역 검색 페이지 이동 -->
            <article id="main-background-first">
                <div class="background-image">
                    <div class="dark-overlay"></div>
                    <a href="trip.html" class="background-image-button">여행을 떠나볼까요?</a>
                </div>
            </article>
        </section>
    </main>
    
    <!-- footer -->
    <footer>
        <!-- logo -->
        <span>
            <img src="./img/ssafy_logo.png" alt="ssafy">
        </span>
        <!-- 이용약관 등 -->
        <!-- 관계자 위치, 연락처, 이메일 -->
        <span>Copyright © SSAFY 2023 Daejeon
        <br>Designed by thdqudgns & Brojjun</span>
    </footer>

    <!-- loginCheck -->
    <script src="./js/loginCheck.js"></script>
</body>
</html>
```

</div>
</details>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}
/* ----------------------- */

#main-background-first {
    height: 1200px;
}

#main-background-second,
#main-background-third,
#main-background-fourth{
    /* height: 200px; */
}

.background-image {
    position: relative;
    background-image: url('/img/airplane.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.background-image-button {
    padding: 10px 20px;
    /* background-color: rgb(84, 170, 227); */
    background-color: rgb(84, 170, 227, 0);
    border: none;
    border-radius: 5px;
    color: rgb(255, 255, 255, 0.7);
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
}
.background-image-button:hover {
    color: rgb(95, 183, 255);
    font-size: 65px;
}

/* --------------------------------- */
```

</div>
</details>

<details>
<summary>여기를 눌러주세요</summary>
<div markdown="1">       

```js
let loginCheck = document.getElementById('loginCheck');
let registerCheck = document.getElementById('registerCheck');
let logoutCheck = document.getElementById('logoutCheck');
let mypageCheck = document.getElementById('mypageCheck');

if (window.sessionStorage.id) {
    loginCheck.style.display = 'none';
    registerCheck.style.display = 'none';
    logoutCheck.style.display = 'content';
    mypageCheck.style.display = 'content';
} else {
    loginCheck.style.display = 'content';
    registerCheck.style.display = 'content';
    logoutCheck.style.display = 'none';
    mypageCheck.style.display = 'none';
}

function logout() {
    window.sessionStorage.removeItem('id');
}
```

</div>
</details>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/main.html" target="_blank">HTML코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/css/main.css" target="_blank">CSS코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/js/loginCheck.js" target="_blank">JS코드</a><br>

- 비행기 이미지를 넣어 여행을 가고 싶은 마음을 불러 일으키도록 함   

<img src="https://user-images.githubusercontent.com/92148521/226173326-15e57801-d4a1-4443-b4d2-a4f32455e948.png" width="1000px">

---

# 2. 회원가입, 로그인

modal로 구현했다.

<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/main.html" target="_blank">회원가입 HTML코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/main.html" target="_blank">로그인 HTML코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/css/modal.css" target="_blank">회원가입/로그인 CSS코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/js/modal.js" target="_blank">회원가입/로그인 JS코드</a><br>

- 회원가입 : 간단한 정보 입력으로 가입, 아이디 중복검사, 아이디 찾기 기능   
- 로그인 : 로그인 기능 및, 비밀번호 찾기 기능   

<img src="https://user-images.githubusercontent.com/92148521/226174300-faf673bf-423a-489d-a9ae-67c7b554748b.png" width="400px"> <img src="https://user-images.githubusercontent.com/92148521/226174306-a973016c-3d84-41ed-bed0-26fddcd338d5.png" width="400px">

---

# 3. 내 정보 조회

<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/main.html" target="_blank">HTML코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/css/mypage.css" target="_blank">CSS코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/js/mypage.js" target="_blank">JS코드</a><br>

- 로그인한 회원의 이름, 아이디, 이메일을 조회. 수정, 삭제 버튼 구현

<img src="https://user-images.githubusercontent.com/92148521/226174442-7a59245f-35e8-4f26-b450-57aac30097d1.png" width="1000px">

### 수정 / 삭제
<img src="https://user-images.githubusercontent.com/92148521/226174524-f89e6e9a-029f-439b-8c89-30503c9b55e1.png" width="300px"> <img src="https://user-images.githubusercontent.com/92148521/226174529-69255f0f-fe8a-4b0f-98c2-0d9bc00b012a.png" width="300px">

- 삭제 버튼을 클릭하면 회원 정보가 삭제된다.

---

# 4. 관광 정보 조회

<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/main.html" target="_blank">HTML코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/css/trip.css" target="_blank">CSS코드</a><br>
<a href="https://github.com/Penetrate-Enjoy-Trip-Web/Front-End/blob/main/js/trip.js" target="_blank">JS코드</a><br>

- 메인페이지의 문구를 누르면 관광정보 조회 페이지로 이동

<img src="https://user-images.githubusercontent.com/92148521/226174553-8391f902-13bd-49fa-af35-abf3f4096b2a.png" width="500px">

### 지역 / 관광지 유형 으로 검색
<img src="https://user-images.githubusercontent.com/92148521/226174679-90b7b302-b999-4916-93e0-0712feeaa6ab.png" width="500px"> <img src="https://user-images.githubusercontent.com/92148521/226174705-c3f229c4-4dc3-4c92-8942-1325cb1102eb.png" width="500px">


### 검색
- 검색을 하면 해당하는 관광지 정보가 나오고, 지도 밑에 검색한 관광지 목록이 조회된다

<img src="https://user-images.githubusercontent.com/92148521/226174751-b62d33c1-b7d2-4c21-833a-80f68988fb6f.png" width="1000px">

- 목록의 특정 관광지를 클릭하면 해당 관광지의 좌표로 지도가 이동
- 지도 좌측 상단의 버튼을 통해 로드뷰를 볼 수 있다

<img src="https://user-images.githubusercontent.com/92148521/226174916-9e234584-1ce3-44e5-9559-a0793d201af9.png" width="1000px">

