//-------------- Thêm Nhân viên ----------------
let arrNhanVien = [];
document.getElementById("formQLNV").onsubmit = function (event) {
  event.preventDefault();
  console.log("hello");
  let nhanVien = getValueForm();
  if (!nhanVien) {
    return;
  }
  arrNhanVien.push(nhanVien);
  setLocalStorage("arrNhanVien", arrNhanVien);
  renderDataNhanVien();
  event.target.reset();
};
// -------------- In ra table danh sách sinh viên ----------------
function renderDataNhanVien(arr = arrNhanVien) {
  let content = "";
  for (let nhanVien of arr) {
    let newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    let { tknv, hoTen, email, datepicker, luongCB, chucvu, gioLam } =
      newNhanVien;
    content += `
            <tr>
                <td>${tknv}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${datepicker}</td>
                <td>${chucvu}</td>
                <td>${newNhanVien.tongLuong().toLocaleString("vi-VI", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>${newNhanVien.xepLoaiNV()}</td>
                <td>
                  <button onclick = "deleteNhanVien('${tknv}')" class="btn btn-danger">Xóa</button>
                  <button onclick = "getInFoNhanVien('${tknv}')" class="btn btn-success" data-toggle="modal"
                    data-target="#myModal">Sửa</button>
                </td>
            </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
window.onload = function () {
  let dataLocal = getLocalStorage("arrNhanVien"); // data | null
  if (dataLocal) {
    arrNhanVien = dataLocal;
    renderDataNhanVien();
  }
};
// ------------ Local Storage ------------
function setLocalStorage(key, value) {
  let dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
}
function getLocalStorage(key) {
  let dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
}
// ------------Validation --------------
function getValueForm() {
  let arrField = document.querySelectorAll("#formQLNV input, #formQLNV select");
  let nhanVien = new NhanVien();
  let flag = true;
  for (let field of arrField) {
    let { value, id } = field;
    nhanVien[id] = value;
    let theThongBao = field.parentElement.querySelector("span");

    // console.log(theThongBao);
    let dataValue = field.getAttribute("data-validation");
    if (!checkEmptyValue(theThongBao, value)) {
      flag = false;
    } else if (
      dataValue == "minMax46" &&
      !checkMaxMinValue(theThongBao, value, 4, 6)
    ) {
      {
        flag = false;
      }
    } else if (dataValue == "tenNV" && !checkLetterValue(theThongBao, value)) {
      flag = false;
    } else if (dataValue == "email" && !checkEmailValue(theThongBao, value)) {
      flag = false;
    } else if (
      dataValue == "minMax610" &&
      (!checkMaxMinValue(theThongBao, value, 6, 10) ||
        !checkPassValue(theThongBao, value))
    ) {
      flag = false;
    } else if (dataValue == "date" && !checkDateValue(theThongBao, value)) {
      flag = false;
    } else if (dataValue == "luongCB" && !checkLuongValue(theThongBao, value)) {
      flag = false;
    } else if (
      dataValue == "chucvu" &&
      !checkPositionValue(theThongBao, value)
    ) {
      flag = false;
    } else if (dataValue == "gioLam" && !checkGioLamValue(theThongBao, value)) {
      flag = false;
    } else if (
      dataValue == "chucvu" &&
      !checkPositionValue(theThongBao, value)
    ) {
      flag = false;
    }
  }
  return flag ? nhanVien : null;
}
// --------------- Xóa nhân viên -----------------
function deleteNhanVien(tknv) {
  console.log(tknv);
  let index = arrNhanVien.findIndex((item, index) => item.tknv == tknv);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderDataNhanVien();
    setLocalStorage("arrNhanVien", arrNhanVien);
  }
}
// --------------- Sửa nhân viên ---------------
function getInFoNhanVien(tknv) {
  console.log(tknv);
  let nhanVien = arrNhanVien.find((item, index) => item.tknv == tknv);
  if (nhanVien) {
    let arrField = document.querySelectorAll("form input, form select");
    for (let field of arrField) {
      field.value = nhanVien[field.id];
      if (field.id == "tknv") {
        field.readOnly = true;
      }
    }
  }
}

// --------------- Cập nhật nhân viên ----------------
document.getElementById("btnCapNhat").onclick = function () {
  // console.log("hello")
  let nhanVien = getValueForm();
  if (nhanVien) {
    let index = arrNhanVien.findIndex(
      (item, index) => item.tknv == nhanVien.tknv
    );
    if (index != -1) {
      arrNhanVien[index] = nhanVien;
      renderDataNhanVien();
      setLocalStorage("arrNhanVien", arrNhanVien);
    }
  }
};
// --------------- Tìm kiếm nhân viên ---------------
document.getElementById("searchName").oninput = function (event) {
  let arrNhanVien2 = arrNhanVien.map((item) => {
    let newNhanVien = new NhanVien();
    Object.assign(newNhanVien, item);
    return newNhanVien;
  });
  let keyWord = event.target.value.trim().toLowerCase();
  let newKeyWord = removeVietnameseTones(keyWord);
  // console.log(newKeyWord);
  let arrSearch = arrNhanVien2.filter((item) => {
    let newXepLoaiNV = removeVietnameseTones(
      item.xepLoaiNV().trim().toLowerCase()
    );
    return newXepLoaiNV.includes(newKeyWord);
  });
  renderDataNhanVien(arrSearch);
};
