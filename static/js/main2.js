
// JavaScript to toggle the edit form's visibility
const showEditFormButton = document.getElementById('showEditForm');
const editForm = document.getElementById('editForm');

showEditFormButton.addEventListener('click', () => {
    editForm.classList.toggle('hidden');
});