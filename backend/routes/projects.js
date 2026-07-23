const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { authMiddleware: auth } = require('../middleware/auth');

// GET stats (admin) - must be BEFORE /:id
router.get('/stats/overview', auth, async (req, res) => {
  try {
    const total = await Project.countDocuments();
    const published = await Project.countDocuments({ status: 'published' });
    const draft = await Project.countDocuments({ status: 'draft' });
    const featured = await Project.countDocuments({ featured: true });
    res.json({ total, published, draft, featured });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stats', error: err.message });
  }
});

// GET all published projects (public)
router.get('/public', async (req, res) => {
  try {
    const { category, search, featured } = req.query;
    const query = { status: 'published' };
    if (category && category !== 'All') query.category = category;
    if (featured === 'true') query.featured = true;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { technologies: { $regex: search, $options: 'i' } }
      ];
    }
    const projects = await Project.find(query).sort({ createdAt: -1 });
    res.json({ projects, total: projects.length });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
});

// GET single project by slug (public)
router.get('/public/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug, status: 'published' });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project', error: err.message });
  }
});

// GET all projects (admin)
router.get('/', auth, async (req, res) => {
  try {
    const { status, category, search } = req.query;
    const query = {};
    if (status) query.status = status;
    if (category && category !== 'All') query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    const projects = await Project.find(query).sort({ createdAt: -1 });
    res.json({ projects, total: projects.length });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
});

// GET single project by ID (admin)
router.get('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching project', error: err.message });
  }
});

// POST create project (admin)
router.post('/', auth, async (req, res) => {
  try {
    const { slug } = req.body;
    const existing = await Project.findOne({ slug });
    if (existing) return res.status(400).json({ message: 'A project with this slug already exists' });

    const project = new Project({
      ...req.body,
      technologies: Array.isArray(req.body.technologies)
        ? req.body.technologies
        : (req.body.technologies || '').split(',').map(t => t.trim()).filter(Boolean),
      features: Array.isArray(req.body.features)
        ? req.body.features
        : (req.body.features || '').split('\n').map(f => f.trim()).filter(Boolean),
      results: Array.isArray(req.body.results)
        ? req.body.results
        : (req.body.results || '').split('\n').map(r => r.trim()).filter(Boolean),
      tags: Array.isArray(req.body.tags)
        ? req.body.tags
        : (req.body.tags || '').split(',').map(t => t.trim()).filter(Boolean),
      images: Array.isArray(req.body.images) ? req.body.images : []
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err.message });
  }
});

// PUT update project (admin)
router.put('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    // Check slug conflict
    if (req.body.slug && req.body.slug !== project.slug) {
      const existing = await Project.findOne({ slug: req.body.slug, _id: { $ne: req.params.id } });
      if (existing) return res.status(400).json({ message: 'A project with this slug already exists' });
    }

    const updates = {
      ...req.body,
      technologies: Array.isArray(req.body.technologies)
        ? req.body.technologies
        : (req.body.technologies || '').split(',').map(t => t.trim()).filter(Boolean),
      features: Array.isArray(req.body.features)
        ? req.body.features
        : (req.body.features || '').split('\n').map(f => f.trim()).filter(Boolean),
      results: Array.isArray(req.body.results)
        ? req.body.results
        : (req.body.results || '').split('\n').map(r => r.trim()).filter(Boolean),
      tags: Array.isArray(req.body.tags)
        ? req.body.tags
        : (req.body.tags || '').split(',').map(t => t.trim()).filter(Boolean),
      images: Array.isArray(req.body.images) ? req.body.images : project.images
    };

    Object.assign(project, updates);
    await project.save();
    res.json({ message: 'Project updated successfully', project });
  } catch (err) {
    res.status(500).json({ message: 'Error updating project', error: err.message });
  }
});

// DELETE project (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting project', error: err.message });
  }
});

module.exports = router;
