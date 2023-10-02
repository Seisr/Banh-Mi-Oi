$(function () {
  // $("#header").load("./header.html");
  $("#footer").load("./footer.html");
});

function handleClick() {
  if (sessionStorage.getItem("token")) {
    window.location.href = "pages/cart/cart.html";
  } else {
    alert("Vui lòng đăng nhập");
    window.location.href = "pages/dang-nhap/dang-nhap.html";
  }
}
