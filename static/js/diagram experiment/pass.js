const passwordField = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        // Change the eye icon to a slash icon (hide password)
        togglePasswordButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>`;
    } else {
        passwordField.type = "password";
        // Change the slash icon back to the eye icon (show password)
        togglePasswordButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3 4.5 5 6a6.5 6.5 0 007 0c1.6-1.2 4-3.7 6-6a6.5 6.5 0 00-7 0c-1.6 1.2-4 3.7-6 6z"/>
            </svg>`;
    }
});
