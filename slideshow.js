/** @type NodeListOf<HTMLElement> */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function updateCurrentSlide() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides.item(i);
        const bounds = slide.getBoundingClientRect();
        if (Math.abs(bounds.top) < 8) {
            currentSlide = i;
            break;
        }
    }
    console.log("currentSlide", currentSlide);
}
document.body.addEventListener("scrollend", updateCurrentSlide);
updateCurrentSlide();

function scroll(delta) {
    const newSlide = currentSlide + delta;
    if (newSlide < 0 || newSlide >= slides.length) {
        return;
    }
    slides.item(newSlide).scrollIntoView({ behavior: "smooth" });
    currentSlide = newSlide;
}

function advance() {
    const slide = slides.item(currentSlide);
    const state = parseInt(slide.dataset.state ?? "0");
    const revealTargets = Array.from(slide.querySelectorAll("[data-reveal]"));
    const maxState = revealTargets.reduce((prev, el) => Math.max(prev, parseInt(el.dataset.reveal)), 0);
    if (state >= maxState) {
        scroll(1);
    } else {
        const newState = state + 1;
        slide.dataset.state = newState.toString();
        for (const revealTarget of slide.querySelectorAll(`[data-reveal="${newState}"]`)) {
            revealTarget.classList.add("revealed");
        }
    }
}

document.addEventListener("keydown", (ev) => {
    if (ev.key == " " || ev.key == "ArrowRight") {
        ev.preventDefault();
        advance();
    }
    if (ev.key == "ArrowLeft") {
        ev.preventDefault();
        scroll(-1);
    }
})
