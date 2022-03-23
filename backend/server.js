const express = require('express')
const colors = require('colors')
const path = require("path")
const dotenv = require('dotenv').config()
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

const userRoutes = require('./routes/userRoutes')
const tenantRoutes = require('./routes/tenantRoutes')
const accountRoutes = require('./routes/accountRoutes')
const propertyRoutes = require('./routes/propertyRoutes')

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
app.use("/api/users", userRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/properties", propertyRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000

app.listen (
    port,
    console.log(`Server started on port ${port} in ${process.env.NODE_ENV}`)
)