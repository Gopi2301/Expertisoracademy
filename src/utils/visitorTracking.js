/**
 * Visitor Tracking Utility
 * Tracks user behavior for Zoho CRM lead enrichment
 */

/**
 * Get or initialize first visit timestamp
 * @returns {string} ISO timestamp of first visit
 */
export const getFirstVisit = () => {
    const stored = localStorage.getItem('visitor_first_visit');
    if (stored) {
        console.log('[Visitor Tracking] First visit (existing):', stored);
        return stored;
    }

    const now = new Date().toISOString();
    localStorage.setItem('visitor_first_visit', now);
    console.log('[Visitor Tracking] First visit (new):', now);
    return now;
};

/**
 * Track and get days visited count
 * @returns {number} Number of unique days visited
 */
export const getDaysVisited = () => {
    const today = new Date().toDateString();
    const visitedDaysStr = localStorage.getItem('visitor_days_visited');

    let visitedDays = [];
    if (visitedDaysStr) {
        try {
            visitedDays = JSON.parse(visitedDaysStr);
        } catch (e) {
            visitedDays = [];
        }
    }

    // Add today if not already tracked
    if (!visitedDays.includes(today)) {
        visitedDays.push(today);
        localStorage.setItem('visitor_days_visited', JSON.stringify(visitedDays));
        console.log('[Visitor Tracking] Days visited updated:', visitedDays.length);
    } else {
        console.log('[Visitor Tracking] Days visited (no change):', visitedDays.length);
    }

    return visitedDays.length;
};

/**
 * Track time spent on current page
 * Call this when page loads to start tracking
 */
let pageStartTime = null;

export const startTimeTracking = () => {
    pageStartTime = Date.now();
};

/**
 * Get average time spent across all sessions
 * @returns {number} Average time in minutes
 */
export const getAverageTimeSpent = () => {
    if (!pageStartTime) {
        return 0;
    }

    // Calculate current session time in minutes
    const currentSessionMinutes = Math.floor((Date.now() - pageStartTime) / 1000 / 60);

    // Get previous sessions data
    const sessionsStr = localStorage.getItem('visitor_time_sessions');
    let sessions = [];
    if (sessionsStr) {
        try {
            sessions = JSON.parse(sessionsStr);
        } catch (e) {
            sessions = [];
        }
    }

    // Add current session
    sessions.push(currentSessionMinutes);

    // Keep only last 10 sessions to avoid bloat
    if (sessions.length > 10) {
        sessions = sessions.slice(-10);
    }

    // Calculate average
    const total = sessions.reduce((sum, time) => sum + time, 0);
    const average = Math.floor(total / sessions.length);

    // Store updated sessions
    localStorage.setItem('visitor_time_sessions', JSON.stringify(sessions));

    console.log('[Visitor Tracking] Average time spent:', average, 'minutes');
    return average;
};

/**
 * Get user's country from browser/IP (basic detection)
 * @returns {string} Country name or 'Unknown'
 */
export const getUserCountry = () => {
    // Try to get from browser timezone
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Simple timezone to country mapping for common cases
        const timezoneCountryMap = {
            'Asia/Kolkata': 'India',
            'Asia/Calcutta': 'India',
            'America/New_York': 'United States',
            'America/Los_Angeles': 'United States',
            'America/Chicago': 'United States',
            'Europe/London': 'United Kingdom',
            'Asia/Dubai': 'United Arab Emirates',
            'Asia/Singapore': 'Singapore',
            'Australia/Sydney': 'Australia',
            'Asia/Tokyo': 'Japan',
            'Europe/Paris': 'France',
            'Europe/Berlin': 'Germany',
        };

        const country = timezoneCountryMap[timezone] || 'India'; // Default to India
        console.log('[Visitor Tracking] User country:', country);
        return country;
    } catch (e) {
        console.log('[Visitor Tracking] User country (fallback): India');
        return 'India'; // Default fallback
    }
};

/**
 * Get current page URL
 * @returns {string} Current page URL
 */
export const getCurrentPageUrl = () => {
    const url = window.location.href;
    console.log('[Visitor Tracking] Current page URL:', url);
    return url;
};

/**
 * Get all visitor tracking data
 * @returns {object} Complete visitor tracking data
 */
export const getVisitorTrackingData = () => {
    const data = {
        firstVisit: getFirstVisit(),
        daysVisited: getDaysVisited(),
        averageTimeSpent: getAverageTimeSpent(),
        country: getUserCountry(),
        currentPageUrl: getCurrentPageUrl(),
    };
    console.log('[Visitor Tracking] Complete tracking data:', data);
    return data;
};

/**
 * Initialize visitor tracking on page load
 * Call this in your app's entry point
 */
export const initVisitorTracking = () => {
    console.log('[Visitor Tracking] Initializing visitor tracking...');

    // Track first visit
    getFirstVisit();

    // Track days visited
    getDaysVisited();

    // Start time tracking
    startTimeTracking();

    // Save session time before page unload
    window.addEventListener('beforeunload', () => {
        getAverageTimeSpent();
    });

    console.log('[Visitor Tracking] Initialization complete');
};

export default {
    getFirstVisit,
    getDaysVisited,
    getAverageTimeSpent,
    getUserCountry,
    getCurrentPageUrl,
    getVisitorTrackingData,
    initVisitorTracking,
    startTimeTracking,
};
