(() => {
  //ボタンを開く
  Array.from(document.getElementsByClassName("btn-title")).forEach((btn, i) => {
    btn.addEventListener("click", () => {
      Array.from(document.getElementsByClassName("btn"))[i].classList.toggle("closed");
    })
  })

  //radioが選択されたらフォームを表示する
  const hideSubTarget = (mainTarget, subTargets) => {
    if(document.getElementById(mainTarget).classList.contains("closed")) {
      subTargets.forEach(el => {
        console.log(el);
        document.getElementById(el).classList.add("closed")
      })
    } else {
      // subTargets.forEach(el => {
      //   document.getElementById(el).classList.remove("closed")
      // })
    }
  }

  const showForm = (type, trigger, target, subtarget, disabled={}) => {
    
    if (type === "radio") {
      document.getElementById(target).classList = (Array.from(document.getElementsByName(trigger)).find(el => el.checked) || "").value || "closed";
      hideSubTarget(target, subtarget)
      Array.from(document.getElementsByName(trigger)).forEach(el => {
        el.addEventListener("click", e => {
          document.getElementById(target).classList = e.target.value || "closed";
          document.getElementById(disabled.target).disabled = e.target.value === disabled.trriger;
          hideSubTarget(target, subtarget)
        });
      });
    } else {
      const inputItems = Array.from(document.getElementById(trigger).getElementsByTagName("input"));
      inputItems.push(...Array.from(document.getElementById(trigger).getElementsByTagName("textarea")));
      inputItems.forEach(el => {
        if(inputItems.some(el => !el.checkValidity())) {
          document.getElementById(target).classList.add("closed");
        } else {
          document.getElementById(target).classList.remove("closed");
        }
        hideSubTarget(target, subtarget)

        el.addEventListener("change", () => {
          if(inputItems.some(el => !el.checkValidity())) {
            document.getElementById(target).classList.add("closed");
          } else {
            document.getElementById(target).classList.remove("closed");
          }
          hideSubTarget(target, subtarget)
        })
      })
    }
  }
  

  showForm("radio", "sender-type", "basic-info", ["contact-type", "iquiry-details"], {trriger: "individual", target: "company-name"});
  showForm("radio", "contact-type", "iquiry-details", ["submit"], {trriger: "other-iquiries", target: "budget-container"});
  showForm("form", "iquiry-details", "submit", []);
  showForm("form", "basic-info", "contact-type", ["iquiry-details"]);
})();