const messageSchema = new mongoose.Schema({
  postId: String,
  userName: String,
  text: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", messageSchema);       