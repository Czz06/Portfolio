const portfolioData = {
    hero: {
        avatar: "https://ui-avatars.com/api/?name=Alejandro+Chen&background=2563eb&color=fff&size=300",
        titleStart: "Hola, soy Alejandro.",
        titleEnd: "",
        subtitle: "Estudiante de DAM apasionado por crear aplicaciones web modernas, funcionales y escalables."
    },
    about: "Soy un desarrollador en formación con un fuerte enfoque en el código limpio y la arquitectura de software. Actualmente cursando el Grado Superior en Desarrollo de Aplicaciones Multiplataforma, combino mi aprendizaje académico con proyectos personales. Me especializo en resolver problemas complejos mediante lógica estructurada y disfruto aprendiendo nuevas tecnologías constantemente.",
    education: [
        {
            year: "2024 - Presente",
            title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
            institution: "Prometeo ByThePower",
            desc: "Formación intensiva en desarrollo de software, bases de datos, interfaces y programación de servicios y procesos."
        },
        {
            year: "2022 - 2024",
            title: "Bachillerato Tecnológico",
            institution: "Colegio Internacional Legamar",
            desc: "Base sólida en matemáticas, tecnología industrial y fundamentos de ingeniería."
        }
    ],
    skills: {
        hard: [
            { name: "HTML", icon: "🌐", color: "#E34F26" },
            { name: "CSS", icon: "🎨", color: "#1572B6" },
            { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
            { name: "Java", icon: "☕", color: "#E76F00" }, 
            { name: "SQL", icon: "🗄️", color: "#00758F" }   
        ],
        soft: [
            { name: "Comunicación", icon: "💬", color: "#3b82f6" },
            { name: "Adaptabilidad", icon: "👥", color: "#3b82f6" },
            { name: "Resolución", icon: "🧩", color: "#3b82f6" },
            { name: "Organización", icon: "📅", color: "#3b82f6" }
        ],
        others: ["Git", "Eclipse", "Figma", "PostgreSQL", "MariaDB"]
    },
    // --- SECCIÓN MODIFICADA: AÑADIDOS ENLACES DE GITHUB ---
    projects: [
        {
            title: "Gestor de Inventario (Cine)",
            desc: "Aplicación Spring-boot, crud para gestionar stock de productos con conexión a base de datos relacional utilizando el UI de swagger",
            image: "https://pnx-assets-prod.s3.amazonaws.com/2020-07/swagger_logo_1.png",
            tags: ["Java", "SQL", "Git"],
            githubUrl: "https://github.com/Czz06/Sprint-Boot" 
        },
        {
            title: "App de Finanzas Personal",
            desc: "Aplicación web responsive para el seguimiento de gastos y presupuestos mensuales.",
            image: "https://via.placeholder.com/400x240/0ea5e9/ffffff?text=Finance+Web",
            tags: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/tu-usuario/app-finanzas" // <-- CAMBIA ESTO
        },
        {
            title: "Portfolio Personal",
            desc: "Sitio web desarrollado desde cero para mostrar mis habilidades y trayectoria.",
            image: "https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg",
            tags: ["JavaScript", "CSS", "Git"],
            githubUrl: "https://github.com/Czz06/Portfolio" 
        }
    ],
    // ---------------------------------------------------------
    contact: {
        email: "alejandrochen0220@gmail.com",
        phone: "+34 652 088 770",
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