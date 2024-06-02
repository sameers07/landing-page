// app.js

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

    // Populate Hero Section
    document.querySelector('.hero .headline').textContent = data.hero.headline;
    document.querySelector('.hero .subheadline').textContent = data.hero.subheadline;
    const ctaButtonsContainer = document.querySelector('.hero .cta-buttons');
    data.hero.ctaButtons.forEach(button => {
        const ctaButton = document.createElement('a');
        ctaButton.textContent = button.text;
        ctaButton.href = button.link;
        ctaButton.classList.add('button');
        ctaButtonsContainer.appendChild(ctaButton);
    });

    // Populate Features Section
    const featuresContainer = document.querySelector('.features .feature');
    data.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.innerHTML = `
            <img src="${feature.icon}" alt="${feature.title} Icon">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresContainer.appendChild(featureElement);
    });

    // Populate Screenshots Section
    const screenshotsContainer = document.querySelector('.screenshots .screenshot');
    data.screenshots.forEach(screenshot => {
        const screenshotElement = document.createElement('div');
        screenshotElement.innerHTML = `
            <img src="${screenshot}" alt="Screenshot">
        `;
        screenshotsContainer.appendChild(screenshotElement);
    });

    // Populate Testimonials Section
    const testimonialsContainer = document.querySelector('.testimonials .testimonial');
    data.testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.innerHTML = `
            <img src="${testimonial.avatar}" alt="${testimonial.name} Avatar">
            <p class="feedback">${testimonial.feedback}</p>
            <p class="name">${testimonial.name}</p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });

    // Populate Pricing Plans Section
    const pricingPlansContainer = document.querySelector('.pricing-plans .plan');
    data.pricing.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.innerHTML = `
            <h3>${plan.plan}</h3>
            <p class="price">${plan.price}</p>
            <ul class="features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        pricingPlansContainer.appendChild(planElement);
    });
});

