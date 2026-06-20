
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBSession = require("connect-mongodb-session")(session);
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
// const upload = require("./middleware/upload");

const Contact = require("./models/Contact");

// const Order = require("/models/Order");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Models
const UserModel = require("./models/User");
const Product = require("./models/Product");
const GroupBuy = require("./models/Group");
const Post = require("./models/Post");
const Order = require("./models/Order");

// DB

// const mongoURI = "mongodb://localhost:27017/sessions";
const mongoURI = process.env.MONGO_URI;
// IMAGE STORAGE
// const multer = require("multer");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "public", "uploads"));
//   },

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./config/cloud");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "posts",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

const upload = multer({ storage });
// const upload = multer({ storage });

// Connect MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

  mongoose.connection.on("connected", () => {
  console.log("DB Connected:", mongoose.connection.name);
});

// Session store
const store = new MongoDBSession({
  uri: mongoURI,
  collection: "mySessions",
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// admin
// function isAdmin(req, res, next) {

//     if (!req.session.user) {
//         return res.redirect("/login");
//     }

//     if (!req.session.user.isAdmin) {
//         return res.status(403).send("Access denied");
//     }

//     next();

// }
function isAdmin(req, res, next) {

    if (!req.session.user) {
        return res.redirect("/login");
    }

    UserModel.findById(req.session.user._id)
        .then(user => {

            if (!user || !user.isAdmin) {
                return res.status(403).send("Access denied");
            }

            next();

        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Server error");
        });
}
app.get("/admindashboard", isAdmin, async (req, res) => {

    const totalOrders = await Order.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalUsers = await UserModel.countDocuments();

    res.render("admin/admindashboard", {

        totalOrders,

        totalProducts,

        totalUsers

    });

});
app.get("/admin/adminorders", isAdmin, async (req, res) => {

  const orders = await Order.find()
    .populate("userId")
    .populate("items.productId")
    .sort({ createdAt: -1 });

  res.render("admin/adminorders", { orders });

});
app.post("/admin/adminorders/:id/status", isAdmin, async (req, res) => {

  await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });

  res.redirect("/admin/adminorders");

});

// app.post("/admin/adminorders/:id/tracking", isAdmin, async (req, res) => {

//   const order = await Order.findById(req.params.id);

//   order.tracking.push({
//     status: req.body.status,
//     location: req.body.location,
//     note: req.body.note
//   });

//   await order.save();

//   res.redirect("/admin/adminorders");

// });
app.post("/admin/adminorders/:id/tracking", isAdmin, async (req, res) => {

  const order = await Order.findById(req.params.id);

  if (!order) return res.redirect("/admin/adminorders");

  order.tracking.push({
    status: req.body.status,
    location: req.body.location,
    note: req.body.note
  });

  await order.save();

  res.redirect("/admin/adminorders");
});

// cart count
app.use(async (req, res, next) => {
  try {
    if (req.session.user) {
      const user = await UserModel.findById(req.session.user._id);

   res.locals.cartCount = user.cart.length;

    } else {
      res.locals.cartCount = 0;
    }

    next();

  } catch (err) {
    console.log(err);
    res.locals.cartCount = 0;
    next();
  }
});
// clear cartapp.get("/clear-cart", async (req, res) => {

app.get("/clear-cart", async (req, res) => {

  if (!req.session.user) {
    return res.redirect("/login");
  }

  await UserModel.findByIdAndUpdate(
    req.session.user._id,
    {
      cart: []
    }
  );

  res.send("Cart cleared ✅");

});



// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static
app.use(express.static(path.join(__dirname, "public")));


// Make session global
app.use((req, res, next) => {
  res.locals.isAuth = req.session.isAuth || false;
  res.locals.user = req.session.user || null;
  next();
});

// login message session
app.use((req, res, next) => {

  res.locals.success = req.session.success || null;
  res.locals.error = req.session.error || null;

  req.session.success = null;
  req.session.error = null;

  next();
});

/* ---------------- ROUTES ---------------- */

// Home (Dashboard)
// app.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();

//     console.log("PRODUCTS:", products); // 👈 PUT IT HERE

//     res.render("dashboard", {
//       isAuth: req.session.isAuth,
//       products,
//     });

//   } catch (err) {
//     console.log(err);
//     res.render("dashboard", { isAuth: false, products: [] });
//   }
// });


app.get("/", async (req, res) => {
  try {

    const trendingProducts = await Product.find({ category: "trendy" });
    const products = await Product.find({ category: "classy" });
  
    
    const groups = await GroupBuy.find({ status: "open" });

    res.render("dashboard", {
      trendingProducts,
      products,
      groups,
      isAuth: req.session.isAuth
    });

  } catch (err) {
    console.log(err);

    res.render("dashboard", {
      trendingProducts: [],
      products: [],
      groups: [],
      isAuth: false
    });
  }
  
});
app.get("/seed-products", async (req, res) => {
  try {
    await Product.create({
      name: "B100 Shoe",
      price: 14935,
      image: "/images/baby-1.png",
      description: "Test product"
    });

    res.send("Product created ✅");
  } catch (err) {
    console.log(err);
    res.send("Error seeding product");
  }
});

app.get("/trending", async (req, res) => {
  try {

    const products = await Product.find({
      category: "trendy"
    });

    res.render("trending", {
      products
    });

  } catch (err) {
    console.log(err);
    res.send("Error loading trending products");
  }
});
// IMAGE UPLOAD START
// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, "public/uploads");
//   },

//   filename: function(req, file, cb){
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });
// IMAGE UPLOAD END

// Feed
// app.get("/feed", async (req, res) => {
//   const posts = await Post.find().populate("members");
//   res.render("feed", { posts });
// });

app.get("/feed", async (req, res) => {
  const posts = await Post.find().populate("members");

  console.log("POSTS:", posts); // 👈 IMPORTANT

  res.render("feed", { posts });
});

// Chat page (PROTECTED)
app.get("/chat", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const posts = await Post.find()
    .populate("creator")
    .populate("comments.user")
    .sort({ createdAt: -1 });

  res.render("chat", {
    posts,
    user: req.session.user,
    isAuth: !!req.session.user
  });
});
// post
app.post("/chat/create", upload.single("image"), async (req, res) => {
  console.log(req.file);

  if (!req.session.user) return res.redirect("/login");

  const post = new Post({
    text: req.body.text,
    image: req.file ? req.file.path : "",
    creator: req.session.user._id
  });

  await post.save();

  res.redirect("/chat");
});
// app.post("/chat/create", async (req, res) => {
//   if (!req.session.user) return res.redirect("/login");

//   const post = new Post({
//     text: req.body.text,
//     image: req.body.image,
//     creator: req.session.user._id
//   });

//   await post.save();
//   res.redirect("/chat");
// });

// comment
app.post("/chat/comment/:postId", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const post = await Post.findById(req.params.postId);

  post.comments.push({
    user: req.session.user._id,
    text: req.body.text
  });

  await post.save();
  res.redirect("/chat");
});
// delete comment 
app.post("/chat/comment/delete/:postId/:commentId", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const post = await Post.findById(req.params.postId);

  if (!post) return res.redirect("/chat");

  const comment = post.comments.id(req.params.commentId);

  if (!comment) return res.redirect("/chat");

  if (comment.user.toString() !== req.session.user._id.toString()) {
    return res.status(403).send("Not allowed");
  }

  // ✅ FIX: remove manually
  post.comments = post.comments.filter(
    c => c._id.toString() !== req.params.commentId
  );

  await post.save();

  res.redirect("/chat");
});
app.post("/chat/comment/edit/:postId/:commentId", async (req, res) => {
   console.log("EDIT ROUTE HIT");
  console.log("Comment ID:", req.params.commentId);
  console.log("New text:", req.body.text);
  
  try {
    
    if (!req.session.user) return res.redirect("/login");

    const post = await Post.findById(req.params.postId);
    if (!post) return res.redirect("/chat");

    const comment = post.comments.id(req.params.commentId);
    console.log("FOUND COMMENT:", comment);
    if (!comment) return res.redirect("/chat");

    // ownership check
    if (comment.user.toString() !== req.session.user._id.toString()) {
      return res.status(403).send("Not allowed");
    }

    // 🔥 FIX: ensure text exists
    if (!req.body.text || req.body.text.trim() === "") {
      return res.redirect("/chat");
    }

    comment.text = req.body.text;
    await post.save();

    res.redirect("/chat");

  } catch (err) {
    console.log(err);
    res.send("Edit error");
  }
});
// delete post

app.post("/chat/delete/:postId", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const post = await Post.findById(req.params.postId);

  if (!post) return res.redirect("/chat");

  // ONLY creator can delete
  if (post.creator.toString() !== req.session.user._id.toString()) {
    return res.status(403).send("Not allowed");
  }

  await Post.findByIdAndDelete(req.params.postId);

  res.redirect("/chat");
});
// group buy
app.post("/group/join/:productId", async (req, res) => {
  try {
    if (!req.session.user) return res.redirect("/login");

    const { productId } = req.params;
    const userId = req.session.user._id;

    const product = await Product.findById(productId);
    if (!product) return res.redirect("/");

    // find open group
    let group = await GroupBuy.findOne({
      productId,
      status: "open"
    });

    // create if none
    if (!group) {
      group = await GroupBuy.create({
        productId,
        members: []
      });
    }

    // prevent duplicate join
    const alreadyJoined = group.members.some(
      m => m.userId.toString() === userId.toString()
    );

    if (alreadyJoined) return res.redirect("/");

    // add user
    group.members.push({ userId });

    // check if full
    if (group.members.length >= product.groupSize) {
      group.status = "full";
    }

    await group.save();

    res.redirect("/trending");

  } catch (err) {
    console.log(err);
    res.send("Group join error");
  }
});
// end group buy

// join group
app.post("/chat/join/:postId", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const post = await Post.findById(req.params.postId);

  // prevent duplicate join
  const alreadyJoined = post.interested.some(
    i => i.user.toString() === req.session.user._id.toString()
  );

  if (!alreadyJoined) {
    post.interested.push({
      user: req.session.user._id,
      size: req.body.size,
      location: req.body.location
    });

    await post.save();
  }

  res.redirect("/chat");
});

// cart
app.get("/cart", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const user = await UserModel.findById(req.session.user._id)
      .populate("cart.productId");

    const validCart = user.cart.filter(item => item.productId);

    const total = validCart.reduce((sum, item) => {
      return sum + (item.productId.price || 0) * item.quantity;
    }, 0);

    res.render("cart", {
      cart: validCart,
      total,
      added: req.query.added === "1" // ✅ IMPORTANT FIX
    });

  } catch (err) {
    console.log("CART ERROR:", err);
    res.send("Cart page error");
  }
});

app.post("/cart/add", async (req, res) => {
  try {
    if (!req.session.user) return res.redirect("/login");

    const userId = req.session.user._id;

    const { productId, quantity, size, color, groupBuy } = req.body;

    console.log(req.body);

    if (!productId) return res.send("Product not found");

    const user = await UserModel.findById(userId);

    const existing = user.cart.find(
      item => item.productId.toString() === productId
    );

    if (existing) {
      existing.quantity += Number(quantity || 1);

      if (groupBuy === "true") {
        existing.isGroupBuy = true;
      }

    } else {
      user.cart.push({
        productId,
        quantity: Number(quantity || 1),
        size: size || null,
        color: color || null,
        isGroupBuy: groupBuy === "true"
      });
    }

    await user.save();

    if (groupBuy === "true") {
      return res.redirect("/checkout");
    }

    // res.redirect("/cart");
    res.redirect("/cart?added=1");

  } catch (err) {
    console.log(err);
    res.send("Cart error");
  }
});
app.post("/cart/increase", async (req, res) => {
  try {
    const userId = req.session.user._id;
    const { productId } = req.body;

    const user = await UserModel.findById(userId);

    const item = user.cart.find(
      item => item.productId.toString() === productId
    );

    if (item) {
      item.quantity += 1;
      await user.save();
    }

    res.redirect("/cart");

  } catch (err) {
    console.log(err);
    res.send("Increase error");
  }
});
app.post("/cart/decrease", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const userId = req.session.user._id;
    const { productId } = req.body;

    const user = await UserModel.findById(userId);

    const item = user.cart.find(
      item => item.productId.toString() === productId
    );

    if (item) {
      item.quantity -= 1;

      if (item.quantity <= 0) {
        user.cart = user.cart.filter(
          item => item.productId.toString() !== productId
        );
      }

      await user.save();
    }

    res.redirect("/cart");

  } catch (err) {
    console.log(err);
    res.send("Decrease error");
  }
});
app.post("/cart/remove", async (req, res) => {
  try {
    const userId = req.session.user._id;
    const { productId } = req.body;

    await UserModel.findByIdAndUpdate(userId, {
      $pull: {
        cart: { productId }
      }
    });

    res.redirect("/cart");

  } catch (err) {
    console.log(err);
    res.send("Remove error");
  }
});

// checkout
app.get("/checkout", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const user = await UserModel.findById(req.session.user._id)
      .populate("cart.productId");

    if (!user || !user.cart) {
      return res.render("checkout", {
        cart: [],
        total: 0
      });
    }

    // 🔥 Remove invalid cart items (important fix)
    const validCart = user.cart.filter(
      item => item && item.productId && item.productId.price
    );

    // 💰 Calculate total safely
    const total = validCart.reduce((sum, item) => {
      return sum + item.productId.price * (item.quantity || 1);
    }, 0);

    // (Optional but recommended) replace cart with clean version for rendering
    user.cart = validCart;

    return res.render("checkout", {
      cart: validCart,
      total
    });

  } catch (err) {
    console.log("Checkout error:", err);
    return res.status(500).send("Checkout page error");
  }
});
app.post("/checkout", async (req, res) => {
  try {
    const user = await UserModel.findById(req.session.user._id)
      .populate("cart.productId");

    const total = user.cart.reduce((sum, item) => {
      return sum + item.productId.price * item.quantity;
    }, 0);

  await Order.create({
  userId: user._id,

  // items: user.cart.map(item => ({
  //   name: item.productId.name,
  //   price: item.productId.price,
  //   quantity: item.quantity,
  //   image: item.productId.image
  // })),

  items: user.cart.map(item => ({

  productId: item.productId._id,

  name: item.productId.name,
  price: item.productId.price,
  image: item.productId.image,

  quantity: item.quantity

})),

  total,

  fullname: req.body.fullname,
  phone: req.body.phone,
  address: req.body.address,
  city: req.body.city,
  notes: req.body.notes
});

    // clear cart
    user.cart = [];
    await user.save();

    // res.send("Order placed successfully ✅");
    req.session.orderSuccess = "Order placed successfully 🎉";
res.redirect("/orders?success=1");

  } catch (err) {
    console.log(err);
    res.send("Checkout error");
  }
});
// profile start
app.get("/profile", async (req, res) => {
  try {

    if (!req.session.user) {
      return res.redirect("/login");
    }

    const user = await UserModel.findById(req.session.user._id);

    const posts = await Post.find({
      creator: req.session.user._id
    }).sort({ createdAt: -1 });

    res.render("profile", {
      user,
      posts
    });

  } catch (error) {
    console.log(error);
    res.send("Profile page error");
  }
});
// ORDER DETAIL PAGE

app.get("/orders", async (req, res) => {
  try {
    if (!req.session.user) return res.redirect("/login");

    const orders = await Order.find({ userId: req.session.user._id })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.render("orders", {
      orders,
      success: req.query.success === "1"
    });

  } catch (err) {
    console.log(err);
    res.send("Orders page error");
  }
});
// PRODUCT
app.get("/product/:id", async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.redirect("/");
    }

    // FIND OPEN GROUP
    let group = await GroupBuy.findOne({
      productId: product._id,
      status: "open"
    });

    // TEMP FAKE DATA FOR TESTING UI
    if (!group) {
      group = {
        members: [1],
        status: "open"
      };
    }

    // ===========================
    // RELATED PRODUCTS
    // ===========================

    // Same category (excluding current product)
    const relatedProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id }
    }).limit(5);

    // Classy
    const classyProducts = await Product.find({
      category: "classy",
      _id: { $ne: product._id }
    }).limit(5);

    // Trendy
    const trendyProducts = await Product.find({
      category: "trendy",
      _id: { $ne: product._id }
    }).limit(5);

    // Modest
    const modestProducts = await Product.find({
      category: "modest",
      _id: { $ne: product._id }
    }).limit(5);

    res.render("product", {
      product,
      group,

      relatedProducts,
      classyProducts,
      trendyProducts,
      modestProducts
    });

  } catch (err) {

    console.log(err);
    res.send("Product page error");

  }

});

// app.get("/product/:id", async (req, res) => {

//   try {

//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.redirect("/");
//     }
//     let group = await GroupBuy.findOne({
//   productId: product._id,
//   status: "open",
  
  
// });

// TEMP FAKE DATA FOR TESTING UI
// if (!group) {

//   group = {
//     members: [1],
//     status: "open"
//   };

// }

//     res.render("product", {
//       product,
//       group
//     });

//   } catch (err) {

//     console.log(err);

//     res.send("Product page error");
//   }

// });
/* -------- AUTH -------- */

// Register
app.get("/register", (req, res) => {
res.render("register", {
    error: null,
    success: req.query.success
  });
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.render("register", { error: "All fields required" });
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.render("register", { error: "Email exists" });
  }

  const hashed = await bcrypt.hash(password, 12);

  const user = new UserModel({ username, email, password: hashed });
  await user.save();

  req.session.isAuth = true;
  req.session.user = user;

  res.redirect("/");
});

// Login
app.get("/login", (req, res) => res.render("login"));

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await UserModel.findOne({ email });
//   if (!user) return res.send("User not found");

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.send("Wrong password");

//   req.session.isAuth = true;
//   req.session.user = user;

//   res.redirect("/");
// });

app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await UserModel.findOne({ email });

    if (!user) {

      req.session.error = "User not found";
      return res.redirect("/login");

    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {

      req.session.error = "Incorrect password";
      return res.redirect("/login");

    }

    req.session.isAuth = true;
    req.session.user = user;

    req.session.success = "Login successful ✅";

    res.redirect("/");

  } catch (err) {

    console.log(err);

    req.session.error = "Something went wrong";
    res.redirect("/login");

  }

});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
});

// cloudinary
app.post("/upload", upload.single("image"), (req, res) => {

  console.log(req.file.path);

  res.json({
    imageUrl: req.file.path
  });

});

/* -------- POSTS -------- */

// Create post

app.post("/create", upload.single("image"), async (req, res) => {
  try {
    if (!req.session.user) return res.redirect("/login");

    const post = new Post({
      text: req.body.text,
      image: req.file ? req.file.path : "",
      creator: req.session.user._id,
      members: [req.session.user._id],
      groupSize: 4
    });

    await post.save();

    res.redirect("/feed");

  } catch (err) {
    console.log(err);
    res.send("Error creating post");
  }
});

// Join post
app.post("/join/:id", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const post = await Post.findById(req.params.id);
  if (!post) return res.redirect("/feed");

  const userId = req.session.user._id;

  // prevent duplicate
  if (post.members.some(m => m.toString() === userId.toString())) {
    return res.redirect("/feed");
  }

  // prevent full
  if (post.members.length >= post.groupSize) {
    return res.redirect("/feed");
  }

  post.members.push(userId);

  if (post.members.length === post.groupSize) {
    post.isFull = true;
  }

  await post.save();
  res.redirect("/feed");
});

/* -------- SOCKET.IO (SECURED) -------- */

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("joinRoom", async (postId) => {
    const userId = socket.handshake.auth.userId;
    if (!userId) return;

    const post = await Post.findById(postId);
    if (!post) return;

    const isMember = post.members.some(m => m.toString() === userId);

    if (!isMember) {
      console.log("❌ Unauthorized join attempt");
      return;
    }

    socket.join(postId);
  });

  socket.on("chatMessage", async (data) => {
    const userId = socket.handshake.auth.userId;

    const post = await Post.findById(data.postId);
    if (!post) return;

    const isMember = post.members.some(m => m.toString() === userId);
    if (!isMember) return;

    io.to(data.postId).emit("message", data);
  });
});

// modest
app.get("/modest", async (req, res) => {
  try {

    const products = await Product.find({
      category: "modest"
    });

    res.render("modest", {
      products
    });

  } catch (err) {
    console.log(err);
    res.send("Error loading modest products");
  }
});

// contact


// GET CONTACT PAGE
app.get("/contact", (req, res) => {
    res.render("contact", {
        success: req.query.success,
        error: req.query.error
    });
});

// POST CONTACT FORM
app.post("/contact", async (req, res) => {
    try {
        const { fullName, phone, email, subject, message } = req.body;

        await Contact.create({
            fullName,
            phone,
            email,
            subject,
            message
        });

        return res.redirect("/contact?success=true");

    } catch (err) {
        console.error(err);
        return res.redirect("/contact?error=true");
    }
});

/* -------- START SERVER -------- */

// server.listen(5000, () => {
//   console.log("🚀 Running on http://localhost:5000");
// });
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Running on port ${PORT}`);
});