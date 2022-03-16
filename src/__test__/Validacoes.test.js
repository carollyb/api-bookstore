
const SearchBookService = require("../services/SearchBookService");

test("Verifica se a busca por livro retornou um resultado", () => {
    const functionResult = SearchBookService.searchBook("Batman")

    expect(functionResult).toBe(Object)
})
