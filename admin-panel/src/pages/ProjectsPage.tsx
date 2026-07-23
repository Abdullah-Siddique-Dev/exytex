import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderKanban, Plus, Edit, Trash2, Eye, Search, Star } from 'lucide-react';
import { api } from '../services/api';

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  status: 'published' | 'draft';
  featured: boolean;
  image: string;
  client: string;
  createdAt: string;
  technologies: string[];
}

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = {};
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;
      const res = await api.get('/projects', { params });
      setProjects(res.data.projects || []);
    } catch (err) {
      console.error('Failed to fetch projects', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, [search, statusFilter]);

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await api.delete(`/projects/${deleteId}`);
      setProjects(prev => prev.filter(p => p._id !== deleteId));
      setDeleteId(null);
    } catch {
      alert('Failed to delete project');
    } finally {
      setDeleting(false);
    }
  };

  const toggleFeatured = async (project: Project) => {
    try {
      await api.put(`/projects/${project._id}`, { featured: !project.featured });
      setProjects(prev => prev.map(p => p._id === project._id ? { ...p, featured: !p.featured } : p));
    } catch { alert('Failed to update'); }
  };

  const toggleStatus = async (project: Project) => {
    try {
      const newStatus = project.status === 'published' ? 'draft' : 'published';
      await api.put(`/projects/${project._id}`, { status: newStatus });
      setProjects(prev => prev.map(p => p._id === project._id ? { ...p, status: newStatus } : p));
    } catch { alert('Failed to update status'); }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your portfolio projects</p>
        </div>
        <button onClick={() => navigate('/projects/add')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <Plus className="h-4 w-4 mr-2" /> Add Project
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search projects..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
          <option value="">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="bg-white shadow rounded-xl overflow-hidden border border-gray-200">
        {loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-3 text-sm text-gray-500">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="p-12 text-center">
            <FolderKanban className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-3 text-sm font-medium text-gray-900">No projects yet</h3>
            <p className="mt-1 text-sm text-gray-500">Add your first portfolio project.</p>
            <button onClick={() => navigate('/projects/add')}
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" /> Add Project
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map(project => (
                  <tr key={project._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <FolderKanban className="w-5 h-5 text-purple-500" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-gray-900 line-clamp-1">{project.title}</p>
                          <p className="text-xs text-gray-500">{project.client || 'No client'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-full">{project.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => toggleStatus(project)}
                        className={`px-2 py-1 text-xs rounded-full font-medium transition-colors ${
                          project.status === 'published' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                        }`}>
                        {project.status}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => toggleFeatured(project)}
                        className={`p-1.5 rounded-lg transition-colors ${project.featured ? 'text-yellow-500 bg-yellow-50' : 'text-gray-300 hover:text-yellow-400'}`}>
                        <Star className="w-4 h-4" fill={project.featured ? 'currentColor' : 'none'} />
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{new Date(project.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <a href={`http://localhost:5173/our-work/${project.slug}`} target="_blank" rel="noreferrer"
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                          <Eye className="w-4 h-4" />
                        </a>
                        <button onClick={() => navigate(`/projects/edit/${project._id}`)}
                          className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteId(project._id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Project?</h3>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={handleDelete} disabled={deleting}
                className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg disabled:opacity-50">
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
              <button onClick={() => setDeleteId(null)}
                className="flex-1 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
