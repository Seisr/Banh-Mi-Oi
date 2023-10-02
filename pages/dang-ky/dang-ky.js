$(function () {
  $("#header").load("../../header.html");
  $("#footer").load("../../footer.html");
});

function handleClick() {
  if (sessionStorage.getItem("token")) {
    window.location.href = "../cart/cart.html";
  } else {
    alert("Vui lòng đăng nhập");
    window.location.href = "../dang-nhap/dang-nhap.html";
  }
}

var frm = $("#dang-ky");

frm.submit(function (e) {
  e.preventDefault();
  console.log(frm.serialize());
  var body = {};
  var dataArray = frm.serializeArray();
  for (var i = 0; i < dataArray.length; i++) {
    body[dataArray[i].name] = dataArray[i].value;
  }

  $.ajax({
    type: "POST",
    url: "https://banhmioi-nvpaf9d6.b4a.run/users",
    data: JSON.stringify(body),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log("Submission was successful.");
      console.log(data);
      window.location.href = "../dang-nhap/dang-nhap.html";
      alert("Đăng ký thành công! Hãy đăng nhập để đặt hàng");
    },
    error: function (data) {
      console.log("An error occurred.");
      console.log(data);
      alert("Đăng ký thất bại");
    },
  });
});
