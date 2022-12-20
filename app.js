const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const weatherRoutes = require("./routes/weather");

app.set("view engine", "ejs");

// Middleware route
app.use("/", weatherRoutes);

// app.get('/',(req, res))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));
