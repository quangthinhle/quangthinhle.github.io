// //Math: la 1 doi tuong xu ly ham toan hoc

// var z=Math.floor(4.9999);//ham lam tron xuong
// var n=Math.ceil(4.000001);//ham lam tron len
// var r=Math.round(4.5);//ham lam tron len xuong, ex: 4.4-->4 4.5--->5
// var x=Math.pow(2,3);//pow la ham mu, vi du o day la 2 mu 3
// var c=Math.sqrt(16,2);//lay can bac 2 cua 16 = 4
// var ra=Math.random()*10;//ham sinh so ngau nhien tu 0 toi 1, muon thu 1 toi 10 thi x10 len console.log(n);
// var ro=Math.round(Math.random()*10);
// console.log(z);
// console.log(x);
// console.log(c);
// console.log(ra);
// console.log(ro);
// //cac hang so
// console.log(Math.PI);
// ///function
// function dienTichHinhChuNhat(ChieuDai,ChieuRong){
// 	DienTich=ChieuDai*ChieuRong;
// 	return DienTich;
// }
// console.log(dienTichHinhChuNhat(6,7));
// //////////////
// function caoHonToi(chieuCao){
// 	return chieuCao>165;
// }

// console.log(caoHonToi(153));

/////////////////
var myObj = [
	"Richard", 
	"Developer",
]; 
myObj.forEach(function(name){
	console.log(name);
})