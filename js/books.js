// script to retrieve books from API and display information in the HTML page

let books = [];

const apiURL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

const bookGalleryElement = document.getElementById('livros'); //section that show books
const salesElement = document.getElementById('valor_total_livros_disponiveis'); //section with a sales ad to buy all available books
const filterButtons = document.querySelectorAll('.btn'); //buttons that filter books by category
const sortButton = document.getElementById('btnOrdenarPorPreco'); //button to sort books by price

filterButtons.forEach(button => {
    button.addEventListener('click', filterBooks);
})

//remove the filterBooks from sortButton and add the sortBooksByPrice
sortButton.removeEventListener('click', filterBooks);
sortButton.addEventListener('click', sortBooksByPrice);

getBooksFromAPI();

// ------ FUNCTIONS

//fetch data from API, apply discount and show books on screen
async function getBooksFromAPI() {
    const resp = await fetch(apiURL);
    const data = await resp.json();

    books = applyDiscount(data);

    //show data in console as a table
    // console.table(books);

    showBooksOnScreen(books);
}

//apply a discount to the price of each book
function applyDiscount(books) {
    const discount = 0.3;
    return books.map(book => {
        // using spread operator to return an object with the same values, 
        // except price, which will get a new value
        return {
            ...book, 
            preco: (book.preco - book.preco * discount).toFixed(2)
        };
    });
}

//create HTML elements and fill them with information regarding each book
function showBooksOnScreen(books) {
    // clear content for the sales ad (it's shown only when clicking to filter all available books)
    salesElement.innerHTML = '';
    
    // clear content from the gallery, in order to fill it with the new content
    bookGalleryElement.innerHTML = '';
    
    books.forEach(book => {
        //books out of stock will receive a class that will change the style of their img tag
        const outOfStock = book.quantidade > 0 ? '' : 'indisponivel';
        
        bookGalleryElement.innerHTML += `
            <div class="livro">
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
                <img class="livro__imagens ${outOfStock}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__autor">${book.autor}</p>
                <p class="livro__preco" id="preco">R$ ${book.preco}</p>
            </div>
        `
    })
}

//when the user clicks to see available books, we'll display a sales ad at the bottom of the
//screen with the total price if the user buys all books
function showSalesAd(availableBooks){
    const totalPrice = availableBooks.reduce( (total, book) => total + parseFloat(book.preco), 0).toFixed(2);

    salesElement.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
        </div>
    `
}

//filter books by category (or availability), based on the value of the button clicked
function filterBooks(){
    const category = this.value;
    const filteredBooks = category === 'disponivel' ? filterAvailableBooks() : filterByCategory(category);
    showBooksOnScreen(filteredBooks);

    if (category === 'disponivel') { //display a sales ad
        showSalesAd(filteredBooks);
    }
}

//filter books based on its category
function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

//filter books in stock
function filterAvailableBooks() {
    return books.filter(book => book.quantidade > 0);
}

//sort books by price, ascending order
function sortBooksByPrice(){
    //sort() is an in-place function, so first we make a shallow copy of the array, then sort it
    sortedBooks = [...books].sort((a, b) => a.preco - b.preco);
    showBooksOnScreen(sortedBooks);
}