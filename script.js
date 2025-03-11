document.getElementById("book-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value === "true"; 


  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  updateTable();

  document.getElementById("book-form").reset();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

let myLibrary = [
  { title: "IT", author: "Stephen King", pages: 1504, read: true },
  { title: "1984", author: "George Orwell", pages: 326, read: false }
];

document.addEventListener("DOMContentLoaded", updateTable);


function updateTable() {
  let tableBody = document.querySelector("#book-table tbody");
  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
      let row = document.createElement("tr");

      row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.read ? "✅ Read" : "❌ Not read yet"}</td>
          <td>
              <button class="deleteBtn" onclick="removeBook(${index})">🗑️ Delete</button>
          </td>
      `;

      tableBody.appendChild(row);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1); 

  updateTable(); 
}
