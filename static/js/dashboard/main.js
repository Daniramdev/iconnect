let sidebarIsOpen = false; // Track if the sidebar is open or closed

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const logo = document.getElementById("logo");
    const menuText = document.querySelectorAll(".menu-text");
    const dashboardSubMenu = document.getElementById("dashboardSubMenu");
    const dashboardMenuIcon = document.getElementById("dashboardMenuIcon");

    if (sidebarIsOpen) {
        // Close the sidebar with a delay
        setTimeout(function() {
            sidebar.classList.remove('w-64');
            sidebar.classList.add('w-16');
            logo.classList.add('hidden');
            menuText.forEach((item) => {
                item.classList.add('hidden');
            });
            dashboardSubMenu.style.display = "none";
            dashboardMenuIcon.style.display = "none"; // Hide the dropdown icon
            document.getElementById("searchInput").classList.add('hidden');
        }, 300); // Delay for 300 milliseconds (0.3 seconds)
    } else {
        // Open the sidebar with a delay
        setTimeout(function() {
            sidebar.classList.remove('w-16');
            sidebar.classList.add('w-64');
            logo.classList.remove('hidden');
            menuText.forEach((item) => {
                item.classList.remove('hidden');
            });
            dashboardMenuIcon.style.display = "block"; // Show the dropdown icon
            document.getElementById("searchInput").classList.remove('hidden');
        }, 0.4); // Delay for 300 milliseconds (0.3 seconds)
    }

    // Toggle the sidebar state
    sidebarIsOpen = !sidebarIsOpen;
}


function toggleDashboardMenu() {
    if (sidebarIsOpen) {
        // Only allow dropdown to be clicked if the sidebar is open
        const dashboardSubMenu = document.getElementById("dashboardSubMenu");
        const dashboardMenuIcon = document.getElementById("dashboardMenuIcon");
        if (dashboardSubMenu.style.display === "block") {
            dashboardSubMenu.style.display = "none";
            dashboardMenuIcon.classList.replace("bx-chevron-up", "bx-chevron-down");
        } else {
            dashboardSubMenu.style.display = "block";
            dashboardMenuIcon.classList.replace("bx-chevron-down", "bx-chevron-up");
        }
    }
}

function toggleDashboardManage() {
    if (sidebarIsOpen) {
        // Only allow dropdown to be clicked if the sidebar is open
        const dashboardmanage = document.getElementById("dashboardmanage");
        const dashboardMenuIcon = document.getElementById("dashboardMenuIcon");
        if (dashboardmanage.style.display === "block") {
            dashboardmanage.style.display = "none";
            dashboardmanage.classList.replace("bx-chevron-up", "bx-chevron-down");
        } else {
            dashboardmanage.style.display = "block";
            dashboardmanage.classList.replace("bx-chevron-down", "bx-chevron-up");
        }
    }
}

function toggleDashboardMap() {
    if (sidebarIsOpen) {
        // Only allow dropdown to be clicked if the sidebar is open
        const dashboardmap = document.getElementById("dashboardmap");
        const dashboardMenuIcon = document.getElementById("dashboardMenuIcon");
        if (dashboardmap.style.display === "block") {
            dashboardmap.style.display = "none";
            dashboardmap.classList.replace("bx-chevron-up", "bx-chevron-down");
        } else {
            dashboardmap.style.display = "block";
            dashboardmap.classList.replace("bx-chevron-down", "bx-chevron-up");
        }
    }
}

function toggleDashboardprofile() {
    const profileButton = document.querySelector(".bx-user-circle");
    const profileDropdown = document.querySelector(".relative ul");

    profileButton.addEventListener("click", () => {
        profileDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.add("hidden");
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.querySelector(".profile-btn");
    const profileDropdown = document.querySelector(".profile-btn ul");

    profileButton.addEventListener("click", function(event) {
        profileDropdown.classList.toggle("hidden");
        event.stopPropagation(); // Mencegah menutup dropdown setelah mengklik
    });

    // Menutup dropdown saat mengklik di luar dropdown
    document.addEventListener("click", function(event) {
        if (!profileButton.contains(event.target)) {
            profileDropdown.classList.add("hidden");
        }
    });
});

// jquary
$(document).ready(function() {
    $("#searchInput").on("keyup", function() {
        var searchText = $(this).val().toLowerCase();

        $("#myTable tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
        });
    });
});
// end
function showAddForm() {
    document.getElementById('addForm').style.display = 'flex';
    document.getElementById('editForm').style.display = 'none';
}

function showEditForm() {
    document.getElementById('editForm').style.display = 'flex';
    document.getElementById('addForm').style.display = 'none';
}

function cancelForm() {
    document.getElementById('addForm').style.display = 'none';
    document.getElementById('editForm').style.display = 'none';
}

$(document).ready(function() {
    // Trigger the search when the user types in the input
    $('#searchInput').on('input', function() {
        searchs();
    });

    // Save data when the Save button is clicked
    $('#editFormData').submit(function(event) {
        event.preventDefault();
        saveFormData();
    });
});