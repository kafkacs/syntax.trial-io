document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const selectedItemDisplay = document.getElementById('selected-item');

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownMenu.classList.remove('show');
            dropdownToggle.textContent = event.target.textContent;
            selectedItemDisplay.textContent = `Selected: ${event.target.textContent}`;
        });
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-toggle')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });
});
