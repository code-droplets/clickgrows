import React, { useEffect, useRef, useState } from 'react';
import style from './Hero.module.scss';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const statsData = [
    {
      icon: '💰',
      title: 'BOOSTING REVENUE',
      range: '2X to 6X',
      description: 'Proven growth results',
      gradient: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)'
    },
    {
      icon: '🎯',
      title: 'IMPROVED LEADS',
      range: '3X to 8X',
      description: 'Quality lead generation',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
    },
    {
      icon: '📱',
      title: 'SOCIAL MEDIA ENGAGEMENT',
      range: '4X to 8X',
      description: 'Enhanced audience reach',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
    },
    {
      icon: '🚀',
      title: 'BRAND EXPOSURE',
      range: '100 to 1000%',
      description: 'Massive visibility boost',
      gradient: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)'
    }
  ];

  return (
    <section className={`${style.hero} ${isVisible ? style.hero__visible : ''}`} ref={heroRef}>
      <div className={style.container}>
        <div className={style.hero__content}>
          {/* Left Badge */}
          <div className={`${style.hero__badge} ${style.hero__badge__left}`}>
            <span className={style.hero__badge_icon}>📈</span>
            <span className={style.hero__badge_text}>10x Growth</span>
          </div>

          {/* Main Content */}
          <div className={style.hero__main}>
            <div className={style.hero__tag}>
              PERFORMANCE MARKETING
            </div>

            <h1 className={style.hero__title}>
              <span className={style.hero__title_highlight}>AI-Driven</span>
              <br />
              <span className={style.hero__title_subtitle}>Performance Marketing Agency</span>
              <br />
              <span className={style.hero__title_main}>Powering Growth with Precision and AI</span>
            </h1>

            <button className={style.hero__cta}>
              <span className={style.hero__cta_icon}>→</span>
              Claim Your Free Strategy
            </button>

            <div className={style.hero__rating}>
              <p className={style.hero__rating_text}>Rated 5 Stars Based on 600+ Client Reviews</p>
              <div className={style.hero__stars}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={style.hero__star}>⭐</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Badge */}
          <div className={`${style.hero__badge} ${style.hero__badge__right}`}>
            <span className={style.hero__badge_icon}>🤖</span>
            <span className={style.hero__badge_text}>AI-Powered Results</span>
          </div>

          
        </div>

        {/* Stats Section */}
        <div className={style.hero__stats}>
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={style.hero__stat_card}
              style={{ 
                animationDelay: `${0.2 + index * 0.1}s`,
              }}
            >
              <div 
                className={style.hero__stat_icon}
                style={{ background: stat.gradient }}
              >
                {stat.icon}
              </div>
              <div className={style.hero__stat_content}>
                <p className={style.hero__stat_title}>{stat.title}</p>
                <h3 className={style.hero__stat_range}>{stat.range}</h3>
                <p className={style.hero__stat_description}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={style.hero__bg_shapes}>
        <div className={`${style.hero__shape} ${style.hero__shape__1}`}></div>
        <div className={`${style.hero__shape} ${style.hero__shape__2}`}></div>
        <div className={`${style.hero__shape} ${style.hero__shape__3}`}></div>
      </div>
    </section>
  );
};

export default Hero;