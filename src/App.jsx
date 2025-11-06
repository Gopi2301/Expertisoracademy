// // src/App.jsx

// // --- 1. Import Core Libraries and Components ---
// import React, { useState, useCallback, useEffect } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast'; // For showing notifications

// // Import global font styles.
// import "@fontsource/inter";

// // Import layout components.
// import Header from './components/Header';
// import Footer from './components/Footer';
// import LoginModal from './components/HomeComponents/LoginModal';

// // Import page components.
// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import Testimonials from './pages/Testimonials';
// import Course from './pages/Course';
// import Mentors from './pages/Mentors';
// import Initiative from './pages/Initiative';
// import AuthSuccess from './pages/AuthSuccess';

// // Import nested route components for the Course page.
// import Videos from './components/CourseComponents/Videos';
// import StudRev from './components/CourseComponents/StudRev';
// import AffilateMarketing from './pages/AffilateMarketing';
// import ThreeDMax from './pages/ThreeDMax'
// import TermsAndServices from './pages/TermsAndServices';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import RefundAndCertificationPolicy from './pages/RefundAndCertificationPolicy';
// import AmazonCourse from './pages/AmazonCourse';
// import { getUtmParams, storeUtmParams } from './utils/utmUtils';
// import BecomeMentor from './pages/BecomeMentor';
// import WhyLearnCourse from './pages/WhyLearnCourse';
// import WhatsAppButton from './components/WhatsAppButton'
// import SolidWorks from './pages/SolidWorks';
// import Civil3D from './pages/Civil3D';
// import Mentorship from './pages/Mentorship';
// import { pages } from './constants/pages';
// import MentDet from './components/MentorshipComponents/MentDet';
// import { Navigate } from 'react-router-dom';




// /**
//  * The main root component of the application.
//  * It sets up the overall page structure, routing, and modal visibility.
//  */
// const App = () => {
//   // --- 2. Hooks and State Management ---

//   useEffect(() => {
//     const utmParams = getUtmParams();
//     if (Object.keys(utmParams).length > 0) {
//       storeUtmParams(utmParams);
//     }
//   }, []);

//   // `useLocation` hook from React Router gives us access to the current URL location object.
//   const location = useLocation();
//   // An array of routes where the standard Header and Footer should be hidden.
//   const layoutHiddenRoutes = ['/techbundle', '/auth/success'];
//   // A boolean to determine if the current route should hide the layout.
//   const isLayoutHidden = layoutHiddenRoutes.includes(location.pathname);

//   // scrll to top
//   useEffect(() => {
//     // prevent the browser from restoring the old scroll position
//     if ('scrollRestoration' in window.history) {
//       window.history.scrollRestoration = 'manual';
//     }

//     // ensure it runs after the route content is rendered
//     const id = requestAnimationFrame(() => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
//       // extra guards for some browsers
//       document.documentElement.scrollTop = 0;
//       document.body.scrollTop = 0;
//     });

//     return () => cancelAnimationFrame(id);
//   }, [location.pathname]);

//   // `useState` to control the visibility of the Login Modal.
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   // `useCallback` is used to memoize these functions so they don't get recreated on every render,
//   // which is a performance optimization when passing them down as props.
//   const handleOpenLoginModal = useCallback(() => setShowLoginModal(true), []);
//   const handleCloseLoginModal = useCallback(() => setShowLoginModal(false), []);






//   // --- 3. JSX Render with Layout Fix ---

//   return (
//     // ✅ THIS IS THE ROOT LAYOUT FIX:
//     // `min-h-screen`: Ensures the app's container is at least as tall as the browser viewport.
//     // `flex flex-col`: Establishes a vertical flexbox layout. This is key to making `flex-grow` work.

//     <div className='font-inter bg-black min-h-screen flex flex-col text-white'>

//       {/* Toaster component for displaying notifications globally. */}
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         toastOptions={{
//           style: { background: '#333', color: '#fff', border: '1px solid #555' },
//           error: { style: { background: '#EF4444', color: '#fff' } }
//         }}
//       />

//       {/* Conditionally render the Header unless the route is in the hidden list. */}

//       {/* {!isLayoutHidden && <Header onLoginClick={handleOpenLoginModal} />} */}

//       {!['/eliteconnect'].includes(location.pathname) || !isLayoutHidden && (
//         <Header onLoginClick={handleOpenLoginModal} />
//       )}


//       {/* The <main> element wraps the page content. */}
//       {/* ✅ `flex-grow`: This crucial class tells the main content area to expand and
//           take up all available free space, pushing the Footer to the bottom of the screen. */}
//       {/* The margin-top (`mt-20`) creates space for the fixed header. */}
//       <main className={`flex-grow ${!isLayoutHidden  ? 'mt-20 sm:mt-20' : ''}`}>





//         {/* React Router's <Routes> component manages all the page routes. */}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/courses' element={<Courses />} />
//           <Route path='/testimonials' element={<Testimonials />} />
//           {/* Nested routes for the Course details page. */}
//           <Route path='/course/:id' element={<Course />}>
//             <Route index element={<Videos />} />
//             <Route path='review' element={<StudRev />} />
//           </Route>
//           <Route path='/mentors' element={<Mentors />} />
//           <Route path='/techbundle' element={<Initiative />} />
//           <Route path='/auth/success' element={<AuthSuccess />} />
//           <Route path='/reels-affiliate-marketing-tamil' element={<AffilateMarketing />} />
//           <Route path='/3dsmax-tamil' element={<ThreeDMax />} />
//           <Route path='/termsandservices' element={<TermsAndServices />} />
//           <Route path='/privacypolicy' element={<PrivacyPolicy />} />
//           <Route path='/RefundAndCertificationPolicy' element={<RefundAndCertificationPolicy />} />
//           <Route path='/amazon-seller-tamil-course' element={<AmazonCourse />} />
//           <Route path='/creator-mentor' element={<BecomeMentor />} />
//           <Route path="/whylearncourse/:slug" element={<WhyLearnCourse />} />
//           <Route path='/solidworks-tamil' element={<SolidWorks />} />
//           <Route path='/civil3d-tamil' element={<Civil3D />} />
//           {/* <Route path='/mentorship' element={<Mentorship data={pages.mentorship.mentor_raghulan} />} />
//           <Route path='/mentorship/book/:id' element={<MentDet />} /> */}
//           {/* Default mentorship route → redirect to mentor_raghulan */}
//           <Route path="/eliteconnect" element={<Navigate to="/eliteconnect/askraghulan" />} />

//           {/* Dynamic eliteconnect route */}
//           <Route path="/eliteconnect/:mentorKey" element={<Mentorship />} />

//           {/* eliteconnect booking route */}
//           <Route path="/eliteconnect/:mentorKey/life-transformation" element={<MentDet />} />



//           {/* Optional: fallback / home route */}
//           <Route path="*" element={<div>Page Not Found</div>} />
//         </Routes>
//       </main>


//       {/* Conditionally render the Footer. It will be at the bottom because <main> grew to fill the space. */}
//       {!isLayoutHidden && <Footer />}

//       {/* Conditionally render the Login Modal based on the `showLoginModal` state. */}
//       {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
//       {/* 
//       <div className='fixed bottom-24 lg:bottom-32 right-6 md:right-10 z-10 '>
//         <WhatsAppButton />
//       </div> */}

//       {/* Conditionally render WhatsApp Button */}
//       {!['/eliteconnect'].includes(location.pathname) && (
//         <div className='fixed bottom-24 lg:bottom-32 right-6 md:right-10 z-[9999]'>
//           <WhatsAppButton />
//         </div>
//       )}

//     </div>
//   );
// };

// export default App;








// src/App.jsx
import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import "@fontsource/inter";

// Layout components (keep synchronous - used on every page)
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/HomeComponents/LoginModal';
import WhatsAppButton from './components/WhatsAppButton';
import PageLoader from './components/PageLoader';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Course = lazy(() => import('./pages/Course'));
const Videos = lazy(() => import('./components/CourseComponents/Videos'));
const StudRev = lazy(() => import('./components/CourseComponents/StudRev'));
const Mentors = lazy(() => import('./pages/Mentors'));
const Initiative = lazy(() => import('./pages/Initiative'));
const AuthSuccess = lazy(() => import('./pages/AuthSuccess'));
const AffilateMarketing = lazy(() => import('./pages/AffilateMarketing'));
const ThreeDMax = lazy(() => import('./pages/ThreeDMax'));
const TermsAndServices = lazy(() => import('./pages/TermsAndServices'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundAndCertificationPolicy = lazy(() => import('./pages/RefundAndCertificationPolicy'));
const AmazonCourse = lazy(() => import('./pages/AmazonCourse'));
const BecomeMentor = lazy(() => import('./pages/BecomeMentor'));
const WhyLearnCourse = lazy(() => import('./pages/WhyLearnCourse'));
const SolidWorks = lazy(() => import('./pages/SolidWorks'));
const Civil3D = lazy(() => import('./pages/Civil3D'));
const Mentorship = lazy(() => import('./pages/Mentorship'));
const MentDet = lazy(() => import('./components/MentorshipComponents/MentDet'));

import { getUtmParams, storeUtmParams } from './utils/utmUtils';

const App = () => {
  const location = useLocation();

  // --- Scroll to top on route change ---
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  // --- Handle UTMs ---
  useEffect(() => {
    const utmParams = getUtmParams();
    if (Object.keys(utmParams).length > 0) storeUtmParams(utmParams);
  }, []);

  // --- Layout visibility ---
  const layoutHiddenRoutes = ['/techbundle', '/auth/success'];
  const isLayoutHidden = layoutHiddenRoutes.includes(location.pathname);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleOpenLoginModal = useCallback(() => setShowLoginModal(true), []);
  const handleCloseLoginModal = useCallback(() => setShowLoginModal(false), []);

  // Normalize path
  const currentPath = location.pathname.replace(/\/$/, '');

  // Header and main margin condition
const showHeader = !currentPath.includes('/eliteconnect') && !isLayoutHidden;
const mainClasses = `flex-grow${showHeader ? ' mt-20 sm:mt-20' : ''}`;

  return (
    <div className='font-inter bg-black min-h-screen flex flex-col text-white'>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: { background: '#333', color: '#fff', border: '1px solid #555' },
          error: { style: { background: '#EF4444', color: '#fff' } }
        }}
      />

      {/* Header */}
      {showHeader && <Header onLoginClick={handleOpenLoginModal} />}

      {/* Main Content */}
      <main className={mainClasses}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/course/:id' element={<Course />}>
                <Route index element={<Videos />} />
                <Route path='review' element={<StudRev />} />
              </Route>
              <Route path='/mentors' element={<Mentors />} />
              <Route path='/techbundle' element={<Initiative />} />
              <Route path='/auth/success' element={<AuthSuccess />} />
              <Route path='/reels-affiliate-marketing-tamil' element={<AffilateMarketing />} />
              <Route path='/3dsmax-tamil' element={<ThreeDMax />} />
              <Route path='/termsandservices' element={<TermsAndServices />} />
              <Route path='/privacypolicy' element={<PrivacyPolicy />} />
              <Route path='/RefundAndCertificationPolicy' element={<RefundAndCertificationPolicy />} />
              {/* <Route path='/amazon-seller-tamil-course' element={<AmazonCourse />} /> */}
              <Route path='/creator-mentor' element={<BecomeMentor />} />
              <Route path="/whylearncourse/:slug" element={<WhyLearnCourse />} />
              <Route path='/solidworks-tamil' element={<SolidWorks />} />
              <Route path='/civil3d-tamil' element={<Civil3D />} />

              {/* Eliteconnect Routes */}
              <Route path="/eliteconnect" element={<Navigate to="/eliteconnect/askraghulan" />} />
              <Route path="/eliteconnect/:mentorKey" element={<Mentorship />} />
              <Route path="/eliteconnect/:mentorKey/life-transformation" element={<MentDet />} />

              {/* Fallback */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Footer */}
      {!isLayoutHidden && <Footer />}
      {/* Login Modal */}
      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}

      {/* WhatsApp Button */}
      {!currentPath.includes('/eliteconnect') && (
        <div className='fixed bottom-24 lg:bottom-32 right-6 md:right-10 z-[9999]'>
          <WhatsAppButton />
        </div>
      )}
    </div>
  );
};

export default App;
