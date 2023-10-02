function handleClick() {
  if (sessionStorage.getItem("token")) {
    window.location.href = "pages/cart/cart.html";
  } else {
    alert("Vui lòng đăng nhập");
    window.location.href = "pages/dang-nhap/dang-nhap.html";
  }
}
let user = JSON.parse(sessionStorage.getItem("username"));
console.log(user);
let header = `
    <div class="header_content">
        <nav>
        <ul class="nav_logo">
        <a href="/">
            <img
            src="//theme.hstatic.net/200000392523/1000896443/14/logo.png?v=104"
            alt="Big Belly"
            />
        </a>
        </ul>
        <ul class="nav_content">
        <li><a href="#">Trang chủ</a></li>
        <li><a href="pages/san-pham/san-pham.html">Sản phẩm</a></li>
        <li><a href="pages/uu-dai/uu-dai.html">Thông tin ưu đãi</a></li>
        <li><a href="">Tin tức</a></li>
        <!-- <li><a href="">Thông tin cửa hàng</a></li>  -->
        <li>
            <a href="pages/ve-chung-toi/ve-chung-toi.html">Về chúng tôi</a>
        </li>
        <li>
            <a href="pages/lien-he/lien-he.html">Thông tin liên hệ</a>
        </li>
        </ul>
        <ul class="nav_login" id="nav_login"></ul>
        </nav>
    </div>
`;
let content = `
    <li><a href="pages/dang-nhap/dang-nhap.html">Đăng nhập</a></li>
    <li><a href="pages/dang-ky/dang-ky.html">Đăng ký</a></li>
    <li>
        <a href="./pages/cart/cart.html" class="fa fa-cart-shopping" onClick="handleClick()"></a>
    </li>
`;
let content1 = `
    <li ><a style="cursor: pointer">${user}</a></li>
    <li><a style="cursor: pointer" onclick=handleOut()>Đăng xuất</a></li>
    <li>
        <a href="./pages/cart/cart.html" class="fa fa-cart-shopping" onClick="handleClick()"></a>
    </li>
`;
document.getElementById("header").innerHTML = header;
user !== null
  ? (document.getElementById("nav_login").innerHTML = content1)
  : (document.getElementById("nav_login").innerHTML = content);

function handleOut() {
  sessionStorage.removeItem("username");
  window.location.reload();
}
