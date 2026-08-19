// EST-Clock
function UpdateClock() {
    const Clock = document.getElementById("EST-Clock");
    const TimeString = new Date().toLocaleTimeString('en-US',{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/New_York"
    });

    Clock.textContent = TimeString;
}

UpdateClock()
setInterval(UpdateClock,1000)