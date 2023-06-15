const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", () => {
        for (let j = 0; j < tabLinks.length; j++) {
            tabLinks[j].classList.remove("active-link");
            tabContents[j].classList.remove("active-tab");
        }

        tabLinks[i].classList.add("active-link");
        tabContents[i].classList.add("active-tab");
    });
}

const close = document.querySelector("#close");
const bar = document.querySelector("#bar");
const show = document.querySelector("#show");

bar.addEventListener("click", () => {
    show.style.right = "0";
})

close.addEventListener("click", () => {
    show.style.right = "-200px";
})