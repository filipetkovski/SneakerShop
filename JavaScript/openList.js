window.addEventListener("load", () => {
    const button = document.querySelector(".open-list");
    const filters = document.querySelector(".inside-filters");
    let num = 0;

    button.addEventListener("click", () => {
       if(num === 0) {
           filters.style.display = "unset";
           num = 1;
           button.innerHTML = "Hide Filter";
       } else if(num === 1) {
           filters.style.display = "none";
           num = 0;
           button.innerHTML = "Show Filter";
       }
    });
});