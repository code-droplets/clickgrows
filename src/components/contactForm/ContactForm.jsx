import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import useFormSubmit from "../../hooks/useFormSubmit.js";
import style from "./ContactForm.module.scss";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  subject: "",
  category: "",
  message: "",
};

const CATEGORIES = [
  { value: "", label: "Select a category" },
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [fieldErrors, setFieldErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const { submitForm, status, error, docId, reset } = useFormSubmit();
  const navigate = useNavigate(); // Add navigate hook

  // Animation on mount
  useEffect(() => {
    if (formRef.current) {
      formRef.current.classList.add(style.visible);
    }
  }, []);

  // Handle redirect after successful submission
  useEffect(() => {
    if (status === "success") {
      // Redirect to thank you page after 2 seconds
      const timer = setTimeout(() => {
        navigate("/thankyou", { 
          state: { 
            formData: formData,
            docId: docId 
          } 
        });
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [status, navigate, formData, docId]);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim())
      errors.fullName = "Full name is required";

    if (!formData.email.trim())
      errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Enter a valid email address";

    if (!formData.subject.trim())
      errors.subject = "Subject is required";

    if (!formData.category)
      errors.category = "Please select a category";

    if (!formData.message.trim())
      errors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      errors.message = "Message must be at least 10 characters";

    return errors;
  };

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);

      // Shake animation on error
      if (formRef.current) {
        formRef.current.classList.add(style.shake);
        setTimeout(() => {
          formRef.current.classList.remove(style.shake);
        }, 500);
      }
      return;
    }
    await submitForm(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setFieldErrors({});
    reset();
  };

  const isLoading = status === "loading";

  // ── Success Screen ──────────────────────────────────────────────────────────
  // if (status === "success") {
  //   return (
  //     <div className={style.wrapperFormContainer}>
  //       <div className={style.formContainer}>
  //         <div className={`${style.formCard} ${style.formCardSuccess} ${style.visible}`}>
  //           <div className={style.successState}>
  //             <div className={style.successState__icon}>
  //               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
  //                 <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
  //               </svg>
  //             </div>
  //             <h2 className={style.successState__title}>Submission Successful!</h2>
  //             <p className={style.successState__desc}>
  //               Your message has been sent successfully. Redirecting to thank you page...
  //             </p>
  //             {docId && (
  //               <code className={style.successState__ref}>Ref: {docId}</code>
  //             )}
  //             <button className={style.btnSubmit} onClick={handleReset}>
  //               <span>Submit Another</span>
  //               <svg viewBox="0 0 20 20" fill="currentColor">
  //                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
  //               </svg>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // ── Main Form ───────────────────────────────────────────────────────────────
  return (
    <div className={style.wrapperFormContainer}>
      <div className={style.formContainer} ref={formRef}>
        {/* Background decoration */}
        <div className={style.formBackground}>
          <div className={style.backgroundCircle1}></div>
          <div className={style.backgroundCircle2}></div>
          <div className={style.backgroundDots}></div>
        </div>

        <div className={style.formContainer__header}>
          <h1 className={style.formContainer__title}>
            Get In <span>Touch</span>
          </h1>
          <p className={style.formContainer__subtitle}>
            We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className={style.formCard}>
          <form className={style.form} onSubmit={handleSubmit} noValidate>

            {/* Name + Phone */}
            <div className={style.fieldRow}>
              <div className={`${style.field} ${focusedField === 'fullName' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>
                  Full Name <span className={style.required}>*</span>
                </label>
                <div className={style.field__wrapper}>
                  <input
                    className={`${style.field__input} ${fieldErrors.fullName ? style.hasError : ""}`}
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>
                {fieldErrors.fullName && (
                  <span className={style.field__error}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.fullName}
                  </span>
                )}
              </div>

              <div className={`${style.field} ${focusedField === 'phone' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>Phone</label>
                <div className={style.field__wrapper}>
                  <input
                    className={`${style.field__input} ${fieldErrors.phone ? style.hasError : ""}`}
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className={style.fieldRow}>

              <div className={`${style.field} ${focusedField === 'email' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>
                  Email Address <span className={style.required}>*</span>
                </label>
                <div className={style.field__wrapper}>
                  <input
                    className={`${style.field__input} ${fieldErrors.email ? style.hasError : ""}`}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>
                {fieldErrors.email && (
                  <span className={style.field__error}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              <div className={`${style.field} ${focusedField === 'city' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>City</label>
                <div className={style.field__wrapper}>
                  <input
                    className={`${style.field__input} ${fieldErrors.city ? style.hasError : ""}`}
                    type="text"
                    name="city"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={handleChange}
                    onFocus={() => handleFocus('city')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Category + Subject */}
            <div className={style.fieldRow}>
              <div className={`${style.field} ${focusedField === 'category' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>
                  Category <span className={style.required}>*</span>
                </label>
                <div className={style.field__wrapper}>
                  <select
                    className={`${style.field__select} ${fieldErrors.category ? style.hasError : ""}`}
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    onFocus={() => handleFocus('category')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                {fieldErrors.category && (
                  <span className={style.field__error}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.category}
                  </span>
                )}
              </div>

              <div className={`${style.field} ${focusedField === 'subject' ? style.fieldFocused : ''}`}>
                <label className={style.field__label}>
                  Subject <span className={style.required}>*</span>
                </label>
                <div className={style.field__wrapper}>
                  <input
                    className={`${style.field__input} ${fieldErrors.subject ? style.hasError : ""}`}
                    type="text"
                    name="subject"
                    placeholder="Brief subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                </div>
                {fieldErrors.subject && (
                  <span className={style.field__error}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.subject}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className={`${style.field} ${focusedField === 'message' ? style.fieldFocused : ''}`}>
              <label className={style.field__label}>
                Message <span className={style.required}>*</span>
              </label>
              <div className={style.field__wrapper}>
                <textarea
                  className={`${style.field__textarea} ${fieldErrors.message ? style.hasError : ""}`}
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  disabled={isLoading}
                />
              </div>
              {fieldErrors.message && (
                <span className={style.field__error}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {fieldErrors.message}
                </span>
              )}
            </div>

            {/* Global Error Banner */}
            {status === "error" && error && (
              <div className={style.statusBanner + " " + style.statusBannerError}>
                <div className={style.statusBannerContent}>
                  <strong>Submission Failed</strong>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`${style.btnSubmit} ${isLoading ? style.loading : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={style.spinner} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;