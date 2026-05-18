/* 
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/

class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable = true){
        this.author = author
        this.title = title
        this.pages = pages
        this.isAvailable = isAvailable
    }

    borrow(){
        if(this.isAvailable === false){
            console.log("Not aviailable")
            return
        }
        this.isAvailable = false
    }

    returnBook(){
        this.isAvailable = true
    }

    getInfo(){
        console.log(`Title ${this.title}\nAuthor:${this.author}\nPages:${this.pages}\nAvailable:${this.isAvailable}\n`)
    }
    
    isLongBook(){
        return this.pages > 300
    }
}

let books = [
    new Book('bluesky','abc',250),
    new Book('Black Bear','cdf',300,false),
    new Book('red','efg',100),
    new Book('green fields','cds',320),
    new Book('yellow king','pkw',350,false)
]

for(let book of books){
    console.log(book)
}

books[2].borrow()
books[4].borrow()

books[4].returnBook()

count = 0
for(let book of books){
    if(book.isLongBook()){
        count += 1
    }
}
console.log("No of long Books are:",count)

for(let element of books){
    element.getInfo()
}
