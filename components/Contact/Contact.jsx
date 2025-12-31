import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call delay
        setTimeout(() => {
            // Show success message when button is clicked
            setSubmitStatus('success');
            setIsSubmitting(false);
            
            // Reset form after success
            setFormData({
                name: '',
                email: '',
                message: '',
                subject: '',
            });
        }, 1000);
    };

    return (
        <div id="contact" className="section pb-0">
            <div className="container">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-xl-4">
                        <span className="title-heading text-white-04">Contact</span>
                        <h1 className="display-3 fw-medium mb-0">Let&apos;s <span className="text-gradient">Talk</span></h1>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="row g-4 g-lg-5">
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Email:</h6>
                                <h3 className="mb-0">abdulrehmanfatani900@gmail.com</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="sm-heading">Call:</h6>
                                <h3 className="mb-0">+92 336 8043650</h3>
                            </div>
                        </div>
                        
                        {/* Contact Form */}
                        <div className="contact-form mt-4 mt-lg-5">
                            <form id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-3">
                                    <div className="col-12 col-md-6">
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Name" 
                                            required 
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="E-Mail" 
                                            required 
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    required 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-3"
                                />
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-3"
                                ></textarea>
                                
                                <button 
                                    className="button button-dot mt-4" 
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <span data-text={isSubmitting ? "Sending..." : "Send Message"}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </span>
                                </button>
                            </form>
                            
                            {/* Submit result */}
                            <div className="submit-result mt-3">
                                {submitStatus === 'success' && (
                                    <div className="success-message p-3 bg-success bg-opacity-10 text-success rounded">
                                        <i className="fas fa-check-circle me-2"></i>
                                        <span id="success">Thank you! Your Message has been sent successfully.</span>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="error-message p-3 bg-danger bg-opacity-10 text-danger rounded">
                                        <i className="fas fa-exclamation-circle me-2"></i>
                                        <span id="error">Something went wrong. Please try again!</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Google Maps */}
                
            </div>
        </div>
    );
};

export default Contact;