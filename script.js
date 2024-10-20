// Function to show the clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Africa/Nairobi' });
    document.getElementById('clock').innerText = timeString;
}
setInterval(updateClock, 1000);

// Function to check the PIN
function checkPin() {
    const userPin = document.getElementById('pinInput').value;
    if (userPin === '2005') {
        document.getElementById('exclusiveContent').style.display = 'block';
    } else {
        alert('Incorrect PIN. Please try again.');
    }
}