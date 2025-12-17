const portfolioData = {
    hero: {
        avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGdEXZs_Cfi5g/profile-displayphoto-shrink_800_800/B4EZcUGrQjHQAc-/0/1748388985002?e=1767830400&v=beta&t=zoBg7ZFRtshttrHqilIyFIw94JxrOHZsA1dtXitKVK4",
        titleStart: "Hola, soy Alejandro.",
        titleEnd: "",
        subtitle: "Estudiante de DAM apasionado por crear aplicaciones web modernas, funcionales y escalables."
    },
    about: "Actualmente cursando el Grado Superior en DAM, me apasiona entender no solo cómo usar las herramientas, sino cómo funcionan por dentro. Me considero una persona curiosa y autodidacta, siempre buscando el siguiente reto técnico para convertir ideas complejas en código limpio y eficiente.",
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
            desc: "Base sólida en matemáticas y tecnología."
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
            image: "https://tse2.mm.bing.net/th/id/OIP.fTN8mWwhZUVfDxlBYrZK4wHaD7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
            tags: ["Java", "SQL", "Git"],
            githubUrl: "https://github.com/Czz06/Sprint-Boot" 
        },
        {
            title: "Portfolio Personal",
            desc: "Sitio web desarrollado desde cero para mostrar mis habilidades y trayectoria.",
            image: "https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg",
            tags: ["JavaScript", "CSS", "Git"],
            githubUrl: "https://github.com/Czz06/Portfolio" 
        }
    ],
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