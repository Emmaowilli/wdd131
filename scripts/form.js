const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

function getLastModified() {
    const lastMod = new Date(document.lastModified);
    return lastMod.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const isFormPage = document.getElementById("reviewForm");
    const isReviewPage = document.getElementById("reviewDetails");

    const footer = document.querySelector("footer p");
    if (footer) {
        footer.textContent = `© 2025 Emmanuel Owilli. Kampala Uganda. Last Modified: ${getLastModified()}`;
    }

    if (isFormPage) {
        const productSelect = document.getElementById("productName");
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    if (isReviewPage) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("reviewCounter").textContent = reviewCount;

        const urlParams = new URLSearchParams(window.location.search);
        const reviewDetails = document.getElementById("reviewDetails");
        reviewDetails.innerHTML = `
            <p><strong>Product Name:</strong> ${urlParams.get("productName") || "N/A"}</p>
            <p><strong>Overall Rating:</strong> ${urlParams.get("rating") || "N/A"} stars</p>
            <p><strong>Date of Installation:</strong> ${urlParams.get("installDate") || "N/A"}</p>
            <p><strong>Useful Features:</strong> ${urlParams.getAll("features").join(", ") || "None"}</p>
            <p><strong>Written Review:</strong> ${urlParams.get("reviewText") || "Not provided"}</p>
            <p><strong>User Name:</strong> ${urlParams.get("userName") || "Anonymous"}</p>
            <p><strong>Last Modified:</strong> ${getLastModified()}</p>
        `;
    }
});