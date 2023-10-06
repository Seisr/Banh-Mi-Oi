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
  const uuDaiID = a.get("uudaiID");

  function getAllProd() {
    var promise = axios({
      url: `https://banhmioi-nvpaf9d6.b4a.run/news?category=promotion`,
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
    ${arr[uuDaiID - 1].content}
    `;
    document.getElementById("uudai_ht").innerHTML = content;
  }
};
