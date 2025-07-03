document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
    let data = document.getElementById("txt").value;
    document.getElementById("qr-code").innerHTML = "";

    new QRCode(document.getElementById("qr-code"),{
        text : data,
        width : 150,
        height : 150,
        colorDark : "#f90000",
        colorLight : "#ffffff",
    });

    document.getElementById("qr-code").style.border = "2px solid black";
})