import React from 'react';
import styles from './StatsSection.module.scss';

const StatsSection = () => {
  const statsData = [
    {
      value: '9.4X',
      description: 'Average ROAS across all paid campaigns'
    },
    {
      value: '162%',
      description: 'Year-over-Year Growth in Online Revenue'
    },
    {
      value: '127%',
      description: 'Growth in High-Intent MQLs (Marketing Qualified Leads)'
    }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.statsSection__header}>
          <div className={styles.statsSection__badge}>
            <span className={styles.statsSection__badge_icon}>⚡</span>
            <span className={styles.statsSection__badge_text}>
              NUMBERS THAT PROVE OUR IMPACT
            </span>
          </div>
          
          <h2 className={styles.statsSection__title}>
            Stats That Define EZ Rankings
          </h2>
          
          <p className={styles.statsSection__subtitle}>
            Data-Driven Results That Speak For Themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsSection__grid}>
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statsSection__card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className={styles.statsSection__value}>{stat.value}</h3>
              <p className={styles.statsSection__description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;