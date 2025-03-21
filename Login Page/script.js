document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    let data = await response.json();

    if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "chat.html";
    } else {
        alert(data.message);
    }
});
