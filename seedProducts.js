


  require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

const seed = async () => {

  try {

    console.log("Seeding started...");

    await Product.deleteMany({});

    await Product.insertMany([

      {
        name: "Black opal",

        category: "classy",

        image: "/images/cloth-black-opal2.png",

        images: [
          "/images/cloth-black-opal.png",
        ],

        description: "Elegant for classy outings.",

        price: 89500,

        singlePrice: 97500,
        groupPrice: 90000,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["blouse", "fashion", "women"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],

        colors: ["Black"]
      },

      {
        name: "Midnight Muse",

        category: "classy",

        image: "/images/cloth-Midnight Muse.png",

        images: [
          "/images/cloth-Midnight Muse-2.png",
        ],

        description: "classy outfit.",

        price: 89500,

        singlePrice: 0,
        groupPrice: 89500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Blue", "Peach", "Red", "Brown"]
      },

      {
        name: "black stones",

        category: "classy",

        image: "/images/cloth-black-stones.png",

        images: [
          "/images/cloth-black-stone.png",
        ],

        description: "classy outfit.",

        price: 86500,

        singlePrice: 0,
        groupPrice: 86500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Blue", "Pink", "Black", "Brown", "White"]
      },

      {
        name: "elegant-olive",

        category: "classy",

        image: "/images/cloth-elegant-olive.png",

        images: [
          "/images/cloth-elegant-olive2.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Olive", "Pink", "Black", "Brown"]
      },

      {
        name: "Opal Elegance",

        category: "classy",

        image: "/images/cloth-Opal Elegance.png",

        images: [
          "/images/cloth-Opal Elegance2.png",
        ],

        description: "classy outfit.",

        price: 81500,

        singlePrice: 89500,
        groupPrice: 81500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],

        colors: ["Wine", "Black"]
      },

      {
        name: "Pure Allure",

        category: "classy",

        image: "/images/cloth-Pure Allure.png",

        images: [
          "/images/cloth-Pure Allure.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],

        colors: ["Green"]
      },

      {
        name: "classy black suit",

        category: "classy",

        image: "/images/cloth-classyblacksuit.png",

        images: [
          "/images/cloth-classyblacksuit.png",
        ],

        description: "classy outfit.",

        price: 83500,

        singlePrice: 90500,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],

        colors: ["Black"]
      },

      {
        name: "peach vine",

        category: "classy",

        image: "/images/cloth-peach-vine.jpeg",

        images: [
          "/images/cloth-peach-vine2.jpeg",
        ],

        description: "classy outfit.",

        price: 77500,

        singlePrice: 0,
        groupPrice: 77500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["peach"]
      },

      {
        name: "pure wine",

        category: "classy",

        image: "/images/cloth-pure-wine.png",

        images: [
          "/images/cloth-pure-wine2.jpg",
        ],

        description: "classy outfit.",

        price: 83500,

        singlePrice: 90500,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],

        colors: ["Black", "Wine"]
      },

      {
        name: "buzzling red set",

        category: "classy",

        image: "/images/cloth-buzzling-red-set.png",

        images: [
          "/images/cloth-buzzling-red-set2.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "Red"]
      },

      {
        name: "black flare",

        category: "classy",

        image: "/images/baby-1.png",

        images: [
          "/images/baby-1.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },

      {
        name: "Sapphire Charm",

        category: "classy",

        image: "/images/cloth-Sapphire Charm.png",

        images: [
          "/images/cloth-Sapphire Charm.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "White"]
      },

      {
        name: "scarlet grace",

        category: "classy",

        image: "/images/cloth-scarlet grace.png",

        images: [
        "/images/cloth-scarlet grace.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["38", "40", "42", "44", "46", "48", "50"],


        colors: ["Black", "White"]
      },

      {
        name: "Urban Duchess",

        category: "classy",

        image: "/images/cloth-Urban Duchess.png",

        images: [
       "/images/cloth-urbanduch.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },

      {
        name: "pink stone",

        category: "classy",

        image: "/images/cloth-pinkstoned.png",

        images: [
          "/images/cloth-pinkstone2.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "White","yellow", "purple"]
      },

      {
        name: "blue stone",

        category: "classy",

        image: "/images/cloth-blue-stoned.png",

        images: [
          "/images/cloth-blue-stoned.png",
        ],

        description: "classy outfit.",

        price: 89500,

        singlePrice: 0,
        groupPrice: 89500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Blue"]
      },

      {
        name: "Belle Noir",

        category: "classy",

        image: "/images/cloth-Belle Noir.png",

        images: [
          "/images/cloth-Belle Noir2.png",
          "/images/cloth-Belle Noir3.png",
        ],

        description: "classy outfit.",

        price: 89500,

        singlePrice: 0,
        groupPrice: 89500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "White","brown","blue"]
      },

      {
        name: "Signature Glow",

        category: "classy",

        image: "/images/cloth-Signature Glow.png",

        images: [
          "/images/cloth-Signature Glow2.png",
        ],

        description: "classy outfit.",

        price: 84500,

        singlePrice: 0,
        groupPrice: 83500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "pink","blue", "brown"]
      },

      {
        name: "Midnight Pearl",

        category: "classy",

        image: "/images/cloth-Midnight Pearl.png",

        images: [
          "/images/cloth-midnight3.png",
          "/images/cloth-midnight.png",
        ],

        description: "classy outfit.",

        price: 112500,

        singlePrice: 0,
        groupPrice: 112500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["jeans", "streetwear"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "White", "brown"]
      },

      {
        name: "Black muse",

        category: "classy",

        image: "/images/cloth-blackmuse2.png",

        images: [
          "/images/cloth-blackmuse22.png",
        ],

        description: "classy outfit",

        price: 88000,

        singlePrice: 0,
        groupPrice: 88000,

        purchaseType: "hybrid",

        groupSize: 5,

        isTrending: true,

        tags: ["shirt", "cotton"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black", "White", "Red"]
      },

      // TRENDY PRODUCTS

      {
        name: "td215",

        category: "trendy",

        image: "/images/td440.jpg",

        images: [
          "/images/td449.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "wine",  "brown"]
      },
      {
        name: "td216",

        category: "trendy",

        image: "/images/td-444.jpeg",

        images: [
          "/images/td444-1.jpeg",
          "/images/td444-2.jpeg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      {
        name: "td217",

        category: "trendy",

        image: "/images/td447.jpeg",

        images: [
          "/images/td447-1.jpeg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      {
        name: "td219",

        category: "trendy",

        image: "/images/td-446-1.jpg",

        images: [
          "/images/td-446.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Brown", "Black"]
      },
      {
        name: "td220",

        category: "trendy",

        image: "/images/trend.jpg",

        images: [
          "/images/trend.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td221",

        category: "trendy",

        image: "/images/td448.jpg",

        images: [
          "/images/td448.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td222",

        category: "trendy",

        image: "/images/td399.jpg",

        images: [
          "/images/td399.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td101",

        category: "trendy",

        image: "/images/trend.jpg",

        images: [
          "/images/trend.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td102",

        category: "trendy",

        image: "/images/trend-2.jpg",

        images: [
          "/images/trend-2-2.jpg",
          "/images/trend-2-2-2.jpg",
        ],

        description: "Trendy casual outfit",

        price: 50500,

        singlePrice: 0,

        groupPrice: 50500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["brown", "Black", "white" ]
      },
      {
        name: "td103",

        category: "trendy",

        image: "/images/trend-30.jpg",

        images: [
          "/images/trend30-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 50250,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black","Blue"]
      },
      {
        name: "td104",

        category: "trendy",

        image: "/images/trend31.jpg",

        images: [
          "/images/trend31-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 50500,

        singlePrice: 0,

        groupPrice: 50500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["nude", "green"]
      },
      {
        name: "td105",

        category: "trendy",

        image: "/images/trend11.jpg",

        images: [
          "/images/trend12.jpg",
          "/images/trend11-3.jpg",
        ],

        description: "Trendy casual outfit",

        price: 52000,

        singlePrice: 0,

        groupPrice: 52000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["blue", "Black", "white"]
      },
      {
        name: "td106",

        category: "trendy",

        image: "/images/trend6.jpg",

        images: [
          "/images/trend6-2.jpg",
          "/images/trend6-3.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Yellow","blue"]
      },
      {
        name: "td107",

        category: "trendy",

        image: "/images/trend3.jpg",

        images: [
          "/images/trend16.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "green"]
      },
      {
        name: "td108",

        category: "trendy",

        image: "/images/trend19.jpg",

        images: [
          "/images/trend19-2.jpg",
          "/images/trend19-3.jpg"
        ],

        description: "Trendy casual outfit",

        price: 31800,

        singlePrice:0,

        groupPrice: 31800,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td110",

        category: "trendy",

        image: "/images/trend32.jpg",

        images: [
          "/images/trend32-2.jpg",
          "/images/trend32-3.jpg",
          "/images/trend32-4.jpg",
        ],

        description: "Trendy casual outfit",

        price: 49000,

        singlePrice: 0,

        groupPrice: 49000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black"]
      },
      {
        name: "td111",

        category: "trendy",

        image: "/images/trend37.jpg",

        images: [
          "/images/trend37.jpg"
        ],

        description: "Trendy casual outfit",

        price: 30400,

        singlePrice: 0,

        groupPrice: 30400,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["nude"]
      },
      {
        name: "td112",

        category: "trendy",

        image: "/images/trend36.jpg",

        images: [
          "/images/trend36-2.jpg",
          "/images/trend36-3.jpg",
          "/images/trend36-4.jpg",
          "/images/trend36-5.jpg"
        ],

        description: "Trendy casual outfit",

        price: 52200,

        singlePrice: 0,

        groupPrice: 52200,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Black","nude","Blue","yellow"]
      },
      {
        name: "td113",

        category: "trendy",

        image: "/images/trend39.jpg",

        images: [
          "/images/trend39.jpg"
        ],

        description: "Trendy casual outfit",

        price: 48000,

        singlePrice: 48000,

        groupPrice: 45000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Blue"]
      },
      {
        name: "td114",

        category: "trendy",

        image: "/images/trend39-2.jpg",

        images: [
          "/images/trend39-2.jpg"
        ],

        description: "Trendy casual outfit",

        price: 48000,

        singlePrice: 48000,

        groupPrice: 45000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["cream"]
      },
      {
        name: "td115",

        category: "trendy",

        image: "/images/trend48.jpg",

        images: [
          "/images/trend48-2.jpg"
        ],

        description: "Trendy casual outfit",

        price: 42200,

        singlePrice: 0,

        groupPrice: 42200,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["Pink", "Blue"]
      },
      {
        name: "td116",

        category: "trendy",

        image: "/images/trend41-3.jpg",

        images: [
          "/images/trend41-2.jpg",
          "/images/trend41-1.jpg",
        ],

        description: "Trendy casual outfit",

        price: 69000,

        singlePrice: 0,

        groupPrice: 69000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine", "Black","nude"]
      },
      {
        name: "td117",

        category: "trendy",

        image: "/images/trend42.jpg",

        images: [
          "/images/trend44-3.jpg"
        ],

        description: "Trendy casual outfit",

        price: 82500,

        singlePrice: 0,

        groupPrice: 82500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine"]
      },
      {
        name: "td118",

        category: "trendy",

        image: "/images/trend44.jpg",

        images: [
          "/images/trend44-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 58000,

        singlePrice: 0,

        groupPrice: 58000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      {
        name: "td119",

        category: "trendy",

        image: "/images/trend40.jpg",

        images: [
          "/images/trend40-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 60500,

        singlePrice: 0,

        groupPrice: 60500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["green", "Blue"]
      },
      {
        name: "td200",

        category: "trendy",

        image: "/images/trend46.jpg",

        images: [
          "/images/trend46-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td207",

        category: "trendy",

        image: "/images/trend55.jpg",

        images: [
          "/images/trend55-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td208",

        category: "trendy",

        image: "/images/trend54.jpg",

        images: [
          "/images/trend54.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td209",

        category: "trendy",

        image: "/images/trendy53.jpg",

        images: [
          "/images/trendy53-1.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td210",

        category: "trendy",

        image: "/images/trend56.jpg",

        images: [
          "/images/trend56.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td211",

        category: "trendy",

        image: "/images/trend57.jpg",

        images: [
          "/images/trend57.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td212",

        category: "trendy",

        image: "/images/trend58.jpg",

        images: [
          "/images/trend58.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td213",

        category: "trendy",

        image: "/images/trend59.jpg",

        images: [
          "/images/trend59.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      {
        name: "td214",

        category: "trendy",

        image: "/images/trend60.jpg",

        images: [
          "/images/trend60.jpg"
        ],

        description: "Trendy casual outfit",

        price: 46500,

        singlePrice: 0,

        groupPrice: 46500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["red", "Black"]
      },
      
      {
        name: "td201",

        category: "trendy",

        image: "/images/trend61.jpg",

        images: [
          "/images/trend61.jpg"
        ],

        description: "Trendy casual outfit",

        price: 48000,

        singlePrice: 48000,

        groupPrice: 45000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine"]
      },

      {
        name: "td201",

        category: "trendy",

        image: "/images/trend61.jpg",

        images: [
          "/images/trend61.jpg"
        ],

        description: "Trendy casual outfit",

        price: 48000,

        singlePrice: 48000,

        groupPrice: 45000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine"]
      },

      {
        name: "td201",

        category: "trendy",

        image: "/images/trend62.png",

        images: [
          "/images/trend62-2.png"
        ],

        description: "Trendy casual outfit",

        price: 48000,

        singlePrice: 48000,

        groupPrice: 45000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine"]
      },
      {
        name: "td202",

        category: "trendy",

        image: "/images/trend64.png",

        images: [
          "/images/trend64.png"
        ],

        description: "Trendy casual outfit",

        price: 53500,

        singlePrice: 0,

        groupPrice: 53500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine"]
      },
      {
        name: "td203",

        category: "trendy",

        image: "/images/trend47.jpg",

        images: [
          "/images/trend47.jpg"
        ],

        description: "Trendy casual outfit",

        price: 66600,

        singlePrice: 0,

        groupPrice: 66500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white"]
      },
      
      {
        name: "td204",

        category: "trendy",

        image: "/images/trend50.jpg",

        images: [
          "/images/trend50.jpg"
        ],

        description: "Trendy casual outfit",

        price: 51500,

        singlePrice: 0,

        groupPrice: 51500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },

      {
        name: "td207",

        category: "trendy",

        image: "/images/trend52.png",

        images: [
          "/images/trend52.png"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },

      {
        name: "td206",

        category: "trendy",

        image: "/images/trend51.jpg",

        images: [
          "/images/trend51.jpg"
        ],

        description: "Trendy casual outfit",

        price: 69000,

        singlePrice: 0,

        groupPrice: 69000,

        purchaseType: "hybrid",

        groupSize: 6,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine", "Black"]
      },
      // modest
      
      
      {
        name: "M101",

        category: "modest",

        image: "/images/modest10.jpg",

        images: [
          "/images/m10.jpg",
          "/images/m11.jpg"
         
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest9.jpg",

        images: [
          "/images/modest9.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest3.jpg",

        images: [
          "/images/modest3.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/m177.jpg",

        images: [
          "/images/modest16.jpg",
          "/images/m17.jpg",
          "/images/modest17.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modes101.jpg",

        images: [
          "/images/modes101.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest18.jpg",

        images: [
          "/images/modest19.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest20.jpg",

        images: [
          "/images/m20.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest5.jpg",

        images: [
          "/images/modest5.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest6.jpg",

        images: [
          "/images/modest6.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest4.jpg",

        images: [
          "/images/modest4.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest12.jpg",

        images: [
          "/images/modest12.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

        category: "modest",

        image: "/images/modest11.jpg",

        images: [
          "/images/modest11.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      

      {
        name: "M100",

        category: "modest",

        image: "/images/modest15.jpg",

        images: [
          "/images/m15.jpg"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      {
        name: "M100",

       
        category: "modest",

        image: "/images/classy60.png",

        images: [
          "/images/classy60.png"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

       
        category: "modest",

        image: "/images/classy61.png",

        images: [
          "/images/classy61.png"
        ],

        description: "Trendy casual outfit",

        price: 40500,

        singlePrice: 0,

        groupPrice: 40500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["white", "Black"]
      },
      
      {
        name: "M100",

       
        category: "modest",

        image: "/images/modest-10.jpg",

        images: [
          "/images/modest-10-10.jpg"
        ],

        description: "Trendy casual outfit",

        price: 52500,

        singlePrice: 0,

        groupPrice: 52500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["S", "M", "L"],

        colors: ["wine", "Black"]
      },
      
      {
        name: "M702",

       
        category: "classy",

        image: "/images/classy60.png",

        images: [
          "/images/classy60.png"
        ],

        description: "Trendy casual outfit",

        price: 42000,

        singlePrice: 0,

        groupPrice: 42000,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["Free size"],

        colors: ["Blue", "Black"]
      },
      
      {
        name: "M703",

       
        category: "classy",

        image: "/images/classy61.png",

        images: [
          "/images/classy61.png"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M701",

       
        category: "classy",

        image: "/images/classy62.png",

        images: [
          "/images/classy62.png"
        ],

        description: "Trendy casual outfit",

        price: 42000,

        singlePrice: 0,

        groupPrice: 42000,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["Free size"],

       colors: ["wine", "Blue", "purple"]
      },
      {
        name: "M700",

       
        category: "classy",

        image: "/images/classy63.png",

        images: [
          "/images/classy63.png"
        ],

        description: "Trendy casual outfit",

        price: 54500,

        singlePrice: 0,

        groupPrice: 54500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["Free size"],

        colors: ["Black"]
      },
      {
        name: "M701",

       
        category: "modest",

        image: "/images/classy62.png",

        images: [
          "/images/classy62.png"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

        sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M707",

       
        category: "classy",

        image: "/images/classy68.jpg",

        images: [
          "/images/classy66.jpg"
        ],

        description: "Trendy casual outfit",

        price: 51500,

        singlePrice: 0,

        groupPrice: 51500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M708",

       
        category: "classy",

        image: "/images/classy69.jpg",

        images: [
          "/images/classy69.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M709",

       
        category: "classy",

        image: "/images/classy70.jpg",

        images: [
          "/images/classy70.jpg"
        ],

        description: "Trendy casual outfit",

        price: 52500,

        singlePrice: 0,

        groupPrice: 52500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M710",

       
        category: "classy",

        image: "/images/classy66.jpg",

        images: [
          "/images/classy66.jpg"
        ],

        description: "Trendy casual outfit",

        price: 54500,

        singlePrice: 0,

        groupPrice: 54500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M711",

       
        category: "classy",

        image: "/images/classy67.jpg",

        images: [
          "/images/classy67.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M712",

       
        category: "classy",

        image: "/images/classy655.jpg",

        images: [
          "/images/classy65.jpg"
        ],

        description: "Trendy casual outfit",

        price: 54500,

        singlePrice: 0,

        groupPrice: 54500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["white", "Black"]
      },
      {
        name: "M713",

       
        category: "classy",

        image: "/images/classy71.jpg",

        images: [
          "/images/classy71.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M713",

       
        category: "classy",

        image: "/images/modest26-26-26.png",

        images: [
           "/images/modest-26-26-26.png"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M21",

       
        category: "modest",

        image: "/images/modest21.jpg",

        images: [
          "/images/m21.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M21",

       
        category: "modest",

        image: "/images/modest-21-21.png",

        images: [
          "/images/m-21.jpg"
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M21",

       
        category: "modest",

        image: "/images/m-22-22-2.png",

        images: [
          "/images/m-21-21.png"
        ],

        description: "modest outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Blue", "white"]
      },
      {
        name: "M21",

       
        category: "modest",

        image: "/images/modest-23-3.png",

        images: [
         "/images/modest-23-3.png",
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      {
        name: "M21",

       
        category: "modest",

        image: "/images/m-22-2.png",

        images: [
         "/images/m-22-2.png",
        ],

        description: "Trendy casual outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
     {
        name: "C100",

       
        category: "classy",
 
        image: "/images/C100.jpg",

        images: [
          "/images/C-100.jpg"
        ],

        description: "2 piece outfit",

        price: 49500,

        singlePrice: 0,

        groupPrice: 49500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Brown"]
      },
      
     {
        name: "C101",

       
        category: "classy",
 
        image: "/images/classy-40.png",

        images: [
         "/images/classy-40.png",
        ],

        description: "2 piece outfit",

        price: 50500,

        singlePrice: 0,

        groupPrice: 50500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["red"]
      },
      
     {
        name: "C102",

       
        category: "classy",
 
        image: "/images/classy-42.png",

        images: [
          "/images/classy-42.png",
        ],

        description: "2 piece outfit",

        price: 50500,

        singlePrice: 0,

        groupPrice: 50500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["white"]
      },
      
     {
        name: "C103",

       
        category: "classy",
 
        image: "/images/classy-39.png",

        images: [
        "/images/classy-39.png",
        ],

        description: "2 piece outfit",

        price: 48500,

        singlePrice: 0,

        groupPrice: 48500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C104",

       
        category: "classy",
 
        image: "/images/classy-12.png",

        images: [
        "/images/classy-12.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
     {
        name: "C105",

       
        category: "classy",
 
        image: "/images/classy-31-1.png",

        images: [
        "/images/classy-31-1.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
     {
        name: "C106",

       
        category: "classy",
 
        image: "/images/classy32.jpg",

        images: [
        "/images/classy32.jpg",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C105",

       
        category: "classy",
 
        image: "/images/classy-14.png",

        images: [
        "/images/classy-14.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C104",

       
        category: "classy",
 
        image: "/images/classy-15.png",

        images: [
        "/images/classy-15.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
     {
        name: "C107",

       
        category: "classy",
 
        image:  "/images/classy-36.png",

        images: [
        "/images/classy-36.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
     {
        name: "C108",

       
        category: "classy",
 
        image: "/images/classy-20.jpg",

        images: [
        "/images/classy-20.jpg",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C109",

       
        category: "classy",
 
        image: "/images/classy-22-1.jpg",

        images: [
        "/images/classy-22.jpg",
         "/images/classy-22-1.jpg",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C111",

       
        category: "classy",
 
        image: "/images/classy38.png",
   

        images: [
        "/images/classy-38.png",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
     {
        name: "C110",

       
        category: "classy",
 
        image: "/images/classy-23.jpg",

        images: [
        "/images/classy-23.jpg",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 42500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black"]
      },
      
      
     {
        name: "C112",

       
        category: "classy",
 
        image: "/images/cloth-midnight.png",

        images: [
        "/images/cloth-midnight.png",
        ],

        description: "2 piece outfit",

        price: 112500,

        singlePrice: 0,

        groupPrice: 112500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black","white","brown"]
      },
      
     {
        name: "C113",

       
        category: "classy",
 
        image: "/images/classy-39.jpg",

        images: [
        "/images/classy-39.jpg",
        ],

        description: "2 piece outfit",

        price: 42500,

        singlePrice: 0,

        groupPrice: 24500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black","white","brown"]
      },
      
     {
        name: "C114",

       
        category: "classy",
 
        image: "/images/classy-41.jpg",

        images: [
       "/images/classy-41.jpg",
        ],

        description: "2 piece outfit",

        price: 112500,

        singlePrice: 0,

        groupPrice: 112500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black","white","brown"]
      },
      
      
     {
        name: "C115",

       
        category: "classy",
 
        image: "/images/classy-42.jpg",

        images: [
       "/images/classy-42.jpg",
        ],

        description: "2 piece outfit",

        price: 112500,

        singlePrice: 0,

        groupPrice: 112500,

        purchaseType: "hybrid",

        groupSize: 4,

        isTrending: true,

        tags: ["trendy", "young-fashion"],

      sizes: ["44", "46", "48", "50"],

        colors: ["Black","white","brown"]
      },
      

    ]);

    console.log("Seeding done ✅");

    process.exit();

  } catch (err) {

    console.log(err);

    process.exit(1);

  }

};

seed();