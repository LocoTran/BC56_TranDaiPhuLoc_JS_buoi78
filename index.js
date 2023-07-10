var arrNum = [];

document.querySelector("#addNum").onclick = function (event) {
  event.preventDefault();

  var num = document.querySelector("#number").value * 1;
  arrNum.push(num);

  document.querySelector("form.form-group").reset();

  document.querySelector(
    ".arrayNumbers"
  ).innerHTML = `Hiện trong mảng có các số: [${arrNum}]`;
};

//Bài 1
document.querySelector("#tinhTongCacSoDuong").onclick = function () {
  var tongDuong = 0;

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      tongDuong += arrNum[i];
    }
  }

  document.querySelector("#result_1").innerHTML = `
  <p>Tổng các số dương trong dãy số là : ${tongDuong}</p>`;
};

//Bài 2
document.querySelector("#demCacSoDuong").onclick = function () {
  var demSoDuong = 0;

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      demSoDuong++;
    }
  }

  document.querySelector(
    "#result_2"
  ).innerHTML = `<p>Có ${demSoDuong} số dương trong dãy số</p>`;
};

//Bài 3
document.querySelector("#timSoNhoNhat").onclick = function () {
  var soNhoNhat = arrNum[0];

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < soNhoNhat) {
      soNhoNhat = arrNum[i];
    }
  }

  document.querySelector("#result_3").innerHTML = `
    <p>Số nhỏ nhất trong mảng là: ${soNhoNhat}</p>`;
};

//Bài 4
document.querySelector("#timSoDuongNhoNhat").onclick = function () {
  var soDuongNhoNhat = arrNum[0];

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < soDuongNhoNhat && arrNum[i] > 0) {
      soDuongNhoNhat = arrNum[i];
    }
  }

  if (soDuongNhoNhat >= 0) {
    document.querySelector(
      "#result_4"
    ).innerHTML = `<p>Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}</p>`;
  } else {
    document.querySelector(
      "#result_4"
    ).innerHTML = `<p>Trong dãy ko có số dương</p>`;
  }
};

// Bài 5
document.querySelector("#timSoChanCuoiCung").onclick = function () {
  var soChanCuoiCung = -1;

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[0] % 2 == 0) {
      soChanCuoiCung = arrNum[0];
    }
  }

  if (soChanCuoiCung % 2 == 0) {
    document.querySelector("#result_5").innerHTML = `
        <p>Số chẵn cuỗi cùng trong mảng là: ${soChanCuoiCung}</p>`;
  } else {
    document.querySelector("#result_5").innerHTML = `
      <p>${soChanCuoiCung} do trong mảng ko có số chẵn</p>`;
  }
};

// Bài 6
document.querySelector("#doiCho2So").onclick = function () {
  var viTri1 = document.querySelector("#index-01").value * 1;
  var viTri2 = document.querySelector("#index-02").value * 1;

  var soThu1 = arrNum[viTri1];

  arrNum[viTri1] = arrNum[viTri2];
  arrNum[viTri2] = soThu1;

  document.querySelector("#result_6").innerHTML = `
  <p>Mảng số sau khi đổi là: [${arrNum}] </p>`;
};

//Bài 7
document.querySelector("#sapXepTangDan").onclick = function () {
  arrNum.sort();
  document.querySelector("#result_7").innerHTML = `
  <p>Dãy số theo thứ tự tăng dần: [${arrNum}]</p>`;
};

//Bài 8
function xacDinhSoNguyenTo(a) {
  var dem = 0;
  if (a < 2) {
    return false; //Ko phải số nguyên tố
  } else {
    for (var p = 2; p <= a; p++) {
      if (a % p == 0) {
        dem++;
      }
    }
    if (dem == 1) {
      return true; //Là Số nguyên tố
    } else {
      return false; //Ko phải số nguyên tố
    }
  }
}

document.querySelector("#timSoNguyenToDauTien").onclick = function () {
  for (i = 0; i < arrNum.length; i++) {
    var sNT = xacDinhSoNguyenTo(arrNum[i]);
    if (sNT) {
      return (document.querySelector("#result_8").innerHTML = `
      <p>Số nguyên tố đầu tiên trong mảng là: ${arrNum[i]}</p>`);
    } else if (i == arrNum.length - 1) {
      document.querySelector("#result_8").innerHTML = `
      <p>-1 do trong mảng ko có số nguyên tố</p>`;
    }
  }
};

//Bài 9
var arrNumNew = [];
var arrNumAll = [];

document.querySelector("#addNumNew").onclick = function (event) {
  event.preventDefault();

  var numNew = document.querySelector("#numberNew").value * 1;
  arrNumNew.push(numNew);

  document.querySelector("form.form-group#arrNew").reset();

  arrNumAll = arrNum.concat(arrNumNew);
  document.querySelector(
    ".arrayNumbersNew"
  ).innerHTML = `Hiện trong mảng mới sau khi gộp có các số: [${arrNumAll}]`;
};

document.querySelector("#demSoNguyen").onclick = function () {
  var demSoNguyen = 0;

  for (var i = 0; i < arrNumAll.length; i++) {
    if (Number.isInteger(arrNumAll[i])) {
      demSoNguyen++;
    }
  }

  document.querySelector("#result_9").innerHTML = `
  <p>Trong dãy số sau khi gộp có ${demSoNguyen} số nguyên</p>`;
};

//Bài 10
function dayLaSoGi(a) {
  if (a === 0) {
    return 0;
  } else if (a > 0) {
    return true; //Số Dương
  } else {
    return false; //Số Âm
  }
}

document.querySelector("#soSanhAmDuong").onclick = function () {
  var demSoDuong = 0;
  var demSoAm = 0;

  for (var i = 0; i < arrNumAll.length; i++) {
    if (dayLaSoGi(arrNumAll[i]) === true) {
      demSoDuong++;
    } else if (dayLaSoGi(arrNumAll[i]) === false) {
      demSoAm++;
    }
  }

  if (demSoAm === demSoDuong) {
    document.querySelector("#result_10").innerHTML = `
    <p>Trong dãy số mới số lượng số âm và số lượng số dương bằng nhau đều là ${demSoAm}</p>`;
  } else if (demSoAm < demSoDuong) {
    document.querySelector("#result_10").innerHTML = `
    <p>Trong dãy số mới số lượng số âm là ${demSoAm} nhỏ hơn số lượng số dương là ${demSoDuong}</p>`;
  } else {
    document.querySelector("#result_10").innerHTML = `
    <p>Trong dãy số mới số lượng số âm là ${demSoAm} lớn hơn số lượng số dương là ${demSoDuong}</p>`;
  }
};
