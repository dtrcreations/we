document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    // Simulate an API call to download the MP3 (this is a placeholder)
    resultDiv.innerHTML = '<p>Downloading...</p>';

    setTimeout(() => {
        resultDiv.innerHTML = `<p>Download has been initiated. You can download the MP3 <a href="#" download>here</a>.</p>`;
    }, 2000);
});