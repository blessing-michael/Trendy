document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value
    };

    try {
        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const result = await res.json();
        alert(result.message);
    } catch (error) {
        alert("Error connecting to backend: " + error.message);
    }
});
