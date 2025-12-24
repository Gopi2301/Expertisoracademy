/**
 * Geolocation Utility
 * Detects user's country based on IP address
 * Uses ipapi.co free API (30k requests/month)
 */

/**
 * Detect user's country code from IP address
 * Results are cached in localStorage for 24 hours
 * @returns {Promise<string>} Two-letter country code (e.g., 'IN', 'US', 'GB')
 */
export const detectCountryCode = async () => {
    const cached = localStorage.getItem('userCountryCode');
    const cacheTime = localStorage.getItem('userCountryCodeTime');

    // Use cache if less than 24 hours old
    if (cached && cacheTime && Date.now() - parseInt(cacheTime) < 86400000) {
        console.log('🌍 Using cached country code:', cached);
        return cached;
    }

    try {
        console.log('🌍 Detecting country from IP...');
        const response = await fetch('https://ipapi.co/json/', {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error('Failed to fetch location data');

        const data = await response.json();
        const countryCode = data.country_code || 'IN';

        console.log('✅ Country detected:', countryCode, `(${data.country_name})`);

        // Cache the result
        localStorage.setItem('userCountryCode', countryCode);
        localStorage.setItem('userCountryCodeTime', Date.now().toString());

        return countryCode;
    } catch (error) {
        console.error('❌ Failed to detect country:', error);
        return 'IN'; // Default to India
    }
};

/**
 * Map country code to phone prefix
 * @param {string} countryCode - Two-letter country code
 * @returns {string} Phone prefix with + (e.g., '+91')
 */
export const getPhonePrefix = (countryCode) => {
    const mapping = {
        'IN': '+91',   // India
        'US': '+1',    // United States
        'GB': '+44',   // United Kingdom
        'AU': '+61',   // Australia
        'AE': '+971',  // United Arab Emirates
        'CA': '+1',    // Canada
        'SG': '+65',   // Singapore
        'MY': '+60',   // Malaysia
        'PK': '+92',   // Pakistan
        'BD': '+880',  // Bangladesh
    };
    return mapping[countryCode] || '+91';
};

/**
 * Extract course name from URL path
 * @returns {string} Course name extracted from /courses/[slug]
 */
export const extractCourseFromURL = () => {
    const path = window.location.pathname;
    const match = path.match(/\/courses\/([^\/]+)/);

    if (match) {
        // Convert slug to readable name (e.g., "ai-systems-builder" -> "ai systems builder")
        const courseName = match[1]
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .trim();
        console.log('📚 Course extracted from URL:', courseName);
        return courseName;
    }

    console.log('📚 No course in URL, using default');
    return 'General Inquiry';
};
