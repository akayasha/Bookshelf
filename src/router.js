server.route({
    method : 'POST',
    path : '/books',
    handler : (request,h) =>{
        return (' POST ok ')
    }
})  
server.route({
    method : 'GET',
    path : '/books/{bookId}',
    handler : (request,h) =>{
        return (' GET ok ')
    }
})  
server.route({
    method : 'PUT',
    path : '/books',
    handler : (request,h) =>{
        return (' PUT ok ')
    }
})  
server.route({
    method : 'DELETE',
    path : '/books/{bookId}',
    handler : (request,h) =>{
        return (' DELETE ok ')
    }
})  