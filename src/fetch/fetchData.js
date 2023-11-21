/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks on the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  const element = document.getElementById("click-to-fetch")
  const display = document.getElementById("display-here")
  element.addEventListener("click", async () => {
    const pommel = await fetch("https://api.github.com/octocat")
    display.innerText = await pommel.text()
  })
}
