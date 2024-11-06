window.onload = () => {
  let z = document.getElementById("z");  
  let x = document.getElementById("x");
  let y = document.getElementById("y");
  
  window.addEventListener('deviceorientation', handleOrientation);

  function handleOrientation(event) {
    var zIndex = event.alpha;
    var xIndex = event.beta;
    var yIndex = event.gamma;

    z.innerText = "Z: " + zIndex;
    x.innerText = "X: " + xIndex;
    y.innerText = "Y: " + yIndex;
  }
}