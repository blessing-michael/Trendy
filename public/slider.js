// document.addEventListener("DOMContentLoaded", () => {

//   const slider = document.getElementById("slider");

//   if (!slider) return;

//   const products = window.trendingProducts || [];

//   products.forEach(product => {

//     const card = document.createElement("div");
//     card.classList.add("mini-card");

//     const img = `
//       <img src="${product.image}" alt="${product.name}" />
//     `;

//     card.innerHTML = `
//       ${img}
//       <p>${product.name}</p>
//       <span>₦${product.price}</span>
//     `;

//     slider.appendChild(card);
//   });

//   const nextBtn = document.querySelector(".next");
//   const prevBtn = document.querySelector(".prev");

//   const scrollAmount = 160;

//   nextBtn?.addEventListener("click", () => {
//     slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   });

//   prevBtn?.addEventListener("click", () => {
//     slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   });

// });

document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById("slider");

  if (!slider) return;

  // =========================
  // FRONTEND DATA (TRENDING)
  // =========================
  const trendingProducts = [
    { image: "/images/trend.jpg", name: "2-Piece Set", price: "₦48,000" },
    { image: "/images/trend-2-2.jpg", name: "Ruched Dress", price: "₦54,000" },
    { image: "/images/trend3.jpg", name: "Summer Set", price: "₦42,000" },
    { image: "/images/trend4.jpg", name: "Elegant Dress", price: "₦54,000" },
    { image: "/images/trend-5-5-5.jpg", name: "Chic Outfit", price: "₦50,000" },
    { image: "/images/trend6.jpg", name: "Lounge Set", price: "₦42,000" },
    { image: "/images/trend-7.jpg", name: "Casual Fit", price: "₦38,000" },
    { image: "/images/trend9.jpg", name: "Street Wear", price: "₦45,000" },
    { image: "/images/trend4.jpg", name: "Elegant Dress", price: "₦54,000" },
    { image: "/images/trend-5-5-5.jpg", name: "Chic Outfit", price: "₦50,000" },
    { image: "/images/trend6.jpg", name: "Lounge Set", price: "₦42,000" },
    { image: "/images/trend-7.jpg", name: "Casual Fit", price: "₦38,000" },
    { image: "/images/trend9.jpg", name: "Street Wear", price: "₦45,000" },
    { image: "/images/trend4.jpg", name: "Elegant Dress", price: "₦54,000" },
    { image: "/images/trend-5-5-5.jpg", name: "Chic Outfit", price: "₦50,000" },
    { image: "/images/trend6.jpg", name: "Lounge Set", price: "₦42,000" },
    { image: "/images/trend-7.jpg", name: "Casual Fit", price: "₦38,000" },
    { image: "/images/trend9.jpg", name: "Street Wear", price: "₦45,000" },
    { image: "/images/trend4.jpg", name: "Elegant Dress", price: "₦54,000" },
    { image: "/images/trend-5-5-5.jpg", name: "Chic Outfit", price: "₦50,000" },
    { image: "/images/trend6.jpg", name: "Lounge Set", price: "₦42,000" },
    { image: "/images/trend-7.jpg", name: "Casual Fit", price: "₦38,000" },
    { image: "/images/trend9.jpg", name: "Street Wear", price: "₦45,000" },
  ];

  // =========================
  // RENDER SLIDER
  // =========================
  trendingProducts.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("mini-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <p>${product.name}</p>
      <span>${product.price}</span>
    `;

    slider.appendChild(card);
  });

  // (optional future controls can go here)

});