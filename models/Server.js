io.on("connection", (socket) => {
  socket.on("joinRoom", (postId) => {
    socket.join(postId);
  });

  socket.on("chatMessage", (data) => {
    io.to(data.postId).emit("message", data);
  });
});