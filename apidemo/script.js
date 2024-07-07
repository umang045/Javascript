let container = document.getElementById("container");

fetch("https://dummyjson.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (status code: ${response.status})`);
    }
    return response.json();
  })
  .then((data) => {
    container.innerHTML = ""; // Clear container to avoid duplicates
    data.forEach((item, index) => {
      let itemElement = document.createElement("div");

      // Customize content based on your API data structure
      itemElement.innerHTML = `
        <h2>Product Name: ${item.title}</h2>
        <p>Description: ${item.description || "No description available"}</p>
        <p>Price: $${item.price}</p>
      `;

      // Add a unique key for React compatibility or future optimizations
      itemElement.setAttribute("key", index);

      container.appendChild(itemElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Optionally display an error message to the user
  });
