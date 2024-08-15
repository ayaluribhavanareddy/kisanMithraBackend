// Sample data (replace with your actual data)
const pesticides = [
    {
        name: "Pesticide A",
        suitableCrops: ["Wheat", "Rice", "Corn"],
        usageRange: "100-200 ml per acre",
    },
    {
        name: "Pesticide B",
        suitableCrops: ["Tomato", "Potato", "Cotton"],
        usageRange: "50-100 ml per acre",
    },
    {
        name: "Pesticide C",
        suitableCrops: ["Tomato", "Potato", "Cotton"],
        usageRange: "50-100 ml per acre",
    },
    // Add more pesticide data here
];

const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

function searchPesticide(query) {
    resultsContainer.innerHTML = ""; // Clear previous results

    // Filter pesticides based on the query
    const filteredPesticides = pesticides.filter((pesticide) =>
        pesticide.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredPesticides.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }

    filteredPesticides.forEach((pesticide) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");

        const nameElement = document.createElement("h2");
        nameElement.textContent = pesticide.name;

        const cropsElement = document.createElement("p");
        cropsElement.textContent = `Suitable Crops: ${pesticide.suitableCrops.join(", ")}`;

        const usageElement = document.createElement("p");
        usageElement.textContent = `Usage Range: ${pesticide.usageRange}`;

        resultDiv.appendChild(nameElement);
        resultDiv.appendChild(cropsElement);
        resultDiv.appendChild(usageElement);

        resultsContainer.appendChild(resultDiv);
    });
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchPesticide(query);
});
