var port = process.env.PORT || 5000 || 8080;//FOR HEROKU port Asignation
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any
  //console.log(req.file);
  res.send({'size':req.file.size + ' Bytes'});
})
 
/*app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files 
  // req.body will contain the text fields, if there were any 
})*/
 
/*var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files 
  // 
  // e.g. 
  //  req.files['avatar'][0] -> File 
  //  req.files['gallery'] -> Array 
  // 
  // req.body will contain the text fields, if there were any 
})*/


app.listen(port, function () {
  console.log('File Metadata Api Server listening on port '+port+'!');
});



