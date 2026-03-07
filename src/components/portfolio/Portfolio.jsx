import React, { useState, useEffect, useRef } from 'react';
import style from './Portfolio.module.scss';

const ScreenshotsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const screenshots = [
    {
      id: 1,
      image: './screenshot1.png',
      title: 'Analytics Dashboard',
      description: 'Real-time insights and comprehensive analytics'
    },
    {
      id: 2,
      image: './screenshot2.png',
      title: 'Performance Metrics',
      description: 'Track your growth and performance indicators'
    },
    {
      id: 3,
      image: './screenshot3.png',
      title: 'User Management',
      description: 'Manage users and permissions efficiently'
    },
    {
      id: 4,
      image: './screenshot4.png',
      title: 'Reports & Insights',
      description: 'Generate detailed reports and actionable insights'
    },
    {
      id: 5,
      image: './screenshot5.png',
      title: 'Campaign Overview',
      description: 'Monitor your campaigns performance in real-time'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, screenshots.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handleThumbnailClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getVisibleThumbnails = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + screenshots.length) % screenshots.length;
      visible.push({ index, offset: i });
    }
    return visible;
  };

  return (
    <section className={style['screenshots-slider']} ref={sectionRef} id='portfolio'>
      <div className={style['screenshots-slider__container']}>
        {/* Header */}
        <div className={`${style['screenshots-slider__header']} ${isVisible ? style['animate-in'] : ''}`}>
          <h2 className={style['screenshots-slider__title']}>Our Portfolio</h2>
          <p className={style['screenshots-slider__subtitle']}>
            We’ve helped businesses achieve consistent sales growth and manage thousands of orders through scalable, production-grade platforms.
          </p>
        </div>

        {/* Main Slider */}
        <div className={style['screenshots-slider__main']}>
          <div className={style['screenshots-slider__wrapper']}>
            {/* Main Screenshot Display */}
            <div className={style['screenshots-slider__display']}>
              <div className={style['screenshots-slider__screen']}>
                <img 
                  src={screenshots[currentIndex].image} 
                  alt={screenshots[currentIndex].title}
                  className={style['screenshots-slider__image']}
                />
                <div className={style['screenshots-slider__overlay']}></div>
              </div>

              {/* Info Overlay */}
              {/* <div className={style['screenshots-slider__info']}>
                <h3 className={style['screenshots-slider__info-title']}>
                  {screenshots[currentIndex].title}
                </h3>
                <p className={style['screenshots-slider__info-desc']}>
                  {screenshots[currentIndex].description}
                </p>
              </div> */}

              {/* Navigation Arrows */}
              <button 
                className={`${style['screenshots-slider__arrow']} ${style['screenshots-slider__arrow--prev']}`}
                onClick={handlePrevious}
                aria-label="Previous screenshot"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              <button 
                className={`${style['screenshots-slider__arrow']} ${style['screenshots-slider__arrow--next']}`}
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className={style['screenshots-slider__thumbnails']}>
              <div className={style['screenshots-slider__thumbnails-track']}>
                {getVisibleThumbnails().map(({ index, offset }) => (
                  <div
                    key={index}
                    className={`${style['screenshots-slider__thumbnail']} ${
                      offset === 0 ? style['active'] : ''
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    style={{
                      transform: `translateX(${offset * 110}%) scale(${offset === 0 ? 1 : 0.8})`,
                      opacity: Math.abs(offset) > 1 ? 0.3 : 1,
                      zIndex: 10 - Math.abs(offset)
                    }}
                  >
                    <img 
                      src={screenshots[index].image} 
                      alt={screenshots[index].title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className={style['screenshots-slider__indicators']}>
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`${style['screenshots-slider__indicator']} ${
                    index === currentIndex ? style['active'] : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>

      {/* Background Decorations */}
      <div className={style['screenshots-slider__bg-decoration']}></div>
    </section>
  );
};

export default ScreenshotsSlider;