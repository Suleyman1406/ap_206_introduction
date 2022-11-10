/* The above code is selecting the heading element with the id of "heading_1". */
// const headingElement = document.getElementById("heading_1");
// const headingElement = document.getElementsByClassName("head");
// const headingElement = document.getElementsByTagName("h1");

/* Changing the heading element's innerHTML to "Salam Azerbaycan", color to red and marginLeft to
200px. */
// headingElement.innerHTML = "Salam Azerbaycan";
// headingElement.style.color = "red";
// headingElement.style.marginLeft = "200px";

// const bodyElements = document.getElementsByTagName("body");
// const bodyElement= bodyElements[0]
/* Selecting the body element and assigning it to the variable bodyElement. */
// const bodyElement = document.getElementsByTagName("body")[0];
// const h2Element = document.createElement("h2");
// h2Element.textContent = "Yaxsiyam";

// bodyElement.prepend(h2Element);
// const h1Element = document.getElementById("heading_1");
// // h1Element.remove();
// bodyElement.removeChild(h1Element);
const myList = document.createElement("ul");
const bodyElement = document.getElementsByTagName("body")[0];
bodyElement.appendChild(myList);
const myInput = document.getElementsByTagName("input")[0];

function addTodo() {
  if (myInput.value === "") return;
  const spanElement = document.createElement("span");
  const liElement = document.createElement("li");
  const buttonElement = document.createElement("button");
  spanElement.textContent = myInput.value;
  myInput.value = "";
  buttonElement.innerHTML = "delete";
  liElement.appendChild(spanElement);
  liElement.appendChild(buttonElement);
  myList.appendChild(liElement);
}

const myButton = document.getElementById("my_button");

myButton.onclick = addTodo;

const removeBtn = document.querySelector("#remove_btn");

function removeListItem() {
  myList.innerHTML = "";
}

removeBtn.onclick = removeListItem;
