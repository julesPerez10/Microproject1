document.getElementById("fetchData").addEventListener("click", async function() {
    try {
        const response = await fetch("/api/data");
        const data = await response.json();

        let output = "<ul>";
        data.forEach(course => {
            output += `<li><strong>${course.title}</strong> (Instructor: ${course.instructor}) - $${course.price.toFixed(2)}</li>`;
        });
        output += "</ul>";

        document.getElementById("dataContainer").innerHTML = output;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("dataContainer").innerHTML = "<p>Error loading data.</p>";
    }
});
