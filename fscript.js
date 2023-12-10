// En fscript.js

import cofetti from "https://cdn.skypack.dev/canvas-confetti@1";

// Función independiente para manejar clics y mostrar imágenes con texto
function handleLikeClick() {
  // Obtén el contenedor donde mostrarás las imágenes y textos
  const container = document.getElementById("image-container");

  // Lista de objetos con la información de la imagen y el texto
  const imagesAndTexts = [
    { imageSrc: "./img1.jpg", text: "decirme lo que quereis poner" },
    { imageSrc: "./img2.jpg", text: "cositas bonitas para Ainhoa" },
    // Agrega más objetos según sea necesario
  ];

  // Recorre la lista y muestra las imágenes con texto en orden
  imagesAndTexts.forEach((item, index) => {
    setTimeout(() => {
      // Crea un elemento de imagen
      const imageElement = document.createElement("img");
      imageElement.src = item.imageSrc;

      // Crea un elemento de texto
      const textElement = document.createElement("p");
      textElement.textContent = item.text;

      // Limpia el contenido anterior del contenedor
      container.innerHTML = "";

      // Agrega la imagen y el texto al contenedor
      container.appendChild(imageElement);
      container.appendChild(textElement);

      // Obtén las coordenadas del botón "like"
      const buttonRect = likeButton.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;

      // Lanza confeti al hacer clic en el botón "like"
      cofetti({
        particleCount: 150,
        spread: 60,
        origin: { x: buttonX, y: buttonY } // Usa las coordenadas del botón como origen
      });
    }, index * 2000); // Muestra cada imagen durante 2 segundos (ajusta según sea necesario)
  });
}

// Asigna la función `handleLikeClick` al clic del botón "like"
document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.querySelector(".button");
  likeButton.addEventListener("click", handleLikeClick);
});

// Mantén la función App como está
import React, { useCallback } from "https://cdn.skypack.dev/react@17";
import { render } from "https://cdn.skypack.dev/react-dom@17";

function App() {
  const onClick = useCallback(() => {
    cofetti({
      particleCount: 150,
      spread: 60
    });
  }, []);

  return (
    React.createElement("button", {
      className: "button",
      onClick: onClick
    },
      React.createElement("span", null, "\uD83C\uDF89"),
      React.createElement("span", null, "¡¡FELICIDADES!!")
    )
  );
}

render(React.createElement(App, null), document.getElementById("root"));
