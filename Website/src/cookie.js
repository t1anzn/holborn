
// Fake Cookies Script
// This script is for the cookies popup functionality, that uses local storage check for if a user has accepted or declined the cookies

// RESETTING 'COOKIES' INSTRUCTIONS
// Step 1. Head to developer console in your browser
// Step 2. Enter this command: localStorage.removeItem('cookieConsent')
// Step 3. Refresh page, and cookies popup should show again!

// Variables
const cookiePopup = document.getElementById("cookiePopup");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

// Check if the user has already accepted or declined cookies
const cookieConsent = localStorage.getItem('cookieConsent');

// Hide popup if there's a stored consent
if (cookieConsent === 'accepted' || cookieConsent === 'declined') {
    cookiePopup.style.display = "none";  // Hide the cookie popup
} else {
    document.body.classList.add("cookie-disabled");  // Disable interaction with the page
    cookiePopup.style.display = "flex";  // Show the cookie popup
}

// When user clicks "Accept"
acceptBtn.addEventListener("click", function () {
    cookiePopup.style.display = "none"; // Hide popup
    document.body.classList.remove("cookie-disabled");  // Enable interaction after acceptance
    localStorage.setItem('cookieConsent', 'accepted');  // Store the consent in localStorage
});

// When user clicks "Decline"
declineBtn.addEventListener("click", function () {
    cookiePopup.style.display = "none";
    document.body.classList.remove("cookie-disabled");  // Enable interaction after decline

    // Uncomment to enable one-time popup
    // Leave commented to keep pop-up after clicking decline
    // localStorage.setItem('cookieConsent', 'declined');  // Store the decision in localStorage
});


