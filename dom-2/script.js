// const myButton = document.getElementById("say_hello_btn");
// function handleClick() {
//   console.log("hello");
// }
// myButton.addEventListener("", handleClick);

function print(mehemmed) {
  console.log(mehemmed.target.value);
}
const myInput = document.querySelector("#my_input");
myInput.addEventListener("keyup", print);
