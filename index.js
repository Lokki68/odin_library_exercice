const myLibrary = [
  {
    title: 'Harry Potter',
    author: 'Anne Rice',
    pages: 453,
    read: false
  }
]
const tableBooks = document.querySelector('.books')

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let params = []

  inputs.forEach(input => {
    if (input.name === 'reads') {
      params[input.name] = input.checked
    } else if (input.name === 'pages') {
      params[input.name] = Number(input.value)
    } else {
      params[input.name] = input.value
    }

  })

  addBookToLibrary(params.title, params.author, params.pages, params.reads)
  displayBooks()
})


/**
 *
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {boolean} read
 * @constructor
 */
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${read ? 'read' : 'not read yet'}`)
  }
}


/**
 *
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {boolean} read
 */
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)

  myLibrary.push(newBook)

  console.log(myLibrary);
}

function displayBooks() {
  tableBooks.innerHTML = ''
  myLibrary.forEach(book => {
    const line = buildBookLine(book)

    tableBooks.appendChild(line)
  })
}

/**
 *
 * @param {Object} book
 * @param {string} book.title
 * @param {string} book.author
 * @param {number} book.pages
 * @param {boolean} book.read
 * @returns {HTMLLIElement}
 */
function buildBookLine(book) {
  const bookItem = document.createElement('li')
  bookItem.classList.add('book_item')

  const {title, author, pages, read} = book
  bookItem.innerText = `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`

  return bookItem
}

displayBooks()
