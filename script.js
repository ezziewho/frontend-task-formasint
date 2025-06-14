fetch(" https://brandstestowy.smallhost.pl/api/random", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const outputDiv = document.getElementById("product-listing-grid");

    data.data.forEach((item) => {
      // Create a container for image and label
      const container = document.createElement("div");
      container.className = "product-image-container";
      container.style.position = "relative";

      // Create the label
      const label = document.createElement("span");
      label.className = "product-image-label";

      label.textContent = `ID: ${item.id.toString().padStart(2, "0")}`;
      container.appendChild(label);

      //Create the image background
      const imageBackground = document.createElement("div");
      imageBackground.className = "product-image-background";

      // Create the image
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.id;
      container.appendChild(img);

      outputDiv.appendChild(container);
    });
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
