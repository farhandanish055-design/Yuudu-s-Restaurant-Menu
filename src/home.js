export default function loadHome() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");

  const title = document.createElement("h1");
  title.textContent = "Yuudu's Breakfast Bar";

  const review = document.createElement("div");
  review.classList.add("card");
  review.textContent = "Best porridge in town! 🐻";

  const hours = document.createElement("div");
  hours.classList.add("card");
  hours.textContent = "Open 6am - 10pm";

  const location = document.createElement("div");
  location.classList.add("card");
  location.textContent = "123 Forest Drive";

  
  container.append(title, review, hours, location);
  content.appendChild(container);
}