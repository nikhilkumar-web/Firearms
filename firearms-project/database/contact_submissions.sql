-- MySQL Schema for Firearms Project
CREATE DATABASE IF NOT EXISTS firearms_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE firearms_db;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(254) DEFAULT NULL,
  time_to_call VARCHAR(50) DEFAULT NULL,
  lesson_type VARCHAR(100) DEFAULT NULL,
  state VARCHAR(100) DEFAULT NULL,
  city VARCHAR(150) DEFAULT NULL,
  remarks TEXT DEFAULT NULL,
  source VARCHAR(50) NOT NULL DEFAULT 'contact-page',
  consent_given TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
