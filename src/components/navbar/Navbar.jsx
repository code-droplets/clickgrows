import React, { useState, useEffect, useRef } from 'react';
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Create refs for each dropdown item
  const navbarRef = useRef(null);

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
      // Check if click is outside the entire navbar wrapper
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    // Add event listener when dropdown is open
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      const mobileMenu = document.querySelector(`.${style.navbar__mobile_menu}`);
      const toggleButton = document.querySelector(`.${style.navbar__toggle}`);
      
      if (
        isMobileMenuOpen && 
        mobileMenu && 
        !mobileMenu.contains(event.target) &&
        toggleButton &&
        !toggleButton.contains(event.target)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown when opening mobile menu
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className={`${style.navbar} ${isScrolled ? style.navbar__scrolled : ''}`}>
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
                  <Link to="/social-media-marketing">Social Media Marketing</Link>
                  <Link to="/ppc">PPC Management</Link>
                  <Link to="/paid-advertising">Paid Advertising</Link>
                  <Link to="/web-development">Web Development</Link>
                </div>
              )}
            </li>

            {/* <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button 
                className={style.navbar__link}
                onClick={() => handleDropdownToggle('whitelabel')}
              >
                White Label
                <span className={style.navbar__arrow}>
                   <img src="./down-arrow.svg" alt=""  className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === 'whitelabel' && (
                <div className={style.navbar__dropdown}>
                  <Link to="/white-label-seo">White Label SEO</Link>
                  <Link to="/white-label-ppc">White Label PPC</Link>
                </div>
              )}
            </li> */}

            {/* <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button 
                className={style.navbar__link}
                onClick={() => handleDropdownToggle('industry')}
              >
                Industry
                <span className={style.navbar__arrow}>
                  <img src="./down-arrow.svg" alt="" className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === 'industry' && (
                <div className={style.navbar__dropdown}>
                  <Link to="/ecommerce">E-commerce</Link>
                  <Link to="/healthcare">Healthcare</Link>
                  <Link to="/finance">Finance</Link>
                  <Link to="/real-estate">Real Estate</Link>
                </div>
              )}
            </li> */}

            {/* <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button 
                className={style.navbar__link}
                onClick={() => handleDropdownToggle('work')}
              >
                Our Work
                <span className={style.navbar__arrow}>
                  <img src="./down-arrow.svg" alt=""  className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === 'work' && (
                <div className={style.navbar__dropdown}>
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/case-studies">Case Studies</Link>
                  <Link to="/testimonials">Testimonials</Link>
                </div>
              )}
            </li> */}

            <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button 
                className={style.navbar__link}
                onClick={() => handleDropdownToggle('about')}
              >
                About
                <span className={style.navbar__arrow}>
                  <img src="./down-arrow.svg" alt=""  className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === 'about' && (
                <div className={style.navbar__dropdown}>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/contact-us">Contact</Link>
                </div>
              )}
            </li>
          </ul>

          {/* CTA Button */}
          <div className={style.navbar__cta}>
            <a href="/contact-us" className={style.navbar__cta_btn}>
              <span className={style.navbar__cta_icon}>→</span>
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`${style.navbar__toggle} ${isMobileMenuOpen ? style.navbar__toggle__active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={style.navbar__mobile_menu}>
            <ul className={style.navbar__mobile_list}>
              <li className={style.navbar__mobile_item}>
                <a href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              </li>
              <li className={style.navbar__mobile_item}>
                <a href="/white-label" onClick={() => setIsMobileMenuOpen(false)}>White Label</a>
              </li>
              <li className={style.navbar__mobile_item}>
                <a href="/industry" onClick={() => setIsMobileMenuOpen(false)}>Industry</a>
              </li>
              <li className={style.navbar__mobile_item}>
                <a href="/work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</a>
              </li>
              <li className={style.navbar__mobile_item}>
                <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              </li>
              <li className={style.navbar__mobile_item}>
                <a href="/audit" className={style.navbar__mobile_cta} onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;