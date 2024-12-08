
const showAddFormButton = document.getElementById('showAddForm');
const addForm = document.getElementById('addForm');
const closeAddFormButton = document.getElementById('closeAddForm');

showAddFormButton.addEventListener('click', () => {
    addForm.classList.remove('hidden');
});

closeAddFormButton.addEventListener('click', () => {
    addForm.classList.add('hidden');
});
