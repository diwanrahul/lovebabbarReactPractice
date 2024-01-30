const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

//createRating
exports.createRating = async (req, res) => {
    try {
        //get user id
        const userId = req.user.id;

        //fetch data from req body
        const {rating, review, courseId} = req.body;

        //check if user is enrolled or not
        const courseDetails = await Course.findOne(
            {_id: courseId,
            studentsEnrolled: {$eleMatch: {$eq: userId}},
        });
        if(!courseDetails){
                    return res.status(404).json({
                        success: false,
                        message: "Student is not enrolled in the course",
                    });
                }
        //check if user already reviewed the course
       

        //create rating and review
        //update course with this rating/review
        //return response
        
    } catch (error) {
        
    }
}