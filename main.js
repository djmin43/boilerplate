
const searchInput = document.querySelector("#search-input");
const submitButton = document.querySelector("#submit-button");
const searchInputResult = document.querySelector("#search-input-result")

submitButton.addEventListener("click", submitSearchInput)

function submitSearchInput () {
    searchInputResult.innerHTML = searchInput.value;
}



