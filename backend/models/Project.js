const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  subtitle: { type: String, trim: true, default: '' },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
  category: { type: String, trim: true, default: 'Web Development' },
  client: { type: String, trim: true, default: '' },
  author: { type: String, trim: true, default: 'Exytex Team' },
  website: { type: String, trim: true, default: '' },
  description: { type: String, required: true },
  challenge: { type: String, default: '' },
  solution: { type: String, default: '' },
  // Front cover image shown on Our Work listing page
  image: { type: String, default: '' },
  // Multiple images shown in project detail page
  images: [{ type: String }],
  technologies: [{ type: String, trim: true }],
  features: [{ type: String, trim: true }],
  results: [{ type: String, trim: true }],
  tags: [{ type: String, trim: true }],
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  featured: { type: Boolean, default: false },
  date: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

projectSchema.index({ slug: 1 });
projectSchema.index({ status: 1, createdAt: -1 });
projectSchema.index({ category: 1 });
projectSchema.index({ featured: 1 });

module.exports = mongoose.model('Project', projectSchema);
