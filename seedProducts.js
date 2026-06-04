


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

        colors: ["Black", "Wine"]
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
          "/images/cloth-2.png",
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
        name: "td201",

        category: "trendy",

        image: "/images/trend45.jpg",

        images: [
          "/images/trend45.jpg"
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

        image: "/images/trend17.jpg",

        images: [
          "/images/trend17.jpg"
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
      }

    ]);

    console.log("Seeding done ✅");

    process.exit();

  } catch (err) {

    console.log(err);

    process.exit(1);

  }

};

seed();