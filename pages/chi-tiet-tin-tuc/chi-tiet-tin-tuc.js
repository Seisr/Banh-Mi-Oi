function handleClick() {
  if (sessionStorage.getItem("token")) {
    window.location.href = "../cart/cart.html";
  } else {
    alert("Vui lòng đăng nhập");
    window.location.href = "../dang-nhap/dang-nhap.html";
  }
}

window.onload = function () {
  const a = new URLSearchParams(window.location.search);
  const tintucID = a.get("tintucID");

  function getAllProd() {
    var promise = axios({
      url: `https://banhmioi-nvpaf9d6.b4a.run/news?category=news`,
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
    content += `
      ${arr[tintucID - 4].content}
      `;
    document.getElementById("tintuc_ht").innerHTML = content;
  }
};
