
//====================================================================//

//Tìm số nguyên tố

function timSoNguyenTo() {
    var n = document.getElementById("txtSoNT").value;
    var soNT = "";
    for (i = 1; i <= n; i++) {
        kiemTraSoNT(i) && (soNT += " " + i);

    }
    document.getElementById("resultSoNT").innerHTML = soNT;

}

function kiemTraSoNT(n) {
    if (n <= 1) {
        return false;
    }
    for (soNT = 2; soNT <= Math.sqrt(n); soNT++) {

        if (n % soNT == 0) {

            return false;
        }
    }
    return true;


}
