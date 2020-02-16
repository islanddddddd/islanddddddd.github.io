/*
function check() {
  name = $("#name").val();
  mail = $("#mail").val();
  pwd1 = $("#pwd").val();
  pwd2 = $("#pwd2").val();
  cb = document.getElementById("cb").checked;
  console.log(cb);
  console.log("start");
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (name == "" || mail == "" || pwd1 == "" || pwd2 == "" || cb == false) {
    alert("请填写完整的注册信息!");
  } else {
    if (reg.test(mail)) {
      if (pwd1 == pwd2) {
        if (cb == true) {
          alert("注册成功！即将跳转到登录页面");
          window.location.href = "../html/login.html";
        }
      } else {
        alert("注册失败");
      }
    } else {
      alert("邮箱格式不正确");
    }
  }
}*/
function checkname() {
  tip = document.getElementById("tip1");
  if (document.getElementById(1).value == "") {
    tip.style.display = "inline";
    tip.style.color = "red";
    tip.innerText = "请输入昵称";
  } else {
    tip.style.display = "inline";
    tip.style.color = "green";
    tip.innerHTML = "<i class='fa fa-check-circle' style='color:green;'></i>";
  }
}
function checkemail() {
  var tv = document.getElementById(2).value;
  var reg = /^\w+\@+[0-9a-zA-Z]+\.(com|com.cn|edu|hk|cn|net)$/;

  tip = document.getElementById("tip2");
  if (reg.test(tv)) {
    tip.style.display = "inline";
    tip.style.color = "green";
    tip.innerHTML = "<i class='fa fa-check-circle' style='color:green;'></i>";
  } else {
    tip.style.display = "inline";
    tip.style.color = "red";
    tip.innerText = "请输入正确的邮箱";
  }
}
function checkpwd() {
  tip = document.getElementById("tip3");
  pwd1 = document.getElementById("pwd").value;
  pwd2 = document.getElementById("pwd2").value;
  if (pwd1 == "" || pwd2 == "") {
    tip.style.display = "inline";
    tip.style.color = "red";
    tip.innerText = "未输入密码";
  } else {
    if (pwd1 != pwd2) {
      tip.style.display = "inline";
      tip.style.color = "red";
      tip.innerText = "两次密码输入不正确";
    } else {
      tip.style.display = "inline";
      tip.style.color = "green";
      tip.innerHTML = "<i class='fa fa-check-circle' style='color:green;'></i>";
    }
  }
}
function checkbox() {
  cb = document.getElementById("cb");
  tip=document.getElementById("tip4");
  if(cb.checked==true){
    tip.style.display = "inline";
    tip.style.color="green"
    tip.innerHTML = "<i class='fa fa-check-circle' style='color:green;'></i>";
    
  }
  else{
    tip.style.display = "inline";
    tip.style.color = "red";
    tip.innerText = "请选择";
  }
}
function submitcheck() {
  checkname();
  checkemail();
  checkpwd();
  checkbox();
  tip1 = document.getElementById("tip1");
  tip2 = document.getElementById("tip2");
  tip3 = document.getElementById("tip3");

  if (
    (tip1.style.color =
      "green" && tip2.style.color == "green" && tip3.style.color == "green")
  ) {
    window.alert("注册成功");
  } else {
  }
}
