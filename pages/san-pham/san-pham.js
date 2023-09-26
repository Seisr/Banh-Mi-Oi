// window.onload = function () {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get("productid");
// };

function getAllProd() {
  var promise = axios({
    url: `https://banhmioi-nvpaf9d6.b4a.run/products`,
    method: "GET",
  });
  promise.then(function (res) {
    console.log(res);
    renderProd(res.data.data);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
getAllProd();

function renderProd(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];
    content += ` 
    <div class="sanpham_item">
    <img src="${product.product_url}" alt="" />
    <p>${product.name}</p>
  </div>
`;
  }
  document.getElementById("spl").innerHTML = content;
}
