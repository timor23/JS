let book = {
    title: `"Thinking, Fast and Slow"`,
    author: "Daniel Kahneman",
    publishYear: 2011,
    publisher: `Farrar, Straus and Giroux`,
};

const printBookInfo = (book) =>  {
    return `The book ${book.title} was written by ${book.author} in
the year ${book.publishYear}`;
}

console.log(printBookInfo(book)); 