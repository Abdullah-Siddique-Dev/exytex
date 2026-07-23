import React, { useState, useEffect } from 'react';
import { Save, X, Image, Plus, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';

const CATEGORIES = ['Web Development', 'Mobile App Development', 'Design', 'SEO', 'Digital Marketing', 'Blockchain', 'Software Development', 'Cloud Solutions'];

export const AddProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '', subtitle: '', slug: '', category: 'Web Development',
    client: '', author: 'Exytex Team', website: '', date: '',
    description: '', challenge: '', solution: '',
    technologies: '', features: '', results: '', tags: '',
    image: '', status: 'published', featured: false
  });
  const [images, setImages] = useState<string[]>(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit && id) {
      setLoading(true);
      api.get(`/projects/${id}`).then(res => {
        const p = res.data;
        setFormData({
          title: p.title || '', subtitle: p.subtitle || '', slug: p.slug || '',
          category: p.category || 'Web Development', client: p.client || '',
          author: p.author || 'Exytex Team', website: p.website || '', date: p.date || '',
          description: p.description || '', challenge: p.challenge || '', solution: p.solution || '',
          technologies: Array.isArray(p.technologies) ? p.technologies.join(', ') : '',
          features: Array.isArray(p.features) ? p.features.join('\n') : '',
          results: Array.isArray(p.results) ? p.results.join('\n') : '',
          tags: Array.isArray(p.tags) ? p.tags.join(', ') : '',
          image: p.image || '', status: p.status || 'published', featured: p.featured || false
        });
        setImages(p.images?.length ? p.images : ['']);
      }).catch(() => alert('Failed to load project')).finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (name === 'title' && !isEdit) {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleImageChange = (index: number, value: string) => {
    setImages(prev => prev.map((img, i) => i === index ? value : img));
  };

  const addImageField = () => setImages(prev => [...prev, '']);
  const removeImageField = (index: number) => setImages(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const payload = {
        ...formData,
        images: images.filter(img => img.trim() !== '')
      };
      if (isEdit) {
        await api.put(`/projects/${id}`, payload);
      } else {
        await api.post('/projects', payload);
      }
      navigate('/projects');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save project');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Project' : 'Add Project'}</h1>
          <p className="mt-1 text-sm text-gray-500">{isEdit ? 'Update project details' : 'Add a new portfolio project'}</p>
        </div>
        <button onClick={() => navigate('/projects')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <X className="w-4 h-4" /> Cancel
        </button>
      </div>

      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cover Image (shown on Our Work listing page) */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Image className="w-4 h-4 text-blue-600" /> Cover Image (shown on Our Work page)
          </h2>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const form = new FormData();
              form.append('image', file);
              try {
                const res = await api.post('/upload/image', form, { headers: { 'Content-Type': 'multipart/form-data' } });
                setFormData(p => ({ ...p, image: res.data.url }));
              } catch { alert('Upload failed'); }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          {formData.image && (
            <div className="mt-3 relative">
              <img src={formData.image} alt="Cover" className="w-full h-48 object-cover rounded-lg border border-gray-200"
                onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
              <button type="button" onClick={() => setFormData(p => ({ ...p, image: '' }))}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Detail Images (shown on project detail page) */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Image className="w-4 h-4 text-purple-600" /> Detail Images (shown on project detail page)
            </h2>
            <label className="flex items-center gap-1 px-3 py-1.5 text-xs bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 cursor-pointer">
              <Plus className="w-3 h-3" /> Add Image
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={async (e) => {
                  const files = Array.from(e.target.files || []);
                  for (const file of files) {
                    const form = new FormData();
                    form.append('image', file);
                    try {
                      const res = await api.post('/upload/image', form, { headers: { 'Content-Type': 'multipart/form-data' } });
                      setImages(prev => [...prev.filter(i => i !== ''), res.data.url]);
                    } catch { alert('Upload failed'); }
                  }
                  if (e.target) e.target.value = '';
                }}
              />
            </label>
          </div>
          <div className="space-y-3">
            {images.filter(img => img !== '').map((img, index) => (
              <div key={index} className="relative">
                <img src={img} alt={`Detail ${index + 1}`} className="w-full h-32 object-cover rounded-lg border border-gray-200"
                  onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
                <button type="button" onClick={() => removeImageField(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
            {images.filter(i => i !== '').length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">No detail images yet. Click "Add Image" to upload.</p>
            )}
          </div>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Project Header</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. E-Commerce Platform" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Full-Stack Web Application" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
              <input type="text" name="slug" value={formData.slug} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="auto-generated-from-title" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
              <input type="text" name="client" value={formData.client} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Client name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select name="category" value={formData.category} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input type="text" name="date" value={formData.date} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. June 2024" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="https://project-website.com" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Project Content</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the project..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Challenge</label>
            <textarea name="challenge" value={formData.challenge} onChange={handleChange} rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="What was the main challenge?" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Solution</label>
            <textarea name="solution" value={formData.solution} onChange={handleChange} rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="How did you solve it?" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Technologies (comma separated)</label>
            <input type="text" name="technologies" value={formData.technologies} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="React, Node.js, MongoDB, AWS" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Key Features (one per line)</label>
            <textarea name="features" value={formData.features} onChange={handleChange} rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder={"User authentication\nReal-time notifications\nPayment integration"} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Results (one per line)</label>
            <textarea name="results" value={formData.results} onChange={handleChange} rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder={"50% increase in conversions\n10,000+ active users"} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
            <input type="text" name="tags" value={formData.tags} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="ecommerce, react, nodejs" />
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select name="status" value={formData.status} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input type="text" name="author" value={formData.author} onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input type="checkbox" name="featured" id="featured" checked={formData.featured}
                onChange={handleChange} className="w-4 h-4 text-blue-600 rounded" />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured Project</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium">
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Saving...' : isEdit ? 'Update Project' : 'Save Project'}
          </button>
          <button type="button" onClick={() => navigate('/projects')}
            className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
