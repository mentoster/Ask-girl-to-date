document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('no');
    const container = document.querySelector('.container');

    function moveButton() {
        // Calculate the container's dimensions
        const containerRect = container.getBoundingClientRect();

        // Generate random positions within the container
        const newX = Math.random() * (containerRect.width - noButton.offsetWidth);
        const newY = Math.random() * (containerRect.height - noButton.offsetHeight);

        // Apply the new positions
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    noButton.addEventListener('mouseover', moveButton);
});
