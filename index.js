const express = require("express");
const cors = require("cors");
const { blogs, articles } = require("./data.js");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/v1/blogs", (req, res) => {
    res.json(blogs);
});

app.get("/v1/articles", (req, res) => {
    res.json(articles);
});

app.post("/v1/login", (req, res) => {
    const response = req.body;
    if(response.username === "Admin" &&
        response.password === "1234567890" &&
        response.email === "admin@gmail.com"
    ) {
        res.json({ message: "Login successful" });
    }
    res.json({ message: "Login failed" });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});