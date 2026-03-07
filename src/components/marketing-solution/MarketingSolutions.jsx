import React, { useEffect, useState } from 'react';
import styles from './MarketingSolutions.module.scss';

const MarketingSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreServices = [
    'SEO Services',
    'Local SEO',
    'Ecommerce SEO',
    'Amazon SEO',
    'Google Map Marketing',
    'Social Media Marketing',
    'PPC Advertising',
    'Bing Ads Management',
    'Meta Ads'
  ];

  const keyTools = [
    'Google Analytics',
    'Google Search Console',
    'Heatmap Analysis',
    'AHREFs',
    'SEMRUSH',
    'Screamingfrog',
    'Meta Business Suite',
    'Hootsuite'
  ];

  return (
    <section className={styles.marketingSolutions}>
      <div className={styles.wrapper}>
        {/* Left Side - Growth Chart */}
        <div className={`${styles.chartSection} ${isVisible ? styles['chartSection--visible'] : ''}`}>
          <img src="./marketing-solutions.jpg" alt="" />
        </div>

        {/* Right Side - Content */}
        <div className={`${styles.contentSection} ${isVisible ? styles['contentSection--visible'] : ''}`}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.25 8.125L10 2.5L3.75 8.125V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V8.125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 17.5V10H12.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>MARKETING</span>
          </div>

          <h1 className={styles.title}>
            Marketing <span className={styles.highlight}>Solutions</span>
          </h1>

          <p className={styles.description}>
            We help brands build stronger search visibility, attract high-intent traffic, and generate predictable leads
            with smart, data-powered digital strategies. EZ Rankings creates customised growth solutions that
            strengthen your online presence and support long-term business success.
          </p>

          {/* Core Services */}
          <div className={styles.servicesSection}>
            <h3 className={styles.sectionTitle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Core Services
            </h3>

            <div className={styles.pillsContainer}>
              {coreServices.map((service, index) => (
                <span
                  key={index}
                  className={styles.pill}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Key Tools */}
          <div className={styles.toolsSection}>
            <div className={styles.toolsHeader}>
              <h3 className={styles.sectionTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Key Tools
              </h3>

              <button
                className={styles.readLessBtn}
                onClick={() => setShowAllTools(!showAllTools)}
              >
                {showAllTools ? 'Read Less' : 'Read More'}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transform: showAllTools ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className={`${styles.pillsContainer} ${showAllTools ? styles['pillsContainer--expanded'] : ''}`}>
              {keyTools.slice(0, showAllTools ? keyTools.length : 6).map((tool, index) => (
                <span
                  key={index}
                  className={styles.pill}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className={styles.ctaButton}>
            <span className={styles.ctaIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Start Marketing Growth
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutions;