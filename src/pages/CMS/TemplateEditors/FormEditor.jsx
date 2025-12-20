import React from 'react';

/**
 * Lead Form Editor
 */
const FormEditor = ({ course, setCourse }) => {
    const formData = course.form_data || {};

    const updateFormData = (field, value) => {
        setCourse(prev => ({
            ...prev,
            form_data: {
                ...prev.form_data,
                [field]: value
            }
        }));
    };

    return (
        <div className="space-y-4">

            {/* Form Title */}
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Form Title
                </label>
                <input
                    type="text"
                    value={formData.title || ''}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    placeholder="STRUGGLING TO FIGURE IT OUT ALONE?"
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Form Subtitle */}
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Form Subtitle
                </label>
                <input
                    type="text"
                    value={formData.subtitle || ''}
                    onChange={(e) => updateFormData('subtitle', e.target.value)}
                    placeholder="Get Expert 1:1 Guidance"
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Submit Button Text */}
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Submit Button Text
                </label>
                <input
                    type="text"
                    value={formData.submitButton || ''}
                    onChange={(e) => updateFormData('submitButton', e.target.value)}
                    placeholder="Get Fast Help"
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Form Action URL */}
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">
                    Form Action URL (Zoho/Webhook)
                </label>
                <input
                    type="url"
                    value={formData.formAction || ''}
                    onChange={(e) => updateFormData('formAction', e.target.value)}
                    placeholder="https://your-webhook-url.com/submit"
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 font-mono text-sm"
                />
                <p className="mt-1 text-xs text-neutral-500">
                    The URL where form submissions will be sent
                </p>
            </div>

            {/* Info */}
            <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                <p className="text-sm text-neutral-400">
                    <strong className="text-white">Form Fields:</strong> The modal uses a fixed set of fields (Name, Email, Phone, Education, Profile). Field customization coming soon.
                </p>
            </div>

        </div>
    );
};

export default FormEditor;
