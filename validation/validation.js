//Tài khoản tối đa 4 - 6 ký số, không để trống
function checkEmptyValue(theThongBao, value) {
  if (value == "") {
    // thông báo lỗi
    theThongBao.innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
function checkMaxMinValue(theThongBao, value, min, max) {
  let doDai = value.length;
  if (doDai < min || doDai > max) {
    theThongBao.innerHTML = `Vui lòng nhập trong khoảng từ ${min} đến ${max}`;
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}
//Tên nhân viên phải là chữ, không để trống
function checkLetterValue(theThongBao, value) {
  let regexLetter = /^[A-Za-z]+$/;
  let checkRegex = regexLetter.test(value);
  if (checkRegex) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng chữ";
    return false;
  }
}
//Email phải đúng định dạng, không để trống
function checkEmailValue(theThongBao, value) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkEmail = regexEmail.test(value); // true | false
  if (checkEmail == true) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }
}
// Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
function checkPassValue(theThongBao, value) {
  let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
  let checkPass = regexPass.test(value);
  if (checkPass) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML =
      "Vui lòng nhập mật khẩu có ít nhất 1 ký số, 1 ký tự in hoa và 1 ký tự đặc biệt";
    return false;
  }
}
// Ngày làm không để trống, định dạng mm/dd/yyyy
function checkDateValue(theThongBao, value) {
  let regexDate =
    /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/;
  let checkRegexDate = regexDate.test(value);
  if (checkRegexDate) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng mm/dd/yyyy";
    return false;
  }
}
// Lương cơ bản 1 000 000 - 20 000 000, không để trống
function checkLuongValue(theThongBao, value) {
  if (value >= 1000000 && value <= 20000000) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML =
      "Vui lòng nhập trong khoảng lương từ 1000000 triệu đến 20000000 triệu";
  }
}

//Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
function checkPositionValue(theThongBao, value) {
  if (value === "Sếp" || value === "Trưởng phòng" || value === "Nhân viên") {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML = " Vui lòng chọn chức vụ hợp lệ";
    return false;
  }
}
//Số giờ làm trong tháng 80 - 200 giờ, không để trống
function checkGioLamValue(theThongBao, value) {
  if (value >= 80 && value <= 200) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML =
      "Vui lòng nhập trong khoảng lương từ 80 giờ đến 200 giờ";
  }
}
