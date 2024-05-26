function calculateRemainingTime() {
    const birthday = new Date('1997-08-18');
    const now = new Date();
    const sixtyBirthday = new Date(birthday.getFullYear() + 60, birthday.getMonth(), birthday.getDate());
    const remainingTime = sixtyBirthday - now;
    const totalSeconds = Math.floor(remainingTime / 1000);
    return totalSeconds;
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateTotalSeconds() {
    const totalSecondsElement = document.getElementById('total-seconds');
    const mantraMessageElement = document.getElementById('mantra-message');
    
    const totalSeconds = calculateRemainingTime();

    if (totalSeconds >= 0) {
        totalSecondsElement.innerHTML = `${formatNumberWithCommas(totalSeconds)} <span class="green-text">Seconds left</span>`;
        mantraMessageElement.innerHTML = `Please chant the Guru Mantra<br>Let's get back to the lotus feet of the Srimati RadhaRani`;
    } else {
        totalSecondsElement.innerHTML = `<span class="green-text">Time's up!</span>`;
        mantraMessageElement.innerHTML = `It's time to reflect and meditate.`;
    }
}

// Initial update
updateTotalSeconds();

// Update total seconds display every second
setInterval(updateTotalSeconds, 1000);
