// const express = require('express')
// const app = express()
// const path = require('path')
// const hbs = require("hbs")
// const collection = require("./mongodb")


// const templatePath = path.join(__dirname, '../templates')
// // const publicPath = path.join(__dirname, '../public')
// // console.log(publicPath);


// app.use(express.json())
// app.set('view engine', 'hbs')
// app.set('views', templatePath)
// app.use(express.urlencoded({ extended: false }))




// app.get("/", (req, res) => {
//     res.render("login")
// })
// app.get("/signup", (req, res) => {
//     res.render("signup")
// })



// app.post("/signup", async (req, res) => {
//     const data = {
//         name: req.body.name,
//         password: req.body.password
//     }

//     await collection.insertMany([data])
//     res.render("home")

// })
// app.post("/login", async (req, res) => {
//     try {
//         const check = await collection.findOne({ name: req.body.name })
//         if (check.password === req.body.password) {
//             res.render("home")

//         }
//         else {
//             res.send("wrong password")
//         }

//     }
//     catch {
//         res.send("wrong details")

//     }



//     res.render("home")

// })







// app.listen(3000, () => {
//     console.log('port connected')
// })

// const express = require("express");
// const app = express();
// const collection = require("./mongodb");

// app.use(express.json()); // handle JSON
// app.use(express.urlencoded({ extended: false }));

// // API route for signup
// app.post("/signup", async (req, res) => {
//     try {
//         const data = {
//             name: req.body.name,
//             password: req.body.password,
//         };

//         await collection.insertMany([data]);
//         res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error saving user", error });
//     }
// });

// app.listen(3000, () => {
//     console.log("Backend running on http://localhost:3000");
// });
const express = require("express");
const bcrypt = require("bcryptjs")
// const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBSession = require('connect-mongodb-session')(session)
// const path = require("path");
// const collection = require("./mongodb");

const app = express();
const mongoURI = "mongodb://localhost:27017/sessions"
const UserModel = require("../models/User")

const path = require("path");
const fs = require("fs");
// Import the cart route
// const cartRoutes = require("../routes/cart");
const Product = require("../models/Product"); // adjust path if needed



// compute project root (one level up from the folder containing this file)
const PROJECT_ROOT = path.resolve(__dirname, "..");

// set EJS views folder explicitly (expects views/ at project root)
app.set("views", path.join(PROJECT_ROOT, "views"));
app.set("view engine", "ejs");

// serve static files from projectRoot/public
const STATIC_DIR = path.join(PROJECT_ROOT, "public");
// console.log("Static files served from:", STATIC_DIR);
// console.log("Views served from:", path.join(PROJECT_ROOT, "views"));

// if (!fs.existsSync(STATIC_DIR)) {
//     console.warn("Warning: static folder not found at", STATIC_DIR);
// }

app.use(express.static(STATIC_DIR));

// // Use it
// app.use(cartRoutes);
// app.use("/", require("./routes/cart"));



// Serve static files (CSS, JS, images)
// app.use(express.static(path.join(__dirname, "public")));

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// })
//     .then((res) => {
//         console.log("MongoDB Connected");
//     });
// ✅ Mongoose connection (simplified for v6+)
mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));
const store = new MongoDBSession({
    uri: mongoURI,
    collection: "mySessions",
});
// app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



// Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// ✅ Add session middleware
// app.use(session({
//     secret: "yourSuperSecretKey",   // change to a strong random secret
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }       // set secure:true if using HTTPS
// }));

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        store: store,

    })
);
// ✅ Make session data available in all EJS templates
app.use((req, res, next) => {
    res.locals.isAuth = req.session.isAuth || false;
    res.locals.user = req.session.user || null;
    next();
});
// ✅ Use your routes here
const cartRoutes = require("../routes/cart");
app.use("/", cartRoutes);


// app.get("/", (req, res) => {
// req.session.isAuth = true;



// res.render("dashboard")
//     res.render("dashboard", { isAuth: req.session.isAuth });
// })
app.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.render("dashboard", {
            isAuth: req.session.isAuth,
            products
        });
    } catch (err) {
        console.error(err);
        res.render("dashboard", { isAuth: req.session.isAuth, products: [] });
    }
});



app.get("/seed-products", async (req, res) => {
    const sampleProducts = [
        { name: "Men’s T-Shirt", price: 7500, image: "/img/tshirt.jpg" },
        { name: "Women’s Dress", price: 12000, image: "/img/dress.jpg" },
        { name: "Baby Toy", price: 3000, image: "/img/toy.jpg" },
    ];

    try {
        await Product.insertMany(sampleProducts);
        res.send("✅ Sample products added!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error seeding products");
    }
});

app.get("/login", (req, res) => {
    // req.session.isAuth = true;



    res.render("login")
})
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/shop", (req, res) => {
    res.render("shop");
});
app.get("/cart", (req, res) => {
    res.render("cart");
});
app.get("/chandelier", (req, res) => {
    res.render("chandelier");
});
app.get("/babies", (req, res) => {
    res.render("babies");
});
app.get("/wallstickers", (req, res) => {
    res.render("wallstickers");
});
app.get("/women", (req, res) => {
    res.render("women");
});
app.get("/men", (req, res) => {
    res.render("men");
});
app.get("/airport-wears", (req, res) => {
    res.render("airport-wears");
});
app.get("/Accessories", (req, res) => {
    res.render("Accessories");
});
app.get("/Baby-toys", (req, res) => {
    res.render("Baby-toys");
});
app.get("/B100", (req, res) => {
    res.render("B100");
});
app.get("/B101", (req, res) => {
    res.render("B101");
});
app.get("/B102", (req, res) => {
    res.render("B102");
});
app.get("/B103", (req, res) => {
    res.render("B103");
});
app.get("/B104", (req, res) => {
    res.render("B104");
});
app.get("/B114", (req, res) => {
    res.render("B114");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // 1️⃣ Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(400).send("User not found");
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid password");
    }

    // 3️⃣ Save session (keep user logged in)
    req.session.isAuth = true;
    req.session.user = user.username;   // ✅ store username instead of ID

    // 4️⃣ Redirect or respond
    res.redirect("/"); // or dashboard page
});
app.get("/me", (req, res) => {
    if (req.session.isAuth) {
        res.send(`✅ Logged in as user ID: ${req.session.user}`);
    } else {
        res.send("❌ Not logged in");
    }
});

// app.get("/register", (req, res) => {
//     res.render("register")
// })

app.get("/register", (req, res) => {
    res.render("register", { error: null }); // default: no error
});

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    // ✅ Basic validation before touching the DB
    // ✅ Basic validation before DB
    if (!username || !email || !password) {
        return res.render("register", { error: "All fields are required!" });
    }
    let user = await UserModel.findOne({ email });
    if (user) {
        return res.render("register", { error: "Email already exists!" });
    }

    // if (user) {
    //     return res.redirect('/register')
    // }

    const hashedPsw = await bcrypt.hash(password, 12)


    user = new UserModel({
        username,
        email,
        password: hashedPsw
    })
    await user.save();
    // ✅ Auto-login after signup
    req.session.isAuth = true;
    req.session.user = user.username; // or user._id if you prefer
    res.redirect("/")
});
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send("❌ Error logging out");
        }
        res.redirect("/register");
    });
});


// ✅ Add to cart route


// module.exports = router;
// const cartRoutes = require("../routes/cart");
// app.use(cartRoutes);




app.listen(5000, console.log("App Running on http://localhost:5000"));
