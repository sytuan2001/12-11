console.log('Happy developing ✨')
// let year = parseInt(prompt("Enter a year"));
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + " is a leap year");
//         } else {
//             alert(year + " is NOT a leap year");
//         }
//     } else {
//         alert(year + " is a leap year");
//     }
// } else {
//     alert(year + " is NOT a leap year");
// }
function kiemTraNamNhuan() {
    let nam = parseInt(document.getElementById('nam').value);
    let namNhuan = false;
    if (nam %4 == 0 && nam %100 !=0) {
        namNhuan = true;
    }
    if (nam % 100 == 0 && nam % 400 == 0) {
        namNhuan = true;
    }
    if (namNhuan) {
        document.getElementById('ketqua').innerHTML = nam + "là năm nhuận";
    } else {
        document.getElementById('ketqua').innerHTML = nam + "không phải năm nhuận";
    }
}