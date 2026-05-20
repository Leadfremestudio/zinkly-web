import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import caseKnowbest from './assets/case_knowbest.png';
import caseInfiny from './assets/case_infiny.png';
import caseAcadome from './assets/case_acadome.png';
import caseEvergreen from './assets/case_evergreen.png';
import casePreviewDefault from './assets/case_preview_default.png';

export const heroSlides = [
  {
    id: 0,
    label: 'Partner',
    subtitle: 'Think • Build • Connect',
    title: (
      <>
        Trusted{' '}
        <span className="accent-word">
          <span className="accent-green-char">T</span>ransformation
        </span>
        <br />
        Partner
      </>
    ),
    description: 'Design Your Dreams And Build Success, Transform Your Digital Presence With Our Innovative And Ingenious Solutions.',
    bg: slide1
  },
  {
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
  },
  {
    id: 2,
    label: 'Systems',
    subtitle: 'Secure • Robust • Scalable',
    title: (
      <>
        Cloud-Native
        <br />
        <span className="accent-word">
          <span className="accent-green-char">A</span>utomation
        </span>{' '}
        Hub
      </>
    ),
    description: 'Scale seamlessly with secure infrastructures, fast-loading cloud assets, and high-conversion landing pages built for growth.',
    bg: slide3
  }
];

export const companyStats = [
  { num: '16', label: 'Years of Expertise' },
  { num: '800', label: 'Clients Globally' },
  { num: '150', label: 'Dedicated Zinklers' },
  { num: '1000', label: 'Completed Projects' }
];

export const servicesData = [
  {
    id: 'service-web',
    title: 'Website Development',
    description: 'Zinkly is a top quality web development company aimed at creating a better brand impression and user-friendly interface for your website.',
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
    description: 'We develop successful data-driven strategies to deal with the different mobile and enterprise application challenges.',
    techBadges: [
      { name: 'Shopify', type: 'shopify' },
      { name: 'WooCommerce', type: 'woocommerce', text: 'Woo' },
      { name: 'CS-Cart', type: 'cscart', text: 'cs cart' }
    ]
  },
  {
    id: 'service-auto',
    title: 'AI & Automation',
    description: 'Using the latest technology, our custom automation services deliver seamless efficiency and streamline your workflows.',
    techBadges: [
      { name: 'Android', type: 'android', text: 'android' },
      { name: 'iOS/Apple', type: 'ios' },
      { name: 'Flutter', type: 'flutter', text: 'flutter' }
    ]
  }
];

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
    id: 2,
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
    id: 3,
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

export const fallbackPreviewImage = casePreviewDefault;
