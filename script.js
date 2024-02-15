// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the card elements
    var cards = document.querySelectorAll(".card");

    // Loop through each card element
    cards.forEach(function(card) {
        // Add a click event listener to each card
        card.addEventListener("click", function() {
            // Find the image element within the card
            var image = this.querySelector("img");

            // Create a new element for the zoomed-in image
            var zoomedInImage = document.createElement("img");
            zoomedInImage.src = image.src;
            zoomedInImage.alt = image.alt;
            zoomedInImage.classList.add("zoomed-image");

            // Create a container for the zoomed-in image
            var zoomContainer = document.createElement("div");
            zoomContainer.classList.add("zoom-in");
            zoomContainer.appendChild(zoomedInImage);

            // Add click event listener to close the zoomed-in image
            zoomContainer.addEventListener("click", function() {
                zoomContainer.classList.remove("show");
            });

            // Append the zoom container to the document body
            document.body.appendChild(zoomContainer);

            // Show the zoomed-in image
            zoomContainer.classList.add("show");
        });
    });
});
