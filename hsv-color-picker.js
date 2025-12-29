function hsv2rgb(col) {
    const { h, s, v } = col;
    const f = (n) => {
        const k = (n + (h / 60)) % 6;
        return v * (1 - s * Math.max(0, Math.min(k, 4 - k, 1)));
    }
    return { r: f(5), g: f(3), b: f(1) };
}

/** @type HTMLElement */
const svPlane = document.querySelector("#color-picker-sv");
/** @type HTMLElement */
const svReticle = document.querySelector("#color-picker-reticle");

/** @type HTMLInputElement */
const hueSlider = document.querySelector("#color-picker-hue-selector");
let hue = 0;
hueSlider.value = "0";
hueSlider.addEventListener("input", () => {
    svPlane.style.setProperty("--hue", `${hueSlider.valueAsNumber}deg`);
    hue = hueSlider.valueAsNumber;
    updateOutput();
});

let isMoving = false;
let saturation = 0.8;
let value = 0.8;

function updateReticlePosition() {
    svReticle.style.setProperty("left", `${saturation * 100}%`);
    svReticle.style.setProperty("bottom", `${value * 100}%`);
}
updateReticlePosition();

svPlane.addEventListener("pointermove", (ev) => {
    if (isMoving) {
        saturation = Math.max(0, Math.min(ev.offsetX / svPlane.clientWidth, 1));
        value = 1 - Math.max(0, Math.min(ev.offsetY / svPlane.clientHeight, 1));
        updateReticlePosition();
        updateOutput();
    }
})

svPlane.addEventListener("pointerdown", (ev) => {
    svPlane.setPointerCapture(ev.pointerId);
    isMoving = true;
    saturation = Math.max(0, Math.min(ev.offsetX / svPlane.clientWidth, 1));
    value = 1 - Math.max(0, Math.min(ev.offsetY / svPlane.clientHeight, 1));
    updateReticlePosition();
    updateOutput();

});
const endMove = (ev) => {
    svPlane.releasePointerCapture(ev.pointerId);
    isMoving = false;
};
svPlane.addEventListener("pointerup", endMove);
svPlane.addEventListener("pointercancel", endMove);

const outHue = document.querySelector("#color-picker-output-hue");
const outSat = document.querySelector("#color-picker-output-sat");
const outVal = document.querySelector("#color-picker-output-val");
const outR = document.querySelector("#color-picker-output-r");
const outG = document.querySelector("#color-picker-output-g");
const outB = document.querySelector("#color-picker-output-b");
const outBarR = document.querySelector("#color-picker-output-r-bar");
const outBarG = document.querySelector("#color-picker-output-g-bar");
const outBarB = document.querySelector("#color-picker-output-b-bar");
const outSwatch = document.querySelector("#color-picker-output-swatch");

function updateOutput() {
    outHue.textContent = `H: ${hue}°`;
    outSat.textContent = `S: ${Math.round(saturation * 100)}%`;
    outVal.textContent = `V: ${Math.round(value * 100)}%`;

    const { r, g, b } = hsv2rgb({ h: hue, s: saturation, v: value });
    const rPercent = `${Math.round(r * 100)}%`;
    const gPercent = `${Math.round(g * 100)}%`;
    const bPercent = `${Math.round(b * 100)}%`;
    outR.textContent = `R: ${rPercent}`;
    outBarR.style.setProperty("--fill", rPercent);
    outG.textContent = `G: ${gPercent}`;
    outBarG.style.setProperty("--fill", gPercent);
    outB.textContent = `B: ${bPercent}`;
    outBarB.style.setProperty("--fill", bPercent);
    outSwatch.style.backgroundColor = `rgb(${rPercent} ${gPercent} ${bPercent})`;
}
updateOutput();
