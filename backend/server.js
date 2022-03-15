const express = require('express')
const colors = require('colors')
const path = require("path")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const connectDB = require('./config/db')

const contactRoutes = require('./routes/contactRoutes')

connectDB()

const app = express()
const router = express.Router();

app.use(express.json());

// Default Route - Index Page
app.use("/", router);
router.get("/", function (req, res) {
    const __dirname = path.resolve();
    res.sendFile(path.join(__dirname + "/index.html"));
});

// ROUTES
app.use("/api/contacts", contactRoutes);

app.listen (
    port,
    console.log(`Server started on port ${port} in ${process.env.NODE_ENV}`)
)