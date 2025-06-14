const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.get("/ping",(req,res)=>{
    return res.status(200).send("pong");
})

const chatbotRouter = require("./controller/chatbotRouter");
const locationSearchRouter = require("./controller/locationSearchRouter");
const socialFeaturesRouter = require("./controller/socialFeaturesRouter");
const navigationRouter = require("./controller/navigationRouter");

app.get("/", (req, res) => {
    res.send("TripThreads backend is running!");
});

app.use("/api/chatbot",chatbotRouter);
app.use("/locationSearch",locationSearchRouter);
app.use("/socialFeatures",socialFeaturesRouter);
app.use("/navigation",navigationRouter);




app.listen(3000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Server running on port 3000");
    } catch (error) {
        console.log("Error",error)
    }
});
