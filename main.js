
const searchInput = document.querySelector("#search-input");
const submitButton = document.querySelector("#submit-button");
const searchInputResult = document.querySelector("#search-input-result")
const urlParams = new URLSearchParams(window.location.search);


submitButton.addEventListener("click", submitSearchInput)


document.addEventListener('DOMContentLoaded', function() {
    searchInputResult.innerHTML = urlParams.get(("search"));
});

function submitSearchInput () {
    urlParams.set('search', searchInput.value);
    window.location.search = urlParams;
}




