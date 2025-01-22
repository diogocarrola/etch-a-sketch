const container = document.getElementById('container');
const newGridButton = document.getElementById('newGridButton');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate the size of each square based on the grid size
    const squareSize = 960 / size; // Assuming the container is 960px wide and tall

    // Create new grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Set the size of each square dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Initialize interaction count for each square
        let interactionCount = 0;

        square.addEventListener('mouseover', () => {
            interactionCount++;
            const opacity = Math.min(interactionCount * 0.1, 1); // Max opacity of 1
            square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Darken square
        });
        
        container.appendChild(square);
    }
}

// Initial grid creation
createGrid(16);

// Event listener for the new grid button
newGridButton.addEventListener('click', () => {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = Math.min(Math.max(newSize, 1), 100); // Limit input between 1 and 100
    createGrid(newSize);
});