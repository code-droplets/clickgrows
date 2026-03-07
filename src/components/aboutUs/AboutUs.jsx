import React, { useEffect, useState } from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strategicPoints = [
    'AI-Driven, Performance-Focused Marketing',
    'Full-Funnel Digital Solutions for Higher ROI',
    'Personalized, Multi-Platform Growth Strategies'
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          {/* Left Content */}
          <div className={`${styles.hero__content} ${isVisible ? styles['hero__content--visible'] : ''}`}>
            <div className={styles.hero__badge}>
              <span>ABOUT US</span>
            </div>

            <h1 className={styles.hero__title}>
              <span className={styles['hero__title--yellow']}>Best Digital Marketing Agency</span>
              <span className={styles['hero__title--blue']}> in India</span>
              <span className={styles['hero__title--black']}> - Driving Results and Growth</span>
            </h1>

            <p className={styles.hero__description}>
              EZ Rankings, known as the best digital marketing agency in India, delivers 
              measurable outcomes through data-driven strategies. With full-funnel digital 
              marketing audits, we help you find growth gaps and key opportunities to maximise 
              conversions across all touchpoints.
            </p>

            <div className={styles.hero__approach}>
              <h3 className={styles['hero__approach-title']}>Our Strategic Approach Includes:</h3>
              
              <ul className={styles.hero__list}>
                {strategicPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className={styles.hero__list_item}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className={styles.hero__list_icon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#F7C948"/>
                        <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.hero__footer_text}>
              Together, these approaches create a powerful framework for long-term success. Our 
              digital marketing services use deep insights and proven methodologies to guide your 
              brand toward the right audience, better visibility, and stronger business performance.
            </p>
          </div>

          {/* Right Visual - Image */}
          <div className={`${styles.hero__visual} ${isVisible ? styles['hero__visual--visible'] : ''}`}>
            <img 
              src="./funnel.png" 
              alt="Marketing Funnel Diagram" 
              className={styles.hero__image}
            />
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className={styles.hero__floating_buttons}>
        <button className={`${styles.floating_btn} ${styles['floating_btn--whatsapp']}`} aria-label="WhatsApp">
          <span className={styles.floating_btn__badge}>1</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
        
        <button className={`${styles.floating_btn} ${styles['floating_btn--accessibility']}`} aria-label="Accessibility">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="6" r="2"/>
            <path d="M12 9c-3.866 0-7 3.134-7 7h2c0-2.757 2.243-5 5-5s5 2.243 5 5h2c0-3.866-3.134-7-7-7z"/>
            <path d="M12 13v8m-4-4h8" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;