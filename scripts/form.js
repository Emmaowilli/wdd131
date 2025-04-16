const products = [
    { id: "1", name: "Fitness Coaching Program" },
    { id: "2", name: "Nutrition Plan" },
    { id: "3", name: "Online Workout Sessions" },
    { id: "4", name: "Personal Training Package" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});