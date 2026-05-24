import React, { useState } from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LaptopOutlined, 
  MobileOutlined, 
  GlobalOutlined, 
  FileTextOutlined,
  MenuOutlined,
  CloseOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

// ==========================================
// EASY, SMOOTH ANIMATIONS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function App() {
  const [form] = Form.useForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoPath = "./src/assets/images/Electrolyte.png";

  // Sleek Glassmorphism Input Styling
  const inputStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: 'rgba(13, 17, 23, 0.7)',
    backdropFilter: 'blur(8px)',
    color: '#00f0ff',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    border: '1px solid #30363d',
  };

  // ==========================================
  // COMPLETE UNFILTERED LIST OF SERVICES
  // ==========================================
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
        "Speed document typing in both Hindi and English"
      ]
    },
    {
      title: "Electrolyte CSC Services",
      icon: <FileTextOutlined className="text-3xl text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" />,
      items: [
        "New PAN Card applications and corrections",
        "Ration Card registration and official updates",
        "Online application forms for jobs, exams, and college",
        "High-quality digital photo printing and passport photos",
        "Custom ID cards creation and official ID printing",
        "Bulk document printouts, photocopies, and lamination"
      ]
    }
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00f0ff',
          colorBgContainer: '#0d1117',
          colorTextPlaceholder: '#484f58',
          colorText: '#ffffff'
        },
      }}
    >
      <div className="bg-[#010409] text-[#c9d1d9] font-sans antialiased selection:bg-[#00f0ff] selection:text-[#010409] min-h-screen">
        
        {/* ==========================================
            NAVIGATION BAR WITH GLASS BLUR EFFECT
        ========================================== */}
        <header className="fixed top-0 left-0 w-full bg-[#010409]/70 backdrop-blur-xl z-50 border-b border-[#21262d]">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            
            <div className="flex items-center gap-3">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_4px_rgba(0,240,255,0.3)]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-['Montserrat'] font-black text-lg tracking-wider text-white">ELECTROLYTE SOLUTIONS</span>
                <span className="text-[11px] font-['Poppins'] font-semibold text-[#00f0ff] uppercase tracking-wide">⚡ Service at your doorstep</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-8 items-center font-['Poppins'] text-sm font-medium">
              <a href="#hero" className="text-slate-400 hover:text-[#00f0ff] transition-colors">Home</a>
              <a href="#services" className="text-slate-400 hover:text-[#00f0ff] transition-colors">Our Services</a>
              <a href="#contact" className="border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#010409] px-4 py-2 rounded-lg font-['Montserrat'] font-bold transition-all duration-300">Book Service</a>
            </nav>

            <button className="lg:hidden text-xl text-[#00f0ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full bg-[#0d1117]/90 backdrop-blur-lg border-b border-[#21262d] px-6 py-4 flex flex-col gap-4 font-['Poppins'] text-sm"
              >
                <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Home</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Our Services</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border border-[#00f0ff] text-center text-[#00f0ff] py-2 rounded-lg font-['Montserrat'] font-bold">Book Service</a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ==========================================
            HERO MAIN BANNER
        ========================================== */}
        <section id="hero" className="pt-44 pb-24 px-6 relative overflow-hidden flex items-center min-h-[85vh]">
          {/* Tech Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#00f0ff]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-['Montserrat'] text-xs font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-4 py-1.5 rounded-full">
                Complete IT Hardware & Software Solutions
              </motion.span>
              
              <motion.h1 variants={fadeInUp} className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mt-8 mb-6 tracking-tight leading-tight">
                Complete IT Services <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#58a6ff]">
                  At Your Doorstep
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="font-['Poppins'] text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We handle repairs, installations, website building, and government digital forms. No need to visit a shop—our experts come directly to your home or office.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="bg-[#00f0ff] text-[#010409] font-['Montserrat'] font-bold px-8 py-4 rounded-xl tracking-wide uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                  Contact Us Now
                </a>
                <a href="#services" className="border border-[#30363d] bg-[#0d1117]/40 backdrop-blur-md text-white font-['Poppins'] px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#161b22]">
                  View All Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            ALL SERVICES GRID SECTION
        ========================================== */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">Our Services List</h2>
            <p className="font-['Poppins'] text-slate-400 font-light text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Explore our four main branches created to handle all your tech and digital needs smoothly.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {serviceBranches.map((branch, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, borderColor: '#00f0ff', boxShadow: '0 0 20px rgba(0,240,255,0.08)' }}
                className="bg-[#0d1117]/60 backdrop-blur-md border border-[#21262d] p-8 rounded-xl transition-all duration-300 relative group"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-[#21262d] pb-4">
                  {branch.icon}
                  <h3 className="font-['Montserrat'] font-bold text-lg text-white tracking-wide">{branch.title}</h3>
                </div>
                <ul className="space-y-3.5 font-['Poppins'] text-sm text-slate-400 font-light">
                  {branch.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#00f0ff] select-none mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ==========================================
            BLURRED GLASS CONTACT & MAP SECTION
        ========================================== */}
        <section id="contact" className="py-24 bg-[#0d1117]/20 border-t border-[#21262d] px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Desktop 2-Column Split View */}
            <motion.div 
              className="hidden lg:grid grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer}
            >
              {/* Form Card */}
              <motion.div className="bg-[#0d1117]/70 backdrop-blur-md border border-[#21262d] p-10 rounded-xl shadow-2xl" variants={fadeInUp}>
                <div className="mb-8">
                  <h2 className="font-['Montserrat'] font-black text-2xl text-white uppercase tracking-wide">Get In Touch</h2>
                  <p className="font-['Poppins'] text-xs text-slate-400 mt-1 font-light">Contact us today for fast, reliable service.</p>
                </div>
                
                <form id="desktop-form" action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST" className="flex flex-col gap-2">
                  <Form form={form} component={false}>
                    <Form.Item name="name" className="mb-4"><Input style={inputStyle} placeholder="Enter Name" name="name" required /></Form.Item>
                    <Form.Item name="phone" className="mb-4"><Input style={inputStyle} placeholder="Enter Phone" name="phone" required /></Form.Item>
                    <Form.Item name="email" className="mb-4"><Input style={inputStyle} placeholder="Enter Email" name="email" required /></Form.Item>
                    <Form.Item name="message" className="mb-4"><Input.TextArea style={inputStyle} rows={4} placeholder="Enter your Message" name="message" required /></Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-transparent hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#010409] border border-[#00f0ff] h-12 font-['Montserrat'] font-bold rounded-lg uppercase tracking-wider transition-all duration-300">
                      Send
                    </Button>
                  </Form>
                </form>
              </motion.div>

              {/* Map Layout View */}
              <motion.div className="flex flex-col justify-between" variants={fadeInUp}>
                <div>
                  <h2 className="font-['Montserrat'] font-black text-2xl text-white uppercase tracking-wide mb-1">Location on Map</h2>
                  <p className="font-['Poppins'] text-xs text-slate-400 mb-6 font-light">Here is our Physical Location.</p>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
                    className="w-full border border-[#21262d] opacity-80 filter invert grayscale rounded-xl aspect-[3/1.65]" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Form/Map Stack Layout */}
            <motion.div className="lg:hidden flex flex-col gap-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <motion.div className="bg-[#0d1117]/70 backdrop-blur-md border border-[#21262d] p-6 rounded-xl" variants={fadeInUp}>
                <h2 className="font-['Montserrat'] font-bold text-xl text-white uppercase tracking-wider text-center mb-4">Get In Touch</h2>
                <form id="mobile-form" action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST" className="flex flex-col gap-1 w-100">
                  <Form form={form} component={false}>
                    <Form.Item name="name" className="mb-3"><Input style={inputStyle} placeholder="Enter Name" name="name" required /></Form.Item>
                    <Form.Item name="phone" className="mb-3"><Input style={inputStyle} placeholder="Enter Phone" name="phone" required /></Form.Item>
                    <Form.Item name="email" className="mb-3"><Input style={inputStyle} placeholder="Enter Email" name="email" required /></Form.Item>
                    <Form.Item name="message" className="mb-4"><Input.TextArea style={inputStyle} rows={4} placeholder="Enter your Message" name="message" required /></Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-transparent border border-[#00f0ff] text-[#00f0ff] h-11 font-['Montserrat'] font-bold uppercase tracking-wide">
                      Send
                    </Button>
                  </Form>
                </form>
              </motion.div>

              <motion.div className="flex flex-col" variants={fadeInUp}>
                <h2 className="font-['Montserrat'] font-bold text-xl text-center text-white mb-1">Location on Map</h2>
                <p className="font-['Poppins'] text-center font-light text-xs text-slate-400 mb-4">Here is our Physical Location.</p>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
                  className="w-full border border-[#21262d] filter invert grayscale rounded-xl aspect-[3/1.65]" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            PROFESSIONAL 4-COLUMN BRAND FOOTER
        ========================================== */}
        <footer className="bg-black text-white py-12 border-t border-[#21262d] relative z-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Intro */}
            <div className="flex flex-col gap-2">
              <h2 className="font-['Montserrat'] text-2xl font-bold tracking-wide text-white">Electrolyte Solutions</h2>
              <p className="font-['Poppins'] text-xs text-gray-400 font-light leading-relaxed">
                Powering homes and businesses with reliable IT services.
              </p>
            </div>

            {/* Column 2: Easy Links */}
            <div>
              <h3 className="font-['Montserrat'] text-sm font-bold uppercase tracking-widest mb-4 text-[#58a6ff]">Quick Links</h3>
              <div className="font-['Poppins'] space-y-2.5 text-xs text-gray-400 flex flex-col">
                <a href="#hero" className="hover:text-[#00f0ff] transition-colors">Home</a>
                <a href="#services" className="hover:text-[#00f0ff] transition-colors">Services</a>
                <a href="#contact" className="hover:text-[#00f0ff] transition-colors">Contact</a>
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className="flex flex-col gap-2">
              <h3 className="font-['Montserrat'] text-sm font-bold uppercase tracking-widest mb-2 text-[#58a6ff]">Contact</h3>
              <p className="font-['Poppins'] text-xs text-gray-400">Phone: +91 96481 46167</p>
              <p className="font-['Poppins'] text-xs text-gray-400 break-all">Email: contact.electrolytesolutions@gmail.com</p>
              <a 
                href="https://wa.me/919648146167?text=Hello%20Electrolyte%20Solutions%2C%20I%20would%20like%20to%20book%20a%20service%21"
                className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-lg font-['Poppins'] font-bold transition-all duration-300 w-fit text-center"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Column 4: Social Items */}
            <div>
              <h3 className="font-['Montserrat'] text-sm font-bold uppercase tracking-widest mb-4 text-[#58a6ff]">Follow Us</h3>
              <div className="flex space-x-4 text-gray-400 text-base">
                <a href="#" className="hover:text-[#00f0ff] transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-[#00f0ff] transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-[#00f0ff] transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Bottom Intellectual Line */}
          <div className="max-w-6xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-['Montserrat'] tracking-wide">
            © 2026 Electrolyte Solutions. All rights reserved.
          </div>
        </footer>

      </div>
    </ConfigProvider>
  );
}