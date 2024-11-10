const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

// Serve static files (HTML, JS, CSS) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

const performArithmetic = (num1, num2, operation) => {
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            throw new Error("Invalid operation");
    }
    return result;
};

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("performArithmetic", (data) => {
        const { num1, num2, operation } = data;
        const result = performArithmetic(num1, num2, operation);
        socket.emit("arithmeticResult", result);
    });

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
