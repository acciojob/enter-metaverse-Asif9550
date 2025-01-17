// Select the button and paragraph elements
const button = document.getElementById("enterBtn");
const paragraph = document.getElementById("status");

// Add an event listener to the button
button.addEventListener("click", function () {
    // Update the paragraph content and wrap it in an <h1> tag
    paragraph.innerHTML = "<h1>Entered Metaverse</h1>";
});
