const books = require('./books');
const { nanoid } = require('nanoid');

const addBooks = (request,h) =>{
    const {name,year,author,summary,publisher,pageCount,
    readPage,finished,reading} = request.payload

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newBooks = {
        name,year,author,summary,publisher,pageCount,
    readPage,finished,reading,id,createdAt,updateAt
    }

    books.push(newBooks);

    const isSuccess = notes.filter((note) => note.id === id).length >0;

    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Books berhasil ditambahkan',
          data: {
            noteId: id,
          },
        });
        response.code(201);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Books gagal ditambahkan',
      });
      response.code(500);
      return response;
};

const getAllBooks = (request,h) =>{
    const { name, reading, finished } = request.query;

    if (!name && !reading && !finished) {
        const response = h
          .response({
            status: 'success',
            data: {
              books: books.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
              })),
            },
          })
          .code(200);
    
        return response;
      }
      if (name) {
        const filteredBooksName = books.filter((book) => {
          const nameRegex = new RegExp(name, 'gi');
          return nameRegex.test(book.name);
        });
    
        const response = h
          .response({
            status: 'success',
            data: {
              books: filteredBooksName.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
              })),
            },
          })
          .code(200);
    
        return response;
      }
    
      if (reading) {
        const filteredBooksReading = books.filter(
          (book) => Number(book.reading) === Number(reading),
        );
    
        const response = h
          .response({
            status: 'success',
            data: {
              books: filteredBooksReading.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
              })),
            },
          })
          .code(200);
    
        return response;
      }
    
      const filteredBooksFinished = books.filter(
        (book) => Number(book.finished) === Number(finished),
      );
    
      const response = h
        .response({
          status: 'success',
          data: {
            books: filteredBooksFinished.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
          },
        })
        .code(200);
    
      return response;
    
}

const getBooksbyId =(request,h) =>{
    const {id}=request.params

    const books = books.filter((n)=> n.id === id )[0]

    if(books !== undefined){
        return{
            status : 'succes',
            data : {
                books,
            }
        }
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
      response.code(404);
      return response;
}

const editBooks =(request,h) =>{
    const { bookId } = request.params;

    const {
      name,year,author,summary,publisher,pageCount,readPage,reading,
    } = request.payload;
  
    if (!name) {
      const response = h
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku',
        })
        .code(400);
      return response;
    }
  
    if (readPage > pageCount) {
      const response = h
        .response({
          status: 'fail',
          message:
            'Gagal memperbarui buku',
        })
        .code(400);
      return response;
    }
  
    const finished = pageCount === readPage;
    const updatedAt = new Date().toISOString();
  
    const index = books.findIndex((note) => note.id === bookId); // find book by id
  
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,year,author,summary,publisher,pageCount,readPage,reading,finished,updatedAt,
      };
  
      const response = h
        .response({
          status: 'success',
          message: 'Buku berhasil diperbarui',
        })
        .code(200);
      return response;
    }
  
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      })
      .code(404);
    return response;
    }

const deleteBooksbyId = (request,h) =>{
    const{id} = request.params;
    const index = books.findIndex(
        (books) => books.id === id
    )
    
    if (index !== -1) {
        notes.splice(index, 1);
        const response = h.response({
          status: 'success',
          message: 'Catatan berhasil dihapus',
        });
        response.code(200);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      });
      response.code(404);
      return response;
    
    };
   


module.exports = {addBooks,getAllBooks,getBooksbyId,editBooks,deleteBooksbyId}