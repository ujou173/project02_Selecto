const header = `
<div class="hd_top mw">
<h1>
  <a href="../index.html"><img src="./resource/logo.png" alt="Logo_top" /></a>
</h1>
<div class="sns_icons">
  <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
  <a href="#"><i class="fab fa-facebook-square"></i></a>
  <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
</div>
</div>
<div class="hd_bottom">
<nav>
  <ul class="gnb mw">
    <li>
      <a href="#">셀렉토커피</a>
      <ul class="sub">
        <li><a href="#">브랜드 스토리</a></li>
        <li><a href="#">히스토리</a></li>
        <li><a href="#">ONE FOR ONE</a></li>
      </ul>
    </li>
    <li>
      <a href="#">메뉴</a>
      <ul class="sub">
        <li><a href="#">시그니처 메뉴</a></li>
        <li><a href="#">커피</a></li>
        <li><a href="#">쿠키</a></li>
        <li><a href="#">디저트</a></li>
        <li><a href="#">MD</a></li>
      </ul>
    </li>
    <li>
      <a href="../sub.html">창업안내</a>
      <ul class="sub">
        <li><a href="../sub.html">브랜드 경쟁력</a></li>
        <li><a href="#">인테리어</a></li>
        <li><a href="#">리얼 인터뷰</a></li>
      </ul>
    </li>
    <li>
      <a href="#">매장안내</a>
      <ul class="sub">
        <li><a href="#">매장찾기</a></li>
        <li><a href="#">오픈 예정 매장</a></li>
      </ul>
    </li>
    <li>
      <a href="#">새소식</a>
      <ul class="sub">
        <li><a href="#">공지사항</a></li>
        <li><a href="#">보도자료</a></li>
      </ul>
    </li>
    <li>
      <a href="#">이벤트</a>
    </li>
  </ul>
</nav>
</div>`;

//   gnb 출력
const $hd = document.querySelector(".hd");
$hd.innerHTML = header;
