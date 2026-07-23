import React, { useState, useEffect } from 'react';
import { Save, X, Image, Eye, EyeOff } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';

const CATEGORIES = ['Software Development', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'SEO', 'Blockchain', 'Cloud', 'Design', 'Business'];

export const AddBlogPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '', slug: '', excerpt: '', content: '',
    category: '', tags: '', featuredImage: '', author: 'Exytex Team', status: 'draft'
  });
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit && id) {
      setLoading(true);
      api.get(`/blogs/${id}`).then(res => {
        const b = res.data;
        setFormData({
          title: b.title || '', slug: b.slug || '', excerpt: b.excerpt || '',
          content: b.content || '', category: b.category || '',
          tags: Array.isArray(b.tags) ? b.tags.join(', ') : b.tags || '',
          featuredImage: b.featuredImage || '', author: b.author || 'Exytex Team',
          status: b.status || 'draft'
        });
        setImagePreview(b.featuredImage || '');
      }).catch(() => alert('Failed to load blog')).finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'title' && !isEdit) {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
    if (name === 'featuredImage') setImagePreview(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      };
      if (isEdit) {
        await api.put(`/blogs/${id}`, payload);
        setSuccess('Blog updated successfully!');
      } else {
        await api.post('/blogs', payload);
        setSuccess('Blog published successfully!');
      }
      setTimeout(() => navigate('/blogs'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save blog');
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Blog' : 'Add Blog'}</h1>
          <p className="mt-1 text-sm text-gray-500">{isEdit ? 'Update your blog post' : 'Create a new blog post'}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {previewMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {previewMode ? 'Edit' : 'Preview'}
          </button>
          <button onClick={() => navigate('/blogs')} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <X className="w-4 h-4" /> Cancel
          </button>
        </div>
      </div>

      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
      {success && <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg font-medium">✅ {success}</div>}

      {previewMode ? (
        /* Preview Mode */
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          {imagePreview && <img src={imagePreview} alt="Featured" className="w-full h-64 object-cover" />}
          <div className="p-8">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{formData.category || 'Uncategorized'}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{formData.title || 'Blog Title'}</h1>
            <p className="text-gray-500 text-sm mb-6">By {formData.author} · {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600 italic mb-6">{formData.excerpt}</p>
            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">{formData.content}</div>
          </div>
        </div>
      ) : (
        /* Edit Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Featured Image - First */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Image className="w-4 h-4 text-blue-600" /> Featured Image
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
                  setFormData(p => ({ ...p, featuredImage: res.data.url }));
                  setImagePreview(res.data.url);
                } catch { alert('Image upload failed'); }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            {imagePreview && (
              <div className="mt-3 relative">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg border border-gray-200" onError={() => setImagePreview('')} />
                <button type="button" onClick={() => { setImagePreview(''); setFormData(p => ({ ...p, featuredImage: '' })); }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Title & Header */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6 space-y-4">
            <h2 className="text-base font-semibold text-gray-900">Blog Header</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a compelling blog title" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">/blog/</span>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="auto-generated-from-title" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Short Description)</label>
              <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description shown in blog listing..." />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Blog Content *</h2>
            <textarea name="content" value={formData.content} onChange={handleChange} required rows={18}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              placeholder="Write your full blog content here. You can use HTML tags for formatting..." />
            <p className="text-xs text-gray-400 mt-1">Tip: You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt; for formatting</p>
          </div>

          {/* Meta */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Blog Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select name="category" value={formData.category} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                  <option value="">Select category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select name="status" value={formData.status} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Author name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="react, nodejs, web development" />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium">
              <Save className="w-4 h-4" />
              {isSubmitting ? 'Saving...' : isEdit ? 'Update Blog' : 'Publish Blog'}
            </button>
            <button type="button" onClick={() => navigate('/blogs')}
              className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
