module.exports = function(app, fs){
    app.get('/',function(req,res){
        res.render('index',{
            title : 'MY HOME',
            length:5
        })
    });
};