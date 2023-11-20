/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    let element = document.getElementById("mouse-coordinates");
    document.addEventListener("mousemove", (event) => {
        element.innerText = `x: ${event.clientX}, y: ${event.clientY}`
       // element.style.display = "none"
    })
}

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
function getRandomColor() {
    return `#${Math.floor(Math.random() * 255**3).toString(16)}`;
}
export function hoverFocusAndBlur() {
    let element = document.getElementById("focus-me");
    let labels = document.querySelectorAll("label[for='focus-me']");
    let currentColor = "#6495ed";
    let defaultColor = "#6495ed";
    let messages = [];
    element.addEventListener("mouseover", (event) => {
        labels.forEach((label) => {
            messages.unshift(label.innerText)
            label.textContent = "Yes, you hover me !"
    })})
    element.addEventListener("mouseout", (event) => {
        labels.forEach((label) => {
            label.innerText = messages.pop()
    })})
    element.addEventListener("focus", (event) => {
        let newColor = getRandomColor();
        while (newColor === currentColor) {getRandomColor()}
        currentColor = newColor;
        element.style.borderColor = newColor;
    })
    element.addEventListener("blur", (event) => {
        element.style.borderColor = defaultColor;
    })
}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    //
}
