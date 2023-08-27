const toggleSearch = () => {
  const btn = document.querySelector(".toggle-search");
  const form = document.querySelector("#header-search-form");
  btn.addEventListener("click", () => {
    form.classList.toggle("active");
  });
  window.addEventListener("click", (e) => {
    if (!form.contains(e.target) && !btn.contains(e.target))
      form.classList.remove("active");
  });
};

export default toggleSearch;
