const range = document.querySelector("#moisture-range");
const value = document.querySelector("#moisture-value");
const rangeOutput = document.querySelector("#range-output");
const marker = document.querySelector("#chart-marker");
const recommendation = document.querySelector("#recommendation");

function updateAnalysis() {
  const moisture = Number(range.value);
  value.textContent = moisture;
  rangeOutput.textContent = `${moisture}%`;
  marker.style.left = `${((moisture - 10) / 50) * 100}%`;

  if (moisture < 25) {
    recommendation.classList.add("warning");
    recommendation.querySelector(".recommendation-icon").textContent = "!";
    recommendation.querySelector("strong").textContent = "Riego recomendado";
    recommendation.querySelector("p").textContent = "La humedad está por debajo del umbral. Activar una ventana de riego breve y volver a medir.";
  } else if (moisture > 48) {
    recommendation.classList.add("warning");
    recommendation.querySelector(".recommendation-icon").textContent = "×";
    recommendation.querySelector("strong").textContent = "Riego bloqueado";
    recommendation.querySelector("p").textContent = "El suelo se aproxima a saturación. Evitar escurrimientos y esperar una nueva lectura.";
  } else {
    recommendation.classList.remove("warning");
    recommendation.querySelector(".recommendation-icon").textContent = "✓";
    recommendation.querySelector("strong").textContent = "Riego no recomendado";
    recommendation.querySelector("p").textContent = "Humedad disponible dentro de la ventana de absorción. Esperar la siguiente lectura.";
  }
}

range.addEventListener("input", updateAnalysis);
updateAnalysis();
