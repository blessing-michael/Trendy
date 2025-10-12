// Get today's date
const today = new Date();

// Add 14 days
const deliveryDate = new Date();
deliveryDate.setDate(today.getDate() + 14);

// Format date (e.g., "September 5, 2025")
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = deliveryDate.toLocaleDateString(undefined, options);

// Display in HTML
document.getElementById("delivery-date").textContent = formattedDate;