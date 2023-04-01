var currentMenu;
var menu = document.querySelectorAll(".nav__link");

function inactivate(elem) {
  elem.classList.remove(".click");
}

function activate(elem) {
  elem.classList.add(".click");
  currentMenu = elem;
}
function clickHandler(e) {
  // 보통 이벤트 handler 안에 길게 쓰기 보다 함수를 쓴다.
  if (currentMenu) {
    inactivate(currentMenu);
  }
  activate(e.target);
}

menu.addEventListener("click", clickHandler);

// const navLink = document.querySelectorAll(".nav__link");

// function handleClick(event) {
//   // div에서 모든 "click" 클래스 제거
//   navLink.forEach((e) => {
//     e.classList.remove("click");
//   });
//   // 클릭한 div만 "click"클래스 추가
//   event.target.classList.add("click");
// }

// navLink.forEach((e) => {
//   e.addEventListener("click", handleClick);
// });

// $("div.nav__text").click(function () {
//   $("div.nav__text").addClass("on");
//   $(this).removeClass("on");
// });
