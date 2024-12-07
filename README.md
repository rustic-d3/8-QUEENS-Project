<p align="center">
    <img src="./queen app/src/assets/images/queen.png" alt="Logo" width=72 height=72>

  <h3 align="center">8 Queens App</h3>

  <p align="center">
    This is an app that displays all the solutions for the 8 Queens Problem. The goal of this problem is to place 8 queens on a standard 8×8 chessboard in such a way that no two queens threaten each other.  
    <br>
  </p>
</p>

## Table of contents

- [The motivation and purpose of the project](#the-motivation-and-purpose-of-the-project)
- [Implementation details](#implementation-details)
- [Development Environment](#development-environment)
- [Examples of Running the Application](#examples-of-running-the-application)
- [Project Structure](#project-structure)
- [Bibliography](#bibliography)
- [Creator](#creator)

---

## The motivation and purpose of the project

### Motivation

- The 8 Queens Problem is a classic programming problem that demonstrates the use of **backtracking** techniques to find all possible solutions to a constraint problem.
- This project aims to implement the solution to the problem using **React** and provide a modern GUI to facilitate visualization of the solutions.

### Purpose

- Implementing a web application that computes all valid solutions to the 8 queens problem.
- Display solutions in an interactive way, allowing the user to navigate between solutions.

---

## Implementation Details

### Algorithm

- **Validating a position (`is_safe`)**:
  - The algorithm checks if placing a queen at a given position is valid by ensuring that no other queen exists in the same row, column, or diagonal.

```javascript
function is_safe(row, column, board) {
  //checks the column and rows
  for (let i = 0; i < 8; i++) {
    if (board[i][column] === "1" || board[row][i] === "1") {
      return false;
    }
  }

  //checks the positive diagonal
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i - j === row - column && board[i][j] === "1") {
        return false;
      }
    }
  }
  //checks the negative diagonal
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i + j === row + column && board[i][j] === "1") {
        return false;
      }
    }
  }

  return true;
}
```

- **Backtracking (`solve`)**:

  - The backtracking function explores all possible positions for the queens, backtracking when a conflict occurs, and saving valid solutions to an array. It continues exploring until all solutions are found.

  ```Javascript
  function solve() {
    let solutions = []; // this will be the array with multiple solutions
    function backtrack(row) {
        if(row === 8) {
            solutions.push(placement.map(row => row.join('')));
            return;
        }

        for(let col = 0; col < 8; col++) {
            if(is_safe(row, col, placement)) {
                placement[row][col] = "1";
                backtrack(row+1); // backtrack to the next row
                placement[row][col] = "0"; // reset the bad placement, and go to the next iteration
            }
        }
    }
    backtrack(0);
    return solutions;
    }
  ```

### Components

The application is composed of several React components that work together to create an interactive interface.

#### Chessboard Component

- **Description**: This component is responsible for displaying the chessboard and all the valid solutions.
- **Props**:
  - `sendData`: Sends the total number of solutions to the parent component.
  - `sendSolution`: The index of the current solution to display.
- **Implementation**:
  The board is dynamically generated based on the solutions array, and each square is rendered using a child component (`Tiles`). It checks if a queen is present at a given position and updates the display accordingly.

#### Tiles Component

- **Description**: Represents each tile on the chessboard.
- **Props**:
  - `number`: Indicates the sum of the row and column indices, used to determine the color of the tile.
  - `queen`: A boolean value indicating whether a queen is placed on this tile.

#### Button Component

- **Description**: Provides buttons to navigate between solutions.
- **Props**:
  - `solutionNext`: Function to navigate to the next solution.
  - `solutionPrevious`: Function to navigate to the previous solution.

#### Total Component

- **Description**: Displays the total number of solutions and the current solution number.
- **Props**:
  - `totalSolutions`: The total number of solutions found.
  - `solutionNumber`: The current solution index.

#### Audio Component

- **Description**: Optionally plays background music or sound effects.

#### App Component

- **Description**: The main component that ties everything together.
- **Props**:
  - Manages the state for `childData` (total solutions) and `solutionData` (current solution).
  - It passes necessary props to child components, including `Total`, `Chessboard`, `Button`, and `Audio`.

### Code Implementation Overview

The app starts by solving the 8 Queens problem using a recursive backtracking approach. The solution is represented in a 2D array where `"1"` indicates a queen's position, and `"0"` indicates an empty square. The backtracking function generates all possible solutions, which are then passed to the chessboard for visualization.

![Code Board](./queen%20app/src/assets/images/codeboard.jpeg)

---

## Development Environment

### Technologies Used

- **React**: The primary framework used for building the user interface.
- **Vite**: A fast and efficient development tool for bundling the application.
- **CSS**: Custom styling for the chessboard and other UI components.

### Project Setup (Project files/Docker image)

- **Node.js Version**: `v16.x` or later.
- **Installation Instructions**:

  1. Clone the repository:
     ```bash
     git clone https://github.com/rustic-d3/8-QUEENS-Project.git
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Run the development server:
     ```bash
     npm run dev
     ```
  4. Access the app at: `http://localhost:3000`

  ### OR

  1. Install Docker: [Download Docker](https://www.docker.com/products/docker-desktop)
  2. Open the terminal and pull the image:
     ```bash
     docker pull rusticd3/queens_app
     ```
  3. Run the image
     ```bash
     docker run --name queenApp -p 8080:80 -d rusticd3/queens_app
     ```
  4. Access the app at: `http://localhost:8080`

---

## Examples of Running the Application

### Execution Flow

1. Upon loading, the app computes all the possible solutions to the 8 Queens problem.
2. The chessboard is displayed with the queens in their respective positions for the first solution.
3. Users can click on the "Next" and "Previous" buttons to cycle through the available solutions.

### Example Scenario

- When the application is run, the user will see a chessboard with the first solution (queens placed in valid positions).
  ![Solution1](./queen%20app/src/assets/images/solution1.jpeg)
  ![Solution1](./queen%20app/src/assets/images/solution2.jpeg)

- As the user clicks the "Next Solution" button, the app will navigate to the next valid configuration of queens on the board.

![Solution1](./queen%20app/src/assets/images/buttons.jpeg)

---

## Project Structure

The project is structured as follows:
src/
├── assets/
├── components/
├── Chessboard.jsx
├── Tiles.jsx
├── Button.jsx
├── Total.jsx
├── Audio.jsx
├── App.jsx
├── App.css
├── main.jsx
public/
├── music.mp3
├── index.html
node_modules/
.github
.gitignore
Dockerfile
eslint.config.js
package.json
package-lock.json
vite.config.js

### Important Files and Directories

- `public/music.mp3`: Background music played in the app.
- `src/components/Chessboard.jsx`: Main component displaying the chessboard.
- `src/components/Button.jsx`: Provides navigation buttons.
- `src/App.jsx`: The main app component that controls the flow.

---

## Bibliography

- "Backtracking Algorithm" - [TutorialsPoint](https://www.tutorialspoint.com/backtracking-algorithm).
- React Official Documentation - [react.dev](https://react.dev).
- Vite Documentation - [vitejs.dev](https://vitejs.dev).
- "The 8 Queens Puzzle" - [Wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle).

---

## Creator

**Dumbravă Rustic**
Enjoy :metal:
