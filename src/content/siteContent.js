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
          name: "LLM Gateway with Governance Engine",
          description:
            "Designed an AI gateway focused on policy enforcement, secure model access, and operational control. This project highlights AI infrastructure thinking around governance, reliability, and enterprise readiness.",
          type: "AI Infrastructure",
          featured: true,
        },
        {
          name: "Mehdi Group",
          description:
            "A corporate web platform presented as full-stack proof: branding, landing-page architecture, and production delivery for a business-facing presence. It demonstrates that the same engineer who works close to the system can also ship polished client-facing software.",
          type: "Full-Stack Application",
          featured: true,
          websiteLink: "https://mehdigroups.com",
          repoLink: "https://github.com/nazero3/Mehdi-Group",
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
          name: "DJI Drone GPS and ATTI Control Work",
          description:
            "Hardware-aware control work involving drone behavior, GPS state handling, and ATTI-related experimentation. It shows the ability to bridge software logic with real-world embedded and physical systems.",
          type: "Hardware Lab",
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
          name: "Investment App",
          description:
            "A frontend-focused product project that demonstrates UI implementation, state handling, and app-level interaction design for a practical financial workflow.",
          type: "Frontend Application",
          repoLink: "https://github.com/nazero3/investment-app",
          liveLink: "https://nazero3.github.io/investment-app/",
        },
      ],
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
          name: "بوابة LLM مع محرك حوكمة",
          description:
            "تصميم بوابة ذكاء اصطناعي تركّز على فرض السياسات، وتأمين الوصول إلى النماذج، والتحكم التشغيلي. يبرز هذا المشروع التفكير المعماري في الحوكمة والاعتمادية والاستعداد للاستخدام المؤسسي.",
          type: "بنية ذكاء اصطناعي",
          featured: true,
        },
        {
          name: "Mehdi Group",
          description:
            "منصة ويب مؤسسية تُعرض كدليل على القدرة الكاملة في التطوير: الهوية، وبنية صفحات الهبوط، وتسليم منتج جاهز للأعمال. توضح أن المهندس القادر على العمل قرب النظام يستطيع أيضاً إطلاق منتج احترافي موجه للعملاء.",
          type: "تطبيق متكامل",
          featured: true,
          websiteLink: "https://mehdigroups.com",
          repoLink: "https://github.com/nazero3/Mehdi-Group",
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
          name: "التحكم في DJI Drone بنظام GPS وATTI",
          description:
            "عمل مرتبط بالأجهزة يشمل سلوك الطائرة بدون طيار وإدارة حالة GPS وتجارب وضع ATTI. يوضح القدرة على الربط بين منطق البرمجيات والأنظمة الفيزيائية الحقيقية.",
          type: "مختبر عتاد",
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
          name: "Investment App",
          description:
            "مشروع يركز على الواجهة الأمامية ويعرض تنفيذ الواجهات وإدارة الحالة وتصميم التفاعل ضمن تدفق عملي مرتبط بالاستثمار.",
          type: "تطبيق واجهات أمامية",
          repoLink: "https://github.com/nazero3/investment-app",
          liveLink: "https://nazero3.github.io/investment-app/",
        },
      ],
    },
  },
};

export default siteContent;
