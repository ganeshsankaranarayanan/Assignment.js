const express = require('express');
const app=express();
const mongoose = require('mongoose');
app.use(express.json());
const postSchema = new mongoose.Schema({
    image:String,
    caption:String,
    comments:{
        type:[String],
        default:[]
    },
    likes:{
        type:Number,
        default:0
    }
});
const Post = mongoose.model('post',postSchema);
app.get('/posts', async (req,res)=>{
    const posts = await Post.find({});
    res.send(posts);
});
app.get('/posts/:id', async (req,res)=>{
    const id =req.params.id;
    const posts = await Post.findByID(IDBRequest);
    res.send(posts);
});
app.post('/posts',async (req,res)=>{
    const image = req.body.image;
    const caption =req.body.caption;
    const post =new Post({
        image:image,
        caption:caption
    });
    await post.save();
    res.send(post);
});
app.put('/posts/:id',async (req,res)=>{
    const id = req.params.id;
    const caption =req.body.caption;
    const post =await Post.findById(id);
    post.caption =caption;
    await post.save();
    res.send (post);
});
app.delete('/posts/:id',async (req,res)=>{
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.send('Post deleted successfully');
});
app.put('/posts/:id/like',async(req,res)=>{
    const id  = req.paramas.id;
    const post =await Post.findById(id);
    post.likes = post.likes + 1;
    await post.save();
    res.send(post);
});
app.put('/posts/:id/unlike',async(req,res)=>{
    const id  = req.paramas.id;
    const post =await Post.findById(id);
    post.likes = post.likes - 1;
    await post.save();
    res.send(post);
});
app.put('/posts/:id/comments',async(req,res)=>{
    const id  = req.paramas.id;
    const comment =req.boldy.comment;
    const post =await Post.findById(id);
    post.comments.push(comment);
    await post.save();
    res.send(post);
});
app.put('/posts/:id/comments',async(req,res)=>{
    const id  = req.paramas.id;
    const post =await Post.findById(id);
    res.send(post.comments);
});
app.put('/posts/:id/like',async(req,res)=>{
    const id  = req.paramas.id;
    const post =await Post.findById(id);
    res.send(post.likes);
});
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
    mongoose.connect("mongodb+srv://ganeshsankaranarayanan:balaganesh@cluster0.1bl4cdn.mongodb.net/").then(() =>{
        console.log('Connected to the database!');
    })
});