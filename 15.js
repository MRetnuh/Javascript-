function bubble(){
  const circle = document.createElement("div")
  circle.classList.add("Circle")
  const radio = Math.random() * 150 + 10
  const color = colorAleatorio()

  circle.style.cssText = '
  background-color: ${color};
  width: ${radio}px;
  height: ${radio}px;
  left: ${Math.random() * 90}vw;
  top: ${Math.random() * 90}vh;
  '

  document.body.appendChild(circle)
}

function colorAleatorio(){
  return "#" +  Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9)
}
