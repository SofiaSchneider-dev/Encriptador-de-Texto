function encriptar(text) {
  let textoEncriptado = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textoEncriptado;
}

function desencriptar(text) {
  let desencriptado = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return desencriptado;
}

//botoness
document.getElementById("encrypt-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;

  if (input.trim() === "") {
    document.querySelector(".right-section img").style.display = "block";
    document.querySelector(".right-section p").textContent =
      "Ningún mensaje fue encontrado";
  } else {
    // encriptar textto
    const encriptado = encriptar(input);

    document.querySelector(".right-section p").textContent = encriptado;

    document.querySelector(".right-section img").style.display = "none";

    document.getElementById("text-input").value = "";
  }
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;

  if (input.trim() === "") {
    document.querySelector(".right-section img").style.display = "block";
    document.querySelector(".right-section p").textContent =
      "Ningún mensaje fue encontrado";
  } else {
    const desencriptado = desencriptar(input);

    document.querySelector(".right-section p").textContent = desencriptado;

    document.querySelector(".right-section img").style.display = "none";

    document.getElementById("text-input").value = "";
  }
});
