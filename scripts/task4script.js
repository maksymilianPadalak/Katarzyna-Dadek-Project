const startTrackingButton = document.getElementById("start-tracking-button");
const stopTrackingButton = document.getElementById("stop-tracking-button");
const coordsSpan = document.getElementById("coords");
coordsSpan.innerText = 'Wciśnij, aby rozpocząć tracking kursora! :)'

function startTracking() {
  const x = event.clientX; // Get the horizontal coordinate
  const y = event.clientY; // Get the vertical coordinate
  const coords = "X coords: " + x + ", Y coords: " + y;
  coordsSpan.innerText = coords;
}

startTrackingButton.addEventListener("click", () => {
  document
    .getElementsByTagName("BODY")[0]
    .addEventListener("mousemove", startTracking);
});

stopTrackingButton.addEventListener("click", () => {
  document
    .getElementsByTagName("BODY")[0]
    .removeEventListener("mousemove", startTracking);
  coordsSpan.innerText = "Tracking kursora wstrzymany :(";
});
