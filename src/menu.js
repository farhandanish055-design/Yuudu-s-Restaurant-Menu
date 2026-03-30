
export default function loadMenu() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const title = document.createElement("h1");
  title.classList.add("boxed-title");
  title.textContent = "Menu";

  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  function createMenuItem(name, desc) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemDesc = document.createElement("p");
    itemDesc.textContent = desc;

    item.append(itemName, itemDesc);
    return item;
  }

  grid.append(
    createMenuItem("Honey Pancakes", "Fluffy pancakes with honey special by Yuudu's Recipe 🍯"),
    createMenuItem("Bear Porridge", "Warm and creamy porridge 🐻"),
    createMenuItem("Bee Toast", "Crispy toast with honey drizzle 🍞"),
    createMenuItem("Golden Waffles", "Sweet waffles with syrup 🧇")
  );

  container.append(title, grid);
  content.appendChild(container);
}