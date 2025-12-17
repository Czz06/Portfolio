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
        
        item.innerHTML = `
            <div class="timeline-card glass">
                <span style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">${edu.year}</span>
                <h3 style="margin: 0.5rem 0;">${edu.title}</h3>
                <h4 style="color: #666; font-size: 1rem; margin-bottom: 0.5rem;">${edu.institution}</h4>
                <p style="font-size: 0.95rem; color: #444;">${edu.desc}</p>
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

    // 5. Projects (MODIFICADO: UN SOLO BOTÓN A GITHUB)
    const projectsContainer = document.getElementById('projects-grid');
    portfolioData.projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card glass animate-on-scroll';
        card.style.setProperty('--index', index);
        
        const tagsHtml = proj.tags.map(tag => `<span class="badge-sm">${tag}</span>`).join('');
        
        // Usamos la URL de data.js o '#' si no existe
        const githubLink = proj.githubUrl || '#';

        card.innerHTML = `
            <div class="project-img" style="background-image: url('${proj.image}')"></div>
            <div class="project-content">
                <h3>${proj.title}</h3>
                <div class="project-badges">${tagsHtml}</div>
                <p style="margin-bottom: 1.5rem; color: #555;">${proj.desc}</p>
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
        div.innerHTML = `
            <div class="icon-box">${item.icon}</div>
            <div>
                <p style="font-size: 0.8rem; color: #666;">${item.label}</p>
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
        link.target = "_blank"; // Abre en nueva pestaña
        link.rel = "noopener noreferrer"; // Seguridad
        
        // Permite insertar imagen HTML o texto
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
  // === EFECTO TILT 3D (VERSIÓN SUAVE) ===
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Verificar si el ratón está sobre la tarjeta
        if (
            e.clientX >= rect.left && 
            e.clientX <= rect.right && 
            e.clientY >= rect.top && 
            e.clientY <= rect.bottom
        ) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // --- AQUÍ ESTÁ EL CAMBIO ---
            // Antes dividíamos por 20. Ahora por 80 para que sea muy sutil.
            const rotateX = ((y - centerY) / 80) * -1; 
            const rotateY = (x - centerX) / 80;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            
            // Hacemos la transición un poco más lenta (0.2s) para que se sienta más "pesado" y premium
            card.style.transition = 'transform 0.2s ease-out'; 
        } else {
            // Retorno a la posición original
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            card.style.transition = 'transform 0.5s ease'; 
        }
    });
});
}