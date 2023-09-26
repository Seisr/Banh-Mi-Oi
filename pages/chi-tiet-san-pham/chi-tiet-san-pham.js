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
  let count = 1;
  function renderProd(product) {
    handleTang = () => {
      if (count < product.stock_qty) {
        count++;
        console.log("tang");
        document.getElementById("quantity").innerHTML = `${count}`;
      }
    };
    handleGiam = () => {
      if (count > 0) {
        count--;
        console.log("giam");
        document.getElementById("quantity").innerHTML = `${count}`;
      }
    };
    var content = "";
    content += `
<img src="${product.product_url}" alt=""/>
    `;
    var content1 = "";
    content1 += `
    <h1>${product.name}</h1>
    <div class="price"><span>${product.list_price}</span></div>
    <div class="purchase">
    <input type="button" value="-" class="qty-btn" onclick=handleGiam() />
    <span id="quantity">${count}</span>
    <input type="button" value="+" class="qty-btn" onclick=handleTang() />
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
// <input
//   type="text"
//   id="quantity"
//   name="quantity"
//   value="1"
//   min="1"
//   class="qty-selector"
// />
