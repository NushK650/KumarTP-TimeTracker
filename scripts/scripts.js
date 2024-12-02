// Get all time buttons
const timeButtons = document.querySelectorAll('.time-btn');

// Add click event listener to each button
timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        timeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
    });
});