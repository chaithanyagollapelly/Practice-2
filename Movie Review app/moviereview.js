let reviewsContainerElement = document.getElementById("reviewsContainer");
let titleInputElement = document.getElementById("titleInput");
let reviewTextareaElement = document.getElementById("reviewTextarea");

function onAddReview() {
    let movieTitle = titleInputElement.value;
    let movieReview = reviewTextareaElement.value;

    if (movieTitle === "") {
        alert("Please enter a movie title")
        return;
    }



    let movieTitileElement = document.createElement("h1");
    movieTitileElement.textContent = "Movie Title: " + movieTitle;
    movieTitileElement.classList.add("movie-title");
    reviewsContainerElement.appendChild(movieTitileElement);

    let movieReviewElement = document.createElement("p");
    movieReviewElement.textContent = "Review: " + movieReview;
    reviewsContainerElement.appendChild(movieReviewElement);

    let horizontalLineElement = document.createElement("hr");
    reviewsContainerElement.appendChild(horizontalLineElement);

    titleInputElement.value = "";
    reviewTextareaElement.value = "";

}