window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log(myParam);
  function getAllProd() {
    let promise = axios({
      url: `https://banhmioi-nvpaf9d6.b4a.run/products`,
      method: "GET",
    });
    promise.then(function (res) {
      console.log(res.data.data[myParam]);
      renderProd(res.data.data[myParam]);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  }
  getAllProd();
  function renderProd(product) {
    var content = "";
    content += `
<img src="${product.product_url}" alt=""/>
    `;
    var content1 = "";
    content1 += `
    <h1>${product.name}</h1>
    <div class="price"><span>${product.list_price}</span></div>
    <div class="purchase">
    <input type="button" value="-" class="qty-btn" />
    <input
      type="text"
      id="quantity"
      name="quantity"
      value="1"
      min="1"
      class="qty-selector"
    />
    <input type="button" value="+" class="qty-btn" />
  </div>
    `;
    var content2 = "";
    content2 += `
    <p>
    ${product.description}
  </p>
  `;
    document.getElementById("dtLeft").innerHTML = content;
    document.getElementById("dtR1").innerHTML = content1;
    document.getElementById("dtR2").innerHTML = content2;
  }
};
