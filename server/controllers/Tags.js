const Tag = require("../models/Tags");

//create tag ka handler function
exports.createTag = async (req, res) => {
    try {
            //fetch data
            const {name, description} = req.body;

            //validation
            if(!name || !description){
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                })
            }

            //create entry in DB
            const tagDetails = await Tag.create({
                name: name,
                description: description,
            });
            console.log(tagDetails);

            //return response
            return res.status(200).json({
                success: true,
                message:"Tag Created Successfully",
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}

for(int i=0;i<a.length;i++{
    if(1<= quantity.get(need.get(i)-1)){
        count++;
        quantity.set(need.get(i)-1, quantity.get(need.get(i)-1)-1);
    }
}