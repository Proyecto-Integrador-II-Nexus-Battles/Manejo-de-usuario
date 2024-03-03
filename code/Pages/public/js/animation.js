function PopUp() {
    const modal = document.getElementById("window-notice");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("window-notice");
    modal.style.display = "none";
}

function Ban() {
    const modal = document.getElementById('FormBan');
    const PermBtn = document.getElementById('perm');
    const TempBtn = document.getElementById('temp');

    if (modal.style.display === 'none') {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
        PermBtn.checked = false;
        TempBtn.checked = false;
    }
}





