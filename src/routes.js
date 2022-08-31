const { addBooks, getAllBooks, getBooksDetail, editBook, deleteBook } = require("./handler")

const routes =[
    {
        method : 'POST',
        path : '/books',
        handler : addBooks,
        options : {
            cors :{
                origin :[ '*' ],
            }
        }
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBooks
    },
    {
        method : 'GET',
        path : '/books/{booksId}',
        handler : getBooksDetail
    },
    {
        method : 'PUT',
        path : '/books/{booksId}',
        handler : editBook
    },
    {
        method : 'DELETE',
        path : '/books/{booksId}',
        handler : deleteBook
    }
]
module.exports = routes