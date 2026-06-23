

document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById("slider");

  if (!slider) return;

  // =========================
  // FRONTEND DATA (TRENDING)
  // =========================
  const trendingProducts = [
      {
    type: "image",
    image: "/images/td447.jpeg",
    name: "2-Piece Set",
    price: "₦48,000"
  },
      {
    type: "image",
    image: "/images/td-444.jpeg",
    name: "2-Piece Set",
    price: "₦48,000"
  },

    { image: "/images/trend.jpg", name: "2-Piece Set", price: "₦48,000" },
    { image: "/images/trend-2-2.jpg", name: "Ruched Dress", price: "₦54,000" },
        {
    type: "video",preload="auto",
    video: "/images/trend-vid1.mp4",
    name: "New Collection",
    price: "Watch Now"
  },
    { image: "/images/trend3.jpg", name: "Summer Set", price: "₦42,000" },
    { image: "/images/td399.jpg", name: "Summer Set", price: "₦28,500" },
           {
    type: "video",
    video: "/images/trend-vid2.mp4",
    name: "New Collection",
    price: "Watch Now"
  },
    { image: "/images/trend4.jpg", name: "Elegant Dress", price: "₦54,000" },
    { image: "/images/trend-5-5-5.jpg", name: "Chic Outfit", price: "₦50,000" },
           {
    type: "video",
    video: "/images/trend-vid3.mp4",
    name: "New Collection",
    price: "Watch Now"
  },
    { image: "/images/trend6.jpg", name: "Lounge Set", price: "₦42,000" },
    { image: "/images/trend-7.jpg", name: "Casual Fit", price: "₦38,000" },
         {
    type: "video",
    video: "/images/trend-vid4.mp4",
    name: "New Collection",
    price: "Watch Now"
  },
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

    // card.innerHTML = `
    //   <img src="${product.image}" alt="${product.name}" />
    //   <p>${product.name}</p>
    //   <span>${product.price}</span>
    // `;
    if (product.type === "video") {

  card.innerHTML = `
    <video autoplay muted loop playsinline>
      <source src="${product.video}" type="video/mp4">
    </video>
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;

} else {

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <p>${product.name}</p>
    <span>${product.price}</span>
  `;

}

    slider.appendChild(card);
  });

  // (optional future controls can go here)
  // sliding card// =========================
// SLIDER CONTROLS
// =========================
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 320;

nextBtn?.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});

prevBtn?.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

// =========================
// AUTO SLIDE
// =========================
let autoSlide = setInterval(() => {

  // reset to beginning
  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 5
  ) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });

  } else {

    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });

  }

}, 3000);

// pause on hover
slider.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

// resume
slider.addEventListener("mouseleave", () => {

  autoSlide = setInterval(() => {

    if (
      slider.scrollLeft + slider.clientWidth >=
      slider.scrollWidth - 5
    ) {

      slider.scrollTo({
        left: 0,
        behavior: "smooth"
      });

    } else {

      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });

    }

  }, 3000);

});

});