const container = document.querySelector(".container");
const button = document.querySelector('.button');

const myLibrary = [
    {
        author: "Ray Bradbury",
        title: "Fahrenheit 451",
        pages: 194,
        read: "No"
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        pages: 281,
        read: "Yes"
    },
    {
        author: "Aldous Huxley",
        title: "Brave New World",
        pages: 268,
        read: "No"
    }
];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(new Book(title));
}

for(let i = 0; i < myLibrary.length; i++){
  const usersBox = document.createElement("div");
  usersBox.className = "usersBox";
  
  const list = document.createElement("p");
  
  list.innerText = `Book #${[i + 1]}\nTitle: ${myLibrary[i].title}\nAuthor: ${myLibrary[i].author}\nPage Count: ${myLibrary[i].page}\nHave Read?: ${myLibrary[i].read}`;
  usersBox.appendChild(list);
  
  container.appendChild(usersBox);
}
showHide()
button.addEventListener("click", showHide);
button[0].addEventListener("click", hidebtn);

function showHide(){
    const divArray = Array.from(document.getElementsByClassName("hideMe"));
    const displayStyle = divArray[0].style.display === 'none' ? 'block' : 'none';
    divArray.forEach(div => {
       div.style.display = displayStyle;
    }, {once : true});
}

function hidebtn() {
    button[0].style.display = "none";
}

