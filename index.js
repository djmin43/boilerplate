
const searchInput = document.querySelector("#search-input");


function submitSearchInput () {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('search', searchInput.value);
}

