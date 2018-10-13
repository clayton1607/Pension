const multer = require("multer");

const handleError = (err, res) => {
    res.status(500)
    res.contentType("text/plain")
    res.end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "/uploads"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});
var {app}=require('./views.js');

app.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    console.log(req.file.path);
    const tempPath = req.file.path;
    var image=Math.floor(100000 + Math.random() * 900000);
    var img=image.toString();
    var png ="image.png";
    var image_png=img.concat(png);
    const targetPath = path.join(__dirname, "Public/uploads",image_png);
    console.log(tempPath);
    console.log(targetPath);
    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);
           res.status(200)
          res.contentType("text/plain")
          res.send("File uploaded!");
          auction.query('UPDATE auction_ad SET image=? where username=?',[image_png,req.body.username],(err,res)=>{
            if (err)
              console.log(err);
            console.log("Image Updated updated");
          });
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);
