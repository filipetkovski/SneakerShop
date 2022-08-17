window.addEventListener("load", () => {
    const scrollLeft1 = document.querySelector("#scrolling1-left-arrow");
    const scrollRight1 = document.querySelector("#scrolling1-right-arrow");
    const scrollLeft2 = document.querySelector("#scrolling2-left-arrow");
    const scrollRight2 = document.querySelector("#scrolling2-right-arrow");
    const scroll1 = document.querySelector("#scrolling-div-1");
    const scroll2 = document.querySelector("#scrolling-div-2");

    const sneaker = document.querySelector(".sneaker1");
    const width = sneaker.offsetWidth;

    scrollLeft1.addEventListener("click", () => {
       scroll1.scrollLeft -= width+15;
    });
    scrollRight1.addEventListener("click", () => {
        scroll1.scrollLeft += width+15;
    });

    scrollLeft2.addEventListener("click", () => {
        scroll2.scrollLeft -= width + 15;
    });
    scrollRight2.addEventListener("click", () => {
        scroll2.scrollLeft += width + 15;
    });
});