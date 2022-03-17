const request = require("supertest")
const { describe } = require("../models/bookModel")
const app = require("../server")

describe("POST /books", () => {
    describe("Given a title, author_id, language, num_pages, publication_date and publisher", () => {
        //should save book entry to database
        test("Should generate a book id", async () => {
            const response = await request(app).post("/books").send({
                title: "Sample Book 29",
                author_id: "54mpl310",
                language: "Sample Language",
                num_pages: 201,
                publication_date: "2022-12-12T00:00:00.000Z",
                publisher: "Sample Publisher"
            })
            expect(response.body.id).toBeDefined()
        })
        
        test("Should respond with a 201 status code", async () => {
            const response = await request(app).post("/books").send({
                title: "Sample Book 30",
                author_id: "54mpl310",
                language: "Sample Language",
                num_pages: 201,
                publication_date: "2022-12-12T00:00:00.000Z",
                publisher: "Sample Publisher"
            })
            expect(response.statusCode).toBe(201)
        })
        test("Should specify JSON in the content type header", async () => {
            const response = await request(app).post("/books").send({
                title: "Sample Book 31",
                author_id: "54mpl310",
                language: "Sample Language",
                num_pages: 201,
                publication_date: "2022-12-12T00:00:00.000Z",
                publisher: "Sample Publisher"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

    })

    describe("When entry is flawed", () => {
        //should respond with a 400 status code
        test("Should not allow to create an entry with a duplicate title", async () => {
            const response = await request(app).post("/books").send({
                title: "Sample Book 3",
                author_id: "54mpl310",
                language: "Sample Language",
                num_pages: 201,
                publication_date: "2022-12-12T00:00:00.000Z",
                publisher: "Sample Publisher"
            })
            expect(response.statusCode).toBe(400)
        })

        test("Should not allow to create a book entry without a title", async () => {
            const response = await request(app).post("/books").send({
                author_id: "54mpl310",
                language: "Sample Language",
                num_pages: 201,
                publication_date: "2022-12-12T00:00:00.000Z",
                publisher: "Sample Publisher"
            })
            expect(response.statusCode).toBe(400)
        })
    })
})

