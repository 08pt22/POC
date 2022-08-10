const mongoose = require('mongoose');
//connect to the database and database name is meanDB and checking that db is connected or not
mongoose.connect('mongodb+srv://priya:<password>@cluster0.xq1h3to.mongodb.net/?retryWrites=true&w=majority',(err) =>{
    if(!err){
        console.log('DB Conenction Succesfully');
    }else{
        console.log('Error in Connection' + err);
    }
})

//here we are exporting variable  mongoose
module.export = mongoose;