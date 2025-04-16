const products = [
    { id: "1", name: "Fitness Coaching Program" },
    { id: "2", name: "Nutrition Plan" },
    { id: "3", name: "Online Workout Sessions" },
    { id: "4", name: "Personal Training Package" }
];

document.addEventListener("DOMContentLoaded", () => {
    const reviewDetails = document.getElementById("reviewDetails");
    if (reviewDetails) {
        // Update review counter
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("reviewCounter").textContent = reviewCount;

        // Map product ID to product name
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("productName");
        const product = products.find(p => p.id === productId);
        const productName = product ? product.name : "N/A";

        // Display review details
        reviewDetails.innerHTML = `
            <p><strong>Product Name:</strong> ${productName}</p>
            <p><strong>Overall Rating:</strong> ${urlParams.get("rating") || "N/A"} stars</p>
            <p><strong>Date of Installation:</strong> ${urlParams.get("installDate") || "N/A"}</p>
            <p><strong>Useful Features:</strong> ${urlParams.getAll("features").join(", ") || "None"}</p>
            <p><strong>Written Review:</strong> ${urlParams.get("reviewText") || "Not provided"}</p>
            <p><strong>User Name:</strong> ${urlParams.get("userName") || "Anonymous"}</p>
        `;
    }
});