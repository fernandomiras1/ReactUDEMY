// Fetch the sidebar links from the JSON file and dynamically generate the sidebar
fetch("sidebar.json")
  .then((response) => response.json())
  .then((data) => {
    const sidebar = document.getElementById("sidebar");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    // Iterate over the links from the JSON and create the list items
    data.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the generated list to the sidebar container
    nav.appendChild(ul);
    sidebar.appendChild(nav);

    // Apply the sidebar CSS styles
    sidebar.classList.add("sidebar");
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
  });
