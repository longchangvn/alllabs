let LIB = library;
console.log(LIB)
beforeEach(function () {
    LIB.libraryBooks = [
        { title: "00000", author: "Bill Gates", libraryID: 1235 },
        { title: "02222", author: "Bill Gates", libraryID: 4268 },
        { title: "01111", author: "Steve Jobs", libraryID: 4268 },
        { title: "03333", author: "Suzanne Collins", libraryID: 3257 }
    ]
});
describe('Lab5 part2', function () {
    describe('Add Book()', function () {
        it('Book should added to the list', function () {
            let len = LIB.libraryBooks.length;
            LIB.addBook({ title: "44444", author: "Elon musk", libraryId: 111 });
            let after = LIB.libraryBooks.length;
            assert.equal(len + 1, after);
        });
    });

    describe('Get all book titles()', function () {
        it('All titles should be return', function () {
            let all = LIB.getTitles();
            let title = all.toString();
            assert.equal(4, all.length);//number of titles check
            assert.equal("00000,01111,02222,03333", title);//sorted order
        });
    });

    describe('Find book by title', function () {
        it('Return title of book 11111', function () {
            assert.equal("01111", LIB.findBooks("111")[0].title);
        });

        it('Return title of all books', function () {
            let str = LIB.findBooks("0").map(b => b.title);
            assert.equal("00000,02222,01111,03333", str);
        });
    });

});