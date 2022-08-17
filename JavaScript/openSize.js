window.addEventListener("load", () => {
    const button = document.querySelector(".select-sizee");
    const filters = document.querySelector(".sizess");
    let num = 0;
    let width = innerWidth;

    if(width < 451) {
        button.innerHTML = "Open Sizes";
    } else {
        button.innerHTML = "Select Sizes";
    }

    button.addEventListener("click", () => {
        if(num === 0) {
            filters.style.display = "grid";
            num = 1;
            button.innerHTML = "Hide Sizes";
        } else if(num === 1) {
            filters.style.display = "none";
            num = 0;
            button.innerHTML = "Show Sizes";
        }
    });
});