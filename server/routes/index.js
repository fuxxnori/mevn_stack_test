const express = require("express");
const API = require("../controller/api");
const multer = require("multer")
var router = express.Router();

//multer middleware
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./server/uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});
let upload = multer({
    storage:storage
}).single("image");

router.get("/",API.fetchAllPost);
router.get("/:id",API.fetchPostById);
router.post("/",upload,API.createPost);
router.patch("/:id",API.updatePost);
router.delete("/:id",API.deletePost);

module.exports = router;