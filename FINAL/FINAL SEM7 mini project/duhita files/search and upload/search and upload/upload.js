document.getElementById("uploadButton").addEventListener("click", function () {
    let fileInput = document.getElementById("fileInput");
    let agreeCheckbox = document.getElementById("agreeCheckbox");

    if (!agreeCheckbox.checked) {
        alert("You must agree to disclose and sell the data before uploading.");
        return;
    }

    fileInput.click(); // Simulates clicking the hidden file input
});

document.getElementById("fileInput").addEventListener("change", function () {
    if (this.files.length > 0) {
        alert("File Selected: " + this.files[0].name);
    }
});
