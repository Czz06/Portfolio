document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initObserver();
});

function loadData() {
    // 1. Hero
    document.getElementById('hero-avatar').src = portfolioData.hero.avatar;
    document.getElementById('hero-title').innerHTML = `${portfolioData.hero.titleStart} <span class="gradient-text">${portfolioData.hero.titleEnd}</span>`;
    document.getElementById('hero-subtitle').textContent = portfolioData.hero.subtitle;

    // 2. About
    document.getElementById('about-text').textContent = portfolioData.about;

    // 3. Education
    const educationContainer = document.getElementById('education-timeline');
    portfolioData.education.forEach((edu, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item animate-on-scroll';
        item.style.setProperty('--index', index);
        
        // CORREGIDO: Sin colores fijos en los textos
        item.innerHTML = `
            <div class="timeline-card glass">
                <span style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">${edu.year}</span>
                <h3 style="margin: 0.5rem 0;">${edu.title}</h3>
                <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">${edu.institution}</h4>
                <p style="font-size: 0.95rem;">${edu.desc}</p>
            </div>
        `;
        educationContainer.appendChild(item);
    });

    // 4. Skills
    const renderSkills = (skills, containerId) => {
        const container = document.getElementById(containerId);
        skills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-card glass animate-on-scroll';
            card.style.setProperty('--index', index);
            card.style.borderBottom = `3px solid ${skill.color}`;
            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div style="font-weight: 600;">${skill.name}</div>
            `;
            container.appendChild(card);
        });
    };
    renderSkills(portfolioData.skills.hard, 'hard-skills');
    renderSkills(portfolioData.skills.soft, 'soft-skills');

    const tagsContainer = document.getElementById('tech-tags');
    portfolioData.skills.others.forEach(tag => {
        const pill = document.createElement('span');
        pill.className = 'tech-pill';
        pill.textContent = tag;
        tagsContainer.appendChild(pill);
    });

    // 5. Projects
    const projectsContainer = document.getElementById('projects-grid');
    portfolioData.projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card glass animate-on-scroll';
        card.style.setProperty('--index', index);
        
        const tagsHtml = proj.tags.map(tag => `<span class="badge-sm">${tag}</span>`).join('');
        const githubLink = proj.githubUrl || '#';

        // CORREGIDO: Eliminado 'color: #555' del párrafo <p>
        card.innerHTML = `
            <div class="project-img" style="background-image: url('${proj.image}')"></div>
            <div class="project-content">
                <h3>${proj.title}</h3>
                <div class="project-badges">${tagsHtml}</div>
                <p style="margin-bottom: 1.5rem;">${proj.desc}</p>
                <div class="project-actions">
                    <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; text-align: center;">
                        Dirigir a GitHub
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // 6. Contact
    const contactInfo = document.getElementById('contact-info');
    const contactData = [
        { icon: '📧', label: 'Email', value: portfolioData.contact.email },
        { icon: '📱', label: 'Teléfono', value: portfolioData.contact.phone },
        { icon: '📍', label: 'Ubicación', value: portfolioData.contact.location }
    ];

    contactData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'contact-item';
        // CORREGIDO: Eliminado 'color: #666' del label
        div.innerHTML = `
            <div class="icon-box">${item.icon}</div>
            <div>
                <p style="font-size: 0.8rem; text-transform: uppercase; opacity: 0.8;">${item.label}</p>
                <p style="font-weight: 600;">${item.value}</p>
            </div>
        `;
        contactInfo.appendChild(div);
    });

    const socialContainer = document.getElementById('social-links');
    portfolioData.contact.social.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'social-circle glass';
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = social.image; 
        socialContainer.appendChild(link);
    });
}

function initObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}