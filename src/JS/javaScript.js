const switchElement = document.querySelector('.switch input');

function toggleSwitch() {
    const now = new Date();
    const hour = now.getHours();

    // Adjust these times as needed
    const morningStart = 6;
    const nightStart = 18;

    if (hour >= morningStart && hour < nightStart) {
        switchElement.checked = true;
    } else {
        switchElement.checked = false;
    }
}

// Initial toggle
toggleSwitch();

// Check every hour
setInterval(toggleSwitch, 3600000);