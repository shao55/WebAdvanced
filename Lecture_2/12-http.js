const http = require("http");

//request => то что я получаю извне (React App)
//responce => то что я отправляю обратно (React App)
//error => ошибка

const server = http.createServer((req, res, err) => {
    res.write("Hello World!");
    res.end();
});


server.listen(8080, () => {
    console.log("Server started!");
});