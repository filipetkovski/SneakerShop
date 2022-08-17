window.addEventListener("load", () => {
    const openHamburger= document.querySelector("#hamburger-menu");
    const closeHamburger = document.querySelector("#esc-button");

    const hamburgerList = document.querySelector("#ham-list");
    const hamburgerInside = document.querySelector("#ham-inside");
    const blur = document.querySelector(".blur");

    openHamburger.addEventListener("click", () => {
            hamburgerList.style.right = "0";
            hamburgerInside.style.display = "unset";
            blur.style.right = "300px";
            document.body.style.overflowY = "hidden";
    });

    closeHamburger.addEventListener("click", () => {
        hamburgerList.style.right = "100%";
        hamburgerInside.style.display = "none";
        blur.style.right = "100%";
        document.body.style.overflowY = "unset";

        closeHamActive();
    });

    blur.addEventListener("click", () => {
        hamburgerList.style.right = "100%";
        hamburgerInside.style.display = "none";
        blur.style.right = "100%";
        document.body.style.overflowY = "unset";
    });
});

function hamActive(n) {
    const hamA = [];
    hamA[0] = document.querySelector(".hamburger-new");
    hamA[1] = document.querySelector(".hamburger-men");
    hamA[2] = document.querySelector(".hamburger-women");
    hamA[3] = document.querySelector(".hamburger-kids");
    hamA[4] = document.querySelector(".hamburger-brand");
    hamA[5] = document.querySelector(".hamburger-sale");

        if(n === 0 ){
            hamA[n].style.display = "unset";
        } else if(n === 1 ){
            hamA[n].style.display = "unset";
        } else if(n === 2 ){
            hamA[n].style.display = "unset";
        } else if(n === 3 ){
            hamA[n].style.display = "unset";
        } else if(n === 4 ){
            hamA[n].style.display = "unset";
        } else if(n === 5 ){
            hamA[n].style.display = "unset";
        }
    for(let i=0;i<6;i++) {
        if(i !== n) {
            hamA[i].style.display = "none";
        }
    }
}

function closeHamActive() {
    const hamA = [];
    hamA[0] = document.querySelector(".hamburger-new");
    hamA[1] = document.querySelector(".hamburger-men");
    hamA[2] = document.querySelector(".hamburger-women");
    hamA[3] = document.querySelector(".hamburger-kids");
    hamA[4] = document.querySelector(".hamburger-brand");
    hamA[5] = document.querySelector(".hamburger-sale");

    for(let i=0;i<6;i++) {
        hamA[i].style.display = "none";
    }
}
