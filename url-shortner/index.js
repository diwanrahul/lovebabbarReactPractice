//global library
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const {DbConnect} = require("./connect")
const cookieParser = require("cookie-parser")
const {restrictToLoggedInUserOnly, checkAuth} = require("./middlewares/auth")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


//mongoDB connection
DbConnect("mongodb://localhost:27017/url-shortner")
.then(()=> console.log("MongoDB connected"));


//routes
const staticRoute = require("./routes/staticRouter")
const urlRoute = require("./routes/url")
const userRoute = require("./routes/user")


//models
const URL = require("./models/url")




//APIs
app.use("/", checkAuth, staticRoute)
app.get("/test", async(req, res)=>{
    const allUrls = await URL.find({});
    res.render("home",{
        urls:allUrls, 
    });
})
app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true }
        );

        // console.log("entry url => ", entry)
        if (!entry) {
            return res.status(404).send("Short URL not found");
        }
        let redirectUrl = entry.redirectUrl;

        // Ensure the redirect URL has a protocol
        if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
            redirectUrl = 'https://' + redirectUrl;
        }

        console.log("redirect Url = >",redirectUrl)
        res.redirect(redirectUrl);

    } catch (error) {
        console.error("Error during redirection:", error);
        res.status(500).send("An error occurred");
    }
});
app.use("/user",  userRoute);



app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})