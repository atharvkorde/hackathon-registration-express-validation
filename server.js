
const express = require("express");
const path = require("path");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse form data and JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve CSS and other static files
app.use(express.static(path.join(__dirname, "public")));

// Register application routes
app.use("/", eventRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Hackathon Registration System running at http://localhost:${PORT}`);
});
