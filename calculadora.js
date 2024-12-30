// function op(event) {
//   event.preventDefault();
//   console.log("tteste");
//   const n1 = parseFloat(document.querySelector(".input-n1").value);
//   const n2 = parseFloat(document.querySelector(".input-n2").value);
//   const operador = document.querySelector(".input-op").value;
//   console.log("primeiro numero digitado foi:", n1);
//   console.log("segundo numero digitado foi:", n2);
//   console.log("operador selecionado foi:", operador);
//   switch (operador) {
//     case "+":
//       console.log("o resultado da soma e:", n1 + n2);
//       break;
//     case "-":
//       console.log("o resultado da subtracao e:", n1 - n2);
//       break;
//     case "*":
//       console.log("o resultado da multiplicacao e:", n1 * n2);
//       break;
//     case "/":
//       console.log("o resultado da divisao e:", n1 / n2);
//       break;
//     default:
//         console.log("operador invalido, insira outro");
//       break;
//   }
// }
function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  var maxLenght = 20;
  if (numero.length < maxLenght) {
    document.getElementById("resultado").innerHTML = numero + num;
  }
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(0,resultado.length - 1);
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "Nada pra calcular";
  }
}

/*function operacao(op) {
    op.preventDefault();
    console.log("tteste");
    const n1 = document.querySelector('.input-n1').value;
    const n2 = document.querySelector('.input-n2').value;
    const operador = document.querySelector('.input-op').value
    console.log(n1);
    console.log(n2);
    console.log(op);
    switch (op) {
        case '+':
            console.log("o resultado da soma e",n1 + n2);
            break;
            case '-':
            console.log("o resultado da soma e",n1 - n2);
            break;
            case '*':
                console.log("o resultado da soma e",n1 * n2);
                break;
                case '/':
                    console.log("o resultado da soma e",n1 / n2);
                    break;
        default:
            break;
    }*/
