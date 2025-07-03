let currentQRUrl = ""; // Global variable to store the QR code URL

async function generateQR() {
    const text = document.getElementById('qrText').value.trim();
    const output = document.getElementById('qrBox');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!text) {
        output.innerHTML = "Enter valid text";
        downloadBtn.style.display = "none";
        return;
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    currentQRUrl = url;

    output.innerHTML = `<img id="qrImage" src="${url}" alt="QR Code" />`;
    downloadBtn.style.display = "inline-block";
}


function downloadQR() {
    const link = document.createElement('a');
    link.href = currentQRUrl;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
