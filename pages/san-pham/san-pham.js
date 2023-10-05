let items = [];
function getAllProd() {
  var promise = axios({
    url: `https://banhmioi-nvpaf9d6.b4a.run/products`,
    method: "GET",
  });
  promise.then(function (res) {
    items = res.data.data.map((item) => {
      return {
        name: item.name,
        price: item.price,
        id: item.id,
        product_url: item.product_url,
      };
    });
    renderProd(res.data.data);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
getAllProd();

const searchBar = document.getElementById("searchbar");

searchBar.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();
  const fitem = items.filter((item) => {
    if (
      item.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(searchString) ||
      item.name.toLowerCase().includes(searchString)
    ) {
      return item;
    }
    // item.element.classList.toggle("hidden", !isVisible);
  });
  console.log(fitem);
  renderProd(fitem);
});

// searchBar.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredCharacters = items.filter((character) => {
//     return character.name.toLowerCase().includes(searchString);
//   });
//   console.log(filteredCharacters);
//   renderProd(filteredCharacters);
// });

function renderProd(products) {
  const content = products
    .map((product) => {
      console.log(product);
      return ` 
    <div class="sanpham_item">
     <a href="../../pages/chi-tiet-san-pham/chi-tiet-san-pham.html?productid=${
       product.id - 1
     }"><img src="${product.product_url}" alt="" /></a>
     <p>${product.name}</p>
   </div>
 `;
    })
    .join("");

  //   let content = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     let product = arr[i];
  //     content += `
  //     <div class="sanpham_item">
  //     <a href="../../pages/chi-tiet-san-pham/chi-tiet-san-pham.html?productid=${
  //       product.id - 1
  //     }"><img src="${product.product_url}" alt="" /></a>
  //     <p>${product.name}</p>
  //   </div>
  // `;

  document.getElementById("spl").innerHTML = content;
}
