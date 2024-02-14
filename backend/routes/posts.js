const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const verifyToken = require('../verifyToken');

// CREATE
router.post("/create", verifyToken, async (req, res) => {
    try {
        const newPost = new Post(req.body);
        newPost.userId = req.user._id; 
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (req.user._id !== post.userId.toString()) {
            return res.status(403).json({ message: "Unauthorized to update this post" });
        }

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (req.user._id !== post.userId.toString()) {
            return res.status(403).json({ message: "Unauthorized to delete this post" });
        }

        await Comment.deleteMany({ postId: req.params.id });
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET POST DETAILS
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET POSTS
router.get("/", async (req, res) => {
    const query = req.query;
    try {
        const searchFilter = {
            title: { $regex: query.search, $options: "i" }
        };
        const posts = await Post.find(query.search ? searchFilter : null);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER POSTS
router.get("/user/:userId", verifyToken, async (req, res) => {
    try {
        const userId = req.params.userId;
        if (userId !== req.user._id) {
            return res.status(403).json({ message: "Unauthorized to access these posts" });
        }
        const posts = await Post.find({ userId });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
