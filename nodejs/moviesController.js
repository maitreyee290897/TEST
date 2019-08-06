let Movie = require('./movieModel')

exports.create = function(req,res){
    console.log("came inside save method of Method Controller")
    let movie = new Movie();
    movie.name= req.body.name;
    movie.genre = req.body.genre;
    movie.Stars.hero = req.body.Stars.hero;
    movie.Stars.heroine = req.body.Stars.heroine;
    movie.save(function(err){
        console.log('came inside save function of movieSchema');
        console.log(err);
        res.json({
            status:'Successfully saved',
            data: movie
        })
    })
};

exports.listAll = function(req,res){

    Movie.find(function(err,movies){
        if(err){
            res.json(err);
        }
        else{
            res.json({
                data : movies
        });
        }
    });
};

exports.findById = function(req,res){
    console.log(req.params.id);
    Movie.find({'_id' : req.params.id },function(err,movie){
            if(err){
                res.send(err);
            }
            else{
                res.json({
                    status:'Success',
                    message:'Movies retrieved successfully',
                    data : movie
            });
            }
            
    });

}

exports.delete = function(req,res){
    console.log("inside delete method");
    Movie.remove({'_id':req.params.id},function(err,movie){
        if(err){
            res.send(err);
        }
        else{
            res.json({
                data:movie
            })
        }
    })
}

exports.update = function(req,res){
    console.log(req.params.id);
    Movie.findOne({'_id':req.params.id},function(err,movie){
        console.log(req.params.id);
        if(err)
            res.send(err)
        else{
            console.log(req.body.name);
            movie.name = req.body.name
            movie.save(function(err){
                if(err)
                    res.send(err)
                else{
                    res.json({
                        status:'Success',
                        message:'Updated Successfully'
                    })
                }

            })
        }
    })
}