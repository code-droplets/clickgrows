import React, { useEffect, useRef, useState } from 'react';
import styles from './WhoAreWe.module.scss';

const WhoAreWeSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);
  const [activeTab, setActiveTab] = useState('story');

  const founderStory = {
    name: 'Alex Mitchell',
    role: 'Founder & CEO',
    story: "After spending a decade leading digital marketing for Fortune 500 companies, I noticed a gap: small to medium businesses were being left behind in the AI revolution. In 2018, I left my corporate role to build a agency that would democratize access to cutting-edge marketing technology. What started as a one-person consultancy in a coffee shop has grown into a team of 50+ passionate experts serving clients across 15 countries. Our secret? We treat every client's business like it's our own.",
    quote: "Marketing isn't just about selling—it's about telling stories that matter.",
    image: './about.png',
    signature: 'Alex Mitchell'
  };

  const missionVision = {
    mission: {
      title: 'Our Mission',
      description: 'To empower businesses with data-driven marketing strategies that deliver measurable results while building authentic connections with their audience.',
      icon: '🎯',
      points: [
        'Democratize access to AI-powered marketing',
        'Drive sustainable business growth',
        'Build lasting client partnerships'
      ]
    },
    vision: {
      title: 'Our Vision',
      description: 'To become the global standard for innovative, ethical, and results-driven digital marketing that puts people at the center of technology.',
      icon: '🔮',
      points: [
        'Lead the AI marketing revolution',
        'Create industry benchmarks',
        'Foster marketing innovation'
      ]
    }
  };

  const excellencePillars = [
    {
      id: 1,
      title: 'Data-First Approach',
      description: 'Every decision is backed by real-time analytics and actionable insights.',
      icon: '📊',
      color: 'primary',
      stats: '2.5B+',
      statLabel: 'Data points analyzed'
    },
    {
      id: 2,
      title: 'Innovation Lab',
      description: 'We continuously experiment with emerging technologies to stay ahead.',
      icon: '🔬',
      color: 'purple',
      stats: '15+',
      statLabel: 'AI tools developed'
    },
    {
      id: 3,
      title: 'Talent Excellence',
      description: 'Our team consists of top 1% industry experts and certified specialists.',
      icon: '🌟',
      color: 'orange',
      stats: '50+',
      statLabel: 'Expert team members'
    },
    {
      id: 4,
      title: 'Client Success',
      description: 'We measure our success by the growth and achievements of our clients.',
      icon: '🤝',
      color: 'teal',
      stats: '98%',
      statLabel: 'Client retention rate'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Founded in San Francisco', icon: '🚀' },
    { year: '2020', event: 'Expanded to 20+ team members', icon: '📈' },
    { year: '2022', event: 'Launched AI Marketing Lab', icon: '🤖' },
    { year: '2024', event: 'Global reach: 15+ countries', icon: '🌍' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return styles.primary;
      case 'purple': return styles.purple;
      case 'orange': return styles.orange;
      case 'teal': return styles.teal;
      default: return styles.primary;
    }
  };

  return (
    <section className={styles.wrapperAboutSection} ref={sectionRef}>
      {/* Background Pattern */}
      <div className={styles.wrapperBackgroundPattern}>
        <div className={styles.wrapperPatternGrid}></div>
        <div className={styles.wrapperPatternGradient}></div>
      </div>

      <div className={styles.wrapperContainer}>
        {/* Section Header */}
        <div className={styles.wrapperSectionHeader}>
          <span className={styles.wrapperSectionSubtitle}>About Us</span>
          <h2 className={styles.wrapperSectionTitle}>
            Crafting Digital <span className={styles.wrapperHighlight}>Success Stories</span>
          </h2>
          <p className={styles.wrapperSectionDescription}>
            We're not just another marketing agency—we're your growth partners, 
            committed to transforming challenges into opportunities.
          </p>
        </div>

        {/* Founder Story */}
        <div 
          className={styles.wrapperFounderCard}
          ref={(el) => (contentRef.current[0] = el)}
        >
          <div className={styles.wrapperFounderContent}>
            <div className={styles.wrapperFounderImage}>
                <img src={founderStory.image} alt={founderStory.name} />
              {/* <span className={styles.wrapperFounderEmoji}>
              </span> */}
            </div>
            <div className={styles.wrapperFounderText}>
              <h3 className={styles.wrapperFounderName}>{founderStory.name}</h3>
              <p className={styles.wrapperFounderRole}>{founderStory.role}</p>
              <p className={styles.wrapperFounderStory}>{founderStory.story}</p>
              <blockquote className={styles.wrapperFounderQuote}>
                "{founderStory.quote}"
              </blockquote>
              <div className={styles.wrapperFounderSignature}>
                <span className={styles.wrapperSignatureLine}></span>
                <span className={styles.wrapperSignatureText}>{founderStory.signature}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Tabs */}
        <div 
          className={styles.wrapperMissionVision}
          ref={(el) => (contentRef.current[1] = el)}
        >
          <div className={styles.wrapperTabsHeader}>
            <button
              className={`${styles.wrapperTabButton} ${activeTab === 'story' ? styles.active : ''}`}
              onClick={() => setActiveTab('story')}
            >
              <span className={styles.wrapperTabIcon}>📖</span>
              Our Story
            </button>
            <button
              className={`${styles.wrapperTabButton} ${activeTab === 'mission' ? styles.active : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <span className={styles.wrapperTabIcon}>🎯</span>
              Mission & Vision
            </button>
          </div>

          <div className={styles.wrapperTabsContent}>
            {activeTab === 'story' ? (
              <div className={styles.wrapperTimelineContainer}>
                <h3 className={styles.wrapperTimelineTitle}>Our Journey</h3>
                <div className={styles.wrapperTimeline}>
                  {timeline.map((item, index) => (
                    <div key={index} className={styles.wrapperTimelineItem}>
                      <div className={styles.wrapperTimelineIcon}>{item.icon}</div>
                      <div className={styles.wrapperTimelineContent}>
                        <span className={styles.wrapperTimelineYear}>{item.year}</span>
                        <p className={styles.wrapperTimelineEvent}>{item.event}</p>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className={styles.wrapperTimelineLine}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.wrapperMissionVisionGrid}>
                <div className={styles.wrapperMissionCard}>
                  <div className={styles.wrapperMissionIcon}>{missionVision.mission.icon}</div>
                  <h4 className={styles.wrapperMissionTitle}>{missionVision.mission.title}</h4>
                  <p className={styles.wrapperMissionDescription}>{missionVision.mission.description}</p>
                  <ul className={styles.wrapperMissionPoints}>
                    {missionVision.mission.points.map((point, index) => (
                      <li key={index} className={styles.wrapperMissionPoint}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.wrapperVisionCard}>
                  <div className={styles.wrapperVisionIcon}>{missionVision.vision.icon}</div>
                  <h4 className={styles.wrapperVisionTitle}>{missionVision.vision.title}</h4>
                  <p className={styles.wrapperVisionDescription}>{missionVision.vision.description}</p>
                  <ul className={styles.wrapperVisionPoints}>
                    {missionVision.vision.points.map((point, index) => (
                      <li key={index} className={styles.wrapperVisionPoint}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Our Key to Excellence */}
        <div 
          className={styles.wrapperExcellenceSection}
          ref={(el) => (contentRef.current[2] = el)}
        >
          <h3 className={styles.wrapperExcellenceTitle}>Our Key to Excellence</h3>
          <p className={styles.wrapperExcellenceSubtitle}>
            The pillars that make us different and drive exceptional results
          </p>

          <div className={styles.wrapperExcellenceGrid}>
            {excellencePillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`${styles.wrapperExcellenceCard} ${getColorClass(pillar.color)}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperExcellenceIcon}>{pillar.icon}</div>
                <h4 className={styles.wrapperExcellenceCardTitle}>{pillar.title}</h4>
                <p className={styles.wrapperExcellenceDescription}>{pillar.description}</p>
                <div className={styles.wrapperExcellenceStat}>
                  <span className={styles.wrapperStatNumber}>{pillar.stats}</span>
                  <span className={styles.wrapperStatLabel}>{pillar.statLabel}</span>
                </div>
                <div className={styles.wrapperExcellenceLine}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div 
          className={styles.wrapperStatsBanner}
          ref={(el) => (contentRef.current[3] = el)}
        >
          <div className={styles.wrapperStatsGrid}>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>15+</span>
              <span className={styles.wrapperStatDesc}>Countries Served</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>500+</span>
              <span className={styles.wrapperStatDesc}>Projects Completed</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>98%</span>
              <span className={styles.wrapperStatDesc}>Client Satisfaction</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>50+</span>
              <span className={styles.wrapperStatDesc}>Team Experts</span>
            </div>
          </div>
        </div>

        {/* Team Quote */}
        <div className={styles.wrapperTeamQuote}>
          <svg className={styles.wrapperQuoteIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className={styles.wrapperQuoteText}>
            "The best marketing doesn't feel like marketing. It feels like a story 
            worth sharing, a solution worth embracing, and a relationship worth keeping."
          </p>
          <div className={styles.wrapperQuoteAuthor}>
            <span className={styles.wrapperAuthorName}>- The DigiMark Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeSection;