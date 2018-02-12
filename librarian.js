var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  {title:  "Computer Networking", year:"2003", author: "Kurose", publisher:"Pearson"}
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
}
var newBook = {title:"Kakababu Samagra", year:"1994", author: "Sunil Gangopadhyay", publisher:"Ananda"};

console.log(addBook(newBook));



/*Task 4 */

function bookByAuthor(){
  var k = library.length;
  var temp;
  for (var i = 0; i <= k-1; i++) {
    for (var j = 0; j <= k-1; j++) {
      if (library[i].author < library[j].author) {
        temp = library[i];
        library[i] = library[j];
        library[j] = temp;
      }
    }
  }
  return library;

}

console.log(bookByAuthor());

/* Task 5 */

function findByTitle( title ){

  SearchedArray = [];

  var x = new RegExp(title, 'i');

  for (var i = library.length - 1; i >= 0; i--) {
    if(x.test(library[i].title))
    {
      SearchedArray.push(library[i]);
    }
  }
  return SearchedArray;


}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
