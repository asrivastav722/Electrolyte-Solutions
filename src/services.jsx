import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'antd';
import { LaptopOutlined, MobileOutlined, GlobalOutlined, FileTextOutlined } from '@ant-design/icons';

const branchImages = {
  "Electrolyte Computer Services": [
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp1.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp2.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp3.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp4.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp5.png"
  ],
  "Electrolyte Mobile Services": [
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heromob1.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heromob2.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heromob3.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heromob4.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heromob5.png"
  ],
  "Electrolyte Web Services": [
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocsc3.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocsc4.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocsc5.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heroweb1.png"
  ],
  "Electrolyte CSC Services": [
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocsc1.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heroweb2.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heroweb3.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heroweb4.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/heroweb5.png"
  ]
};

const serviceBranches = [
  {
    title: "Electrolyte Computer Services",
    icon: <LaptopOutlined className="text-2xl text-[#00f0ff] m-0 p-0" />,
    items: [
      "Repairing and installation of computers (desktops)",
      "Repairing and installation of laptops",
      "Repairing and installation of printers",
      "Repairing and installation of CCTV cameras",
      "Complete office and home networking setup",
      "Fresh Windows installation and troubleshooting",
      "Helpdesk support on call for quick fixes"
    ]
  },
  {
    title: "Electrolyte Mobile Services",
    icon: <MobileOutlined className="text-2xl text-[#00f0ff] m-0 p-0" />,
    items: [
      "Complete repairing and servicing of mobiles",
      "Mobile hardware fixes and parts replacement",
      "Software troubleshooting and unlocking",
      "Doorstep basic checks and quick support repairs"
    ]
  },
  {
    title: "Electrolyte Web Services",
    icon: <GlobalOutlined className="text-2xl text-[#00f0ff] m-0 p-0" />,
    items: [
      "Professional website development for businesses",
      "Mobile app development for Android and iOS",
      "Fast and accurate computer data entry work",
      "Creative graphic designing for banners and ads",
      "Speed document typing in both Hindi and English."
    ]
  },
  {
    title: "Electrolyte CSC Services",
    icon: <FileTextOutlined className="text-2xl text-[#00f0ff] m-0 p-0" />,
    items: [
      "New PAN Card applications and corrections",
      "Ration Card registration and official updates",
      "Online application forms for jobs, exams, and colleges",
      "High-quality digital photo printing and passport photos",
      "Custom ID cards creation, official ID printing and Flex Banners",
      "Bulk document printouts, photocopies, and lamination"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function ServicesGallerySection() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="secondarytext font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">Our Service Portfolio</h2>
        <p className="primarytext text-slate-400 font-light text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Explore our complete range of specialized professional divisions tailored for all your tech, digital, and official requirements.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {serviceBranches.map((branch, index) => {
          const images = branchImages[branch.title] || [];
          const isEven = index % 2 === 0; // Even index: 0 (Card 1) & 2 (Card 3) -> Text then Carousel

          const carouselBlock = (
            <div className="w-full lg:w-1/2 h-full sm:h-80 overflow-hidden relative bg-black/50">
              <Carousel autoplay autoplaySpeed={4000} effect="fade" dotPosition="bottom">
                {images.map((imgSrc, imgIdx) => (
                  <div key={imgIdx} className="h-full sm:h-80 w-full relative outline-none">
                    <img
                      src={imgSrc}
                      alt={`${branch.title} slide ${imgIdx + 1}`}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60"></div>
                  </div>
                ))}
              </Carousel>
            </div>
          );

          const textBlock = (
            <div className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center gap-3">
              <div className="flex items-center justify-center gap-4 border-b border-[#21262d] pb-2">
                  {branch.icon}
                <h3 className="secondarytext font-bold text-xl text-white tracking-wide uppercase m-0 p-0">{branch.title}</h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 secondarytext text-sm text-slate-300 font-light">
                {branch.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 m-0 p-0">
                    <span className="text-[#00f0ff] text-xs font-bold mt-0.5">◆</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(0,240,255,0.4)', boxShadow: '0 0 30px rgba(0,240,255,0.1)' }}
              className="bg-[#0d1117]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-300 relative group"
            >
              {/* Neon Top Accent Line */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#07575b] to-[#00f0ff] group-hover:w-full transition-all duration-500 z-20"></div>

              {isEven ? (
                <>
                  {textBlock}
                  {carouselBlock}
                </>
              ) : (
                <>
                  {carouselBlock}
                  {textBlock}
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}