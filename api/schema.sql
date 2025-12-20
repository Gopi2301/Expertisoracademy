-- ====================================
-- Course Management System - Database Schema
-- Run this SQL in Yash Host cPanel > phpMyAdmin
-- ====================================

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create auth tokens table (for JWT token management)
CREATE TABLE IF NOT EXISTS auth_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE,
    INDEX idx_token_hash (token_hash),
    INDEX idx_expires_at (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('DRAFT', 'PUBLISHED') DEFAULT 'DRAFT',
    category_id INT NULL,
    
    -- Card Metadata (for /courses listing)
    title VARCHAR(255) NOT NULL,
    mentor_name VARCHAR(100) DEFAULT '',
    mentor_image VARCHAR(500) DEFAULT '',
    rating DECIMAL(2,1) DEFAULT 4.9,
    student_count VARCHAR(50) DEFAULT '0+',
    language VARCHAR(50) DEFAULT 'Tamil',
    duration VARCHAR(50) DEFAULT '0h',
    thumbnail VARCHAR(500) DEFAULT '',
    
    -- Template Support
    template_id VARCHAR(50) NULL COMMENT 'Template identifier (e.g., transformation-framework)',
    template_data JSON NULL COMMENT 'Template-specific customization data',
    
    -- Hero & Form Data (JSON)
    hero_data JSON,
    form_data JSON,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create templates table (migrated from localStorage)
CREATE TABLE IF NOT EXISTS cms_templates (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('draft', 'published') DEFAULT 'draft',
    sections JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL,
    INDEX idx_status (status),
    INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ====================================
-- Seed Default Categories
-- ====================================

INSERT INTO categories (name, slug, display_order) VALUES
('Technology', 'technology', 1),
('Business', 'business', 2),
('Civil', 'civil', 3),
('Mechanical', 'mechanical', 4),
('Marketing', 'marketing', 5)
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- ====================================
-- Create Default Admin User
-- Password: admin123 (CHANGE THIS IMMEDIATELY!)
-- ====================================

INSERT INTO admin_users (username, password_hash, email) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@expertisoracademy.in')
ON DUPLICATE KEY UPDATE username=VALUES(username);

-- ====================================
-- Sample Course (Optional - for testing)
-- ====================================

-- INSERT INTO courses (slug, status, category_id, title, mentor_name, rating, student_count, language, duration, hero_data, form_data) VALUES
-- ('full-stack-development', 'PUBLISHED', 1, 'Full Stack Development', 'Raghulan Gopinath', 4.9, '3485+', 'Tamil', '12h', 
-- '{"badge":{"emoji":"🎓","text":"Learn from Industry Expert","highlight":""},"headline":{"parts":[{"text":"Master ","highlight":false},{"text":"Full Stack","highlight":true},{"text":" Development","highlight":false}]},"subheadline":"Transform your career.","video":{"url":"/videos/Background.webm"},"buttons":{"primary":{"text":"Apply Now","action":"openModal"},"secondary":{"text":"Download Brochure","url":""}}}',
-- '{"title":"APPLY NOW","formAction":"","fields":[{"name":"name","label":"Name","type":"text","placeholder":"Your Name","required":true}],"submitButton":"Submit"}');
