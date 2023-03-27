const exploreBtn = document.getElementById("explore-button");
const aboutSection = document.getElementById("about");

exploreBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
