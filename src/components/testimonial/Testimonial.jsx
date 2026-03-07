import React, { useState, useEffect, useRef } from 'react';
import style from './Testimonial.module.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: ' Rahul Sharma, ',
      position: 'Clothing Store Owner',
      image: '/images/testimonials/user1.jpg',
      rating: 5,
      review: 'I was very confused about digital marketing but these guys made everything so simple. Facebook ads se bhot acha response mila and website bhi professional ban gyi. Thank you so much for the support! Worth every penny 💯'
    },
    {
      id: 2,
      name: 'Dhanraj singh',
      position: 'Marketing Director',
      image: '/images/testimonials/user2.jpg',
      rating: 4,
      review: 'bhai ekdum mast kaam kiya inhone! humara instagram pe reach bhot badh gya or sales bhi increase hui. pehle to koi dhyan nhi deta tha ab daily enquiry aati h. highly recommend krunga sbko 👍'
    },
    {
      id: 5,
      name: ' Manoj Agarwal, ',
      position: 'Wholesale Electronics Supplier',
      image: '/images/testimonials/user5.jpg',
      rating: 5,
      review: 'We are in wholesale business so initially I thought digital marketing won\'t work for us but bro after trying PPC ads it was amazing. We\'re getting bulk orders from different states and B2B clients are also coming regularly. Their Google ads strategy was spot on. We got really good ROI from it'
    },
    {
      id: 3,
      name: ' Amit Verma, ',
      position: 'Restaurant Owner',
      image: '/images/testimonials/user3.jpg',
      rating: 5,
      review: 'Humne inse social media or google ads karwaye the... results dekh ke khud shock ho gye bhai 😅 weekend pe to full booking ho jata hai ab. team bhi responsive hai bhot, call kro to turant reply dete h'
    },
    {
      id: 4,
      name: ' Rajesh Patel, ',
      position: 'Textile Wholesale Business',
      image: '/images/testimonials/user4.jpg',
      rating: 5,
      review: 'we deal in bulk fabric supply and needed serious buyers only. their PPC campaign was spot on yaar, targeted the right audience and now we getting inquiries from retailers and manufacturers. no time waste with small orders. ad budget bhi properly manage kiya unhone. very happy with results so far '
    },
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
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className={style['testimonials']} ref={sectionRef} id='testimonials'>
      <div className={style['testimonials__container']}>
        {/* Header */}
        <div className={`${style['testimonials__header']} ${isVisible ? style['animate-in'] : ''}`}>
          <span className={style['testimonials__badge']}>Testimonials</span>
          <h2 className={style['testimonials__title']}>What Our Clients Say</h2>
          <p className={style['testimonials__subtitle']}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Slider Container */}
        <div className={style['testimonials__slider-wrapper']}>
          <div 
            className={style['testimonials__slider']}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`${style['testimonials__card']} ${
                  index === currentIndex ? style['active'] : ''
                }`}
              >
                <div className={style['testimonials__quote-icon']}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                <div className={style['testimonials__rating']}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>

                <p className={style['testimonials__review']}>
                  "{testimonial.review}"
                </p>

                <div className={style['testimonials__author']}>
                  
                  <div className={style['testimonials__info']}>
                    <h4 className={style['testimonials__name']}>{testimonial.name}</h4>
                    <p className={style['testimonials__position']}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            className={`${style['testimonials__nav']} ${style['testimonials__nav--prev']}`}
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button 
            className={`${style['testimonials__nav']} ${style['testimonials__nav--next']}`}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={style['testimonials__dots']}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${style['testimonials__dot']} ${
                index === currentIndex ? style['active'] : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={style['testimonials__decoration']}></div>
      <div className={style['testimonials__decoration-2']}></div>
    </section>
  );
};

export default Testimonials;