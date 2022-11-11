// https://northwind.vercel.app/api/products/
const tBodyElement = document.querySelector("tbody");

// fetch("https://northwind.vercel.app/api/products/")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       const trElement = document.createElement("tr");
//       const tdIdElement = document.createElement("td");
//       const tdNameElement = document.createElement("td");
//       const tdQPUElement = document.createElement("td");
//       tdIdElement.textContent = data[i].id;
//       tdNameElement.textContent = data[i].name;
//       tdQPUElement.textContent = data[i].quantityPerUnit;
//       trElement.append(tdIdElement, tdNameElement, tdQPUElement);
//       tBodyElement.appendChild(trElement);
//     }
//   });

axios("https://northwind.vercel.app/api/products/").then(function (response) {
  console.log(response);

  for (let i = 0; i < response.data.length; i++) {
    const tdIdElement = document.createElement("td");
    const tdNameElement = document.createElement("td");
    const tdQPUElement = document.createElement("td");
    const trElement = document.createElement("tr");
    tdIdElement.innerHTML = response.data[i].id;
    tdNameElement.innerHTML = response.data[i].name;
    tdQPUElement.innerHTML = response.data[i].quantityPerUnit;
    trElement.append(tdIdElement, tdNameElement, tdQPUElement);
    tBodyElement.appendChild(trElement);
  }
});
