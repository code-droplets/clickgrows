import React, { useState, useEffect, useRef } from 'react';
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Handle scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutsideMobile);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
    };
  }, [isMobileMenuOpen]);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Service links for desktop dropdown
  const serviceLinks = [
    { to: "/social-media-marketing", label: "Social Media Marketing" },
    { to: "/ppc", label: "PPC Management" },
    { to: "/paid-advertising", label: "Paid Advertising" },
    { to: "/web-development", label: "Web Development" }
  ];

  // Mobile menu links (all direct links - no submenu)
  const mobileLinks = [
    { to: "/social-media-marketing", label: "Social Media Marketing" },
    { to: "/ppc", label: "PPC Management" },
    { to: "/paid-advertising", label: "Paid Advertising" },
    { to: "/web-development", label: "Web Development" },
    { to: "/about", label: "About" }
  ];

  return (
    <nav className={`${style.navbar} ${isScrolled ? style.navbar__scrolled : ''} ${isDarkMode ? style.navbar__dark : style.navbar__light}`}>
      <div className={style.container}>
        <div className={style.navbar__wrapper} ref={navbarRef}>
          {/* Logo */}
          <div className={style.navbar__logo}>
            <a href="/" className={style.navbar__logo_link}>
              <img 
                src="/logo.png" 
                alt="eZrankings - Your digital partner" 
                className={style.navbar__logo_image}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className={style.navbar__menu}>
            {/* Services Dropdown - Only dropdown for desktop */}
            <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button 
                className={style.navbar__link}
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <span className={style.navbar__arrow}>
                  <img src="./down-arrow.svg" alt="" className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === 'services' && (
                <div className={style.navbar__dropdown}>
                  {serviceLinks.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.to} 
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* About - Direct link */}
            <li className={style.navbar__item}>
              <Link to="/about" className={style.navbar__link}>About</Link>
            </li>
          </ul>

          {/* CTA Button and Theme Toggle */}
          <div className={style.navbar__actions}>
            {/* <button 
              onClick={toggleTheme}
              className={style.navbar__theme_toggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button> */}

            <div className={style.navbar__cta}>
              <a href="/contact-us" className={style.navbar__cta_btn}>
                <span className={style.navbar__cta_icon}>→</span>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            ref={toggleButtonRef}
            className={`${style.navbar__toggle} ${isMobileMenuOpen ? style.navbar__toggle__active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu - All links displayed directly */}
        {isMobileMenuOpen && (
          <div className={style.navbar__mobile_menu} ref={mobileMenuRef}>
            {/* <div className={style.navbar__mobile_header}>
              <button 
                onClick={toggleTheme}
                className={style.navbar__mobile_theme_toggle}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div> */}
            <ul className={style.navbar__mobile_list}>
              {/* All service links displayed directly */}
              {mobileLinks.map((link, index) => (
                <li key={index} className={style.navbar__mobile_item}>
                  <Link 
                    to={link.to} 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Contact CTA Button */}
              <li className={style.navbar__mobile_item}>
                <Link 
                  to="/contact-us" 
                  className={style.navbar__mobile_cta} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;