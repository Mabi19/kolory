const color = [0x93, 0x70, 0xd8];

/** @type {HTMLElement} */
const combinedSwatch = document.querySelector("#light-mix-swatch-combined");
function updateCombined() {
    combinedSwatch.style.setProperty("background-color", "#" + color.map((channel) => channel.toString(16).padStart(2, "0")).join(""))
}
updateCombined();

/**
 * @param {HTMLDivElement} row
 * @param {number} index
*/
function hookUpChannel(row, index) {
    /** @type {HTMLElement} */
    const swatch = row.querySelector(".light-mix-swatch");
    /** @type {HTMLInputElement} */
    const slider = row.querySelector("input[type=range]");
    /** @type {HTMLInputElement} */
    const label = row.querySelector(".light-mix-numeric");

    slider.value = color[index];
    function update() {
        color[index] = slider.valueAsNumber;
        const percent = color[index] / 255 * 100;
        swatch.style.setProperty("--value", `${percent}%`);
        label.textContent = `${percent.toFixed(1)}% (0x${color[index].toString(16).padStart(2, "0")})`
        updateCombined();
    }
    slider.addEventListener("input", update);
    update();
}

hookUpChannel(document.querySelector("#light-mix-row-red"), 0);
hookUpChannel(document.querySelector("#light-mix-row-green"), 1);
hookUpChannel(document.querySelector("#light-mix-row-blue"), 2);
