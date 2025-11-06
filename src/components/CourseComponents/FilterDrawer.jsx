import React, { useContext, useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { CourseContext } from '../../context/CourseContextProvider';
import { FaCheck } from 'react-icons/fa';
import closeIcon from '../../assets/images/close.svg';

const FilterDrawer = ({ onClose }) => {
    const [openSection, setOpenSection] = useState(null);
    const {
        categories,
        languages,
        mentors,
        selectedCategories,
        setSelectedCategories,
        typeOfCourse,
        courseType,
        setCourseType,
    } = useContext(CourseContext);

    const [tempSelected, setTempSelected] = useState([]);
    const [tempCourseType, setTempCourseType] = useState('');

    useEffect(() => {
        setTempSelected(selectedCategories ?? []);
        setTempCourseType(courseType ?? '');
    }, [selectedCategories, courseType]);

    const handleTempCheckboxChange = (category) => {
        const key = category.toLowerCase();
        setTempSelected((prev) =>
            prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
        );
    };

    const handleApply = () => {
        setSelectedCategories(tempSelected);
        setCourseType(tempCourseType);
        onClose();
    };

    const handleClear = () => {
        setTempSelected([]);
        setTempCourseType('');
    };

    const handleCancel = () => {
        setSelectedCategories([]);
        setCourseType('');
        setTempSelected([]);
        setTempCourseType('');
        onClose();
    };

    const sections = [
        { key: 'courses', label: 'COURSES', options: typeOfCourse ?? [] },
        { key: 'categories', label: 'CATEGORIES', options: categories ?? [] },
        { key: 'languages', label: 'LANGUAGES', options: languages ?? [] },
        { key: 'mentors', label: 'MENTORS', options: mentors ?? [] },
    ];

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-end">
            <div className="bg-[#111] w-full rounded-t-2xl p-4 max-h-[94%] overflow-y-auto">
                <div className="w-12 h-1 rounded-full bg-gray-500 mx-auto mb-4" />
                <div className="flex justify-between items-center pb-4 border-b border-[#272727]">
                    <h2 className="text-white font-inter font-semibold text-[16px]">Filter by</h2>
                    <img onClick={onClose} src={closeIcon} className="w-3.5 h-3.5 cursor-pointer" alt="Close" />
                </div>

                {sections.map((section) => (
                    <div key={section.key} className="border-b border-[#272727]">
                        <button
                            onClick={() => setOpenSection(openSection === section.key ? null : section.key)}
                            className="flex justify-between items-center py-4 w-full text-left"
                            type="button"
                        >
                            <span className="text-white text-xs font-inter">{section.label}</span>
                            <ChevronDownIcon
                                className={`w-5 h-5 text-white transition-transform ${openSection === section.key ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {openSection === section.key && section.key === 'courses' && (
                            <div className="space-y-2 pb-4">
                                {section.options.map((type) => {
                                    const normalizedType = (type ?? '').toLowerCase().trim();
                                    const isChecked = (tempCourseType ?? '').toLowerCase().trim() === normalizedType;
                                    return (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setTempCourseType(type)}
                                            className={`flex items-center justify-between w-full py-2 text-sm font-inter transition-colors ${
                                                isChecked ? 'text-white font-semibold' : 'text-[#969696]'
                                            }`}
                                        >
                                            <span>{type}</span>
                                            {isChecked && <FaCheck className="text-yellow text-xs" />}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {openSection === section.key && section.key !== 'courses' && (
                            <div className="space-y-2 pb-4">
                                {section.options.map((option) => {
                                    const key = (option ?? '').toLowerCase();
                                    const isChecked = tempSelected.includes(key);
                                    return (
                                        <label key={option} className="flex items-center gap-2 text-sm text-white/80">
                                            <input
                                                type="checkbox"
                                                className="accent-yellow"
                                                checked={isChecked}
                                                onChange={() => handleTempCheckboxChange(option)}
                                            />
                                            <span className="capitalize">{option}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}

                <div className="flex gap-3 pt-4">
                    <button
                        onClick={handleClear}
                        className="flex-1 py-3 border border-[#272727] rounded-xl text-sm font-inter text-white/80"
                        type="button"
                    >
                        Clear
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex-1 py-3 border border-[#272727] rounded-xl text-sm font-inter text-white/60"
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleApply}
                        className="flex-1 py-3 bg-yellow text-black rounded-xl text-sm font-inter font-semibold"
                        type="button"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterDrawer;