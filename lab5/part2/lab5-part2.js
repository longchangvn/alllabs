const library = {
    libraryBooks: [
        { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
        { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
        { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
        { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ],
    addBook: (book) => {
        library.libraryBooks.push(book);
    }
    ,
    getTitles: () => {
        return library.libraryBooks.map(b => b.title).sort();
    }
    , findBooks: (title) => {
        return library.libraryBooks.filter(b => b.title.indexOf(title) >= 0);
    }
}
