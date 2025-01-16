const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const restartBtn = document.getElementById('restart');
const difficultySelect = document.getElementById('difficulty');

const gridSize = 5; // 5x5 grid of dots
const dotSpacing = 80; // Spacing between dots

let grid = [];
let currentPlayer = 'player'; // Alternate between 'player' and 'ai'
let aiDifficulty = 'easy';

// Initialize the grid
function initializeGrid() {
    grid = [];
    for (let row = 0; row < gridSize; row++) {
        const gridRow = [];
        for (let col = 0; col < gridSize; col++) {
            gridRow.push({
                right: false, // Line to the right
                down: false,  // Line below
                owner: null,  // Owner of the box
            });
        }
        grid.push(gridRow);
    }
}

// Draw the grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Draw dots
            ctx.beginPath();
            ctx.arc(col * dotSpacing + 50, row * dotSpacing + 50, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();

            // Draw lines
            if (grid[row][col].right) {
                ctx.beginPath();
                ctx.moveTo(col * dotSpacing + 50, row * dotSpacing + 50);
                ctx.lineTo((col + 1) * dotSpacing + 50, row * dotSpacing + 50);
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            if (grid[row][col].down) {
                ctx.beginPath();
                ctx.moveTo(col * dotSpacing + 50, row * dotSpacing + 50);
                ctx.lineTo(col * dotSpacing + 50, (row + 1) * dotSpacing + 50);
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }
}

// Handle AI move based on difficulty
function aiMove() {
    switch (aiDifficulty) {
        case 'easy':
            // Random move
            randomAIMove();
            break;
        case 'medium':
            // Simple heuristic
            heuristicAIMove();
            break;
        case 'hard':
            // Alpha-beta pruning
            alphaBetaMove();
            break;
    }
}

function randomAIMove() {
    // Implement a simple random move logic
}

function heuristicAIMove() {
    // Implement a medium-level AI logic
}

function alphaBetaMove() {
    // Implement Alpha-Beta pruning logic
}

// Restart game
restartBtn.addEventListener('click', () => {
    initializeGrid();
    drawGrid();
});

// Update difficulty
difficultySelect.addEventListener('change', (e) => {
    aiDifficulty = e.target.value;
});

// Initialize the game
initializeGrid();
drawGrid();
