import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Zinkly transformed our heritage backwater resort booking system into a high-performance custom platform. We saw a 180% increase in direct international bookings within the first month. Their clean code and attention to detail reflect true engineering excellence.",
    name: "Madhavan Kurup",
    role: "Managing Director, Vembanad Whispers Resorts",
  },
  {
    text: "As a leading organic spice exporter from Wayanad, logistics accuracy is our lifeline. Zinkly automated our supply chain dispatch system and custom customs documentation. Their real-time WebSocket tracing is absolutely rock-solid.",
    name: "Fathima Hameed",
    role: "Founder & CEO, Malabar Spices Co-operative",
  },
  {
    text: "Building a fintech startup at Infopark Kochi requires highly secure and scalable systems. Zinkly delivered our customer transaction ledger on AWS with ISO-compliant database designs. They are the most reliable engineering partners in South India.",
    name: "Rohan Mathew",
    role: "Co-Founder, PaysaPay Digital Solutions",
  },
  {
    text: "Zinkly engineered a premium e-commerce gateway for our traditional handloom and coir collections. Direct integrations with Shopify POS and automated inventory syncing saved our artisans hundreds of manual hours every single week.",
    name: "Devaki Amma",
    role: "Chairperson, Kerala Weaver & Artisan Alliance",
  },
  {
    text: "Our Backwater Houseboats operations in Alappuzha needed a modern dispatch and reservation calendar. Zinkly delivered a premium glassmorphic scheduling system. Uptime is outstanding and our bookings are scaling rapidly.",
    name: "Dr. Anand Govind",
    role: "Proprietor, Alappuzha Cruise Lines",
  },
  {
    text: "They streamlined our tea plantation quality auditing app in Munnar. Field managers can run offline-first sync pipelines with ease, syncing data instantly once online. The level of mobile expertise is exceptional.",
    name: "Kavya Menon",
    role: "Chief Technologist, Munnar Tea Estates",
  },
  {
    text: "The web portal designed by Zinkly for our traditional Ayurveda wellness retreats in Varkala has generated immense organic traffic. Their technical SEO optimization is second to none.",
    name: "Swami Chinmaya",
    role: "Director, Varkala Sanctuary Group",
  },
  {
    text: "Zinkly's high-speed cloud clusters and container architecture resolved all our ticket inventory booking lag during major festive tourist seasons in Thrissur.",
    name: "Hari Prashanth",
    role: "Operations Head, Thrissur Cultural Travels",
  },
  {
    text: "For our tech consultancy at Cyberpark Kozhikode, Zinkly built beautiful headless web pipelines using React and Strapi. Exceptional code, rapid sprint cycles, and friendly developers.",
    name: "Nikhil Raj",
    role: "CTO, Kozhikode Cloudworks",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative testimonials-wrapper-motion">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto testimonials-title-section"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg testimonials-tag-motion">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 testimonials-header-heading">
            What Enterprises Say
          </h2>
          <p className="text-center mt-5 opacity-75 testimonials-header-sub">
            See what our South Indian enterprise clients say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 testimonials-columns-container-motion">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="column-col" />
          <TestimonialsColumn testimonials={secondColumn} className="column-col hidden-mobile" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="column-col hidden-tablet" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
