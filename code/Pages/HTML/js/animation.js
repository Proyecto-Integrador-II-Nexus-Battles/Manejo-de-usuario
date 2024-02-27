
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

function Ban(){

    const drawbttn= document.getElementById("cancel-button");
    const modal= document.getElementById("FormBan")

    drawbttn.addEventListener("click", function(){

            modal.style.display="none";
    });

    if(modal.style.display==='none'){
        modal.style.display="block";

    }else{
        modal.style.display="none";
    }

}




