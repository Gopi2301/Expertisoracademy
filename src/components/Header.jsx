// src/components/Header.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoRocketOutline, IoClose } from 'react-icons/io5';
import logo from '../assets/images/logo_ex.png';
import menuIcon from '../assets/images/menu.svg';
import UserProfile from './UserProfile';
import { logout } from '../api/apiClient';
import { decodeJwt } from '../utils/decodeJwt';
import { getStoredUtmParams, appendUtmParamsToUrl } from '../utils/utmUtils';

// Helper function to get user initials (same as UserProfile component)
const getInitials = (name) => {
  if (!name || typeof name !== 'string') return '??';
  const parts = name.trim().split(' ').filter(Boolean);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

const GRAPHY_URL = "https://learn.expertisoracademy.in/t/u/activecourses";

const Header = ({ onLoginClick }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [dashboardUrl, setDashboardUrl] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      try {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
          const parsedInfo = JSON.parse(storedUserInfo);
          if (parsedInfo && parsedInfo.appToken && parsedInfo.graphyToken) {
            const decodedToken = decodeJwt(parsedInfo.appToken);
            if (decodedToken && decodedToken.name) {
              setUserInfo({ name: decodedToken.name });
              const utmParams = getStoredUtmParams();
              const baseUrl = `${GRAPHY_URL}?ssoToken=${parsedInfo.graphyToken}`;
              const finalUrl = appendUtmParamsToUrl(baseUrl, utmParams);
              setDashboardUrl(finalUrl);
            } else { logout(); }
          }
        }
      } catch { logout(); }
    };
    checkLoginStatus();
  }, []);







  const handleLogout = () => {
    setIsMenuVisible(false);
    logout();
  };

  const handleMobileMenuClick = () => {
    // Scroll to top and open menu
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMenuVisible(true);
  };

  const handleLinkClick = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuVisible]);

  const activeClass = 'inline-block py-2 md:py-3 px-2 rounded border border-white/60 bg-gradient-to-b from-black/10 to-yellow-500/10';
  const inActiveClass = 'inline-block py-2 md:py-3 px-2 rounded';

  return (
    <>
      <header className={`w-full  fixed top-0 left-0 z-[1000] transition-all duration-300 bg-black `}>
        {/* ✅ This parent div now uses flexbox to align its three main children */}
        <div className="flex justify-between items-center py-4 px-4  md:px-14 lg:px-20 ">

          {/* Item 1: Logo */}
          <div className="flex-shrink-0">
            <Link to="/"><img src={logo} alt="Expertisor Academy Logo" className="h-8" /></Link>
          </div>

          {/* ✅ Item 2: Navigation - It now grows to fill space and centers its content */}
          <nav className="hidden sm:flex flex-grow justify-center">
            <div className="bg-[#141414] flex items-center text-white gap-1 p-1 rounded-lg text-base">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Home</NavLink>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Courses</NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Testimonials</NavLink>
              <NavLink to="/mentors" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Mentors</NavLink>
            </div>
          </nav>

          {/* ✅ Item 3: Actions - This will be pushed to the right */}
          <div className="flex-shrink-0">
            {/* Desktop Login/Profile Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {userInfo ? (
                <>
                  <a href={dashboardUrl} target="_blank" rel="noopener noreferrer" className="dashboard-btn">
                    <span>Dashboard</span>
                    <IoRocketOutline />
                  </a>
                  <UserProfile userName={userInfo.name} onLogout={logout} />
                </>
              ) : (
                <button onClick={onLoginClick} className="text-black py-2.5 px-5 bg-[#FFF200] font-semibold text-base rounded-md">
                  Login
                </button>
              )}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className='sm:hidden block' onClick={handleMobileMenuClick}>
              <img src={menuIcon} alt="menu icon" className='h-6 w-6 cursor-pointer' />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuVisible && (
        <div 
          className="fixed bg-black/90 backdrop-blur-sm z-[1001] flex flex-col items-center justify-center text-white p-4"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
          }}
        >
          <button onClick={() => setIsMenuVisible(false)} className="absolute top-5 right-5 text-white z-[1002]">
            <IoClose size={32} />
          </button>

          <div className="flex flex-col items-center gap-6 w-full max-w-xs relative z-[1002]">
            {/* Logged In State */}
            {userInfo ? (
              <>
                {/* Profile Icon Button */}
                <div className="w-full flex justify-center">
                  <button className="flex items-center gap-2 bg-[#FFF200] text-black font-bold text-base px-4 py-2.5 rounded-lg">
                    <span className="text-base">{getInitials(userInfo.name)}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Dashboard Button */}
                <a 
                  href={dashboardUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleLinkClick}
                  className="dashboard-btn inline-flex text-xl w-full justify-center"
                >
                  <span>Dashboard</span>
                  <IoRocketOutline />
                </a>
                
                {/* Navigation Links */}
                <nav className="w-full">
                  <ul className="flex flex-col items-center gap-6 text-xl text-gray-300">
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Home</NavLink>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Courses</NavLink>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Testimonials</NavLink>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/mentors" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Mentors</NavLink>
                    </li>
                  </ul>
                </nav>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="text-xl text-gray-300 hover:text-white w-full text-center py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              /* Logged Out State */
              <>
                <nav className="w-full">
                  <ul className="flex flex-col items-center gap-6 text-xl text-gray-300">
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Home</NavLink>
                    </li>
                    <li className="w-full text-center" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Open modal first, then close menu after modal has time to mount
                          onLoginClick();
                          // Close menu after modal is fully rendered (modal has z-index 9999, so it will appear above)
                          setTimeout(() => {
                            setIsMenuVisible(false);
                          }, 200);
                        }}
                        className="text-xl text-gray-300 hover:text-white"
                      >
                        Login
                      </button>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Courses</NavLink>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Testimonials</NavLink>
                    </li>
                    <li onClick={handleLinkClick} className="w-full text-center">
                      <NavLink to="/mentors" className={({ isActive }) => isActive ? 'text-white font-semibold' : ''}>Mentors</NavLink>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;












