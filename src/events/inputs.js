/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  const element = document.querySelector("#write-some-text")
  element.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && element.value.trim() !== "") {
      alert(element.value)
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
function addElementList(element, list) {
  if (element.value.trim() !== "") {
    const li = document.createElement("li")
    li.innerText = element.value
    list.appendChild(li)
  }
  element.value = ""
}
export function addElementsInListOnEnterKey() {
  const element = document.querySelector("#list-input")
  const list = document.querySelector("#list")
  element.addEventListener("blur", () => {
    addElementList(element, list)
  })
  element.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addElementList(element, list)
    }
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  const element = document.querySelector("#list")
  element.addEventListener("click", (event) => {
    element.removeChild(event.target)
  })
}
