const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI/CD on Render is Working 🚀");
  res.send("Auto Deploy Test Successful 🔥");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});