let user = JSON.parse(sessionStorage.getItem("username"));
console.log(user);
let content = `
<li><a href="pages/dang-nhap/dang-nhap.html">Đăng nhập</a></li>
        <li><a href="pages/dang-ky/dang-ky.html">Đăng ký</a></li>
    <li>
      <a href="#" class="fa fa-cart-shopping" onClick="handleClick()"></a>
    </li>
`;
let content1 = `
 <li ><a style="cursor: pointer">${user}</a></li>
 <li><a style="cursor: pointer" onclick=handleOut()>Đăng xuất</a></li>
 <li>
 <a href="#" class="fa fa-cart-shopping" onClick="handleClick()"></a>
</li>
`;
user !== null
  ? (document.getElementById("nav_login").innerHTML = content1)
  : (document.getElementById("nav_login").innerHTML = content);

function handleOut() {
  sessionStorage.removeItem("username");
  window.location.reload();
}

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
