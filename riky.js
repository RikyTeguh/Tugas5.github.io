//Nomer 1
function riky(){
    var a = document.kirim.a1.value
    if(a >= 0 && 40){
        document.kirim.a2.value="E"
    }
    if(a > 40 && 55){
        document.kirim.a2.value="D"
    }
    if(a > 55 && 60){
        document.kirim.a2.value="C"
    }
    if(a > 60 && 65){
        document.kirim.a2.value="BC"
    }
    if(a > 65 && 70){
        document.kirim.a2.value="B"
    }
    if(a > 70 && 80){
        document.kirim.a2.value="AB"
    }
    if(a > 80 && 100){
        document.kirim.a2.value="A"
    }
}


//Nomer 2
function kali(){
    num1 = document.getElementById("b1").value;
    num2 = document.getElementById("b2").value;
    document.getElementById("jumlah").innerHTML = num1 * num2;
}
function bagi(){
    num1 = document.getElementById("b1").value;
    num2 = document.getElementById("b2").value;
    document.getElementById("jumlah").innerHTML = num1 / num2;
}
function tambah(){
    num1 = document.getElementById("b1").value;
    num2 = document.getElementById("b2").value;
    document.getElementById("jumlah").innerHTML = (parseInt(num1) + parseInt(num2));
}
function kurang(){
    num1 = document.getElementById("b1").value;
    num2 = document.getElementById("b2").value;
    document.getElementById("jumlah").innerHTML = num1 - num2;
}