import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import caseKnowbest from './assets/case_knowbest.png';
import caseInfiny from './assets/case_infiny.png';
import caseAcadome from './assets/case_acadome.png';
import caseEvergreen from './assets/case_evergreen.png';
import casePreviewDefault from './assets/case_preview_default.png';

// 1. Hero slides configurations
export const heroSlides = [
  {
    id: 0,
    label: 'Partner',
    subtitle: 'Built Around Your Business',
    title: (
      <>
        Your Trusted{' '}
        <span className="accent-word">
          <span className="accent-green-char">P</span>artner
        </span>
        <br />
        in Technology
      </>
    ),
    description: '',
    bg: slide1
  },
  /* {
    id: 1,
    label: 'Solutions',
    subtitle: 'Innovation • Performance • Speed',
    title: (
      <>
        Cutting-Edge
        <br />
        <span className="accent-word">
          <span className="accent-green-char">D</span>igital
        </span>{' '}
        Solutions
      </>
    ),
    description: 'Empowering your business with high-performance architectures, premium tailored web portals, and frictionless user experiences.',
    bg: slide2
  }, */
  {
    id: 2,
    label: 'Systems',
    subtitle: 'Secure • Robust • Scalable',
    title: (
      <>
        Reimagining{' '}
        <span className="accent-word">
          <span className="accent-green-char">B</span>usiness
        </span>{' '}
        operations
        <br />
        for a faster digital world.
      </>
    ),
    description: '',
    bg: slide3
  }
];

// 2. Main company stats
export const companyStats = [
  { num: '16', label: 'Years of Expertise' },
  { num: '800', label: 'Clients Globally' },
  { num: '150', label: 'Dedicated Zinklers' },
  { num: '1000', label: 'Completed Projects' }
];

// 3. Reusable Capabilities Services Grid - Total 6 Cards (3 original, 3 requested)
export const servicesData = [
  {
    id: 'service-web',
    title: 'Website Development',
    description: 'Modern, user-friendly websites designed to strengthen brand presence and deliver smooth user experiences.',
    techBadges: [
      { name: 'WordPress', type: 'wordpress' },
      { name: 'Strapi', type: 'strapi', text: 'strapi' },
      { name: 'Blocks', type: 'blocks', text: 'blocks' },
      { name: 'Node.js', type: 'node', text: 'node' }
    ]
  },
  {
    id: 'service-app',
    title: 'Application Development',
    description: 'Scalable mobile and enterprise applications built with efficient architecture and data-driven functionality.',
    techBadges: [
      { name: 'Shopify', type: 'shopify' },
      { name: 'WooCommerce', type: 'woocommerce', text: 'Woo' },
      { name: 'CS-Cart', type: 'cscart', text: 'cs cart' }
    ]
  },
  {
    id: 'service-auto',
    title: 'Automation',
    description: 'Smart automation solutions that simplify workflows, reduce manual effort, and improve operational efficiency.',
    techBadges: [
      { name: 'Android', type: 'android', text: 'android' },
      { name: 'iOS/Apple', type: 'ios' },
      { name: 'Flutter', type: 'flutter', text: 'flutter' }
    ]
  },
  {
    id: 'service-consult',
    title: 'IT Consultation',
    description: 'Expert guidance on technology strategy, system architecture, security, and cloud readiness to support better decisions.',
    techBadges: [
      { name: 'Strategy', type: 'blocks', text: 'Strategy' },
      { name: 'Audit', type: 'strapi', text: 'Audit' },
      { name: 'AWS Cloud', type: 'node', text: 'Cloud' }
    ]
  },
  {
    id: 'service-marketing',
    title: 'Digital Marketing',
    description: 'Result-driven strategies focused on increasing visibility, attracting the right audience, and improving conversions.',
    techBadges: [
      { name: 'Google Ads', type: 'blocks', text: 'Google Ads' },
      { name: 'Meta Ads', type: 'strapi', text: 'Meta Ads' },
      { name: 'Analytics', type: 'node', text: 'Analytics' }
    ]
  },
  {
    id: 'service-software',
    title: 'Custom Software Development',
    description: 'Tailored, scalable software solutions engineered to streamline operations, automate business workflows, and support long-term growth.',
    techBadges: [
      { name: 'API Integrations', type: 'blocks', text: 'APIs' },
      { name: 'Cloud Databases', type: 'strapi', text: 'Cloud' },
      { name: 'Scalable Systems', type: 'node', text: 'Architecture' }
    ]
  }
];

// 4. Bento layout flagship projects
export const caseStudiesData = [
  {
    id: 0,
    client: 'Knowbest Global',
    category: 'Global Education',
    title: 'Your Future Abroad Starts with the Right Guidance',
    description: 'Engineered an immersive global education gateway connecting students with over 1,000 top-tier universities worldwide via automated digital guidance pipelines.',
    kpi: '1,000+',
    kpiLabel: 'Partner Universities',
    tags: ['React', 'Node.js', 'Tailwind', 'AWS'],
    gridClass: 'case-wide',
    url: 'https://knowbestglobal.com',
    address: 'knowbestglobal.com',
    image: caseKnowbest
  },
  {
    id: 1,
    client: 'Infiny Transit',
    category: 'Transit & Travel',
    title: 'Reliable Travel. Comfortable Journeys.',
    description: 'Developed an automated booking and scheduling ecosystem for premium taxi and transit fleets, streamlining vehicle dispatch networks and passenger flows.',
    kpi: '99.9%',
    kpiLabel: 'Booking Success Rate',
    tags: ['React', 'Express', 'MongoDB', 'Maps API'],
    gridClass: 'case-standard',
    url: 'https://infinytransit.com',
    address: 'infinytransit.com',
    image: caseInfiny
  },
  {
    id: 3,
    client: 'EverGreen',
    category: 'Premium Real Estate',
    title: 'Build Your Future, One Property at a Time.',
    description: 'Architected a highly responsive real estate presentation and listing search portal, featuring premium glassmorphic property filter panels and automated scheduling blocks.',
    kpi: '3.5x',
    kpiLabel: 'Lead Generation Speed',
    tags: ['React', 'Three.js', 'Firebase', 'Node.js'],
    gridClass: 'case-standard',
    url: 'https://evergreenestates.com',
    address: 'evergreenestates.com',
    image: caseEvergreen
  },
  {
    id: 2,
    client: 'Acadome',
    category: 'Financial Training',
    title: 'Empowering Individuals with Financial Management Skills',
    description: 'Constructed an intensive, practical finance training portal with automated course tracks and professional career pathways for job-ready recruits.',
    kpi: '95%',
    kpiLabel: 'Career Placement',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    gridClass: 'case-wide',
    url: 'https://acadome.in',
    address: 'acadome.in',
    image: caseAcadome
  }
];

// 5. Milestones timeline content for '/about' page
export const timelineData = [
  {
    year: '2010',
    title: 'The Seed is Sown',
    subLabel: 'Silicon Valley, Bangalore',
    description: 'Founded by four visionary engineers with a single mission: to design bespoke, robust digital architectures that eliminate software friction.'
  },
  {
    year: '2014',
    title: 'Pivoting to Mobile Ecosystems',
    subLabel: '50+ Team Members',
    description: 'Launched our dedicated native iOS & Android development team, transitioning into key enterprise retail app developers and scaling merchant tools.'
  },
  {
    year: '2019',
    title: 'Cloud & Custom Automation',
    subLabel: '100+ Completed Projects',
    description: 'Pioneered custom serverless automated scripts, setting up APIs orchestration grids to streamline operations for major logistics and banking portals.'
  },
  {
    year: '2023',
    title: 'The 150+ Zinkler Milestone',
    subLabel: 'ISO 27001 Certified',
    description: 'Expanded global presence with remote engineering hubs, achieving secure compliance metrics and supporting 800+ global brands with 99.99% uptime SLAs.'
  },
  {
    year: '2026',
    title: 'AI Engineering & Beyond',
    subLabel: 'Ready for Next-Gen Scale',
    description: 'Injecting custom workflow automation, headless Jamstack web engineering (Strapi), and high-performance server clusters for our flagship consulting clients.'
  }
];

// 6. Leadership profiles list for '/about' page
export const leadershipData = [
  {
    name: 'Dr. Siddharth Sen',
    role: 'CEO & Chief Architect',
    credentials: 'PhD in Computer Science (MIT) | 20+ Yrs Exp',
    bio: 'Directs Zinkly\'s strategic enterprise consulting desks and shapes cloud system architectures.',
    linkedIn: '#'
  },
  {
    name: 'Ananya Nair',
    role: 'VP of Mobile Engineering',
    credentials: 'Ex-Lead Flutter Specialist (Google) | 12+ Yrs Exp',
    bio: 'Orchestrates high-scale cross-platform mobile frameworks and custom merchant POS integrations.',
    linkedIn: '#'
  },
  {
    name: 'David Vance',
    role: 'Head of Cybersecurity & DevOps',
    credentials: 'Certified CISSP | RedHat Architect | 15+ Yrs Exp',
    bio: 'Safeguards customer data pipelines and ensures absolute compliance with high-level GDPR & SOC2 SLAs.',
    linkedIn: '#'
  }
];

// 7. Tech stack categorizations for '/services' page matrix tab
export const techStackMatrix = {
  frontend: [
    { name: 'React', level: 'Expert', desc: 'Bespoke UI, state architecture, and virtual DOM hooks.' },
    { name: 'Next.js', level: 'Expert', desc: 'Server-side rendering, static builds, and API routes.' },
    { name: 'Vue.js', level: 'Proficient', desc: 'Flexible lightweight modules and intuitive bindings.' },
    { name: 'Tailwind CSS', level: 'Expert', desc: 'Curated tokens, fluid layouts, and dark mode systems.' }
  ],
  backend: [
    { name: 'Node.js', level: 'Expert', desc: 'Event-driven systems, custom RESTful servers, and high scale.' },
    { name: 'Python / Django', level: 'Expert', desc: 'Scientific data computation, script pipes, and machine learning.' },
    { name: 'Strapi (Headless)', level: 'Expert', desc: 'Premium structured contents, rapid API outputs.' },
    { name: 'PostgreSQL', level: 'Expert', desc: 'Structured databases, secure integrity grids.' }
  ],
  mobile: [
    { name: 'Flutter', level: 'Expert', desc: 'Cross-platform app compiles with sub-second performance.' },
    { name: 'iOS (Swift)', level: 'Expert', desc: 'Native Apple hardware bindings and high-end core graphics.' },
    { name: 'Android (Kotlin)', level: 'Expert', desc: 'Robust Google ecosystem integrations and material UI panels.' },
    { name: 'Shopify POS', level: 'Expert', desc: 'High-conversion merchant transactions, card readers.' }
  ],
  cloud: [
    { name: 'AWS Cloud', level: 'Expert', desc: 'Serverless Lambda execution, S3 vaults, EC2 auto-scaling.' },
    { name: 'Docker / K8s', level: 'Expert', desc: 'Isolated system microservices container orchestration.' },
    { name: 'Firebase', level: 'Proficient', desc: 'Realtime databases, rapid deployment storage.' },
    { name: 'CI/CD Pipelines', level: 'Expert', desc: 'Automated testing and zero-downtime hot pushes.' }
  ]
};

// 8. Detailed, full-length project case studies mapping to '/projects/:id'
export const detailedCaseStudies = {
  '0': {
    client: 'Knowbest Global',
    title: 'Automated Global Education Portals',
    subtitle: 'Connecting over 1,000 top-tier universities with students worldwide.',
    bgImage: caseKnowbest,
    challenge: 'Knowbest Global managed hundreds of manual spreadsheet submissions, leading to significant delays in visa processing, university acceptance letters, and applicant verification pipelines. They required a secure, high-scale digital gateway.',
    solution: 'Zinkly designed a secure web portal featuring custom workflow automation scripts and headless Strapi endpoints. We constructed a centralized validation pipeline that automatically parses visa forms and academic transcripts, routing them to partner universities in real time.',
    metrics: [
      { value: '1,000+', label: 'Partner Universities' },
      { value: '45% Faster', label: 'Processing Speed' },
      { value: '120k+', label: 'Verified Students' }
    ],
    techStackUsed: ['React', 'Node.js', 'Strapi (Headless)', 'AWS S3', 'PostgreSQL'],
    quote: {
      text: "Zinkly\'s custom automation completely revolutionized our applicant pipeline. What used to take three weeks now resolves in under four minutes. A masterclass in software engineering.",
      author: "Aditi Rao, Director of Global Operations at Knowbest"
    }
  },
  '1': {
    client: 'Infiny Transit',
    title: 'Fleet Booking & Scheduling Engine',
    subtitle: 'Streamlining high-volume passenger travel routing and taxi dispatch.',
    bgImage: caseInfiny,
    challenge: 'Infiny Transit suffered from dispatch bottlenecks, server crashes during heavy monsoon peak-demand hours, and inaccurate vehicle coordinates, leading to a high taxi cancellation rate.',
    solution: 'We engineered a low-latency GPS dispatch orchestrator using Google Maps API and Node.js WebSockets. The system tracks coordinates at a 100ms frequency, dynamically calculating optimal pickup vectors and distributing request loads across elastic AWS EC2 clusters.',
    metrics: [
      { value: '99.9%', label: 'Booking Success Rate' },
      { value: '-30%', label: 'Dispatch Lag' },
      { value: '500k+', label: 'Monthly Commutes' }
    ],
    techStackUsed: ['React', 'Express.js', 'MongoDB', 'WebSockets', 'AWS EC2', 'Maps API'],
    quote: {
      text: "The real-time coordination is flawless. Zinkly delivered a secure cloud-native architecture that holds up perfectly under our highest demand surges.",
      author: "Marcus Vance, Chief Logistics Officer at Infiny Transit"
    }
  },
  '2': {
    client: 'EverGreen',
    title: 'Premium Real Estate Engine',
    subtitle: 'Stunning property filtering and interactive presentation systems.',
    bgImage: caseEvergreen,
    challenge: 'EverGreen\'s high-end property portal was slow, failing to show the high-fidelity premium luxury of their properties, causing potential high-budget buyers to bounce within 5 seconds.',
    solution: 'We built a high-fidelity glassmorphic real estate catalog utilizing dynamic 3D asset loaders (Three.js) and optimized image-render tracks. We integrated automated booking forms for virtual real estate tours.',
    metrics: [
      { value: '3.5x', label: 'Lead Generation Speed' },
      { value: '1.2s', label: 'Page Load Speed' },
      { value: '$45M+', label: 'Property Sales Value' }
    ],
    techStackUsed: ['React', 'Three.js', 'Firebase Auth', 'Tailwind CSS', 'Cloudflare CDN'],
    quote: {
      text: "The visual presentation is stunning. Potential buyers are wowed by the glassmorphism and fluid animations from their very first visit.",
      author: "Rajesh Singhania, VP of Sales at EverGreen"
    }
  },
  '3': {
    client: 'Acadome',
    title: 'Intensive Financial Training Portals',
    subtitle: 'Practical finance modeling and simulated career tracks for recruits.',
    bgImage: caseAcadome,
    challenge: 'Acadome wanted to transition their offline corporate training syllabus into an automated, interactive web campus. The layout needed to render complex modeling sheets without lagging on low-end devices.',
    solution: 'Zinkly built a progressive Next.js digital dashboard. We created optimized interactive canvas spreadsheets and progressive video-streaming blocks, backed by automated evaluation models that grade recruits immediately.',
    metrics: [
      { value: '95%', label: 'Career Placement Rate' },
      { value: '50ms', label: 'Interactive Latency' },
      { value: '25,000+', label: 'Active Graduates' }
    ],
    techStackUsed: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel CDN', 'Node.js'],
    quote: {
      text: "The performance is unmatched. Recruits can execute complex ledger formulas with zero delay, giving them a real-world edge.",
      author: "Dr. Elena Rostova, Academic Dean at Acadome"
    }
  },

};

// 9. Technical articles/blogs for '/insights' page
export const blogArticles = [
  {
    id: 'headless-cms-wordpress',
    title: 'Why Headless CMS (Strapi) Outperforms Traditional WordPress in 2026',
    category: 'Engineering',
    date: 'May 18, 2026',
    readTime: '6 min read',
    summary: 'A detailed breakdown of how separating content storage from visual presentations achieves sub-second load speeds and solidifies enterprise-level security barriers.',
    tags: ['Headless CMS', 'Strapi', 'React', 'Performance'],
    content: (
      <>
        <p>In modern web engineering, the old monolithic architecture where the database, admin panel, and page rendering all live in a single server (like WordPress) is rapidly becoming a bottleneck. Today, enterprise applications require omnichannel scaling, rigid security compliance, and exceptional speed. Enter the <strong>Headless CMS</strong>.</p>
        <blockquote>
          "By decoupling the content repository from the presentation layer, companies can deliver JSON content streams to React frontends, mobile apps, and smart devices simultaneously."
        </blockquote>
        <h3>The Performance Bottleneck</h3>
        <p>Traditional monolithic CMS platforms execute dynamic database queries every single time a page is requested, loading bulky plugins and slow CSS frameworks. Headless CMS setups, on the other hand, build pages statically using frameworks like Next.js or fetch light JSON packages from robust REST APIs. This cuts initial server response times from 1.5 seconds down to under 50 milliseconds!</p>
        <h3>Security by Isolation</h3>
        <p>Because the database and content admin dashboard live behind a separate, secure firewall, there is no public login portal for attackers to exploit on the frontend site. If your landing page suffers an influx of traffic, it remains fully operational since the static pages are cached globally on Cloudflare CDNs.</p>
      </>
    )
  },
  {
    id: 'automating-enterprise-workflows',
    title: 'Automating Enterprise Workflows: The Cost of Manual API Orchestration',
    category: 'Automation',
    date: 'May 12, 2026',
    readTime: '8 min read',
    summary: 'How custom serverless integrations and real-time WebSockets eliminate administrative delays and optimize booking coordination systems.',
    tags: ['Automation', 'WebSockets', 'Serverless', 'APIs'],
    content: (
      <>
        <p>Administrative latency is the silent margin-killer of logistics, transit, and retail companies. When developers manually tie together booking forms, CRM tables, and dispatch maps with ad-hoc cron scripts, maintenance overhead spikes and sync errors rise.</p>
        <h3>The Shift to Serverless Orchestration</h3>
        <p>Modern workflow automation leverages serverless microservices that activate only when specific client events trigger them. This eliminates server idle costs, scaling dynamically from 10 triggers to 10,000 triggers in milliseconds.</p>
        <h3>Real-time Coordination</h3>
        <p>By integrating persistent WebSocket links, dispatch dispatchers can coordinate routes dynamically, avoiding data lag and keeping customer dashboards updated at sub-second intervals.</p>
      </>
    )
  },
  {
    id: 'custom-hardware-swift-flutter',
    title: 'Bridges & Compiles: Deciding Between iOS Swift and Cross-Platform Flutter',
    category: 'Mobile Apps',
    date: 'May 05, 2026',
    readTime: '5 min read',
    summary: 'Reviewing performance benchmarks, native SDK hardware access, and developer velocity metrics to choose the right mobile application stack.',
    tags: ['Mobile Development', 'Flutter', 'Swift', 'Architecture'],
    content: (
      <>
        <p>Choosing the mobile tech stack determines development velocity and future scalability. Developers are constantly debating whether to compile a single cross-platform codebase using Flutter or write native Swift for iOS and Kotlin for Android.</p>
        <h3>When to Choose Flutter</h3>
        <p>If your startup needs to launch on both platforms within 3 months, Flutter offers excellent developer speed with a single code structure and high-performance rendering that operates at 60fps.</p>
        <h3>When Swift Remains Untouched</h3>
        <p>For high-end apps requiring direct bluetooth hardware access, advanced custom AR filters, background telemetry tracking, or deep integration with iOS widgets, native Swift development remains the gold standard.</p>
      </>
    )
  }
];

// 10. Industry Vertical Profiles for '/solutions'
export const industryProfiles = [
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'High-security, low-latency transaction ledgers, bank-grade API integrations, secure customer dashboards, and ISO-compliant database designs.',
    kpi: '99.999% Uptime',
    badge: 'SECURE'
  },
  {
    id: 'retail',
    name: 'Enterprise E-Commerce',
    description: 'Sub-second page load times, automated catalog syncs, secure multi-warehouse stock management, headless Shopify integrations, and custom checkouts.',
    kpi: '+28% Conversions',
    badge: 'FAST'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Biotech',
    description: 'HIPAA-compliant server vaults, secure patient portals, dynamic chart visualizations, real-time doctor chats, and encrypted telemedicine channels.',
    kpi: 'SOC2 Compliant',
    badge: 'HIPAA'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Real-time WebSocket coordinates dispatch, predictive stock calculations, automated driver route planners, and custom driver telemetry apps.',
    kpi: '30% Faster Dispatch',
    badge: 'REALTIME'
  }
];

// 11. FAQ drawers lists
export const faqData = [
  {
    question: 'How long does the project discovery and onboarding process take?',
    answer: 'Typically, Zinkly moves from initial planner selection to a detailed technical discovery session in 48 hours. From there, we design and deliver a full system architecture blueprint, project plan, and start development sprints in under 10 business days.'
  },
  {
    question: 'What do your corporate Service Level Agreements (SLAs) cover?',
    answer: 'Our enterprise SLAs guarantee up to 99.99% system uptime, around-the-clock telemetry monitoring, proactive preventative patches, automated multi-region cloud backups, and a dedicated engineering channel with a 15-minute response threshold for critical security issues.'
  },
  {
    question: 'Who retains the intellectual property (IP) rights of the custom software?',
    answer: 'Upon project completion and settlement, 100% of the intellectual property, source code, database architectures, and cloud assets are fully assigned to your company. Zinkly transfers all repository access and handles cloud account ownership delegation.'
  },
  {
    question: 'How does your Internship Program coordinate with real-world client sprints?',
    answer: 'Zinkly interns do NOT work on live production client environments. They work inside isolated, sandbox mirroring environments, building adjacent developer modules under the direct mentorship of senior tech leads. Only upon graduating to full Zinkler status do they join active client sprint decks.'
  }
];

export const fallbackPreviewImage = casePreviewDefault;
