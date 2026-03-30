
export default function loadContact() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("contact-container");

  const title = document.createElement("h1");
  title.classList.add("boxed-title");
  title.textContent = "Contact";

  function createContact(name, phone) {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    const person = document.createElement("h3");
    person.textContent = name;

    const number = document.createElement("p");
    number.textContent = phone;

    card.append(person, number);
    return card;
  }

  container.append(
    title,
    createContact("Ahmad", "012-3456789"),
    createContact("Ali", "013-9876543"),
    createContact("Abu", "014-1122334")
  );

  content.appendChild(container);
}