document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault();
    let data = document.getElementById("txt").value;

    if(data === ""){
        alert("Please enter some text to generate QR code");
    }else{
        new QRCode(document.getElementById("qr-code"),{
            text : data,
            width : 150,
            height : 150,
            colorDark : "#f90000",
            colorLight : "#ffffff",
        });
    
        document.getElementById("qr-code").style.border = "2px solid black";
        document.getElementById("qr-download").style.display = "block";
    }

    document.getElementById("qr-download").addEventListener("click",function(){
        let qrImg = document.querySelector("#qr-code img");
        let link = document.createElement("a");
        link.href = qrImg.src;
        link.download = `${data}.png`;
        link.click();
    })
})

