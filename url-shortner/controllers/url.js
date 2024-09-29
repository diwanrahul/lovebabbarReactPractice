const shortid = require("shortid");
const URL = require("../models/url")
const handleGenerateNewShortURL = async (req, res)=>{
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error:"url is required"})
    }

    const shortID = shortid();
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitedHistory:[],
        createdBy : req.user._id
    });

    return res.render("home", {
        id:shortID,
    })
    // return res.json({id : shortID});
}

const handleGetAnalytics = async (req, res)=>{
    const shortId = req.params.shortId;
    console.log("req. praram => ", req.params.shortId)
    const entry = await URL.findOne({shortId});
    const getAnalytics = entry.visitHistory.length;
    console.log("get visit click=>", getAnalytics);
    return res.json(entry)
}
 
module.exports = {
    handleGenerateNewShortURL, 
    handleGetAnalytics
}