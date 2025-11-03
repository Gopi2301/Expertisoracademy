/**
 * Helper function to get optimized image paths
 * Returns WebP version if available, falls back to original
 */
export function getOptimizedImage(originalPath) {
  if (!originalPath) return originalPath;
  
  // If already using optimized path, return as is
  if (originalPath.includes('/optimized/')) {
    return originalPath;
  }
  
  // Try to find WebP version
  try {
    const pathParts = originalPath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const nameWithoutExt = fileName.replace(/\.(png|jpg|jpeg)$/i, '');
    const directory = pathParts.slice(0, -1).join('/');
    
    // Construct optimized path
    const optimizedPath = originalPath.replace(
      /\/assets\//,
      '/assets/optimized/'
    ).replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    // Note: In a real scenario, you'd check if the file exists
    // For now, we'll let the browser handle the fallback via OptimizedImage component
    return optimizedPath;
  } catch (error) {
    return originalPath;
  }
}

/**
 * Get both original and WebP versions for OptimizedImage component
 */
export function getImageSources(originalPath) {
  if (!originalPath) return { src: null, webpSrc: null };
  
  const webpPath = getOptimizedImage(originalPath);
  
  return {
    src: originalPath,
    webpSrc: webpPath !== originalPath ? webpPath : null,
  };
}

