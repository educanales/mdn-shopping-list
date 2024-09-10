/* 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list
*/

const myList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  let itemValue = input.value;
  input.value = '';

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const btn = document.createElement("button");

  listItem.appendChild(listText);
  listItem.appendChild(btn);

  listText.textContent = itemValue;
  btn.textContent = "Delete";

  myList.appendChild(listItem);

  btn.addEventListener('click', () => {
    myList.removeChild(listItem);
  });

  input.focus();
}

button.addEventListener("click", addItem);
