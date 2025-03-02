
// Hamburger Menu Script
// This script is for the mobile menu functionality, using a side navbar in a column layout for smaller screen widths.

document.addEventListener("DOMContentLoaded", () => {

  // Variables
  const hamburger = document.getElementById("hamburger");
  const navContent = document.getElementById("navContent");

  // Activate column navbar when Hamburger menu is clicked
  hamburger.addEventListener("click", () => {
    navContent.classList.toggle("active");
    document.body.classList.toggle('menu-active');
  });
});