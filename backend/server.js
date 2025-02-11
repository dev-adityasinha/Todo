const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

mongoose.connect("")


app.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
})

app.get('/health-check', (req, res, next) => {
    res.send("Server is running");
});


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})