const book1 = {
    title: `"Thinking, Fast and Slow"`,
    author: "Daniel Kahneman",
    publishYear: 2011,
};

const book2 = {
    title: `"Think of a Number"`,
    author: "John Verdon",
    publishYear: 2010,
};

let bookUtils = {
    getFirstPublished: function(book1, book2) {
        if (book1.publishYear < book2.publishYear) {
            return book1;
        } else return book2;
    },

    setNewEdition: function(book, edition) {
        book.edition = edition;
    },

    setLanguage: function(book, lang) {
        book.language = lang;
    },

    setTranslation: function(book,lang, translator) {

        book.traslation =  {
            language: lang,
            translator: translator,
        }
    },

    setPublisher: function(book, name, location) {

        book.publisher =  {
            name: name,
            location: location,
        }
    },

    // isSamePublisher: function(book1, book2) {
    //     return (book1.publisher.location === book2.publisher.location);
    // }
};


bookUtils.setNewEdition(book1,2012);
console.log(book1.edition);

bookUtils.setLanguage(book2, 'English');
console.log(book2.language);

bookUtils.setTranslation(book2, 'Hebrew', 'Ofra Avigad');

console.log(book2.traslation.language);
console.log(book2.traslation.translator);

bookUtils.setPublisher(book1, `Farrar, Straus and Giroux`, `Equitable Building, New York, New York`);

console.log(book1.publisher.name);
console.log(book1.publisher.location);

// console.log(bookUtils.isSamePublisher(book1, book2)); // false

// bookUtils.setPublisher(book2, `Farrar, Straus and Giroux`, `Equitable Building, New York, New York`);
// console.log(bookUtils.isSamePublisher(book1, book2)); // true

// console.log(book1.publisher.name);
// console.log(book1.publisher.location);

