import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FolderKanban, 
  PenTool, 
  LogOut, 
  Settings,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Plus,
  List,
  Moon,
  Sun
} from 'lucide-react';

export const Layout: React.FC = () => {
  const { admin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [blogsExpanded, setBlogsExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get updated data from localStorage
  const username = localStorage.getItem('adminUsername') || admin?.username || 'Admin';
  const email = localStorage.getItem('adminEmail') || admin?.email || '';
  const profilePicture = localStorage.getItem('adminProfilePicture') || '';

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  const blogsSubMenu = [
    { name: 'Add Blog', href: '/blogs/add', icon: Plus },
    { name: 'View Blogs', href: '/blogs', icon: List },
  ];

  const projectsSubMenu = [
    { name: 'Add Project', href: '/projects/add', icon: Plus },
    { name: 'View Projects', href: '/projects', icon: List },
  ];

  const settingsSubMenu = [
    { name: 'Profile Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isBlogsActive = location.pathname.startsWith('/blogs');
  const isProjectsActive = location.pathname.startsWith('/projects');
  const isSettingsActive = location.pathname.startsWith('/settings');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
          <div className="flex h-20 items-center justify-between px-4 bg-white border-b border-gray-200">
            <img 
              src="/exytex-logo.png" 
              alt="EXYTEX" 
              className="h-10 w-auto"
            />
            <button onClick={() => setSidebarOpen(false)} className="text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* User Profile Section */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className="text-sm font-semibold text-gray-900">{username}</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {/* Dashboard */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-500'}`} />
                {item.name}
              </Link>
            ))}

            {/* Blogs with Submenu */}
            <div>
              <button
                onClick={() => setBlogsExpanded(!blogsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isBlogsActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <PenTool className={`mr-3 h-5 w-5 ${isBlogsActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  Blogs
                </div>
                {blogsExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {blogsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {blogsSubMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Projects with Submenu - Mobile */}
            <div>
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isProjectsActive ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <FolderKanban className={`mr-3 h-5 w-5 ${isProjectsActive ? 'text-purple-600' : 'text-gray-500'}`} />
                  Projects
                </div>
                {projectsExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              {projectsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {projectsSubMenu.map((item) => (
                    <Link key={item.name} to={item.href} onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href) ? 'text-purple-700 bg-purple-50' : 'text-gray-600 hover:bg-gray-100'
                      }`}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Settings with Submenu */}
            <div>
              <button
                onClick={() => setSettingsExpanded(!settingsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isSettingsActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <Settings className={`mr-3 h-5 w-5 ${isSettingsActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  Settings
                </div>
                {settingsExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {settingsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {settingsSubMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-3 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className={`flex flex-col flex-grow ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
          {/* Logo */}
          <div className={`flex items-center justify-center h-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <img 
              src="/exytex-logo.png" 
              alt="EXYTEX" 
              className="h-12 w-auto"
            />
          </div>

          {/* User Profile Section */}
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center space-x-3">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{username}</div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Administrator</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {/* Dashboard */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? isDarkMode 
                      ? 'bg-blue-900/50 text-blue-300' 
                      : 'bg-blue-50 text-blue-700'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive(item.href) ? 'text-blue-400' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                {item.name}
              </Link>
            ))}

            {/* Blogs with Submenu */}
            <div>
              <button
                onClick={() => setBlogsExpanded(!blogsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isBlogsActive
                    ? isDarkMode 
                      ? 'bg-blue-900/50 text-blue-300' 
                      : 'bg-blue-50 text-blue-700'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <PenTool className={`mr-3 h-5 w-5 ${isBlogsActive ? 'text-blue-400' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  Blogs
                </div>
                {blogsExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {blogsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {blogsSubMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? isDarkMode 
                            ? 'text-blue-300 bg-blue-900/50' 
                            : 'text-blue-700 bg-blue-50'
                          : isDarkMode
                            ? 'text-gray-400 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Projects with Submenu - Desktop */}
            <div>
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isProjectsActive
                    ? isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-700'
                    : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <FolderKanban className={`mr-3 h-5 w-5 ${isProjectsActive ? 'text-purple-400' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  Projects
                </div>
                {projectsExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
              {projectsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {projectsSubMenu.map((item) => (
                    <Link key={item.name} to={item.href}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? isDarkMode ? 'text-purple-300 bg-purple-900/50' : 'text-purple-700 bg-purple-50'
                          : isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Settings with Submenu */}
            <div>
              <button
                onClick={() => setSettingsExpanded(!settingsExpanded)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isSettingsActive
                    ? isDarkMode 
                      ? 'bg-blue-900/50 text-blue-300' 
                      : 'bg-blue-50 text-blue-700'
                    : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <Settings className={`mr-3 h-5 w-5 ${isSettingsActive ? 'text-blue-400' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  Settings
                </div>
                {settingsExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {settingsExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {settingsSubMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.href)
                          ? isDarkMode 
                            ? 'text-blue-300 bg-blue-900/50' 
                            : 'text-blue-700 bg-blue-50'
                          : isDarkMode
                            ? 'text-gray-400 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-3 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className={`sticky top-0 z-40 flex h-16 shadow-sm border-b ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <button
            className={`px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex flex-1 justify-between items-center px-4">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Welcome to EXYTEX
              </h1>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Manage your content and grow your digital presence
              </p>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    {username.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="hidden md:block">{username}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {profileDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setProfileDropdownOpen(false)}
                  />
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border py-1 z-20 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className={`px-4 py-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{username}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className={`w-full flex items-center px-4 py-2 text-sm transition-colors ${
                        isDarkMode 
                          ? 'text-red-400 hover:bg-red-900/20' 
                          : 'text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Theme Toggle Button - Bottom Right */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          isDarkMode 
            ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};