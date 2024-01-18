var arrSoN =[]

function themSoNVaoMang(){
    var soN = document.getElementById('txt-soN').value*1
    arrSoN.push(soN)
    console.log(arrSoN)
    document.getElementById('btnThemSoN').innerHTML = arrSoN
}
document.querySelector('.btn-success').onclick= themSoNVaoMang
// Bài 1
function tinhTongSoDuong(){
    var tong = 0
    for(var i=0;i < arrSoN.length;i++){
        if(arrSoN[i]>=0){
            tong += arrSoN[i]
        }
    }
    document.getElementById('ketQuaBai1').innerHTML= tong
}
document.querySelector('.btnKetQuaBai1').onclick = tinhTongSoDuong

//Bài 2
function DemSoDuong(){
    var count = 0
    for(var i=0;i < arrSoN.length;i++){
        if(arrSoN[i]>=0){
            count++
        }
    }
    document.getElementById('ketQuaBai2').innerHTML= count
}
document.querySelector('.btnKetQuaBai2').onclick = DemSoDuong

//Bài 3
function TimSoNhoNhat(){
    var min =arrSoN[0]
    for(var i=1;i < arrSoN.length;i++){
        if(arrSoN[i]<min){
            min = arrSoN[i]
        }
    }
    document.getElementById('ketQuaBai3').innerHTML= min
}
document.querySelector('.btnKetQuaBai3').onclick = TimSoNhoNhat

//Bài 4
function TimSoDuongNhoNhat(){
    var minDuong = arrSoN[0]
    for(var i=1;i < arrSoN.length;i++){
        if(arrSoN[i]<minDuong && arrSoN[i]>0){
            minDuong = arrSoN[i]
        }
    }
    document.getElementById('ketQuaBai4').innerHTML= minDuong
}
document.querySelector('.btnKetQuaBai4').onclick = TimSoDuongNhoNhat

//Bài 5
function timSoChanCuoiCung(){
    var soChan = -1
    for(var i= arrSoN.length-1;i>=0;i--){
        if(arrSoN[i]%2==0){
            soChan = arrSoN[i]
            break
        }
    }
    document.getElementById('ketQuaBai5').innerHTML= soChan
}
document.querySelector('.btnKetQuaBai5').onclick = timSoChanCuoiCung

//Bài 6
function doiCho() {
    var viTriSo1 = document.getElementById('txt-viTriSo1').value*1
    var viTriSo2 = document.getElementById('txt-viTriSo2').value*1

    var mangMoi = arrSoN[viTriSo1];
    arrSoN[viTriSo1] = arrSoN[viTriSo2];
    arrSoN[viTriSo2] = mangMoi;
    
    document.getElementById('ketQuaBai6').innerHTML= arrSoN
}
document.querySelector('.btnKetQuaBai6').onclick = doiCho

//Bài 7
document.querySelector('.btnKetQuaBai7').onclick = function(){
    document.getElementById('ketQuaBai7').innerHTML= arrSoN.sort(function(a,b){
        return a-b
    })
}

//Bài 8
//Khi đếm số ước của số n trong đoạn từ 2 đến căn bậc hai của n mà số đó không có ước nào trong đoạn này thì nó là số nguyên tố
function soNguyenTo(n) {
    if (n < 2 || n%1>0) {
        return false
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
function timSoNguyenToDauTien() {
    for (var i = 0; i < arrSoN.length; i++) {
        if (soNguyenTo(arrSoN[i])) {
           return document.getElementById('ketQuaBai8').innerHTML = arrSoN[i]
        }
    }
    document.getElementById('ketQuaBai8').innerHTML = -1
}
document.querySelector('.btnKetQuaBai8').onclick = timSoNguyenToDauTien

//Bài 9
var arrSoMoi =[]
var arrMangMoi = []
function themSoMoi(){
    var soN = document.getElementById('txt-themSoNMoi').value*1
    arrSoMoi.push(soN)
    console.log(arrSoMoi)
    document.getElementById('SoMoiBai9').innerHTML = arrSoMoi
    arrMangMoi = arrSoN.concat(arrSoMoi)
    document.getElementById('MangMoiBai9').innerHTML = arrMangMoi
}
document.querySelector('.btnThemSoBai9').onclick= themSoMoi
function DemSoNguyen(){
    var count = 0
    for(var i=0;i < arrMangMoi.length;i++){
        if(Number.isInteger(arrMangMoi[i])){
            count++
        }
    }
    document.getElementById('ketQuaBai9').innerHTML= count
}
document.querySelector('.btnKetQuaBai9').onclick = DemSoNguyen

//Bài 10
function soSanhSoDuongVaAm() {
    var countDuong = 0
    var countAm = 0
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] > 0) {
            countDuong++
        } else{
            countAm++
        }
        console.log(countAm, countDuong)
    }
    if(countDuong > countAm){
        document.getElementById('ketQuaBai10').innerHTML = `Số dương > Số âm (${countDuong} > ${countAm})` 
    }else if(countDuong < countAm){
        document.getElementById('ketQuaBai10').innerHTML = `Số dương < Số âm (${countDuong} < ${countAm})` 
    }else{
        document.getElementById('ketQuaBai10').innerHTML = `Số dương = Số âm (${countDuong} = ${countAm})`
    }
}
document.querySelector('.btnKetQuaBai10').onclick = soSanhSoDuongVaAm