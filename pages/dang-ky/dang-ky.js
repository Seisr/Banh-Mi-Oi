var frm = $("#dang-ky");

frm.submit(function (e) {
  e.preventDefault();
  console.log(frm.serialize());
  var body = {};
  var dataArray = frm.serializeArray();
  for (var i = 0; i < dataArray.length; i++) {
    body[dataArray[i].name] = dataArray[i].value;
  }
  // console.log(body);
  let _acc = document.getElementById("acc").value;
  let _password = document.getElementById("password").value;
  let _email = document.getElementById("email").value;
  let _phone = document.getElementById("phone").value;
  let _dob = document.getElementById("dob").value;
  let _name = document.getElementById("name").value;
  var valid = true;
  console.log(valid);
  valid =
    kiemTraPassword(_password, "tbPass") &
    kiemTraEmail(_email, "tbEmail") &
    kiemTraPhone(_phone, "tbPhone") &
    kiemTraName(_name, "tbName") &
    kiemTraDOB(_dob, "tbDOB");

  console.log(valid);

  if (!valid) {
    return;
  }
  $.ajax({
    type: "POST",
    url: "https://banhmioi-nvpaf9d6.b4a.run/users",
    data: JSON.stringify(body),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log(data);
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
