(() => {
  //ボタンを開く
  Array.from(document.getElementsByClassName("btn-title")).forEach((btn, i) => {
    btn.addEventListener("click", () => {
      Array.from(document.getElementsByClassName("btn"))[i].classList.toggle("closed");
    })
  })

  //radioが選択されたらフォームを表示する
  const showForm = (name, target) => {
    let className = document.querySelector(`input:checked[name=${name}]`) ? document.querySelector(`input:checked[name=${name}]`).value : "closed";
    document.getElementById(target).classList = className;
    Array.from(document.getElementsByName(name)).forEach(el => {
      el.addEventListener("click", () => {
        document.getElementById(target).classList = el.value;
      });
    });
  }
  
  showForm("senderType", "basic-info");
})();