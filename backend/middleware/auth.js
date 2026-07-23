const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Allow temp tokens (used when MongoDB admin not yet created)
    if (decoded.isTemp) {
      req.admin = { _id: 'temp-admin-id', username: decoded.username, role: decoded.role, isActive: true };
      return next();
    }

    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin || !admin.isActive) {
      return res.status(401).json({ success: false, message: 'Access denied. Invalid token.' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Access denied. Invalid token.' });
  }
};

const requireSuperAdmin = (req, res, next) => {
  if (req.admin.role !== 'super-admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Super admin privileges required.'
    });
  }
  next();
};

module.exports = {
  authMiddleware,
  requireSuperAdmin
};