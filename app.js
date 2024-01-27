const bodyEl = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  icon = document.querySelector(".sidebar .icons"),
  iconSearh = sidebar.querySelector(".inp i"),
  modeTheme = sidebar.querySelector(".mode_theme span"),
  modeText = sidebar.querySelector(".mode_text span"),
  modeIcon = sidebar.querySelector(".mode_text i");

//   console.log(iconSearh);

if (localStorage.getItem("mode")) {
  bodyEl.classList.add("dark");
  modeTheme.classList.add("move");
  modeText.innerText = "Dark mode";
  modeIcon.className = "fa-solid fa-moon";
} else {
  modeText.innerText = "Light mode";
  modeIcon.className = "fa-solid fa-sun";
}

icon.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  if (sidebar.classList.contains("show")) {
    icon.children[0].style.transform = "rotate(180deg)";
  } else {
    icon.children[0].style.transform = "rotate(0deg)";
  }
});

iconSearh.addEventListener("click", () => {
  icon.click();
});

modeTheme.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  if (bodyEl.classList.contains("dark")) {
    modeTheme.classList.add("move");
    modeText.innerText = "Dark mode";
    modeIcon.className = "fa-solid fa-moon";
  } else {
    modeTheme.classList.remove("move");
    modeText.innerText = "Light mode";
    modeIcon.className = "fa-solid fa-sun";
  }

  localStorage.setItem("mode", bodyEl.classList);
});
