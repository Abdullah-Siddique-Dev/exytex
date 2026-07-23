const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { authMiddleware: auth } = require('../middleware/auth');

// IMPORTANT: Specific routes must come BEFORE /:id routes

// Get blog statistics (admin) - must be before /:id
router.get('/stats/overview', auth, async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: 'published' });
    const draftBlogs = await Blog.countDocuments({ status: 'draft' });
    const totalViews = await Blog.aggregate([{ $group: { _id: null, total: { $sum: '$views' } } }]);
    const totalLikes = await Blog.aggregate([{ $group: { _id: null, total: { $sum: '$likes' } } }]);
    res.json({
      totalBlogs, publishedBlogs, draftBlogs,
      totalViews: totalViews[0]?.total || 0,
      totalLikes: totalLikes[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching statistics', error: error.message });
  }
});

// Get all blogs (public - for frontend)
router.get('/public', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, tag, search } = req.query;
    const query = { status: 'published' };
    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-content');
    const count = await Blog.countDocuments(query);
    res.json({ blogs, totalPages: Math.ceil(count / limit), currentPage: page, total: count });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
});

// Get single blog by slug (public)
router.get('/public/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: 'published' });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    blog.views += 1;
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error: error.message });
  }
});

// Get all blogs (admin)
router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 50, status, category, search } = req.query;
    const query = {};
    if (status) query.status = status;
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } }
      ];
    }
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await Blog.countDocuments(query);
    res.json({ blogs, totalPages: Math.ceil(count / limit), currentPage: page, total: count });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
});

// Get single blog by ID (admin)
router.get('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error: error.message });
  }
});

// Create blog (admin)
router.post('/', auth, async (req, res) => {
  try {
    const { title, slug, excerpt, content, featuredImage, category, tags, author, status } = req.body;
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) return res.status(400).json({ message: 'A blog with this slug already exists' });
    const blog = new Blog({
      title, slug, excerpt, content, featuredImage, category,
      tags: tags ? (Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim())) : [],
      author: author || 'Exytex Team',
      status: status || 'draft'
    });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error: error.message });
  }
});

// Update blog (admin)
router.put('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    const { title, slug, excerpt, content, featuredImage, category, tags, author, status } = req.body;
    if (slug && slug !== blog.slug) {
      const existing = await Blog.findOne({ slug, _id: { $ne: req.params.id } });
      if (existing) return res.status(400).json({ message: 'A blog with this slug already exists' });
    }
    if (title) blog.title = title;
    if (slug) blog.slug = slug;
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (content) blog.content = content;
    if (featuredImage !== undefined) blog.featuredImage = featuredImage;
    if (category) blog.category = category;
    if (tags) blog.tags = Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim());
    if (author) blog.author = author;
    if (status) blog.status = status;
    await blog.save();
    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error: error.message });
  }
});

// Delete blog (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error: error.message });
  }
});

module.exports = router;
