import http from 'http'

http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/teste") {
        res.write("GET /teste = Sucesso!")
        res.statusCode = 200
    } else {
        res.write("Hello World!")
        res.statusCode = 200
    }
    res.end()

}).listen("8080", () => console.log("Listen!"))