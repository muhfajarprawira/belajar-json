// JSON.stringify = object ke json
// let mahasiswa = {
// 	nama: "Muhammad Fajar Prawira",
// 	nim: "9849897114773",
// 	email: "fajar@gmail.com"
// }
// console.log(JSON.stringify(mahasiswa));

// JSON ke Object menggunakan ajax, (JSON.parse())
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		let mahasiswa = JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// Menggunakan JQuery
$.getJSON('coba.json', function (data) {
	console.log(data);
});