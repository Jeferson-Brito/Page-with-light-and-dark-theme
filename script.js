function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const p = document.querySelector("#profile p.Bob")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/bob-esponja.jpg")
    p.textContent = "Bob Esponja"
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/patrik.png")
    p.textContent = "Patrick Estrela"
  }
}
