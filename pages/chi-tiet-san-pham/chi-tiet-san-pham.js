window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  let product_id = Number(urlParams.get("productid"));
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
    var pd_price = Number(product.list_price);
    var price = count * pd_price;
    handleTang = () => {
      if (count < product.stock_qty) {
        count += 1;
        price = count * pd_price;
        console.log("tang");
        document.getElementById("quantity").innerHTML = `${count}`;
        document.getElementById("price").innerHTML = `${price}`;
        sessionStorage.setItem("current_quantity", count);
        sessionStorage.setItem("current_price", price);
      }
      if (count > 0) {
        document.getElementById("my-button").disabled = false;
      }
    };
    handleGiam = () => {
      if (count > 0) {
        count--;
        price = count * pd_price;
        console.log("giam");
        document.getElementById("quantity").innerHTML = `${count}`;
        document.getElementById("price").innerHTML = `${price}`;
        sessionStorage.setItem("current_quantity", count);
        sessionStorage.setItem("current_price", price);
      }
      if (count == 0) {
        document.getElementById("my-button").disabled = true;
      }
    };
    var content = "";
    content += `<img src="${product.product_url}" alt=""/>`;
    var content1 = "";
    content1 += `
        <h1>${product.name}</h1>
        <div class="price" id="price"><span>${price}</span></div>
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
  var frm = $("#add-cart");
  frm.submit(function (e) {
    if (!sessionStorage.getItem("token")) {
      alert("Vui lòng đăng nhập");
      window.location.href = "../dang-nhap/dang-nhap.html";
    }
    e.preventDefault();
    var body = {};
    var dataArray = frm.serializeArray();
    for (var i = 0; i < dataArray.length; i++) {
      body[dataArray[i].name] = dataArray[i].value;
    }
    fetch("https://banhmioi-nvpaf9d6.b4a.run/carts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product_id,
        variation: {},
        note: body.note,
        qty: Number(sessionStorage.current_quantity),
        price: Number(sessionStorage.current_price),
      }),
    }).then((res) =>
      res.json().then((data) => {
        window.location.href = "../cart/cart.html";
      })
    );
  });
};
// <input
//   type="text"
//   id="quantity"
//   name="quantity"
//   value="1"
//   min="1"
//   class="qty-selector"
// />
