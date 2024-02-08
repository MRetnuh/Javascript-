function Pasaje() {
     var n = parseInt(document.getElementById("inputN").value);
    var a = parseInt(document.getElementById("inputA").value);
     var b = parseInt(document.getElementById("inputB").value);
var c  = parseInt(document.getElementById("inputC").value);
  let binary = binaryInput.value;
  let decimal = Number(decimalInput.value);
  let octal = octalInput.value;
  let hexadecimal = hexadecimalInput.value;

  switch (from) {
    case "binary":
      decimal = parseInt(binary, 2);
      octal = decimal.toString(8);
      hexadecimal = decimal.toString(16).toUpperCase();
      break;
    case "decimal":
      binary = decimal.toString(2);
      octal = decimal.toString(8);
      hexadecimal = decimal.toString(16).toUpperCase();
      break;
    case "octal":
      decimal = parseInt(octal, 8);
      binary = decimal.toString(2);
      hexadecimal = decimal.toString(16).toUpperCase();
      break;
    case "hexadecimal":
      decimal = parseInt(hexadecimal, 16);
      binary = decimal.toString(2);
      octal = decimal.toString(8);
      break;
    default:
      break;
  }

  binaryInput.value = binary;
  decimalInput.value = decimal;
  octalInput.value = octal;
  hexadecimalInput.value = hexadecimal;
}
