let mongoose =  require('mongoose');

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    genre:{
        type:String,
        required:true
    },
    Stars:{
        hero:{
            type:String,
            required:true
        },
        heroine:{
            type:String,
            required:true
        }
    }
})

module.exports =  mongoose.model('Movie',movieSchema);