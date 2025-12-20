import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import { getVisitorTrackingData } from '../utils/visitorTracking';

/**
 * Zoho CRM API Integration Hook
 * Creates leads directly in Zoho CRM via backend API
 */
export const useZohoForm = (config = {}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitToZoho = useCallback(async (formData) => {
        console.log('=== ZOHO CRM SUBMISSION START ===');
        console.log('[Zoho CRM] Form data received:', formData);

        setIsSubmitting(true);

        try {
            // Get visitor tracking data
            const visitorData = getVisitorTrackingData();
            console.log('[Zoho CRM] Visitor tracking data:', visitorData);

            // Split full name
            const fullName = formData.name || '';
            const nameParts = fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || firstName;

            // Map profile to lead source
            const profileToLeadSource = {
                'student': 'Website - Student',
                'professional': 'Website - Professional',
                'entrepreneur': 'Website - Entrepreneur',
                'freelancer': 'Website - Freelancer',
                'other': 'Website - Other',
                '': 'Website - Landing Page'
            };

            const companyName = formData.courseName || config.courseName || 'Expertisor Academy';
            console.log('[Zoho CRM] Company name:', companyName);

            // Extract course slug from URL for Lead Source
            // e.g., "/courses/ai-agents-llmops-developer-program" -> "ai-agents-llmops-developer-program"
            const urlPath = visitorData.currentPageUrl;
            let leadSource = 'Website - Landing Page';

            if (urlPath.includes('/courses/')) {
                const courseSlug = urlPath.split('/courses/')[1]?.split('?')[0]?.split('#')[0];
                if (courseSlug) {
                    leadSource = courseSlug;
                }
            }

            console.log('[Zoho CRM] Lead Source:', leadSource);

            // Prepare data for CRM API
            const crmData = {
                company: companyName,
                lastName: lastName,
                firstName: firstName,
                email: formData.email || '',
                phone: formData.phone || '',
                mobile: formData.phone || '',
                website: visitorData.currentPageUrl,
                leadSource: leadSource, // Use course slug instead of profile
                country: visitorData.country,
                description: formData.education || formData.qualification || '',
                averageTimeSpent: visitorData.averageTimeSpent.toString(),
                firstVisit: visitorData.firstVisit,
                daysVisited: visitorData.daysVisited.toString()
            };

            console.log('[Zoho CRM] Submitting to CRM API...');
            console.log('[Zoho CRM] Data:', crmData);

            // Submit to Zoho CRM API
            const response = await fetch('/api/zoho_crm.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(crmData)
            });

            const result = await response.json();
            console.log('[Zoho CRM] API response:', result);

            if (result.success) {
                toast.success('Form submitted successfully!');
                console.log('[Zoho CRM] ✅ Lead created successfully!');
                console.log('=== ZOHO CRM SUBMISSION END ===');
                setIsSubmitting(false);
                return true;
            } else {
                throw new Error(result.error || 'Submission failed');
            }

        } catch (error) {
            console.error('[Zoho CRM] ❌ Submission error:', error);
            console.log('=== ZOHO CRM SUBMISSION END (ERROR) ===');
            toast.error('Failed to submit form. Please try again.');
            setIsSubmitting(false);
            return false;
        }
    }, [config.courseName]);

    return {
        submitToZoho,
        isSubmitting,
        scriptLoaded: true
    };
};

export default useZohoForm;
