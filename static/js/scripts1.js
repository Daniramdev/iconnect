$(document).ready(function() {
    // Your existing DataTable initialization script
    $('#existingDataTable').DataTable({
        "paging": true,
        "ordering": true,
        "info": true,
        // ... other options specific to your existing DataTable
    });

    // Initialize DataTable with custom settings
    $('#dataTable').DataTable({
        "pagingType": "full_numbers", // Use full pagination control
        "lengthMenu": [
            [5, 10, 25, 50, 100, -1],
            [5, 10, 25, 50, 100, "All"]
        ], // Show entries dropdown
        "language": {
            "lengthMenu": "Show _MENU_ entries",
            "info": "Showing _START_ to _END_ of _TOTAL_ entries",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "search": "Search:",
            "paginate": {
                "first": "First",
                "previous": "Previous",
                "next": "Next",
                "last": "Last"
            }
        }
    });
});
$(document).ready(function() {
    $('#tur-table').DataTable({
        responsive: true,
        searching: true,
        paging: true,
        lengthMenu: [10, 25, 50, 100],
        pageLength: 10,
    });

    // Toggle dropdown on click
    $('.dropdown-toggle').on('click', function() {
        $(this).siblings('.dropdown-content').toggleClass('hidden');
    });

    $('.dropdown-t').on('click', function() {
        $(this).siblings('.dropdown-c').toggleClass('hidden');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').addClass('hidden');
        }
    });

    $('#toggleSidebar').click(function() {
        $('aside').toggleClass('-translate-x-full');
    });

    // Close sidebar on close button click
    $('#closeSidebar').click(function() {
        $('aside').addClass('-translate-x-full');
    });


});