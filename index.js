//BÀI 1: TÍNH KẾT QUẢ THI
function tinhKetQua() {
    var diemchuan = document.getElementById("diem-chuan").value*1;
    var diemKhuVuc = document.getElementById("khu-vuc").value*1;
    var diemDoiTuong = document.getElementById("doi-tuong").value*1;
    var diemMon1 = document.getElementById("mon-thu-1").value*1;
    var diemMon2 = document.getElementById("mon-thu-2").value*1;
    var diemMon3 = document.getElementById("mon-thu-3").value*1;
    var ketqua = diemMon1+diemMon2+diemMon3+diemKhuVuc+diemDoiTuong;
    if (diemMon1 <=0 || diemMon2 <= 0 || diemMon3 <= 0) {
        document.getElementById("ket-qua-thi").innerHTML = `<h2 class="text-danger"> Bạn đã rớt. Do có điểm thi bằng 0</h2>`
    } else if (ketqua < diemchuan && diemMon1 >0 && diemMon2 >0 && diemMon3>0) {
        document.getElementById("ket-qua-thi").innerHTML = `<h2 class="text-danger"> Bạn đã rớt. Tổng điểm $${ketqua} - không đủ điểm chuẩn</h2>`
    } if (ketqua >= diemchuan && diemMon1 >0 && diemMon2 >0 && diemMon3>0 ) {
        document.getElementById("ket-qua-thi").innerHTML = `<h2 class="text-success"> Bạn đã đậu. Tổng điểm $${ketqua}</h2>`
    } 
}
// BÀI 2: TÍNH TIỀN ĐIỆN
function tinhTienDien() {
    var hoTen = document.getElementById("ho-ten").value;
    var dienTieuthu = document.getElementById("dien-tieu-thu").value*1;
    var tiendien = 0;
    if (dienTieuthu<=50) {
        tiendien = dienTieuthu * 500;
    } else if (dienTieuthu>50 && dienTieuthu<=100) {
        tiendien = 50*500 + (dienTieuthu-50)*650;
    } else if (dienTieuthu>100 && dienTieuthu<=200) {
        tiendien = 50*500 + 50*650 + (dienTieuthu-100)*850
    } else if (dienTieuthu>200 && dienTieuthu<=350) {
        tiendien = 50*500 + 50*650 + 100*850 + (dienTieuthu-200)*1100
    } else if (dienTieuthu>350) {
        tiendien = 50*500 + 50*650 + 100*850 + 150*1100 + (dienTieuthu-350)*1300
    }
    document.getElementById("tien-dien").innerHTML = `<h2 class="text-success">Tiền điện của anh/chị <mark>`+hoTen+`</mark> là: ${tiendien.toLocaleString()} VNĐ</h2>`
}
//BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN 
function tinhThue () {
    var hoTenThue = document.getElementById("ho-ten-thue").value;
    var thuNhap = document.getElementById("thu-nhap-nam").value*1;
    var soNguoi = document.getElementById("so-nguoi-phu-thuoc").value*1;
    var thuNhapChiuThue = thuNhap - 4e6 - soNguoi * 1.6e6 ;
    var tienThue = 0;
    if (thuNhapChiuThue > 960e6) {
        tienThue = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + 240e6 * 0.25 + 336e6* 0.3 + (thuNhapChiuThue-960e6)*0.35;
    } else if (thuNhapChiuThue > 624e6) {
        tienThue = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + 240e6 * 0.25 + (thuNhapChiuThue-624e6)*0.3;
    } else if (thuNhapChiuThue > 384e6) {
        tienThue = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + 174e6 * 0.2 + (thuNhapChiuThue-384e6)*0.25;
    } else if (thuNhapChiuThue > 210e6) {
        tienThue = 60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue-210e6)*0.2;
    } else if (thuNhapChiuThue > 120e6) {
        tienThue = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue-120e6)*0.15;
    } else if (thuNhapChiuThue > 60e6) {
        tienThue = 60e6 * 0.05 + (thuNhapChiuThue-60e6)*0.1;
    } else if (thuNhapChiuThue <= 60e6) {
        tienThue = thuNhapChiuThue*0.05;
    } 


    if (thuNhapChiuThue > 960e6) {
        tienThueDemo = thuNhapChiuThue*0.35;
    } else if (thuNhapChiuThue > 624e6) {
        tienThueDemo = thuNhapChiuThue*0.3;
    } else if (thuNhapChiuThue > 384e6) {
        tienThueDemo = thuNhapChiuThue*0.25;
    } else if (thuNhapChiuThue > 210e6) {
        tienThueDemo = thuNhapChiuThue*0.2;
    } else if (thuNhapChiuThue > 120e6) {
        tienThueDemo = thuNhapChiuThue*0.15;
    } else if (thuNhapChiuThue > 60e6) {
        tienThueDemo = thuNhapChiuThue*0.1;
    } else if (thuNhapChiuThue <= 60e6) {
        tienThueDemo = thuNhapChiuThue*0.05;
    } 

    if (tienThue>=0) {
        document.getElementById("tien-thue").innerHTML = `<h2 class="text-success"> Tiền thuế của anh/chị <mark>`+hoTenThue+`</mark> là: ${tienThue.toLocaleString()} VNĐ <br> (Tính theo Demo: ${tienThueDemo.toLocaleString()} VNĐ)</h2>`
    } else {
        document.getElementById("tien-thue").innerHTML = `<h2 class="text-danger"> Thu nhập không hợp lệ</h2>`
    }

}





//BÀI 4: TÍNH TIỀN CÁP
function soketnoi() {
    var loaiKhachHang = document.getElementById("loai-khach-hang").value;
    if (loaiKhachHang == "doanhnghiep") {
        document.getElementById("from-ket-noi").style.display = "block"
    } else (
        document.getElementById("from-ket-noi").style.display = "none"
    )
}
function tinhPhiHoaDon (loai) {
    var giaTien;
    if (loai == "nhadan") {
        giaTien = 4.5;
        return giaTien;
    }
    if (loai == "doanhnghiep") {
        giaTien = 15;
        return giaTien;
    }
}
function tinhPhiDichVu (loai) {
    var giaTien;
    if (loai == "nhadan") {
        giaTien = 20.5;
        return giaTien;
    }
    if (loai == "doanhnghiep") {
        giaTien = 75;
        return giaTien;
    }
}
function tinhPhiCaoCap (loai) {
    var giaTien
    if (loai == "nhadan") {
        giaTien = 7.5;
        return giaTien;
    }
    if (loai == "doanhnghiep") {
        giaTien = 50;
        return giaTien;
    }
}

function tinhTienCap() {
    var loaiKhachHang = document.getElementById("loai-khach-hang").value;
    var soCaoCap = document.getElementById("kenh-cao-cap").value*1;
    var soKetNoi = document.getElementById("so-ket-noi").value*1;
    var phiHoaDon = tinhPhiHoaDon (loaiKhachHang);
    var phiDichVu = tinhPhiDichVu (loaiKhachHang);
    var phiCaoCap = tinhPhiCaoCap (loaiKhachHang);
    console.log({loaiKhachHang,phiHoaDon,phiDichVu,phiCaoCap});
    if (loaiKhachHang == "nhadan") {
        var tienCap = phiHoaDon + phiDichVu + phiCaoCap*soCaoCap;
    } else if (loaiKhachHang="doanhnghiep" && soKetNoi <= 10) {
        var tienCap = phiHoaDon + phiDichVu + phiCaoCap*soCaoCap;
    } else if (loaiKhachHang="doanhnghiep" && soKetNoi > 10) {
        var tienCap = phiHoaDon + phiDichVu + phiCaoCap*soCaoCap +(soKetNoi-10)*5;
    }
    document.getElementById("tien-cap").innerHTML = `<h2 class="text-success"> Số tiền cáp phải trả: ${tienCap.toLocaleString()}$</h2>`
}
