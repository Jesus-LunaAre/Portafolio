// Datos de empresas
const companies = {
    argentina: [
        {
            name: "YPF",
            shortName: "Yacimientos Petrolíferos Fiscales",
            image: "images/companies/ypf.png",
            fallback: "🏢"
        },
        {
            name: "TGN",
            shortName: "Transportadora Gas del Norte",
            image: "images/companies/tgn.jpg",
            fallback: "⛽"
        },
        {
            name: "PMI",
            shortName: "Philip Morris International",
            image: "images/companies/PM.png",
            fallback: "🚬"
        },
        {
            name: "KC",
            shortName: "Kimberly Clark",
            image: "images/companies/kc-logo.png",
            fallback: "🧻"
        },
        {
            name: "DAPSA",
            shortName: "DAPSA",
            image: "images/companies/dapsa.png",
            fallback: "🏭"
        }
    ],
    mexico: [
        {
            name: "OXXO",
            shortName: "OXXO",
            image: "images/companies/oxxo.png",
            fallback: "🏪"
        },
        {
            name: "Heineken",
            shortName: "Heineken",
            image: "images/companies/heineken.jpg",
            fallback: "🍺"
        },
        {
            name: "Femsa",
            shortName: "Femsa",
            image: "images/companies/femsa.jpg",
            fallback: "🏢"
        },
        {
            name: "Xpertal",
            shortName: "Xpertal",
            image: "images/companies/xpertal.jpg",
            fallback: "💼"
        },
        {
            name: "Ragasa",
            shortName: "Ragasa",
            image: "images/companies/ragasa.jpg",
            fallback: "⛽"
        },
        {
            name: "CCN",
            shortName: "CCN Transportacion",
            image: "images/companies/ccn.jpg",
            fallback: "🚚"
        }
    ]
};

// Datos de proyectos
const projects = [
    {
        title: "Integración de Aplicaciones Externas a ICM Varicent",
        description: "Desarrollé scripts en Python para integrar aplicativos externos con ICM Varicent en YPF, permitiendo la sincronización automatizada de datos y la consolidación de información desde múltiples fuentes. La solución optimiza el proceso de cálculo de incentivos y comisiones, reduciendo errores manuales y mejorando la precisión en los reportes financieros.",
        tech: ["Python", "ICM Varicent", "APIs", "Scripts"],
        demo: "#",
        code: "#",
        icon: "🔗",
        company: "YPF"
    },
    {
        title: "Base de Datos Local en ICM Varicent con DuckDB",
        description: "Implementé una solución innovadora utilizando Python scripts y DuckDB para crear una base de datos local integrada dentro de ICM Varicent. Esta implementación mejoró significativamente el rendimiento de consultas y procesamiento de datos para empresas como FEMSA, OXXO y Heineken, permitiendo análisis más rápidos y eficientes de grandes volúmenes de información.",
        tech: ["Python", "DuckDB", "ICM Varicent", "SQL"],
        demo: "#",
        code: "#",
        icon: "💾",
        company: "FEMSA, OXXO, HNK"
    },
    {
        title: "Automatización de Cálculo de Fondos de Inversión con IA",
        description: "Creé un sistema automatizado para el cálculo de fondos de inversión utilizando Inteligencia Artificial y Power Automate en Transportadora Gas del Norte. La solución procesa automáticamente datos financieros complejos, realiza cálculos precisos y genera reportes ejecutivos, reduciendo el tiempo de procesamiento y minimizando errores humanos en operaciones críticas.",
        tech: ["Power Automate", "IA", "OCR", "Automatización"],
        demo: "#",
        code: "#",
        icon: "🤖",
        company: "TGN"
    },
    {
        title: "Automatización de Cartas Porte e Instrucciones para Operadores",
        description: "Desarrollé un sistema completo de automatización que genera y envía cartas porte e instrucciones para operadores mediante WhatsApp, integrando FileMaker y Microsip. La solución automatiza el proceso de comunicación logística, mejorando la eficiencia operativa y garantizando que los operadores reciban información precisa y oportuna para sus operaciones de transporte.",
        tech: ["API Graph Meta", "FileMaker", "Microsip", "Automatización"],
        demo: "#",
        code: "#",
        icon: "📋",
        company: "CCN"
    },
    {
        title: "Automatización Masiva para Datos sencibles de Empleados en SAP",
        description: "Implementé una solución de automatización masiva utilizando Python scripts y la API de SAP para gestionar datos sensibles de empleados en XPERTAL. El sistema procesa grandes volúmenes de transacciones de manera eficiente, automatiza procesos complejos y reduce significativamente el tiempo de procesamiento, mejorando la productividad y precisión en la gestión de recursos humanos.",
        tech: ["Python", "SAP API", "Automatización", "Scripts", "Data Science"],
        demo: "#",
        code: "#",
        icon: "⚙️",
        company: "XPERTAL"
    },
    {
        title: "Aplicativo de Optimización de Rutas y Llenado de Camiones",
        description: "Desarrollé una aplicación completa utilizando Python Streamlit, Inteligencia Artificial y mapeo de rutas para optimizar las rutas de distribución y el llenado de camiones en DAPSA. La solución analiza múltiples variables logísticas, sugiere rutas optimizadas y calcula la mejor distribución de carga, resultando en reducción de costos de combustible, mejor utilización de recursos y tiempos de entrega más eficientes.",
        tech: ["Python", "Streamlit", "IA", "Mapeo de Rutas", "Machine Learning"],
        demo: "#",
        code: "#",
        icon: "🚚",
        company: "DAPSA"
    }
];

// Configuración de animaciones
const ANIMATION_CONFIG = {
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

// Utilidades
const utils = {
    // Debounce para optimizar eventos de scroll
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth scroll mejorado
    smoothScrollTo: function(element, offset = 80) {
        if (!element) return;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initProjects();
    initCompanies();
    initContactForm();
    initScrollEffects();
    initSmoothScroll();
    initScrollIndicator();
});

// Navegación mejorada
function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    // Toggle menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle?.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Actualizar navbar al hacer scroll (con debounce)
    const handleScroll = utils.debounce(() => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
        }
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Activar enlace activo según scroll (con debounce)
    const updateNav = utils.debounce(updateActiveNavLink, 100);
    window.addEventListener('scroll', updateNav, { passive: true });
    updateActiveNavLink();
}

// Actualizar enlace activo en navegación (mejorado)
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Cargar proyectos dinámicamente (mejorado)
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;

    // Renderizar proyectos
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" data-index="${index}">
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    ${project.company ? `<span class="project-company">${project.company}</span>` : ''}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Demo</a>` : ''}
                    ${project.code !== '#' ? `<a href="${project.code}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Código</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Configurar animaciones con Intersection Observer
    const observerOptions = {
        threshold: ANIMATION_CONFIG.threshold,
        rootMargin: ANIMATION_CONFIG.rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar animaciones a las tarjetas
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}, transform ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}`;
        observer.observe(card);
    });
}

// Cargar empresas dinámicamente con imágenes
function initCompanies() {
    const argentinaGrid = document.getElementById('companiesArgentina');
    const mexicoGrid = document.getElementById('companiesMexico');
    
    if (!argentinaGrid || !mexicoGrid) return;

    // Renderizar empresas de Argentina
    argentinaGrid.innerHTML = companies.argentina.map((company, index) => `
        <div class="company-card" data-index="${index}">
            <div class="company-capsule">
                <div class="company-image-wrapper">
                    <img src="${company.image}" alt="${company.name}" class="company-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="company-fallback" style="display: none;">${company.fallback}</div>
                </div>
                <span class="company-name">${company.shortName}</span>
            </div>
        </div>
    `).join('');

    // Renderizar empresas de México
    mexicoGrid.innerHTML = companies.mexico.map((company, index) => `
        <div class="company-card" data-index="${index}">
            <div class="company-capsule">
                <div class="company-image-wrapper">
                    <img src="${company.image}" alt="${company.name}" class="company-image" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="company-fallback" style="display: none;">${company.fallback}</div>
                </div>
                <span class="company-name">${company.shortName}</span>
            </div>
        </div>
    `).join('');

    // Configurar animaciones para las tarjetas de empresas
    const observerOptions = {
        threshold: ANIMATION_CONFIG.threshold,
        rootMargin: ANIMATION_CONFIG.rootMargin
    };

    const companyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                companyObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.company-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}, transform ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}`;
        companyObserver.observe(card);
    });
}

// Formulario de contacto mejorado
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, textarea');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Envío del formulario
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            showMessage('Por favor, completa todos los campos correctamente.', 'error');
            return;
        }

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Deshabilitar botón durante el envío
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.6';

        try {
            const result = await submitForm(formData);
            
            if (result.success) {
                if (result.method === 'formspree') {
                    showMessage(`¡Gracias ${formData.name}! Tu mensaje ha sido enviado correctamente. Te responderé pronto.`, 'success');
                } else {
                    showMessage(`¡Gracias ${formData.name}! Tu mensaje ha sido guardado. Te contactaré pronto.`, 'success');
                }
                contactForm.reset();
                inputs.forEach(input => input.classList.remove('error'));
            } else {
                throw new Error('Error al procesar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Error al enviar el mensaje. Por favor, intenta de nuevo o contacta directamente por email.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
        }
    });
}

// Validar campo individual
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    // Remover clases de error previas
    field.classList.remove('error');

    if (field.hasAttribute('required') && !value) {
        isValid = false;
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }

    if (!isValid) {
        field.classList.add('error');
    }

    return isValid;
}

const FORMPREE_ENDPOINT = 'https://formspree.io/f/xqajynpa'; 

// Guardar en localStorage
function saveToLocalStorage(data) {
    try {
        const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        const messageData = {
            ...data,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };
        savedMessages.push(messageData);
        localStorage.setItem('contactMessages', JSON.stringify(savedMessages));
        console.log('Mensaje guardado en localStorage:', messageData);
        return true;
    } catch (error) {
        console.error('Error guardando en localStorage:', error);
        return false;
    }
}

// Enviar a Formspree
async function submitToFormspree(data) {
    try {
        const response = await fetch(FORMPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message,
                _subject: `Nuevo mensaje de contacto de ${data.name}`,
                _replyto: data.email
            })
        });

        if (response.ok) {
            return { success: true, method: 'formspree' };
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al enviar');
        }
    } catch (error) {
        console.error('Error enviando a Formspree:', error);
        throw error;
    }
}

// Enviar formulario (intenta Formspree, luego guarda en localStorage)
async function submitForm(data) {
    // Siempre guardar en localStorage como respaldo
    saveToLocalStorage(data);

    // Intentar enviar a Formspree si está configurado
    if (FORMPREE_ENDPOINT && !FORMPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
        try {
            return await submitToFormspree(data);
        } catch (error) {
            // Si falla Formspree, solo usar localStorage
            console.warn('Formspree falló, usando solo localStorage');
            return { success: true, method: 'localStorage' };
        }
    } else {
        // Si no está configurado Formspree, solo usar localStorage
        return { success: true, method: 'localStorage' };
    }
}

// Mostrar mensaje al usuario
function showMessage(message, type = 'success') {
    // Remover mensaje previo si existe
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 16px;
        margin-top: 16px;
        border-radius: 12px;
        font-size: 15px;
        text-align: center;
        background-color: ${type === 'success' ? '#D1FAE5' : '#FEE2E2'};
        color: ${type === 'success' ? '#065F46' : '#991B1B'};
        animation: fadeInUp 0.3s ease;
    `;

    const form = document.getElementById('contactForm');
    form.appendChild(messageEl);

    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transition = 'opacity 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 5000);
}

// Efectos de scroll mejorados
function initScrollEffects() {
    const observerOptions = {
        threshold: ANIMATION_CONFIG.threshold,
        rootMargin: ANIMATION_CONFIG.rootMargin
    };

    // Observer para secciones principales
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar secciones de contenido
    document.querySelectorAll('.about-content, .contact-content, .experience-content').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}, transform ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}`;
        sectionObserver.observe(section);
    });

}

// Smooth scroll mejorado para navegación
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;

            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                utils.smoothScrollTo(target, 80);
            }
        });
    });
}

// Inicializar indicador de scroll
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;

    // Hacer clickeable el indicador
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#sobre-mi');
        if (aboutSection) {
            utils.smoothScrollTo(aboutSection, 80);
        }
    });

    // Ocultar indicador cuando el usuario hace scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '0.8';
            scrollIndicator.style.pointerEvents = 'auto';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

// Prevenir scroll cuando el menú móvil está abierto
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    const isActive = navMenu.classList.contains('active');
                    document.body.style.overflow = isActive ? 'hidden' : '';
                }
            });
        });
        observer.observe(navMenu, { attributes: true });
    }
});

// ============================================
// FUNCIONES ÚTILES PARA VER MENSAJES GUARDADOS
// ============================================
// Ejecuta estas funciones en la consola del navegador (F12)

// Ver todos los mensajes guardados
window.verMensajes = function() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    console.table(messages);
    return messages;
};

// Ver el último mensaje
window.verUltimoMensaje = function() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    if (messages.length > 0) {
        console.log('Último mensaje:', messages[messages.length - 1]);
        return messages[messages.length - 1];
    } else {
        console.log('No hay mensajes guardados');
        return null;
    }
};

// Exportar mensajes como JSON (para descargar)
window.exportarMensajes = function() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const json = JSON.stringify(messages, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mensajes-contacto-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('Mensajes exportados:', messages.length);
    return messages;
};

// Limpiar todos los mensajes guardados
window.limpiarMensajes = function() {
    if (confirm('¿Estás seguro de eliminar todos los mensajes guardados?')) {
        localStorage.removeItem('contactMessages');
        console.log('Mensajes eliminados');
        return true;
    }
    return false;
};
