const express = require("express");
const app = express();
const { PORT = 8080 } = process.env;
const { join } = require("path");

app.use(express.json());

const distDir = join(__dirname, "..", "dist", "devjam-podcasts");
app.use(express.static(distDir));

// Init the server
const server = app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});

app.use("/api", require("./listen-notes/search"));
app.use("/api", require("./listen-notes/genres"));
app.use("/api", require("./listen-notes/best_podcasts_by_genre"));
app.use("/api", require("./listen-notes/just_listen"));
app.use("/api", require("./listen-notes/podcasts"));
app.use("/api", require("./listen-notes/episodes"));
app.use("/api", require("./listen-notes/curated_podcasts"));

app.get("/api/status", function(req, res) {
  res.status(200).json({ status: "UP" });
});


app.get("*", (req, res) => {
  return res.sendFile(join(__dirname, "..", "dist", "devjam-podcasts", "index.html"));
});
