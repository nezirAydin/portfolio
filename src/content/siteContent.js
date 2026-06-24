const siteContent = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills & Tools",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact Me",
      toggle: "العربية",
    },
    home: {
      title: "Software Engineer",
      description:
        "I specialize in high-performance systems and AI infrastructure, with a proven track record of delivering scalable full-stack solutions. My work spans Linux platforms, governance-aware AI systems, backend architecture, and customer-facing applications.",
      highlights: [
        "Specialized in high-performance systems, Linux engineering, and AI infrastructure.",
        "Able to deliver end-to-end products, from kernel-adjacent work to production-ready web applications.",
        "Master's-level engineering background with a focus on solving expensive technical problems.",
      ],
    },
    aboutMe: {
      title: "About Me",
      imageAlt: "Nazer Rabah",
      paragraphs: [
        "Hi, I'm Nazer Rabah, a software engineer with over 5+ years of experience in developing high-performance solutions using C++, Python, and Node.js. My expertise spans from building efficient static routing systems for 5G services to creating full-stack web applications with frameworks like React and Angular.",
        "I have a strong passion for learning and solving complex engineering challenges, especially in low-level systems. I am always looking for opportunities to apply my skills in a dynamic and growth-oriented environment. My journey in the tech industry has equipped me with a problem-solving mindset, allowing me to thrive in fast-paced environments.",
        "Beyond coding, I enjoy reading books about productivity and startups, and I'm always eager to embrace new challenges and grow as a professional. Let's connect and explore what we can build together!",
      ],
    },
    skills: {
      pageTitle: "Skills & Tools",
      categories: [
        {
          title: "Programming Languages",
          items: ["C++", "Python", "JavaScript/Node.js"],
        },
        {
          title: "Frameworks & Libraries",
          items: ["React", "Angular", "Flask", "DPDK"],
        },
        {
          title: "Databases",
          items: ["MongoDB", "PostgreSQL", "Mongoose"],
        },
        {
          title: "Operating Systems",
          items: ["Linux", "Red Hat", "Rocky Linux", "Customizing Linux"],
        },
        {
          title: "Tools",
          items: ["Git", "Jira", "Confluence", "ZeroMQ", "Arduino"],
        },
        {
          title: "Domains",
          items: [
            "IoT",
            "Full-stack Development",
            "Static Routing Systems",
            "5G Services",
            "Computer Vision",
          ],
        },
      ],
    },
    experience: {
      pageTitle: "Experience",
      items: [
        {
          company: "Karel Electronics",
          role: "Design Software Engineer",
          duration: "May 2022 – July 2024",
          location: "Ankara, TR",
          description: [
            "Developed and maintained high-performance software solutions for static routing, load balancing, and 5G services (UPF, AMF, SMSF) using C++, Node.js, and Python.",
            "Achieved packet processing efficiency with speeds of up to 200 Gbps through the use of DPDK and PcapPlus libraries.",
            "Led the development of full-stack applications using ZeroMQ, Redis, Mongoose, and PostgreSQL with React/Angular for frontend.",
            "Customized a Linux kernel image for admin OS, improving system performance and security.",
          ],
        },
        {
          company: "Re:Coded (bootcamp)",
          role: "Backend Engineer",
          duration: "Mar 2023 – Aug 2023",
          location: "Remote",
          description: [
            "Developed a backend application called Localeats using Node.js and Mongoose.",
            "Collaborated with frontend developers to implement the UI using React and designed the user experience with Figma.",
            "Successfully deployed the application, enhancing user experience in food discovery.",
          ],
        },
        {
          company: "Medpointr",
          role: "Software Engineer - Computer Vision",
          duration: "Nov 2021 – Apr 2022",
          location: "Ankara, TR",
          description: [
            "Worked on designing prototypes and improving code using Qt and C++.",
            "Enhanced the functionality and performance of computer vision systems, contributing to healthcare technology.",
          ],
        },
        {
          company: "Besmak",
          role: "Mechatronics Engineer",
          duration: "Jun 2018 – Feb 2020",
          location: "Ankara, TR",
          description: [
            "Designed machines testing machines (fatigue grips, electromechanical machines, bending test machines,...) using Solidworks and Auto-cad.",
            "Designed hydraulics cylinders and schematic drawings.",
          ],
        },
        {
          company: "ABC Koleji",
          role: "English Teacher",
          duration: "Feb 2015 – May 2020",
          location: "Ankara, TR",
          description: ["Taught English language Level A1-A2"],
        },
      ],
    },
    projects: {
      homepageTitle: "Featured Projects",
      pageTitle: "My Work",
      intro:
        "Selected work that shows both engineering depth in systems and AI, and the ability to deliver production-ready full-stack applications for real clients and business needs.",
      featuredTitle: "End-to-End Delivery",
      supportingTitle: "Systems and AI Depth",
      featuredBadge: "Featured",
      liveLinkLabel: "Visit Live Demo",
      websiteLinkLabel: "Visit Website",
      githubLinkLabel: "View on GitHub",
      featuredProjects: [
        {
          name: "ERP System",
          description:
            "End-to-end operations platform for production and retail: raw material receiving, recipe-based production, factory-to-store transfers, inventory tracking, daily KPIs, and role-based approval workflows.",
          type: "Full-Stack Application",
          featured: true,
        },
        {
          name: "Investment App",
          description:
            "A frontend-focused product project that demonstrates UI implementation, state handling, and app-level interaction design for a practical financial workflow.",
          type: "Frontend Application",
          featured: true,
          repoLink: "https://github.com/nazero3/investment-app",
          liveLink: "https://nazero3.github.io/investment-app/",
        },
        {
          name: "Sweet Shop",
          description:
            "Multi-state online ordering platform for handcrafted oriental sweets. Customers select a store by region, browse the menu, and complete checkout with bilingual Arabic and English support.",
          type: "Full-Stack Application",
          featured: true,
          repoLink: "https://github.com/nazero3/sweet-shop",
          liveLink: "https://nazero3.github.io/sweet-shop/",
        },
        {
          name: "EU4Less",
          description:
            "A mobile application that strengthens the end-to-end engineering story through product delivery, app experience, and service integration. It is positioned here as proof that the same systems-focused engineer can also ship commercial mobile products.",
          type: "Mobile Application",
          featured: true,
        },
      ],
      supportingProjects: [
        {
          name: "LLM Gateway with Governance Engine",
          description:
            "Designed an AI gateway focused on policy enforcement, secure model access, and operational control. This project highlights AI infrastructure thinking around governance, reliability, and enterprise readiness.",
          type: "AI Infrastructure",
        },
        {
          name: "Mehdi Group",
          description:
            "A corporate web platform presented as full-stack proof: branding, landing-page architecture, and production delivery for a business-facing presence. It demonstrates that the same engineer who works close to the system can also ship polished client-facing software.",
          type: "Full-Stack Application",
          websiteLink: "https://mehdigroups.com",
          repoLink: "https://github.com/nazero3/Mehdi-Group",
        },
        {
          name: "Linux Driver and Kernel Workflow Lab",
          description:
            "Deep work around Ubuntu, NVIDIA drivers, kernel modules, and platform-specific configuration on performance hardware. It demonstrates practical low-level debugging and systems integration beyond typical application engineering.",
          type: "Low-Level Systems",
        },
        {
          name: "Predictive Customer Insights Platform",
          description:
            "Built a data-driven product around customer segmentation, churn-risk modeling, and behavioral analysis. The focus is business impact: helping teams act earlier on retention and growth signals.",
          type: "Applied AI",
        },
        {
          name: "Scalable Mobile Infrastructure",
          description:
            "Professional engineering work on backend and platform capabilities supporting mobile experiences at scale. Positioned as infrastructure and systems architecture rather than generic app development.",
          type: "Systems Architecture",
        },
        {
          name: "5G Static Routing Systems",
          description:
            "Implemented performance-sensitive routing and service logic in telecom-oriented environments. This work reflects strong backend fundamentals in latency-aware and reliability-focused systems.",
          type: "Network Systems",
        },
        {
          name: "Localeats",
          description:
            "A collaborative product project covering backend development, APIs, and platform functionality for food discovery. It supports the full-stack story while the rest of the portfolio emphasizes deeper systems work.",
          type: "Web App",
          repoLink: "https://github.com/nazero3/Localeats",
          liveLink: "https://nazero3.github.io/Localeats/",
        },
        {
          name: "SovereignRoom — Decentralized Matrix Chat",
          description:
            "Self-hosted, auditable team messaging built on the Matrix protocol. Includes Synapse homeserver deployment, a native Android client, Ansible production kit, end-to-end encryption, and federation between independent servers.",
          type: "Decentralized Systems",
        },
      ],
    },
    contact: {
      pageTitle: "Get In Touch",
      subtitle:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      whatsappMessage: "Hello! I'd like to connect with you.",
      cards: {
        email: { title: "Email" },
        whatsapp: { title: "WhatsApp", action: "Chat with me" },
        linkedin: { title: "LinkedIn", action: "View Profile" },
        github: { title: "GitHub", action: "View Projects" },
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      skills: "المهارات والأدوات",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل معي",
      toggle: "English",
    },
    home: {
      title: "مهندس برمجيات",
      description:
        "أتخصص في الأنظمة عالية الأداء وبنية الذكاء الاصطناعي، مع سجل عملي في تقديم حلول قابلة للتوسع تشمل الواجهات والتكاملات والخدمات الخلفية. يمتد عملي من منصات لينكس وأنظمة الحوكمة للذكاء الاصطناعي إلى بناء تطبيقات موجهة للمستخدم النهائي.",
      highlights: [
        "خبرة متخصصة في الأنظمة عالية الأداء، وهندسة لينكس، وبنية الذكاء الاصطناعي.",
        "القدرة على تسليم منتجات متكاملة من الأعمال القريبة من النواة إلى تطبيقات الويب الجاهزة للإنتاج.",
        "خلفية أكاديمية على مستوى الماجستير مع تركيز على حل المشكلات التقنية عالية القيمة.",
      ],
    },
    aboutMe: {
      title: "عني",
      imageAlt: "ناظر رباح",
      paragraphs: [
        "مرحباً، أنا ناظر رباح، مهندس برمجيات بخبرة تزيد عن 5 سنوات في تطوير حلول عالية الأداء باستخدام C++ وPython وNode.js. تمتد خبرتي من بناء أنظمة التوجيه الثابت الفعالة لخدمات 5G إلى إنشاء تطبيقات ويب متكاملة بأطر عمل مثل React وAngular.",
        "لدي شغف قوي بالتعلم وحل التحديات الهندسية المعقدة، خاصة في الأنظمة منخفضة المستوى. أسعى دائماً لتطبيق مهاراتي في بيئة ديناميكية موجهة للنمو. رحلتي في صناعة التقنية زودتني بعقلية حل المشكلات، مما يمكنني من التألق في البيئات سريعة الإيقاع.",
        "بعيداً عن البرمجة، أستمتع بقراءة الكتب عن الإنتاجية والشركات الناشئة، وأتطلع دائماً لمواجهة تحديات جديدة والنمو كمحترف. لنتواصل ونستكشف ما يمكننا بناؤه معاً!",
      ],
    },
    skills: {
      pageTitle: "المهارات والأدوات",
      categories: [
        {
          title: "لغات البرمجة",
          items: ["C++", "Python", "JavaScript/Node.js"],
        },
        {
          title: "أطر العمل والمكتبات",
          items: ["React", "Angular", "Flask", "DPDK"],
        },
        {
          title: "قواعد البيانات",
          items: ["MongoDB", "PostgreSQL", "Mongoose"],
        },
        {
          title: "أنظمة التشغيل",
          items: ["Linux", "Red Hat", "Rocky Linux", "تخصيص لينكس"],
        },
        {
          title: "الأدوات",
          items: ["Git", "Jira", "Confluence", "ZeroMQ", "Arduino"],
        },
        {
          title: "المجالات",
          items: [
            "إنترنت الأشياء",
            "تطوير متكامل",
            "أنظمة التوجيه الثابت",
            "خدمات 5G",
            "رؤية حاسوبية",
          ],
        },
      ],
    },
    experience: {
      pageTitle: "الخبرة",
      items: [
        {
          company: "Karel Electronics",
          role: "مهندس برمجيات تصميم",
          duration: "مايو 2022 – يوليو 2024",
          location: "أنقرة، تركيا",
          description: [
            "تطوير وصيانة حلول برمجية عالية الأداء للتوجيه الثابت، وموازنة الأحمال، وخدمات 5G (UPF وAMF وSMSF) باستخدام C++ وNode.js وPython.",
            "تحقيق كفاءة معالجة حزم بسرعة تصل إلى 200 جيجابت في الثانية باستخدام مكتبات DPDK وPcapPlus.",
            "قيادة تطوير تطبيقات متكاملة باستخدام ZeroMQ وRedis وMongoose وPostgreSQL مع React/Angular للواجهة الأمامية.",
            "تخصيص صورة نواة لينكس لنظام الإدارة، مما حسّن الأداء والأمان.",
          ],
        },
        {
          company: "Re:Coded (bootcamp)",
          role: "مهندس خلفية",
          duration: "مارس 2023 – أغسطس 2023",
          location: "عن بُعد",
          description: [
            "تطوير تطبيق خلفي باسم Localeats باستخدام Node.js وMongoose.",
            "التعاون مع مطوري الواجهة الأمامية لتنفيذ الواجهة باستخدام React وتصميم تجربة المستخدم عبر Figma.",
            "نشر التطبيق بنجاح وتحسين تجربة المستخدم في اكتشاف الطعام.",
          ],
        },
        {
          company: "Medpointr",
          role: "مهندس برمجيات - رؤية حاسوبية",
          duration: "نوفمبر 2021 – أبريل 2022",
          location: "أنقرة، تركيا",
          description: [
            "العمل على تصميم النماذج الأولية وتحسين الشيفرة باستخدام Qt وC++.",
            "تعزيز وظائف وأداء أنظمة الرؤية الحاسوبية، مع المساهمة في تقنيات الرعاية الصحية.",
          ],
        },
        {
          company: "Besmak",
          role: "مهندس ميكاترونكس",
          duration: "يونيو 2018 – فبراير 2020",
          location: "أنقرة، تركيا",
          description: [
            "تصميم آلات اختبار (مقابض إجهاد، آلات كهروميكانيكية، آلات اختبار الانحناء،...) باستخدام Solidworks وAutoCAD.",
            "تصميم أسطوانات هيدروليكية ومخططات تفصيلية.",
          ],
        },
        {
          company: "ABC Koleji",
          role: "معلم لغة إنجليزية",
          duration: "فبراير 2015 – مايو 2020",
          location: "أنقرة، تركيا",
          description: ["تدريس اللغة الإنجليزية للمستويات A1-A2"],
        },
      ],
    },
    projects: {
      homepageTitle: "مشاريع مميزة",
      pageTitle: "أعمالي",
      intro:
        "مجموعة مختارة من الأعمال التي توضح العمق الهندسي في الأنظمة والذكاء الاصطناعي، مع القدرة على تسليم تطبيقات إنتاجية متكاملة لاحتياجات العملاء والأعمال.",
      featuredTitle: "تسليم متكامل من البداية للنهاية",
      supportingTitle: "العمق في الأنظمة والذكاء الاصطناعي",
      featuredBadge: "مميز",
      liveLinkLabel: "عرض النسخة الحية",
      websiteLinkLabel: "زيارة الموقع",
      githubLinkLabel: "عرض على GitHub",
      featuredProjects: [
        {
          name: "نظام ERP",
          description:
            "منصة عمليات متكاملة للإنتاج والتجزئة: استلام المواد الخام، الإنتاج حسب الوصفات، النقل من المصنع إلى المتاجر، تتبع المخزون، مؤشرات الأداء اليومية، وسير عمل الموافقات حسب الصلاحيات.",
          type: "تطبيق متكامل",
          featured: true,
        },
        {
          name: "Investment App",
          description:
            "مشروع يركز على الواجهة الأمامية ويعرض تنفيذ الواجهات وإدارة الحالة وتصميم التفاعل ضمن تدفق عملي مرتبط بالاستثمار.",
          type: "تطبيق واجهات أمامية",
          featured: true,
          repoLink: "https://github.com/nazero3/investment-app",
          liveLink: "https://nazero3.github.io/investment-app/",
        },
        {
          name: "Sweet Shop",
          description:
            "منصة طلب إلكتروني متعددة المناطق للحلويات الشرقية المصنوعة يدوياً. يختار العملاء المتجر حسب المنطقة، ويتصفحون القائمة، ويكملون الطلب بدعم عربي وإنجليزي.",
          type: "تطبيق متكامل",
          featured: true,
          repoLink: "https://github.com/nazero3/sweet-shop",
          liveLink: "https://nazero3.github.io/sweet-shop/",
        },
        {
          name: "EU4Less",
          description:
            "تطبيق جوال يعزز قصة التسليم المتكامل من خلال تجربة التطبيق والتكامل مع الخدمات. يتم عرضه هنا كدليل على أن المهندس المتخصص في الأنظمة يستطيع أيضاً إطلاق منتجات جوال تجارية.",
          type: "تطبيق جوال",
          featured: true,
        },
      ],
      supportingProjects: [
        {
          name: "بوابة LLM مع محرك حوكمة",
          description:
            "تصميم بوابة ذكاء اصطناعي تركّز على فرض السياسات، وتأمين الوصول إلى النماذج، والتحكم التشغيلي. يبرز هذا المشروع التفكير المعماري في الحوكمة والاعتمادية والاستعداد للاستخدام المؤسسي.",
          type: "بنية ذكاء اصطناعي",
        },
        {
          name: "Mehdi Group",
          description:
            "منصة ويب مؤسسية تُعرض كدليل على القدرة الكاملة في التطوير: الهوية، وبنية صفحات الهبوط، وتسليم منتج جاهز للأعمال. توضح أن المهندس القادر على العمل قرب النظام يستطيع أيضاً إطلاق منتج احترافي موجه للعملاء.",
          type: "تطبيق متكامل",
          websiteLink: "https://mehdigroups.com",
          repoLink: "https://github.com/nazero3/Mehdi-Group",
        },
        {
          name: "مختبر تعريفات لينكس وسير عمل النواة",
          description:
            "عمل عميق على أوبونتو وتعريفات NVIDIA ووحدات النواة وإعدادات الأجهزة عالية الأداء. يوضح هذا المشروع مهارات عملية في التصحيح منخفض المستوى وتكامل الأنظمة.",
          type: "أنظمة منخفضة المستوى",
        },
        {
          name: "منصة التنبؤ بسلوك العملاء",
          description:
            "منصة تعتمد على البيانات لتقسيم العملاء والتنبؤ بخطر الانسحاب وتحليل السلوك. التركيز هنا على الأثر التجاري ومساعدة الفرق على التحرك مبكراً.",
          type: "ذكاء اصطناعي تطبيقي",
        },
        {
          name: "بنية تحتية قابلة للتوسع لتطبيقات الجوال",
          description:
            "عمل احترافي على قدرات المنصات والخدمات الخلفية الداعمة لتجارب الجوال على نطاق واسع، مع تقديمه كبنية تحتية وهندسة أنظمة بدلاً من تطوير تطبيقات تقليدي.",
          type: "هندسة أنظمة",
        },
        {
          name: "أنظمة التوجيه الثابت لشبكات 5G",
          description:
            "تنفيذ منطق توجيه وخدمات حساس للأداء في بيئات اتصالات. يعكس هذا العمل أساساً قوياً في الأنظمة الخلفية المعتمدة على الاعتمادية وتقليل زمن الاستجابة.",
          type: "أنظمة شبكية",
        },
        {
          name: "Localeats",
          description:
            "مشروع منتج تعاوني يغطي تطوير الخدمات الخلفية وواجهات البرمجة ووظائف المنصة لاكتشاف الطعام. يدعم هذا المشروع قصة التطوير المتكامل إلى جانب التركيز الأعمق على الأنظمة.",
          type: "تطبيق ويب",
          repoLink: "https://github.com/nazero3/Localeats",
          liveLink: "https://nazero3.github.io/Localeats/",
        },
        {
          name: "SovereignRoom — دردشة Matrix اللامركزية",
          description:
            "مراسلة جماعية مستضافة ذاتياً وقابلة للتدقيق مبنية على بروتوكول Matrix. تشمل نشر خادم Synapse، تطبيق Android أصلي، حزمة Ansible للإنتاج، التشفير من طرف إلى طرف، والاتحاد بين الخوادم المستقلة.",
          type: "أنظمة لامركزية",
        },
      ],
    },
    contact: {
      pageTitle: "تواصل معي",
      subtitle:
        "أنا منفتح دائماً لمناقشة مشاريع جديدة، أفكار إبداعية، أو فرص للمشاركة في رؤيتكم.",
      whatsappMessage: "مرحباً! أود التواصل معك.",
      cards: {
        email: { title: "البريد الإلكتروني" },
        whatsapp: { title: "واتساب", action: "تحدث معي" },
        linkedin: { title: "لينكد إن", action: "عرض الملف الشخصي" },
        github: { title: "جيت هب", action: "عرض المشاريع" },
      },
    },
  },
};

export default siteContent;
