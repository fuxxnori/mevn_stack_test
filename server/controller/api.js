const Post = require("../model/post.js");

module.exports = class API{
    static async fetchAllPost(req,res){
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    //fetch post by Id
    static async fetchPostById(req,res){
        const id = req.params.id;
        const post = await Post.findById(id);
        try{
            res.status(200).json(post);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    //create post
    static async createPost(req,res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try{
            await Post.create(post);
            res.status(201).json({message:'Post created successfully!'});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    //update post
    static async updatePost(req,res){
        res.send("hello world from updatePost")
    }

    //delete post
    static async deletePost(req,res){
        res.send("hello world from deletePost")
    }
}