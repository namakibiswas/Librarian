var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
  //add code
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push(book);
  return library;
  //add code
}

var newBook = {};
console.log(addBook(newBook));

myarray.push({
    "title": 'Creniel',
    "year": '2012'
    "Author": 'Muhammad Jafar Iqbal'
});
function bookByAuthor(){
  //add code
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  //add code
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
