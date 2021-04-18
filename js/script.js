(() => {
  //ボタンを開く
  Array.from(document.getElementsByClassName("btn-title")).forEach((btn, i) => {
    btn.addEventListener("click", () => {
      Array.from(document.getElementsByClassName("btn"))[i].classList.toggle("open");
    })
  })
})();