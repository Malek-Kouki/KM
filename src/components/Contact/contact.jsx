import React, { useState } from "react";
import "./contact.scss";
import Title_Data from "../../data/titleData";
import { contactForm } from "../Contact/contactForm";

const Contact = () => {
  const {
    formValues,
    errors,
    touched,
    popup,
    copiedField,
    handleChange,
    onSubmit,
    handleCopy,
  } = contactForm();

  const getInputClass = (fieldName) => {
    if (!touched[fieldName]) return "form-control-custom";
    return errors[fieldName] ? "form-control-custom is-invalid" : "form-control-custom is-valid";
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="bloc-desc mb-5">
            <div className="bloc-title">
              <div className="subtitle">Get In Touch</div>
            < h2>{Title_Data.contact_title}</h2>
            </div>
            <p>
              I am currently available for new projects, job opportunities, or freelance inquiries. Feel free to reach out anytime!            
            </p>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="left-section d-flex flex-column gap-3">

                <div className="info-card justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon email-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <span className="info-label">Direct Email</span>
                      <span className="info-value">koukimalek97@gmail.com</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`copy-btn ${copiedField === "email" ? "copied" : ""}`}
                    onClick={() => handleCopy("koukimalek97@gmail.com", "email")}
                    title="Copy email"
                  >
                    <i className={copiedField === "email" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>

                <div className="info-card justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="info-icon phone-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <span className="info-label">Phone</span>
                      <span className="info-value">+216 58 787 449</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`copy-btn ${copiedField === "phone" ? "copied" : ""}`}
                    onClick={() => handleCopy("+216 58 787 449", "phone")}
                    title="Copy phone number"
                  >
                    <i className={copiedField === "phone" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>

                <div className="info-card">
                  <div className="info-icon location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Tunisia</span>
                  </div>
                </div>

                <div className="info-card social-card flex-column align-items-start">
                  <span className="info-label mb-2">SOCIAL PROFILES</span>
                  <div className="d-flex gap-2 w-100">
                    <a
                      href="https://github.com/Malek-Kouki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                    >
                      <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/malek-koukii/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                    >
                      <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7" data-aos="fade-left">
              <div className="form-card">
                <form onSubmit={onSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label-custom">FULL NAME *</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formValues.name}
                          onChange={handleChange}
                          className={getInputClass("name")}
                        />
                        {touched.name && (
                          <i className={errors.name ? "fa-solid fa-xmark input-icon invalid" : "fa-solid fa-check input-icon valid"}></i>
                        )}
                      </div>
                      {touched.name && errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label-custom">EMAIL ADDRESS *</label>
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formValues.email}
                          onChange={handleChange}
                          className={getInputClass("email")}
                        />
                        {touched.email && (
                          <i className={errors.email ? "fa-solid fa-xmark input-icon invalid" : "fa-solid fa-check input-icon valid"}></i>
                        )}
                      </div>
                      {touched.email && errors.email && <p className="error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label-custom">SUBJECT *</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Project Inquiry / Job Opportunity"
                          value={formValues.subject}
                          onChange={handleChange}
                          className={getInputClass("subject")}
                        />
                        {touched.subject && (
                          <i className={errors.subject ? "fa-solid fa-xmark input-icon invalid" : "fa-solid fa-check input-icon valid"}></i>
                        )}
                      </div>
                      {touched.subject && errors.subject && <p className="error">{errors.subject}</p>}
                  </div>

                  <div className="mb-4">
                    <label className="form-label-custom">Message *</label>
                    <div className="input-box">
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Enter your message"
                        value={formValues.message}
                        onChange={handleChange}
                        className={getInputClass("message")}
                      ></textarea>
                      
                    </div>
                    {touched.message && errors.message && <p className="error">{errors.message}</p>}
                  </div>

                  <button type="submit" className="contact-submit w-100">
                    <i className="fa-regular fa-paper-plane me-2"></i> Send Message
                  </button>
                </form>
              </div>

              {popup.visible && (
                <div className={`popup ${popup.type}`}>{popup.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
