// console.log(777);
// console.log("Ичиго Куросаке");
// console.log(39999999999999999+92-888888*87/13);
// console.log("3999999+92-888888*87/13");
// let car="McQueen";
// let fraza="Kchau"
// console.log(car+" говорит "+fraza);
// car="Metre";
// fraza="А если ты выиграешь гонку то покатаешь меня на вертолёте"
// console.log(car+" говорит "+fraza);
let adding = document.getElementById("adding");
let onechislione = document.getElementById("onechislione")
let twochisliu = document.getElementById("twochisliu")
let answer = document.getElementsByTagName("h2")[0];
let subtracting = document.getElementById("subtracting")
let multiplying = document.getElementById("multiplying")
let dividing = document.getElementById("dividing")
console.log(answer);
adding.onclick = function (event) {
    event.preventDefault();
    console.log(document.body);
    // document.body.style.backgroundColor="plum"
    console.log(onechislione.value);
    console.log(twochisliu.value);
    let firstNumber = Number(onechislione.value)
    let secondNumber = Number(twochisliu.value)
    console.log(firstNumber + secondNumber);
    answer.innerHTML = "Ответ: " + (firstNumber + secondNumber)
}
// console.log(subtracting);
subtracting.onclick = function (event) {
    event.preventDefault();
    let firstNumber = onechislione.value
    let secondNumber = twochisliu.value
    answer.innerHTML = "Ответ: " + (firstNumber - secondNumber)
}
multiplying.onclick = function (event) {
    event.preventDefault()
    let firstNumber = onechislione.value
    let secondNumber = twochisliu.value
    answer.innerHTML = "Ответ: " + (firstNumber * secondNumber)
}
dividing.onclick = function (event) {
    event.preventDefault()
    let firstNumber = onechislione.value
    let secondNumber = twochisliu.value
    answer.innerHTML = "Ответ: " + (firstNumber / secondNumber)

}

