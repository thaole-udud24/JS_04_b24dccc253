//Dinh nghia ham
function inthongtin(){
console.log("ho va ten : le thi thao");
}
inthongtin();
function tinhtong(a,b){
    return a + b ;
}
let a=8;
let b=0;
let c= tinhtong(a,b);
console.log("tong la : "  + c);
function tinhhieu(a,b){
    return a - b ;}
let s=tinhhieu(a,b);
console.log("hieu la : " +s);
function tinhtich(a,b){
    return a *b ;
}
let t=tinhtich(a,b);
console.log("tich la :" + t );
function tinhthuong(a,b){
    return a/b ;
}
let p=tinhthuong(a,b);
console.log("thuong la : " + p)
;
function dien_tich(n) { 
    return n*n;
}
console.log(dien_tich(5));
function chu_vi(n){
   return n*4; 
}
console.log(chu_vi(5));
function dien_tich_hinh_chu_nhat(a,b){
    return a*b;
}
var arrName = new Array(12,34,56,78,2,9,0);
alert(arrName[1]);
var arr_1 = new Array(7,2,1,4,6);
var arr_2 = new Array(9,2,8);
console.log(arr_1.concat(arr_2));
var arr_1 = new Array(5,1,3,9,2);
console.log(arr_1.sort());
var arr_1 = new Array(12,14,2,8,9,1,6);
arr_1.push(10,12);
console.log(arr_1);
