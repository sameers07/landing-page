document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "hero": {
            "headline": "Discover Our App",
            "subheadline": "The best app for all your needs.",
            "ctaButtons": [
                {
                    "text": "Download Now",
                    "link": "/download"
                },
                {
                    "text": "Learn More",
                    "link": "#features"
                }
            ]
        },
        "features": [
            {
                "title": "Feature One",
                "description": "Description of feature one.",
                "icon": "https://via.placeholder.com/100"
            },
            {
                "title": "Feature Two",
                "description": "Description of feature two.",
                "icon": "https://via.placeholder.com/100"
            }
        ],
        "screenshots": [
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300"
        ],
        "testimonials": [
            {
                "name": "User One",
                "feedback": "This app is fantastic! It has changed my life.",
                "avatar": "https://via.placeholder.com/50"
            },
            {
                "name": "User Two",
                "feedback": "I can't imagine my daily routine without this app.",
                "avatar": "https://via.placeholder.com/50"
            }
        ],
        "pricing": [
            {
                "plan": "Basic",
                "price": "$9.99/month",
                "features": ["Feature A", "Feature B", "Feature C"]
            },
            {
                "plan": "Premium",
                "price": "$19.99/month",
                "features": ["Feature A", "Feature B", "Feature C", "Feature D"]
            }
        ]
    };

    // Utility function to create an element with given attributes and content
    const createElement = (tag, attributes = {}, content = '') => {
        const element = document.createElement(tag);
        for (const [key, value] of Object.entries(attributes)) {
            if (key.startsWith('data-')) {
                element.setAttribute(key, value);
            } else {
                element[key] = value;
            }
        }
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else if (content instanceof Node) {
            element.appendChild(content);
        } else if (Array.isArray(content)) {
            content.forEach(child => element.appendChild(child));
        }
        return element;
    };

    // Populate Hero Section
    const populateHeroSection = () => {
        const hero = data.hero;
        document.querySelector('.hero .headline').textContent = hero.headline;
        document.querySelector('.hero .subheadline').textContent = hero.subheadline;

        const ctaButtonsContainer = document.querySelector('.hero .cta-buttons');
        hero.ctaButtons.forEach(button => {
            const ctaButton = createElement('a', {
                textContent: button.text,
                href: button.link,
                className: 'cta-button'
            });
            ctaButtonsContainer.appendChild(ctaButton);
        });
    };

    // Populate Features Section
    const populateFeaturesSection = () => {
        const featuresContainer = document.querySelector('.features-list');
        data.features.forEach(feature => {
            const featureElement = createElement('div', { className: 'feature' }, [
                createElement('img', { src: feature.icon, alt: `${feature.title} Icon`, className: 'feature-icon' }),
                createElement('h3', {}, feature.title),
                createElement('p', {}, feature.description)
            ]);
            featuresContainer.appendChild(featureElement);
        });
    };

    // Populate Screenshots Section
    const populateScreenshotsSection = () => {
        const screenshotsContainer = document.querySelector('.screenshots-gallery');
        data.screenshots.forEach(screenshot => {
            const screenshotElement = createElement('div', { className: 'screenshot' }, [
                createElement('img', { src: screenshot, alt: 'Screenshot' })
            ]);
            screenshotsContainer.appendChild(screenshotElement);
        });
    };

    // Populate Testimonials Section
    const populateTestimonialsSection = () => {
        const testimonialsContainer = document.querySelector('.testimonials-list');
        data.testimonials.forEach(testimonial => {
            const testimonialElement = createElement('div', { className: 'testimonial' }, [
                createElement('img', { src: testimonial.avatar, alt: `${testimonial.name} Avatar` }),
                createElement('p', { className: 'feedback' }, testimonial.feedback),
                createElement('p', { className: 'name' }, testimonial.name)
            ]);
            testimonialsContainer.appendChild(testimonialElement);
        });
    };

    // Populate Pricing Plans Section
    const populatePricingPlansSection = () => {
        const pricingPlansContainer = document.querySelector('.pricing-plans');
        data.pricing.forEach(plan => {
            const planElement = createElement('div', { className: 'pricing-plan' }, [
                createElement('h3', {}, plan.plan),
                createElement('p', { className: 'price' }, plan.price),
                createElement('ul', { className: 'features' }, plan.features.map(feature => createElement('li', {}, feature)))
            ]);
            pricingPlansContainer.appendChild(planElement);
        });
    };

    // File Upload for Icons
    const handleIconUpload = () => {
        const uploadIconInput = document.getElementById('upload-icon');
        const iconUploadContainer = document.querySelector('.icon-upload-container');

        uploadIconInput.addEventListener('change', (event) => {
            const files = event.target.files;
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = createElement('img', { src: e.target.result, className: 'uploaded-icon' });
                    iconUploadContainer.appendChild(img);

                    // Add the uploaded icon to the features section dynamically
                    const featureElement = createElement('div', { className: 'feature' }, [
                        createElement('img', { src: e.target.result, alt: 'Uploaded Icon', className: 'feature-icon' }),
                        createElement('h3', {}, 'New Feature'),
                        createElement('p', {}, 'Description of the new feature.')
                    ]);
                    document.querySelector('.features-list').appendChild(featureElement);
                };
                reader.readAsDataURL(file);
            });
        });
    };

    // Populate all sections
    const initializePageContent = () => {
        populateHeroSection();
        populateFeaturesSection();
        populateScreenshotsSection();
        populateTestimonialsSection();
        populatePricingPlansSection();
        handleIconUpload();
    };

    // Initialize page content
    initializePageContent();
});
