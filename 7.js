function generateRandomNumbers() {
  var n = parseInt(document.getElementById("inputN").value);
  var a = parseInt(document.getElementById("inputA").value);
  var b = parseInt(document.getElementById("inputB").value);

  var resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  for (var i = 0; i < n; i++) {
    var randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    var li = document.createElement("li");
    li.textContent = randomNum;
    resultList.append(li);
  }
}
