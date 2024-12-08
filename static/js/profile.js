// JavaScript for dropdown functionality
const profileButton = document.getElementById('profileButton');
const profileDropdown = document.getElementById('profileDropdown');

// Toggle the dropdown menu when the profile button is clicked
profileButton.addEventListener('click', () => {
    profileDropdown.classList.toggle('hidden');
});

// Close the dropdown menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target)) {
        profileDropdown.classList.add('hidden');
    }
});