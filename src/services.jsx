import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'antd';
import { LaptopOutlined, MobileOutlined, GlobalOutlined, FileTextOutlined } from '@ant-design/icons';


// Mapping images to each branch (4 images per branch)
const branchImages = {
  "Electrolyte Computers": [
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp1.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp2.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp3.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp4.png",
    "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/herocomp5.png"
  ],
  "Electrolyte Mobiles": [
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
    title: "Electrolyte Computers",
    icon: <LaptopOutlined className="text-3xl text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" />,
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
    title: "Electrolyte Mobiles",
    icon: <MobileOutlined className="text-3xl text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" />,
    items: [
      "Complete repairing and servicing of mobiles",
      "Mobile hardware fixes and parts replacement",
      "Software troubleshooting and unlocking",
      "Doorstep basic checks and quick support repairs"
    ]
  },
  {
    title: "Electrolyte Web Services",
    icon: <GlobalOutlined className="text-3xl text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" />,
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
    icon: <FileTextOutlined className="text-3xl text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" />,
    items: [
      "New PAN Card applications and corrections",
      "Ration Card registration and official updates",
      "Online application forms for jobs, exams, and colleges",
      "High-quality digital photo printing and passport photos",
      "Custom ID cards creation , official ID printing and Flex Banners",
      "Bulk document printouts, photocopies, and lamination"
    ]
  }
];

export default function ServicesSection({ staggerContainer, fadeInUp }) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="secondarytext font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">Our Services List</h2>
        <p className="primarytext text-slate-400 font-light text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Explore our four main branches created to handle all your tech and digital needs smoothly.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {serviceBranches.map((branch, index) => {
          const images = branchImages[branch.title] || [];
          
          return (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4, borderColor: '#00f0ff', boxShadow: '0 0 25px rgba(0,240,255,0.12)' }}
              className="bg-[#0d1117]/80 backdrop-blur-md border border-[#21262d] rounded-2xl overflow-hidden transition-all duration-300 relative group flex flex-col"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#07575b] to-[#00f0ff] group-hover:w-full transition-all duration-500 z-20"></div>

              {/* Carousel Section */}
              <div className="w-full h-52 sm:h-60 overflow-hidden relative bg-black/40">
                <Carousel autoplay autoplaySpeed={3500} effect="fade" dotPosition="bottom">
                  {images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="h-52 sm:h-60 w-full relative outline-none">
                      <img 
                        src={imgSrc} 
                        alt={`${branch.title} slide ${imgIdx + 1}`} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80"></div>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6 border-b border-[#21262d] pb-4">
                    {branch.icon}
                    <h3 className="secondarytext font-bold text-xl text-white tracking-wide">{branch.title}</h3>
                  </div>
                  <ul className="space-y-3.5 primarytext text-sm text-slate-400 font-light">
                    {branch.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00f0ff] select-none mt-0.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}