
function PopUp() {

    const closeButton = document.getElementById("close-button");
    const modal = document.getElementById("window-notice"); // Add click event listener to the close button

    closeButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal
    });

    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}




