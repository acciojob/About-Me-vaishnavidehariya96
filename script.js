// Your code here.
// Display a welcome message in console
console.log("Welcome to My Personal Profile Page!");

// Animate the skill bars when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".progress");
  
  skillBars.forEach((bar) => {
    const width = bar.style.width; // get predefined width (like 90%)
    bar.style.width = "0"; // reset to 0 initially
    setTimeout(() => {
      bar.style.transition = "width 1.5s ease-in-out";
      bar.style.width = width; // animate to actual width
    }, 300);
  });
});

// Simple popup message when clicking email
const emailLink = document.querySelector("a[href^='mailto:']");
if (emailLink) {
  emailLink.addEventListener("click", () => {
    alert("Opening your mail app to contact me!");
  });
}