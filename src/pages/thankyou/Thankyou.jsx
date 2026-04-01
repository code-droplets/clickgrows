import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Thankyou.module.scss";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, docId } = location.state || {};

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleSubmitAnother = () => {
    navigate("/contact-us");
  };

  return (
    <div className={style.thankYouContainer}>
      <div className={style.thankYouCard}>
        <div className={style.successIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h1 className={style.title}>Thank You!</h1>
        
        <p className={style.message}>
          Your message has been successfully submitted. We'll get back to you within 24 hours.
        </p>
        
        {formData && (
          <div className={style.summary}>
            <h3>Submission Summary:</h3>
            <p><strong>Name:</strong> {formData.fullName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Subject:</strong> {formData.subject}</p>
            {docId && (
              <p className={style.reference}><strong>Reference ID:</strong> {docId}</p>
            )}
          </div>
        )}
        
        <div className={style.buttonGroup}>
          <button onClick={handleGoHome} className={style.homeButton}>
            Go to Homepage
          </button>
          <button onClick={handleSubmitAnother} className={style.againButton}>
            Submit Another Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;