# Arithmetic_Calculator_Socket

This is a real-time arithmetic calculator application built using **Node.js**, **Express**, and **Socket.IO**. The application performs arithmetic operations like addition, subtraction, multiplication, and division, sending the results back to the client in real-time.

## Features

- Real-time calculations using WebSockets.
- Supports basic arithmetic operations.
- Interactive web interface to perform calculations instantly.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Socket.IO**: Real-time, bi-directional communication between web clients and servers.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/username/Arithmetic_Calculator_Socket.git

2. Navigate into the project directory:
   ```bash
   cd Arithmetic_Calculator_Socket

3. Install the dependencies:
   ```bash
   npm install

## Usage

1. Start the server:
   ```bash
   node server.js

2. Open a web browser and go to http://localhost:8080 to access the calculator.

## Project Structure

- **server.js**: Handles server setup, routes, and WebSocket connections.
- **public/**: Contains static files (HTML, CSS, JavaScript) for the frontend.
   - **index.html**: Main HTML file with the user interface.
   - **script.js**: Client-side JavaScript for handling real-time interactions.
- **package.json**: Project metadata and dependencies.


