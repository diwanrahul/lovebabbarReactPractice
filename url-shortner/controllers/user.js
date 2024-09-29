const User = require("../models/user");
const {v4 : uuidv4} = require("uuid")
const {setUser} = require("../services/auth")
const handleUserSignup = async(req, res)=>{
    const {name, email, password} = req.body;
    await User.create({
        name, 
        email,
        password,
    });
    return res.render("home");
}
const handleUserLogin = async(req, res)=>{
    const {email, password} = req.body;
    console.log("email password => ", email
        , password
    )
    const user = await User.find({email, password});
    console.log("user",user)
    if(!user){
        return res.render("login",{
            error:"invalid email or password",
        })
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId)
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}