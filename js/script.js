const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrcodeInput = document.querySelector("#qr-form input")
const qrcodeImg = document.querySelector("#qr-code img")
// Eventos

// Gerar qr code
function generateQrcode() {
 
    const qrcodeInputvalue = qrcodeInput.value;

    if(!qrcodeInputvalue) return;

    qrCodeBtn.innerText = "gerando código...";

    qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputvalue}`;
    qrcodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código gerado!";
    })

}
qrCodeBtn.addEventListener("click", () => {
    generateQrcode();
});

qrcodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter")
    generateQrcode();
});

// Limpar area

qrcodeInput.addEventListener("keyup", () => {
    if(!qrcodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR code";
    }
})