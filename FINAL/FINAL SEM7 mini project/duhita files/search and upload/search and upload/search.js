document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-btn");
    const loadingText = document.getElementById("loading");
    const downloadSection = document.getElementById("download-section");
    const downloadLink = document.getElementById("download-link");
    const dataTable = document.getElementById("data-table");
    const downloadButtons = document.querySelectorAll(".download-btn");

    function performSearch() {
        dataTable.style.display = "none"; // Hide table
        loadingText.classList.remove("hidden"); // Show loading
        downloadSection.classList.add("hidden"); // Hide download section

        setTimeout(function() {
            loadingText.classList.add("hidden"); // Hide loading
            downloadSection.classList.remove("hidden"); // Show download section

            // Create a downloadable file dynamically
            const fileContent = "Leaked Data Found:\nName: John Doe\nCredit Card: 1234-5678-9012-3456\nEmail: johndoe@example.com";
            const blob = new Blob([fileContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = "leaked-data.txt"; // Set filename
        }, 2000); // 2 seconds loading time
    }

    // Trigger search on button click
    searchButton.addEventListener("click", performSearch);

    // Trigger search on Enter key press
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    // Table Download Buttons
    downloadButtons.forEach(button => {
        button.addEventListener("click", function() {
            const name = button.getAttribute("data-name");
            const email = button.getAttribute("data-email");

            // Generate file content
            const fileContent = `Leaked Data for ${name}:\nEmail: ${email}\nCredit Card: 1234-5678-9012-3456`;
            const blob = new Blob([fileContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);

            // Create a temporary download link
            const tempLink = document.createElement("a");
            tempLink.href = url;
            tempLink.download = `${name.replace(" ", "_")}-leaked-data.txt`;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });
    });
});
