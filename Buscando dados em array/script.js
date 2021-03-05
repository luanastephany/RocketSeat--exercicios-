const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T Kiyosaki",
            },

        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R Covey",
            },

        ],
    },
]

//contar quantas categorias existem. 
const totalCategories = booksByCategory.length
console.log(`Total de categorias: ${totalCategories}`)


//quantidade de livros em cada categoria
for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

//total de autores listados
function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) { //ver se dentro do elemento há o autor do livro. Mas não há pq o array acima está vazio
                authors.push(book.author)
            }

        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors()

//Ver os livros de cada autor

function booksOfAuthor(author) {
    let books = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books}`)
}
booksOfAuthor('Augusto Cury') //colocar aqui o nome do autor que você deseja ver