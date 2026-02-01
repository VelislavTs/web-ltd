import { Translation } from '../types/language';

export const translations: Record<'en' | 'bg', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      process: 'Process',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'We Code. You Grow.',
      subtitle: 'Transform your vision into powerful digital experiences. Custom websites, scalable web applications, and data-driven marketing that deliver results.',
      cta: 'Start Your Project',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive web solutions tailored to your business needs',
      customWebsites: {
        title: 'Custom Websites',
        description: 'Pixel-perfect, responsive websites built with modern technologies. From landing pages to complex multi-page sites, we deliver exceptional user experiences.',
      },
      webApps: {
        title: 'Web Applications',
        description: 'Scalable, high-performance web applications using cutting-edge frameworks. Real-time features, advanced state management, and seamless integrations.',
      },
      digitalMarketing: {
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies, SEO optimization, and analytics implementation. Increase your online visibility and convert visitors into customers.',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Showcasing our technical expertise and creative solutions',
      viewProject: 'View Project',
    },
    about: {
      title: 'About Web Ltd.',
      subtitle: 'Your technology partner for digital transformation',
      description: [
        'Web Ltd. is a cutting-edge web development agency specializing in creating exceptional digital experiences. Our team of expert developers and designers combines technical excellence with creative innovation.',
        'We leverage the latest technologies including React, TypeScript, Node.js, and modern cloud infrastructure to build scalable, maintainable solutions. Our approach emphasizes clean code, optimal performance, and security best practices.',
        'Whether you need a stunning marketing website, a complex web application, or comprehensive digital marketing services, we have the expertise to bring your vision to life.',
      ],
      stats: {
        years: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        satisfaction: 'Client Satisfaction',
      },
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Choose the perfect plan for your project',
      perMonth: '/month',
      oneTime: 'one-time',
      contact: 'Contact Us',
      starter: {
        name: 'Starter Website',
        description: 'Perfect for small businesses and personal brands',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO optimization',
          'Contact form integration',
          'Mobile-friendly',
          '3 rounds of revisions',
          '30-day support',
        ],
      },
      professional: {
        name: 'Professional Website',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 15 pages',
          'Custom design',
          'Advanced SEO',
          'CMS integration',
          'Analytics setup',
          'Performance optimization',
          'Unlimited revisions',
          '90-day support',
        ],
      },
      enterprise: {
        name: 'Web Application',
        description: 'Custom solutions for complex needs',
        features: [
          'Unlimited pages/features',
          'Custom architecture',
          'Database design',
          'API development',
          'User authentication',
          'Real-time features',
          'Cloud deployment',
          '6-month support',
          'Ongoing maintenance available',
        ],
      },
    },
    nonprofit: {
      title: 'Supporting Non-Profits',
      subtitle: 'Making a difference together',
      description: 'We believe in giving back to the community. Web Ltd. offers completely free website development services for registered non-profit organizations.',
      features: [
        'Professional website design and development',
        'Mobile-responsive layout',
        'Content management system',
        'SEO optimization',
        'Training and documentation',
      ],
      note: 'You only pay for hosting ($5-15/month) and domain registration ($10-20/year)',
      cta: 'Apply for Non-Profit Program',
    },
    process: {
      title: 'How We Work',
      subtitle: 'A transparent, proven process from concept to launch',
      timeline: 'Typical timeline: 2-8 weeks depending on project scope',
      steps: {
        inquiry: {
          title: 'Initial Inquiry',
          description: 'Reach out through our contact form or email. Tell us about your project vision, goals, and timeline. We respond within 24 hours to schedule a consultation.',
        },
        meeting: {
          title: 'Discovery Meeting',
          description: 'A detailed consultation to understand your business, target audience, technical requirements, and design preferences. We discuss scope, timeline, and budget.',
        },
        information: {
          title: 'Requirements Gathering',
          description: 'We collect all necessary materials: content, branding assets, technical specifications, and third-party integrations. A clear project roadmap is established.',
        },
        prototype: {
          title: 'Design & Development',
          description: 'We create interactive prototypes and mockups for your approval. Once confirmed, our developers build your solution with regular progress updates and feedback loops.',
        },
        delivery: {
          title: 'Launch & Partnership',
          description: 'Final approval, testing, and deployment. We provide training, documentation, and ongoing support. Your success becomes our success.',
        },
      },
    },
    contact: {
      title: 'Let\'s Build Something Amazing',
      subtitle: 'Get in touch to discuss your project',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Tell us about your project',
      send: 'Send Message',
    },
    footer: {
      tagline: 'Crafting digital excellence since day one',
      rights: 'All rights reserved.',
    },
  },
  bg: {
    nav: {
      home: 'Начало',
      services: 'Услуги',
      projects: 'Проекти',
      about: 'За нас',
      process: 'Процес',
      pricing: 'Цени',
      contact: 'Контакт',
    },
    hero: {
      title: 'Ние кодираме. Вие растете.',
      subtitle: 'Превърнете вашата визия в мощни дигитални изживявания. Уеб сайтове по поръчка, мащабируеми приложения и маркетинг, базиран на данни, които носят резултати.',
      cta: 'Започнете проект',
    },
    services: {
      title: 'Нашите услуги',
      subtitle: 'Цялостни уеб решения, съобразени с вашите бизнес нужди',
      customWebsites: {
        title: 'Уеб сайтове по поръчка',
        description: 'Перфектни, адаптивни уеб сайтове, изградени с модерни технологии. От целеви страници до сложни многостраничниsites, предлагаме изключителни потребителски изживявания.',
      },
      webApps: {
        title: 'Уеб приложения',
        description: 'Мащабируеми, високопроизводителни уеб приложения с най-новите технологии. Функционалност в реално време, усъвършенствано управление на състоянието и безпроблемни интеграции.',
      },
      digitalMarketing: {
        title: 'Дигитален маркетинг',
        description: 'Маркетинг стратегии, базирани на данни, SEO оптимизация и внедряване на аналитика. Увеличете онлайн видимостта си и превърнете посетителите в клиенти.',
      },
    },
    projects: {
      title: 'Избрани проекти',
      subtitle: 'Демонстрираме нашия технически експертиз и творчески решения',
      viewProject: 'Виж проекта',
    },
    about: {
      title: 'За Web Ltd.',
      subtitle: 'Вашият технологичен партньор за дигитална трансформация',
      description: [
        'Web Ltd. е авангардна агенция за уеб разработка, специализирана в създаването на изключителни дигитални изживявания. Нашият екип от експертни разработчици и дизайнери комбинира техническо съвършенство с творческа иновация.',
        'Използваме най-новите технологии, включително React, TypeScript, Node.js и модерна облачна инфраструктура, за да създадем мащабируеми, поддържаеми решения. Нашият подход набляга на чист код, оптимална производителност и най-добри практики за сигурност.',
        'Независимо дали имате нужда от зашеметяващ маркетингов уебсайт, сложно уеб приложение или цялостни услуги за дигитален маркетинг, ние имаме експертизата да превърнем вашата визия в реалност.',
      ],
      stats: {
        years: 'Години опит',
        projects: 'Завършени проекти',
        clients: 'Доволни клиенти',
        satisfaction: 'Удовлетвореност',
      },
    },
    pricing: {
      title: 'Прозрачно ценообразуване',
      subtitle: 'Изберете перфектния план за вашия проект',
      perMonth: '/месец',
      oneTime: 'еднократно',
      contact: 'Свържете се',
      starter: {
        name: 'Стартов сайт',
        description: 'Перфектен за малки бизнеси и лични марки',
        features: [
          'До 5 страници',
          'Адаптивен дизайн',
          'Основна SEO оптимизация',
          'Интеграция на контактна форма',
          'Оптимизиран за мобилни',
          '3 ревизии',
          '30-дневна поддръжка',
        ],
      },
      professional: {
        name: 'Професионален сайт',
        description: 'Идеален за развиващи се бизнеси',
        features: [
          'До 15 страници',
          'Дизайн по поръчка',
          'Усъвършенствано SEO',
          'CMS интеграция',
          'Настройка на аналитика',
          'Оптимизация на производителността',
          'Неограничени ревизии',
          '90-дневна поддръжка',
        ],
      },
      enterprise: {
        name: 'Уеб приложение',
        description: 'Решения по поръчка за сложни нужди',
        features: [
          'Неограничени страници/функции',
          'Архитектура по поръчка',
          'Дизайн на база данни',
          'API разработка',
          'Потребителска автентикация',
          'Функции в реално време',
          'Облачно внедряване',
          '6-месечна поддръжка',
          'Налична текуща поддръжка',
        ],
      },
    },
    nonprofit: {
      title: 'Подкрепа на НПО',
      subtitle: 'Правим разлика заедно',
      description: 'Вярваме във връщането на общността. Web Ltd. предлага напълно безплатни услуги за разработка на уебсайтове за регистрирани нестопански организации.',
      features: [
        'Професионален дизайн и разработка на уебсайт',
        'Адаптивен за мобилни устройства',
        'Система за управление на съдържание',
        'SEO оптимизация',
        'Обучение и документация',
      ],
      note: 'Плащате само за хостинг (10-30 лв./месец) и регистрация на домейн (20-40 лв./година)',
      cta: 'Кандидатствайте за програмата за НПО',
    },
    process: {
      title: 'Как работим',
      subtitle: 'Прозрачен, проверен процес от концепция до стартиране',
      timeline: 'Типичен срок: 2-8 седмици в зависимост от обхвата на проекта',
      steps: {
        inquiry: {
          title: 'Първоначално запитване',
          description: 'Свържете се с нас чрез контактната форма или имейл. Разкажете ни за вашата визия, цели и срокове. Отговаряме в рамките на 24 часа, за да насрочим консултация.',
        },
        meeting: {
          title: 'Запознавателна среща',
          description: 'Подробна консултация за разбиране на вашия бизнес, целева аудитория, технически изисквания и дизайн предпочитания. Обсъждаме обхват, срокове и бюджет.',
        },
        information: {
          title: 'Събиране на информация',
          description: 'Събираме всички необходими материали: съдържание, брандинг активи, технически спецификации и интеграции с трети страни. Установява се ясна пътна карта на проекта.',
        },
        prototype: {
          title: 'Дизайн и разработка',
          description: 'Създаваме интерактивни прототипи и макети за вашето одобрение. След потвърждение нашите разработчици изграждат решението с редовни актуализации и обратна връзка.',
        },
        delivery: {
          title: 'Стартиране и партньорство',
          description: 'Окончателно одобрение, тестване и внедряване. Предоставяме обучение, документация и текуща поддръжка. Вашият успех е наш успех.',
        },
      },
    },
    contact: {
      title: 'Нека създадем нещо невероятно',
      subtitle: 'Свържете се с нас, за да обсъдим вашия проект',
      name: 'Вашето име',
      email: 'Вашият имейл',
      message: 'Разкажете ни за вашия проект',
      send: 'Изпрати съобщение',
    },
    footer: {
      tagline: 'Създаваме дигитално съвършенство от първия ден',
      rights: 'Всички права запазени.',
    },
  },
};
