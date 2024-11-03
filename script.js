function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert("Logging in...");
    } else {
        alert("Please enter your username and password.");
    }
}
