export function sortBooks(books) {
  return books
    .sort((a, b) => a.author.localeCompare(b.author))
    .sort((a, b) => a.title.localeCompare(b.title))
    .sort((a, b) => a.publishedDate.slice(0, 3) - b.publishedDate.slice(0, 3));
}
