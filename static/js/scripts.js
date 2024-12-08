document.addEventListener("DOMContentLoaded", function () {
    // Seleksi elemen-elemen yang dibutuhkan
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");
    const dataBtn = document.querySelector(".bx-file");
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileDropdown');
    const dropdownTrigger = document.querySelector('.group');


    // Tambahkan event listener untuk tombol close
    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange(); // Panggil fungsi menuBtnChange
    });

    // Tambahkan event listener untuk tombol close
    dataBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        dataBtnChange();

    });

    // Tambahkan event listener untuk tombol pencarian
    searchBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange(); // Panggil fungsi menuBtnChange
    });

    // Fungsi untuk mengubah ikon menu
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
    // Fungsi untuk mengubah ikon menu


    // Event listener untuk tombol profile
    profileButton.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
    });

    // Event listener untuk menutup dropdown saat mengklik di luar dropdown
    document.addEventListener('click', (event) => {
        if (!profileButton.contains(event.target)) {
            profileDropdown.classList.add('hidden');
        }
    });

    // Event listener untuk dropdown lainnya
    dropdownTrigger.addEventListener('click', (event) => {
        const dropdown = event.currentTarget.querySelector('ul');
        dropdown.classList.toggle('hidden');
    });


});

const showAddFormButton = document.getElementById('showAddForm');
const addForm = document.getElementById('addForm');
const closeAddFormButton = document.getElementById('closeAddForm');

showAddFormButton.addEventListener('click', () => {
    addForm.classList.remove('hidden');
});

closeAddFormButton.addEventListener('click', () => {
    addForm.classList.add('hidden');
});


// edit
function showEditForm(userId) {
    var formId = "edit-form-" + userId;
    var form = document.getElementById(formId);

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

// Fungsi untuk konfirmasi penghapusan pengguna
function confirmDeletion(userId) {
    if (confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
        // Jika pengguna mengonfirmasi, kirim permintaan penghapusan
        var formId = "delete-form-" + userId;
        var form = document.getElementById(formId);
        form.submit();
    }
}
// Mendapatkan elemen form, tombol toggle, dan form full screen
var editForm = document.getElementById("editForm");
var toggleButton = document.getElementById("toggleForm");
var closeButton = document.getElementById("closeForm");
var fullScreenForm = document.getElementById("fullScreenForm");

// Menambahkan event listener untuk tombol toggle
toggleButton.addEventListener("click", function () {
    // Memeriksa visibilitas form full screen
    if (fullScreenForm.classList.contains("hidden")) {
        // Jika form full screen disembunyikan, tampilkan
        fullScreenForm.classList.remove("hidden");
    } else {
        // Jika form full screen sudah ditampilkan, sembunyikan
        fullScreenForm.classList.add("hidden");
    }
    closeButton.addEventListener("click", function () {
        // Sembunyikan form full screen saat tombol close diklik
        fullScreenForm.classList.add("hidden");
    });
});

function showTable() {
    // Mendapatkan elemen dropdown
    var tableSelector = document.getElementById("tableSelector");
    // Mendapatkan nilai yang dipilih
    var selectedTable = tableSelector.value;

    // Menyembunyikan semua tabel
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
        tables[i].classList.add("hidden");
    }

    // Menampilkan tabel yang sesuai dengan nilai yang dipilih
    var selectedTableElement = document.getElementById(selectedTable);
    selectedTableElement.classList.remove("hidden");
}
// Menambahkan event listener untuk tombol close


function showTable(selectedTable) {
    // Hide all tables
    document.getElementById('bdgTable').style.display = 'none';
    document.getElementById('crbTable').style.display = 'none';
    document.getElementById('tskTable').style.display = 'none';

    // Show the selected table
    document.getElementById(selectedTable).style.display = 'table';
}

function searchById() {
    const searchValue = document.getElementById('searchId').value;
    const selectedTable = document.getElementById('tableSelect').value;
    const table = document.getElementById(selectedTable);
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName('td')[0];
        if (cell) {
            const id = cell.textContent || cell.innerText;
            if (id === searchValue) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}
