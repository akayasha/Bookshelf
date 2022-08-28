const { addBooks ,getAllBooks,getBooksbyId, editBooks, deleteBooksbyId} = require("./handler")

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
        path : '/books/{booksid}',
        handler : getBooksbyId
    },
    {
        method : 'PUT',
        path : '/books/{booksid}',
        handler : editBooks
    },
    {
        method : 'DELETE',
        path : '/books/{booksid}',
        handler : deleteBooksbyId
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => '404',
      },
]
module.exports = {routes}