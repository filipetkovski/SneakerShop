window.addEventListener("load", () => {
   const header = document.querySelector("header");
   const search = document.querySelector(".search-input");
   const searchButton = document.querySelector(".search-button");
   const escButton = document.querySelector(".esc");

    searchButton.addEventListener("click", () => {
        header.style.opacity = "0";
        header.style.zIndex = "0";
        header.style.transition = "0.3s";
        search.style.left = "0";
    });

    escButton.addEventListener("click", () => {
        header.style.opacity = "1";
        header.style.zIndex = "100";
        header.style.transition = "0.5s";
        search.style.left = "100%";
    });
});