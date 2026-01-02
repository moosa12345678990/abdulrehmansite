import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaClipboardList, FaComments, FaRocket, FaChartLine, FaLightbulb, FaCheckCircle, FaCheck, FaSpinner } from 'react-icons/fa';

const Audit = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Benefit items data
    const benefits = [
        { icon: <FaRocket />, text: "Strategic growth planning" },
        { icon: <FaChartLine />, text: "Performance optimization" },
        { icon: <FaLightbulb />, text: "Actionable insights" },
        { icon: <FaCheckCircle />, text: "Proven results" }
    ];

    // Form fields data
    const formFields = [
        { id: 'name', label: 'Full Name', icon: <FaUser />, type: 'text', placeholder: 'Enter your full name' },
        { id: 'email', label: 'Business Email', icon: <FaEnvelope />, type: 'email', placeholder: 'Enter your work email' },
        { id: 'service', label: 'Service Interest', icon: <FaClipboardList />, type: 'select', placeholder: 'Select a service' },
        { id: 'message', label: 'Business Goals & Challenges', icon: <FaComments />, type: 'textarea', placeholder: 'Tell us about your business goals and challenges...' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            service: '',
            message: ''
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    const getSpacing = () => {
        if (isMobile) return 'mobile';
        if (isTablet) return 'tablet';
        return 'desktop';
    };

    const spacing = {
        mobile: {
            container: '3rem auto',
            section: '2rem',
            inner: '2rem',
            heading: '2.2rem',
            text: '1rem',
            gap: '2.5rem',
            button: '1rem'
        },
        tablet: {
            container: '5rem auto',
            section: '2.5rem',
            inner: '2.5rem',
            heading: '2.5rem',
            text: '1.1rem',
            gap: '3.5rem',
            button: '1.1rem'
        },
        desktop: {
            container: '6rem auto',
            section: '4rem',
            inner: '3rem',
            heading: '3rem',
            text: '1.15rem',
            gap: '4.5rem',
            button: '1.2rem'
        }
    };

    const currentSpacing = spacing[getSpacing()];

    return (
        <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: currentSpacing.gap,
            maxWidth: '1300px',
            width: '100%',
            margin: currentSpacing.container,
            padding: isMobile ? '2rem 1.5rem' : isTablet ? '3rem 2rem' : '4rem 3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: isMobile ? '16px' : isTablet ? '20px' : '24px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: isMobile ? 'auto' : '650px'
        }}>
            {/* Success Message Overlay */}
            {isSubmitted && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    background: '#000',
                    color: 'white',
                    padding: '1.2rem 1.8rem',
                    borderRadius: '10px',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    animation: 'slideIn 0.3s ease-out'
                    
                }}>
                    <FaCheck style={{ fontSize: '1.2rem' }} />
                    <span style={{ fontWeight: '600' }}>Email sent successfully!</span>
                    <style>
                        {`
                        @keyframes slideIn {
                            from {
                                transform: translateX(100%);
                                opacity: 0;
                            }
                            to {
                                transform: translateX(0);
                                opacity: 1;
                            }
                        }
                        `}
                    </style>
                </div>
            )}

            {/* Decorative elements */}
            {!isMobile && (
                <>
                    <div style={{
                        position: 'absolute',
                        top: '-120px',
                        right: '-120px',
                        width: '350px',
                        height: '350px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-80px',
                        left: '-80px',
                        width: '250px',
                        height: '250px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />
                </>
            )}

            {/* Left Section */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: isMobile ? '0' : '1rem',
                zIndex: 1,
                width: '100%'
            }}>
                <div style={{ 
                    background: 'rgba(255,255,255,0.95)', 
                    padding: currentSpacing.inner,
                    borderRadius: isMobile ? '14px' : isTablet ? '18px' : '20px',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    <h1 style={{
                        fontSize: currentSpacing.heading,
                        fontWeight: '800',
                        marginBottom: '1.8rem',
                        color: '#1a1a1a',
                        lineHeight: '1.15',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: isMobile ? 'center' : 'left',
                        letterSpacing: '-0.5px'
                    }}>
                        Ready to grow your revenue?
                    </h1>
                    
                    <div style={{ color: '#4a5568', marginBottom: '2.5rem' }}>
                        <p style={{
                            fontSize: currentSpacing.text,
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            fontWeight: '500',
                            textAlign: isMobile ? 'center' : 'left'
                        }}>
                            When you partner with me, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.
                        </p>
                    </div>

                    {/* Benefits List */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.2rem',
                                marginBottom: '1.2rem',
                                color: '#2d3748'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    width: isMobile ? '36px' : '40px',
                                    height: isMobile ? '36px' : '40px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: isMobile ? '1rem' : '1.1rem',
                                    flexShrink: 0,
                                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                                }}>
                                    {benefit.icon}
                                </div>
                                <span style={{ 
                                    fontSize: currentSpacing.text,
                                    fontWeight: '600',
                                    color: '#2d3748'
                                }}>
                                    {benefit.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: 'flex',
                        gap: isMobile ? '2.5rem' : '3rem',
                        marginTop: '2.5rem',
                        paddingTop: '2rem',
                        borderTop: '2px dashed rgba(102, 126, 234, 0.2)',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                                fontSize: isMobile ? '2.2rem' : '2.5rem', 
                                fontWeight: '800',
                                color: '#667eea',
                                lineHeight: '1'
                            }}>48h</div>
                            <div style={{ 
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                color: '#718096',
                                marginTop: '0.5rem'
                            }}>Average Response Time</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                                fontSize: isMobile ? '2.2rem' : '2.5rem', 
                                fontWeight: '800',
                                color: '#764ba2',
                                lineHeight: '1'
                            }}>100%</div>
                            <div style={{ 
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                color: '#718096',
                                marginTop: '0.5rem'
                            }}>Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div style={{
                flex: 1,
                background: 'rgba(17, 17, 17, 0.97)',
                color: '#fff',
                padding: currentSpacing.inner,
                borderRadius: isMobile ? '14px' : isTablet ? '18px' : '20px',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                zIndex: 1,
                minWidth: isMobile ? '100%' : '420px',
                width: '100%',
                position: 'relative'
            }}>
                {isSubmitted ? (
                    // Success State
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: '100%',
                        padding: '3rem 2rem'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            fontSize: '3rem',
                            animation: 'bounceIn 0.6s ease-out'
                        }}>
                            <FaCheck />
                        </div>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            marginBottom: '1rem',
                            // background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            color: "#fff"
                            // WebkitBackgroundClip: 'text',
                            // WebkitTextFillColor: 'transparent'
                        }}>
                            Thank You!
                        </h2>
                        <p style={{
                            color: '#cbd5e0',
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem'
                        }}>
                            Your request has been sent successfully. We'll contact you within 48 hours.
                        </p>
                        <p style={{
                            color: '#a0aec0',
                            fontSize: '0.9rem'
                        }}>
                            Check your email for confirmation.
                        </p>
                        <style>
                            {`
                            @keyframes bounceIn {
                                0% {
                                    transform: scale(0.3);
                                    opacity: 0;
                                }
                                50% {
                                    transform: scale(1.05);
                                }
                                70% {
                                    transform: scale(0.9);
                                }
                                100% {
                                    transform: scale(1);
                                    opacity: 1;
                                }
                            }
                            `}
                        </style>
                    </div>
                ) : (
                    // Form State
                    <>
                        <div style={{ 
                            textAlign: 'center', 
                            marginBottom: '2.5rem' 
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                width: isMobile ? '70px' : '80px',
                                height: isMobile ? '70px' : '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: isMobile ? '1.5rem' : '1.8rem',
                                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                            }}>
                                <FaClipboardList />
                            </div>
                            <h2 style={{
                                fontSize: isMobile ? '1.8rem' : '2.2rem',
                                fontWeight: '800',
                                marginBottom: '0.8rem',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-0.5px'
                            }}>
                                Free Strategy Session
                            </h2>
                            <p style={{ 
                                color: '#cbd5e0',
                                fontSize: isMobile ? '1rem' : '1.05rem',
                                lineHeight: '1.6'
                            }}>
                                Get your personalized growth roadmap and action plan
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.4rem' : '1.8rem' }}>
                            {formFields.map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.6rem',
                                        marginBottom: '0.6rem', 
                                        fontSize: isMobile ? '0.95rem' : '1rem',
                                        color: '#e2e8f0',
                                        fontWeight: '500'
                                    }}>
                                        <span style={{ 
                                            color: '#667eea',
                                            fontSize: '0.9em'
                                        }}>
                                            {field.icon}
                                        </span>
                                        {field.label}
                                    </label>
                                    
                                    {field.type === 'select' ? (
                                        <div style={{ position: 'relative' }}>
                                            <select
                                                id={field.id}
                                                name={field.id}
                                                value={formData[field.id]}
                                                onChange={handleInputChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: isMobile ? '1rem 1rem 1rem 3rem' : '1.1rem 1rem 1.1rem 3.2rem',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    background: 'rgba(255,255,255,0.07)',
                                                    color: '#fff',
                                                    fontSize: isMobile ? '1rem' : '1.05rem',
                                                    appearance: 'none',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.background = 'rgba(102, 126, 234, 0.15)';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                                                    e.target.style.background = 'rgba(255,255,255,0.07)';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            >
                                                <option value="">{field.placeholder}</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="design">UI/UX Design</option>
                                                <option value="marketing">Digital Marketing</option>
                                                <option value="reels">Video Content</option>
                                                <option value="consulting">Strategy Consulting</option>
                                            </select>
                                            <div style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#667eea',
                                                fontSize: '1.1rem'
                                            }}>
                                                {field.icon}
                                            </div>
                                            <div style={{
                                                position: 'absolute',
                                                right: '1.2rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#a0aec0',
                                                pointerEvents: 'none',
                                                fontSize: '0.8rem'
                                            }}>
                                                ▼
                                            </div>
                                        </div>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            id={field.id}
                                            name={field.id}
                                            value={formData[field.id]}
                                            onChange={handleInputChange}
                                            required
                                            placeholder={field.placeholder}
                                            rows={isMobile ? 4 : 5}
                                            style={{
                                                width: '100%',
                                                padding: isMobile ? '1rem 1rem 1rem 3rem' : '1.1rem 1rem 1.1rem 3.2rem',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                background: 'rgba(255,255,255,0.07)',
                                                color: '#fff',
                                                fontSize: isMobile ? '1rem' : '1.05rem',
                                                resize: 'vertical',
                                                fontFamily: 'inherit',
                                                transition: 'all 0.3s ease',
                                                minHeight: '120px'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#667eea';
                                                e.target.style.background = 'rgba(102, 126, 234, 0.15)';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                                                e.target.style.background = 'rgba(255,255,255,0.07)';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                name={field.id}
                                                value={formData[field.id]}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={field.placeholder}
                                                style={{
                                                    width: '100%',
                                                    padding: isMobile ? '1rem 1rem 1rem 3rem' : '1.1rem 1rem 1.1rem 3.2rem',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    background: 'rgba(255,255,255,0.07)',
                                                    color: '#fff',
                                                    fontSize: isMobile ? '1rem' : '1.05rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#667eea';
                                                    e.target.style.background = 'rgba(102, 126, 234, 0.15)';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                                                    e.target.style.background = 'rgba(255,255,255,0.07)';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                left: '1rem',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: '#667eea',
                                                fontSize: '1.1rem'
                                            }}>
                                                {field.icon}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    background: isSubmitting 
                                        ? '#4a5568' 
                                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    padding: currentSpacing.button,
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: '700',
                                    fontSize: isMobile ? '1.05rem' : '1.1rem',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.4s ease',
                                    marginTop: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.8rem',
                                    letterSpacing: '0.5px',
                                    boxShadow: isSubmitting 
                                        ? 'none' 
                                        : '0 8px 25px rgba(102, 126, 234, 0.3)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    opacity: isSubmitting ? 0.8 : 1
                                }}
                                onMouseOver={e => {
                                    if (!isSubmitting) {
                                        e.target.style.transform = 'translateY(-3px)';
                                        e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.5)';
                                    }
                                }}
                                onMouseOut={e => {
                                    if (!isSubmitting) {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                                    }
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner style={{ 
                                            fontSize: '1.2em',
                                            animation: 'spin 1s linear infinite'
                                        }} />
                                        Sending...
                                        <style>
                                            {`
                                            @keyframes spin {
                                                0% { transform: rotate(0deg); }
                                                100% { transform: rotate(360deg); }
                                            }
                                            `}
                                        </style>
                                    </>
                                ) : (
                                    <>
                                        <span style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '-100%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                            transition: '0.5s'
                                        }} />
                                        <FaRocket style={{ fontSize: '1.2em' }} /> Schedule Your Free Session
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Audit;