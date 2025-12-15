const portfolioData = {
    hero: {
        avatar: "https://ui-avatars.com/api/?name=Alex+Dev&background=2563eb&color=fff&size=300",
        titleStart: "Hola, Yo codifico",
        titleEnd: "Soluciones",
        subtitle: "Desarrollador Web especializado en crear experiencias digitales minimalistas, funcionales y de alto rendimiento."
    },
    about: "Soy un desarrollador apasionado por el código limpio y el diseño intuitivo. Con más de 5 años de experiencia en el ecosistema web, me especializo en traducir problemas complejos en interfaces elegantes. Mi enfoque combina la creatividad técnica con una sólida comprensión de la experiencia de usuario.",
    education: [
        {
            year: "2024 - Presente",
            title: "Grado superior en desarrollo de aplicaciones multiplataforma",
            institution: "Prometeo ByThePower",
            desc: "Especialización en desarrollo Full Stack."
        },
        {
            year: "2022 - 2024",
            title: "Bachillerato Tecnológico",
            institution: "Colegio internacional Legamar",
        }
    ],
    skills: {
        hard: [
            { name: "HTML", icon: "🌐", color: "#E34F26" },
            { name: "CSS", icon: "🎨", color: "#1572B6" },
            { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
            { name: "SQL", icon: "⚛️", color: "#61DAFB" },
            { name: "Java", icon: "🟢", color: "#339933" }
        ],
        soft: [
            { name: "Comunicación", icon: "💬", color: "#3b82f6" },
            { name: "Adaptabilidad", icon: "👥", color: "#3b82f6" },
            { name: "Resolución", icon: "🧩", color: "#3b82f6" },
            { name: "Gestión", icon: "⏱️", color: "#3b82f6" }
        ],
        others: ["Git", "Docker", "Figma", "PostgresSql", "MariaBD"]
    },
    projects: [
        {
            title: "E-Commerce Dashboard",
            desc: "Panel de administración completo con gráficas en tiempo real y gestión de inventario.",
            image: "https://via.placeholder.com/400x240/2563eb/ffffff?text=Dashboard",
            tags: ["React", "D3.js", "Firebase"]
        },
        {
            title: "App de Finanzas",
            desc: "Aplicación móvil-first para seguimiento de gastos personales y presupuestos.",
            image: "https://via.placeholder.com/400x240/0ea5e9/ffffff?text=Finance+App",
            tags: ["JS Puro", "LocalStorage", "CSS Grid"]
        },
        {
            title: "Portfolio CMS",
            desc: "Sistema de gestión de contenidos headless para portafolios de creativos.",
            image: "https://via.placeholder.com/400x240/3b82f6/ffffff?text=CMS",
            tags: ["Node.js", "MongoDB", "Express"]
        }
    ],
    contact: {
        email: "hola@alexdev.com",
        phone: "+34 600 000 000",
        location: "Madrid, España",
        social: [
            { 
                name: "GitHub", 
                url: "https://github.com/Czz06", 
                image: '<img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub">' 
            },
            { 
                name: "LinkedIn", 
                url: "https://www.linkedin.com/in/alejandro-chen-629ba41b9/", 
                image: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn">' 
            }
        ]
    }
};