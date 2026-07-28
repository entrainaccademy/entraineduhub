import { SubsidiaryBrand, WhyUsPoint, EnterpriseStat, VisionMissionPillar } from '../types';

export const COMPANY_INFO = {
  name: "Entrain Edu Hub",
  tagline: "The Parent Holding Company Driving Innovation, Education & Digital Transformation",
  overview: "Entrain Edu Hub operates as the strategic parent entity powering a cohesive ecosystem of specialized brands. By unifying performance marketing, enterprise software architecture, and industry-focused talent development, we enable businesses, institutions, and professionals to excel in an era of rapid technological advancement.",
  foundedYear: "2021",
  globalPresence: "Global Enterprise Operations",
  headquarters: "Tech Hub Tower, Silicon Corridor",
  contactEmail: "contact@entrainhub.com",
  contactPhone: "+1 (800) 555-ENTRAIN",
};

export const SUBSIDIARIES: SubsidiaryBrand[] = [
  {
    id: "growth-labs",
    name: "Entrain Growth Labs",
    shortName: "Growth Labs",
    tagline: "Full-Funnel Digital Marketing & Brand Acceleration",
    categoryBadge: "Digital Growth & Media",
    shortDescription: "Data-driven performance marketing, digital branding, SEO strategies, and web experiences that scale market reach and build enduring enterprise valuation.",
    fullOverview: "Entrain Growth Labs is a premier digital marketing and brand engineering agency. We partner with ambitious startups and established enterprises to dominate digital channels through omnichannel strategies, ROI-focused media buying, creative brand strategy, and high-conversion web experiences.",
    iconName: "TrendingUp",
    accentColor: "#14B8A6",
    secondaryColor: "#0A756A",
    badgeBg: "rgba(20, 184, 166, 0.1)",
    targetAudience: "Startups, Scale-ups, and Enterprise Brands seeking aggressive digital expansion.",
    services: [
      {
        name: "Digital Marketing Agency",
        description: "Comprehensive multi-channel digital campaigns tailored for revenue growth and brand supremacy.",
        tags: ["Strategy", "Campaigns", "ROI"]
      },
      {
        name: "Brand Strategy & Identity",
        description: "Crafting iconic visual identities, positioning frameworks, and corporate narratives.",
        tags: ["Branding", "Positioning", "Design System"]
      },
      {
        name: "Performance Marketing",
        description: "Precision-targeted paid search, social advertising, and conversion rate optimization (CRO).",
        tags: ["Paid Ads", "ROAS Optimization", "PPC"]
      },
      {
        name: "Enterprise Search Engine Optimization (SEO)",
        description: "Technical SEO audits, semantic content strategies, and authority building for search dominance.",
        tags: ["Organic Growth", "Technical SEO", "Keywords"]
      },
      {
        name: "Social Media & Community Marketing",
        description: "Engaging content creation, influencer partnerships, and community management across platforms.",
        tags: ["Social Media", "Community", "Content"]
      },
      {
        name: "Web Development & Landing Pages",
        description: "Lightning-fast, high-converting digital storefronts and marketing web portals.",
        tags: ["UX/UI", "High Conversion", "Responsive"]
      }
    ],
    highlights: [
      "Average 3.8x Return on Ad Spend (ROAS) across client accounts",
      "Omnichannel media buying expertise spanning Search, Social & Programmatic",
      "Custom analytics dashboards with real-time attribution modeling"
    ],
    metrics: [
      { value: "50+", label: "Active Enterprise Clients" },
      { value: "3.8x", label: "Average Campaign ROAS" },
      { value: "10M+", label: "Ad Impressions Managed" }
    ]
  },
  {
    id: "labs",
    name: "Entrain Labs",
    shortName: "Labs",
    tagline: "Custom Software Engineering & Artificial Intelligence Solutions",
    categoryBadge: "Software & AI Solutions",
    shortDescription: "Architecting cloud-native SaaS products, custom software applications, AI models, and intuitive UI/UX systems designed for seamless operational scalability.",
    fullOverview: "Entrain Labs serves as the technology research and development engine of Entrain Edu Hub. We build enterprise-grade software products, bespoke web & mobile applications, integrated AI tools, and scalable SaaS platforms that transform complex business logic into intuitive user experiences.",
    iconName: "Code",
    accentColor: "#0A756A",
    secondaryColor: "#14B8A6",
    badgeBg: "rgba(10, 117, 106, 0.15)",
    targetAudience: "Enterprise CTOs, Product Leaders, SaaS Founders, and Tech Organizations.",
    services: [
      {
        name: "Custom Software Development",
        description: "Tailored software systems, microservices architectures, and robust API ecosystems.",
        tags: ["Microservices", "Cloud Native", "REST & GraphQL"]
      },
      {
        name: "Artificial Intelligence & ML Solutions",
        description: "Generative AI integration, predictive modeling, NLP workflows, and intelligent automation.",
        tags: ["LLM Integration", "Machine Learning", "Automation"]
      },
      {
        name: "SaaS Product Engineering",
        description: "End-to-end multi-tenant SaaS architecture design, development, monetization, and launch.",
        tags: ["Multi-Tenancy", "Subscription Engine", "SaaS"]
      },
      {
        name: "Web & Mobile Applications",
        description: "Cross-platform iOS, Android, and progressive web apps engineered for performance.",
        tags: ["React Native", "Flutter", "PWA", "Next.js"]
      },
      {
        name: "Enterprise UI/UX Design",
        description: "User research, wireframing, interactive prototyping, and design system governance.",
        tags: ["Figma", "User Research", "Design Systems"]
      }
    ],
    highlights: [
      "100% cloud-native architecture with 99.99% operational uptime standards",
      "Proprietary AI integration framework for fast enterprise adoption",
      "Rigorous DevSecOps pipelines with SOC 2 compliance readiness"
    ],
    metrics: [
      { value: "40+", label: "Custom Software Builds" },
      { value: "99.9%", label: "System Uptime Standards" },
      { value: "15+", label: "AI Models Deployed" }
    ]
  },
  {
    id: "academy",
    name: "Entrain Academy",
    shortName: "Academy",
    tagline: "Industry-Aligned Training, Software & AI Career Acceleration",
    categoryBadge: "Education & Upskilling",
    shortDescription: "Empowering students and working professionals with job-ready certifications in Full-Stack Development, Artificial Intelligence, and Performance Marketing.",
    fullOverview: "Entrain Academy bridges the gap between academic theory and high-growth industry demands. Through live online masterclasses, hands-on offline bootcamps, and enterprise workforce training, we cultivate the next generation of engineers, digital marketers, and AI specialists.",
    iconName: "GraduationCap",
    accentColor: "#14B8A6",
    secondaryColor: "#0A756A",
    badgeBg: "rgba(20, 184, 166, 0.12)",
    targetAudience: "Aspiring Engineers, Career Switchers, Digital Marketers, and Corporate Teams.",
    services: [
      {
        name: "Online & Offline Training Programs",
        description: "Flexible hybrid learning formats featuring live instructor-led mentorship and hands-on lab environments.",
        tags: ["Hybrid Learning", "Live Cohorts", "1-on-1 Mentorship"]
      },
      {
        name: "Software Development Courses",
        description: "Comprehensive bootcamps covering Full-Stack Web Development, Cloud Architecture, and DevOps.",
        tags: ["React", "Node.js", "Python", "Cloud"]
      },
      {
        name: "AI & Machine Learning Training",
        description: "Practical curriculum focused on Applied Machine Learning, LLM Prompt Engineering, and Data Science.",
        tags: ["AI Ethics", "PyTorch", "Prompt Engineering"]
      },
      {
        name: "Digital Marketing Masterclasses",
        description: "Real-world training in SEO analytics, media buying strategies, content marketing, and growth hacking.",
        tags: ["SEO", "Google Ads", "Meta Ads", "Analytics"]
      },
      {
        name: "Career Acceleration & Placement",
        description: "Resume optimization, portfolio building, technical mock interviews, and hiring partner placement.",
        tags: ["Resume Polish", "Mock Interviews", "Hiring Network"]
      }
    ],
    highlights: [
      "Over 1,000+ graduates placed in top technology and digital agencies",
      "Curriculum updated quarterly by active industry practitioners",
      "Real-world capstone projects backed by Entrain Labs technology sandbox"
    ],
    metrics: [
      { value: "1000+", label: "Graduates Upskilled" },
      { value: "92%", label: "Career Placement Rate" },
      { value: "25+", label: "Industry Mentor Network" }
    ]
  }
];

export const WHY_CHOOSE_US: WhyUsPoint[] = [
  {
    id: "innovation",
    title: "Relentless Innovation",
    description: "We pioneer modern software patterns, artificial intelligence integrations, and agile marketing methodologies that keep your organization ahead of market shifts.",
    icon: "Lightbulb"
  },
  {
    id: "quality",
    title: "Enterprise Quality",
    description: "From code architecture to design systems and educational curricula, every output undergoes rigorous quality assurance and peer review.",
    icon: "ShieldCheck"
  },
  {
    id: "experienced-team",
    title: "Vetted Industry Experts",
    description: "Our cross-functional teams consist of senior engineers, growth strategists, and veteran educators with proven track records in high-growth environments.",
    icon: "Users"
  },
  {
    id: "customer-focus",
    title: "Client-Centric Alignment",
    description: "We build long-term relationships centered around transparent metrics, dedicated project managers, and shared goals for sustainable expansion.",
    icon: "HeartHandshake"
  },
  {
    id: "scalable-solutions",
    title: "Scalable Infrastructure",
    description: "Our engineering and marketing models are architected from ground zero to scale seamlessly as your user base and business requirements expand.",
    icon: "Layers"
  },
  {
    id: "continuous-growth",
    title: "Continuous Upskilling",
    description: "By integrating our Academy directly with our Labs and Growth divisions, our team and clients remain continuously upskilled in cutting-edge tech.",
    icon: "Zap"
  }
];

export const VISION_MISSION: VisionMissionPillar[] = [
  {
    title: "Strategic Vision",
    description: "To become the global benchmark enterprise holding entity that harmonizes technological innovation, market expansion, and practical talent development into a self-sustaining growth ecosystem.",
    details: [
      "Empowering enterprises through intelligent software and performance marketing.",
      "Cultivating top-tier technology talent to bridge the global digital skills gap.",
      "Building resilient SaaS platforms that solve real-world industry bottlenecks."
    ]
  },
  {
    title: "Corporate Mission",
    description: "To deliver uncompromising value through three specialized operational verticals—Growth Labs, Labs, and Academy—driven by integrity, technological excellence, and client success.",
    details: [
      "Deliver measurable ROI for client brands via data-led marketing strategies.",
      "Engineer secure, high-performance software systems with zero architectural compromise.",
      "Provide accessible, high-impact education that transforms student career trajectories."
    ]
  }
];

export const ENTERPRISE_STATS: EnterpriseStat[] = [
  {
    value: "3+",
    numericValue: 3,
    suffix: "+",
    label: "Independent Companies",
    subtext: "Unified under Entrain Edu Hub governance"
  },
  {
    value: "100+",
    numericValue: 100,
    suffix: "+",
    label: "Enterprise Projects",
    subtext: "Delivered across software, AI, & branding"
  },
  {
    value: "1000+",
    numericValue: 1000,
    suffix: "+",
    label: "Students Trained",
    subtext: "Graduating with real-world industry skills"
  },
  {
    value: "50+",
    numericValue: 50,
    suffix: "+",
    label: "Global Clients",
    subtext: "Trusting our growth and technology labs"
  }
];

export const FAQ_ITEMS = [
  {
    q: "What is the relationship between Entrain Edu Hub and its three brands?",
    a: "Entrain Edu Hub serves as the parent corporate entity providing strategic leadership, operational oversight, and shared governance to Entrain Growth Labs, Entrain Labs, and Entrain Academy."
  },
  {
    q: "Can clients engage with individual subsidiary companies?",
    a: "Yes. Each subsidiary operates independently with specialized teams, while offering seamless cross-brand synergy when a client requires combined software development, marketing, and workforce training."
  },
  {
    q: "How does Entrain Academy integrate with Entrain Labs and Growth Labs?",
    a: "Academy students gain hands-on experience working on real-world simulated tools and internships created in collaboration with senior engineers from Labs and marketers from Growth Labs."
  }
];
