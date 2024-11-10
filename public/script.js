const socket = io();

// Handle arithmetic operation button click
document.getElementById("calculateBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers";
        return;
    }

    // Emit arithmetic operation data to the server
    socket.emit("performArithmetic", { num1, num2, operation });

    // Listen for the result from the server
    socket.on("arithmeticResult", (result) => {
        document.getElementById("result").textContent = `Result: ${result}`;
    });
});
