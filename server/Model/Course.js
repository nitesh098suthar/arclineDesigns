import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type : String,
        // required : [true, "Please enter course title"],
        minLength : [4, "Title at least 4 char"],
        maxLenght : [80, "Title exceed lenght"]
    },
    description : {
        type : String,
        required : [true, "Please enter course title"],
        minLength : [4, "Description at least 4 char"],
        maxLenght : [80, "Description exceed lenght"]
    },
    lectures : [{

        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        video : {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }, 
    }],

    poster : {
        public_id : {
            type : String,
            required : true
        },
        url : {
            type : String,
            required : true
        }
    },
    views : {
        type : Number,
        default : 0
    },
    numOfVideos : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
        required: [true, "Enter the auther name"],
    },
    createdAt : {   
        type : Date,
        default : Date.now
    }
})

export const Course = mongoose.model("Courses", courseSchema)