async function saveToLocalStorage(event) {
    try {
event.preventDefault();
const price = event.target.price.value;
const product = event.target.product.value;
const selecting = event.target.category.value;
let obj = {
price,
product,
selecting
};


const response = await axios.post(
  "http://localhost:4000/user/addExpense",
  obj
);
showUserOnScreen(response.data.newProduct);
} catch (error) {
document.body.innerHTML =
  document.body.innerHTML + "<h4>Something went wrong</h4>";
console.log(error);
}
}

async function showUserOnScreen(obj) {
let parentElem;
if (obj.selecting == "table1") {
parentElem = document.getElementById("listofitems1");
} else if (obj.selecting == "table2") {
parentElem = document.getElementById("listofitems2");
} else if (obj.selecting == "table3") {
parentElem = document.getElementById("listofitems3");
}
const childElem = document.createElement("li");
childElem.textContent = obj.price + "-" + obj.product;
const deleteElem = document.createElement("button");
deleteElem.appendChild(document.createTextNode("delete "));
deleteElem.addEventListener("click", async () => {
try {
  const response = await axios.delete(
    `http://localhost:4000/user/deleteExpense/${obj.id}`
  );
  parentElem.removeChild(childElem);
} catch (error) {
  console.log(error);
}
});

childElem.appendChild(deleteElem);
parentElem.appendChild(childElem);
}


document.addEventListener("DOMContentLoaded", async () => {
try {
const response = await axios.get(
  "http://localhost:4000/user/getExpense"
);
for (let i = 0; i < response.data.length; i++) {
  showUserOnScreen(response.data.allDetails[i]);
}
} catch (error) {
console.log(error);
}
});