class NhanVien {
  tknv = "";
  hoTen = "";
  email = "";
  password = "";
  datepicker = "";
  luongCB = "";
  chucvu = "";
  gioLam = "";
  tongLuong = function tbLuongCB() {
    let heSo = 1;
    if (this.chucvu === "Sếp") {
      heSo = 3;
      return this.luongCB * 1 * (this.gioLam * 1) * heSo;
    } else if (this.chucvu === "Trưởng phòng") {
      heSo = 2;
      return this.luongCB * 1 * (this.gioLam * 1) * heSo;
    } else {
      return this.luongCB * 1 * (this.gioLam * 1);
    }
  };
  xepLoaiNV = function xepLoai() {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (176 <= this.gioLam && this.gioLam < 192) {
      return "Nhân viên giỏi";
    } else if (160 <= this.gioLam && this.gioLam < 176) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
