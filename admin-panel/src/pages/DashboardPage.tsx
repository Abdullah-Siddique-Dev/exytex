import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';
import { 
  LayoutDashboard, 
  PenTool, 
  FolderKanban,
  TrendingUp,
  Users,
  Activity,
  Eye,
  Heart
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { admin } = useAuth();
  const username = localStorage.getItem('adminUsername') || admin?.username || 'Admin';
  const profilePicture = localStorage.getItem('adminProfilePicture') || '';

  const [blogStats, setBlogStats] = useState({ totalBlogs: 0, publishedBlogs: 0, draftBlogs: 0, totalViews: 0, totalLikes: 0 });
  const [projectStats, setProjectStats] = useState({ total: 0, published: 0, draft: 0, featured: 0 });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogRes, projectRes] = await Promise.allSettled([
          api.get('/blogs/stats/overview'),
          api.get('/projects/stats/overview')
        ]);
        if (blogRes.status === 'fulfilled') setBlogStats(blogRes.value.data);
        if (projectRes.status === 'fulfilled') setProjectStats(projectRes.value.data);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { name: 'Total Blogs', value: loadingStats ? '...' : String(blogStats.totalBlogs), icon: PenTool, color: 'bg-blue-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { name: 'Published Blogs', value: loadingStats ? '...' : String(blogStats.publishedBlogs), icon: Eye, color: 'bg-green-500', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { name: 'Total Projects', value: loadingStats ? '...' : String(projectStats.total), icon: FolderKanban, color: 'bg-purple-500', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { name: 'Blog Views', value: loadingStats ? '...' : String(blogStats.totalViews), icon: TrendingUp, color: 'bg-orange-500', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    { name: 'Blog Likes', value: loadingStats ? '...' : String(blogStats.totalLikes), icon: Heart, color: 'bg-pink-500', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
    { name: 'Featured Projects', value: loadingStats ? '...' : String(projectStats.featured), icon: Activity, color: 'bg-yellow-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
    { name: 'Active Users', value: '1', icon: Users, color: 'bg-teal-500', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
    { name: 'System Status', value: 'Active', icon: Activity, color: 'bg-emerald-500', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-3xl border-4 border-white shadow-lg">
                {username.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {username}! 👋
              </h1>
              <p className="text-blue-100 text-lg">
                Here's what's happening with your platform today
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <LayoutDashboard className="h-20 w-20 text-blue-200 opacity-50" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} dark:bg-opacity-20 p-3 rounded-lg`}>
                  <stat.icon className={`h-8 w-8 ${stat.textColor}`} />
                </div>
              </div>
            </div>
            <div className={`h-1 ${stat.color}`}></div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/blogs/add"
            className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border border-blue-200 dark:border-blue-800"
          >
            <div className="p-2 bg-blue-600 rounded-lg">
              <PenTool className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Add New Blog</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create a blog post</p>
            </div>
          </a>

          <a
            href="/projects/add"
            className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-200 dark:border-purple-800"
          >
            <div className="p-2 bg-purple-600 rounded-lg">
              <FolderKanban className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Add New Project</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Showcase your work</p>
            </div>
          </a>

          <a
            href="/settings"
            className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors border border-green-200 dark:border-green-800"
          >
            <div className="p-2 bg-green-600 rounded-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Profile Settings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Update your profile</p>
            </div>
          </a>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl shadow-md border border-purple-200 dark:border-purple-800 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-600 rounded-lg">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Getting Started
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to your EXYTEX admin panel! Start by adding your first blog post or project to showcase your work.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/blogs/add"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Create Blog Post
              </a>
              <a
                href="/projects/add"
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
              >
                Add Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
