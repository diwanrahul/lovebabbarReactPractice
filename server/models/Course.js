const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
    },
    courseDescription:{
        type:String,
    },
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    whatYouWillLearn: {
        type:String,
    },
    courseContent : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Section",
        },
    ],
    ratingAndReviews: [
        {
            types:mongoose.Schema.types.ObjectId,
            ref : "RatingAndReview",
        },
    ],
    price:{
        type: Number,
    },
    thumbnail:{
        type: String,
    },
    tag: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Tag",
    },
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }]
});

module.exports = mongoose.model("Course", courseSchema);