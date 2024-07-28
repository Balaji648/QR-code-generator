document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateBtn').addEventListener('click', function() {
        var url = document.getElementById('urlInput').value;
        if (url) {
            var qrcodeContainer = document.getElementById('qrcode-container');
            var qrcodeElement = document.getElementById('qrcode');
            
            // Generate QR code
            qrcodeElement.innerHTML = ""; // Clear previous QR code
            var qrcode = new QRCode(qrcodeElement, {
                text: url,
                width: 256,
                height: 256,
            });

            // Show the QR code container
            qrcodeContainer.style.display = 'block';

            // Display the download button
            document.getElementById('downloadBtn').style.display = 'inline-block';
        } else {
            alert("Please enter a URL");
        }
    });

    document.getElementById('downloadBtn').addEventListener('click', function() {
        var canvas = document.querySelector('#qrcode canvas');
        if (canvas) {
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.href = image;
            link.download = 'qrcode.png';
            link.click();
        } else {
            alert("Generate a QR code first");
        }
    });
});
