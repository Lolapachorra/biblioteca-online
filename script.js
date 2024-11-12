// script.js

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Fetch images from API
    fetch("https://picsum.photos/v2/list?page=1&limit=90") // Fetch 5 random images
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayImages(data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
            mainContent.innerHTML = `<p>Error loading images</p>`;
        });

    // Display images in the main section
    function displayImages(data) {
        const imageContainer = document.createElement("div");
        imageContainer.style.display = "grid";
        imageContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
        imageContainer.style.gap = "15px";

        data.forEach(item => {
            const img = document.createElement("img");
            img.src = item.download_url;
            img.alt = item.author;
            img.style.width = "100%";
            img.style.borderRadius = "10px";
            imageContainer.appendChild(img);
        });

        mainContent.appendChild(imageContainer);
    }
});

