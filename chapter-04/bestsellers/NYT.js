const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290"
const LIST_NAME = "hardcover-fiction"
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists"

const fetchBooks = (listName = LIST_NAME) =>
    fetch(`${API_STEM}/${listName}?response-format=json&api-key=${API_KEY}`)
        .then(response => response.json())
        .then(responseJSON => responseJSON.results.books)
        .catch(error => console.error(error))

export default { fetchBooks }
