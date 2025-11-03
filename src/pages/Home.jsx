// src/pages/Home.jsx

import React from 'react';

// --- 1. The import for the courses component is now removed ---
// import CoursesPreview from '../components/HomeComponents/Courses'; 

import AboutUs from '../components/HomeComponents/AboutUs';
import DownloadSection from '../components/HomeComponents/DownloadSection';
import Hero from '../components/HomeComponents/Hero';
import StudentsSay from '../components/HomeComponents/StudentsSay';
import StudWorksAt from '../components/HomeComponents/StudWorksAt';
import WeDo from '../components/HomeComponents/WeDo';
import Skills from '../components/HomeComponents/Skills';
import Infinite from '../components/HomeComponents/Infinite'
import { pages } from '../constants/pages';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* --- 2. The <CoursesPreview /> component has been deleted from here --- */}

      <WeDo />
      <Skills />
      <AboutUs />
      <StudentsSay students_say={pages.home_page.students_say_video}/>
      <Infinite />
      <StudWorksAt />
      <DownloadSection />
    </div>
  );
};

export default Home;