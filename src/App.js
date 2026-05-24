import logoPath from "./assets/images/Electrolyte.png";
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
  CheckCircleOutlined
} from '@ant-design/icons';

// ==========================================
// ANIMATION PRESETS (Framer Motion)
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function App() {
  const [form] = Form.useForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logo Path Definition

  // Custom styling rules for Ant Design overrides
  const inputStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#0a192f',
    color: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    border: '1px solid #1e293b',
  };

  // ==========================================
  // SERVICE ARCHITECTURE DATA MATRIX
  // ==========================================
  const serviceBranches = [
    {
      title: "Electrolyte Computers",
      icon: <LaptopOutlined className="text-3xl text-[#00d2ff]" />,
      items: [
        "Hardware Repair & Upgrades (Laptops, Desktops, Printers)",
        "Operating System Installations (Optimized Windows Setup)",
        "Structured Networking (LAN Configuration & Stable Office Wi-Fi)",
        "CCTV Video Surveillance Setup & Remote Monitoring Maintenance",
        "On-Call Technical Helpdesk Support & Emergency Troubleshooting"
      ]
    },
    {
      title: "Electrolyte Mobiles",
      icon: <MobileOutlined className="text-3xl text-[#00d2ff]" />,
      items: [
        "Smartphone Hardware Repair & Professional Components Swapping",
        "Mobile OS Troubleshooting, Firmwares Flashing & Unlocking",
        "Ecosystem Configurations & Cloud Backup Device Migrations",
        "Doorstep Diagnostics & Immediate Basic Support Operations"
      ]
    },
    {
      title: "Electrolyte Web Services",
      icon: <GlobalOutlined className="text-3xl text-[#00d2ff]" />,
      items: [
        "Custom Corporate Websites & High-Converting Landing Pages",
        "Native Android & iOS Performance-Driven Mobile Apps",
        "Secure Enterprise Data Entry & Spreadsheet Organization",
        "Professional Graphic Designing (Digital Ads, Brochures, Brand Assets)",
        "Precision Multilingual Speed Typing (English & Hindi Transcription)"
      ]
    },
    {
      title: "Electrolyte CSC Services",
      icon: <FileTextOutlined className="text-3xl text-[#00d2ff]" />,
      items: [
        "Government Registrations (Fast PAN Card & Ration Card Processing)",
        "Error-Free Submissions for Competitive Job, Exam & University Forms",
        "High-Grade PVC Identity Card Layout Design & Bulk Printing",
        "High-Speed Crisp Bulk Document Printouts, Copies & Laminations",
        "Studio Photographic Executions & Crisp Passport-Size Prints"
      ]
    }
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#07575b',
          colorBgContainer: '#0a192f',
          colorTextPlaceholder: '#64748b',
          colorText: '#ffffff'
        },
      }}
    >
      <div className="bg-[#030f1a] text-[#e2e8f0] font-sans antialiased selection:bg-[#00d2ff] selection:text-[#030f1a]">
        
        {/* ==========================================
            NAVIGATION HEADER BAR
        ========================================== */}
        <header className="fixed top-0 left-0 w-full bg-[#0a192f]/90 backdrop-blur-md z-50 border-b border-[#1e293b]">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            
            <div className="flex items-center gap-3">
              <img 
                src={logoPath} 
                alt="Electrolyte Solutions Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 hover:rotate-6"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-['Montserrat'] font-extrabold text-lg sm:text-xl tracking-wider text-white">ELECTROLYTE SOLUTIONS</span>
                <span className="text-xs text-[#00d2ff] tracking-tight italic">"Service at your doorstep"</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-8 items-center font-['Poppins'] text-sm font-medium">
              <a href="#hero" className="text-slate-300 hover:text-[#00d2ff] transition-colors">Home</a>
              <a href="#about" className="text-slate-300 hover:text-[#00d2ff] transition-colors">About Us</a>
              <a href="#services" className="text-slate-300 hover:text-[#00d2ff] transition-colors">Services</a>
              <a href="#contact" className="bg-[#07575b] hover:bg-[#00d2ff] hover:text-[#030f1a] text-white px-5 py-2 rounded-lg transition-all duration-300 font-['Montserrat'] font-bold tracking-wide">Get Support</a>
            </nav>

            <button className="lg:hidden text-2xl text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full bg-[#0a192f] border-b border-[#1e293b] px-6 py-4 flex flex-col gap-4 font-['Poppins']"
              >
                <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-300">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-300">About Us</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-300">Services</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#07575b] text-center text-white py-2.5 rounded-lg font-['Montserrat'] font-bold">Get Support</a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ==========================================
            HERO DISPLAY SECTION
        ========================================== */}
        <section id="hero" className="pt-40 pb-20 px-6 min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#07575b]/20 rounded-full filter blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d2ff]/10 rounded-full filter blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-['Montserrat'] text-xs font-bold tracking-widest text-[#00d2ff] uppercase bg-[#00d2ff]/10 px-4 py-1.5 rounded-full">
                Complete IT Infrastructure & Consumer Services
              </motion.span>
              
              <motion.h1 variants={fadeInUp} className="font-['Montserrat'] font-extrabold text-4xl sm:text-6xl text-white mt-6 mb-6 leading-tight tracking-tight">
                Premium Technical Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#66a5ad]">
                  Deployed At Your Doorstep
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="font-['Poppins'] text-slate-400 text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                From component-level hardware overhauls to enterprise software builds and secure digital government processing modules. We bypass layout operational delays to bring the complete tech storefront straight to you.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="bg-gradient-to-r from-[#07575b] to-[#003b46] hover:from-[#00d2ff] hover:to-[#66a5ad] hover:text-[#030f1a] text-white font-['Montserrat'] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#00d2ff]/20 transition-all duration-300 tracking-wide">
                  Request Doorstep Engineering
                </a>
                <a href="#services" className="border border-[#1e293b] bg-[#0a192f]/50 hover:bg-[#0a192f] text-white font-['Poppins'] px-8 py-4 rounded-xl transition-all duration-300">
                  Explore Ecosystem
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==========================================
            TRUST ASSURANCES ROW
        ========================================== */}
        <section id="about" className="py-12 bg-[#0a192f]/40 border-y border-[#1e293b] px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 p-4">
              <CheckCircleOutlined className="text-3xl text-[#00d2ff]" />
              <div>
                <h3 className="font-['Montserrat'] font-bold text-white text-base">Fast Turnaround Framework</h3>
                <p className="font-['Poppins'] text-xs text-slate-400 font-light mt-1">Eliminating standard operational wait-times with direct delivery.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-y md:border-y-0 md:border-x border-[#1e293b]">
              <CheckCircleOutlined className="text-3xl text-[#00d2ff]" />
              <div>
                <h3 className="font-['Montserrat'] font-bold text-white text-base">Expert Technical Execution</h3>
                <p className="font-['Poppins'] text-xs text-slate-400 font-light mt-1">High-fidelity engineering diagnostics across computers, mobile and code loops.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 p-4">
              <CheckCircleOutlined className="text-3xl text-[#00d2ff]" />
              <div>
                <h3 className="font-['Montserrat'] font-bold text-white text-base">100% Secure Support Model</h3>
                <p className="font-['Poppins'] text-xs text-slate-400 font-light mt-1">Reliable, audited operations deployed completely under your observation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            DYNAMIC ECOSYSTEM SERVICES SECTION
        ========================================== */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">Structured Service Architecture</h2>
            <p className="font-['Poppins'] text-slate-400 font-light text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Four dedicated corporate divisions optimized to execute technical, digital and cloud operations cleanly.
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
                whileHover={{ y: -6, borderColor: '#00d2ff' }}
                className="bg-[#0a192f] border border-[#1e293b] p-8 rounded-2xl transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#07575b] to-[#00d2ff] group-hover:w-full transition-all duration-500"></div>
                <div className="flex items-center gap-4 mb-6">
                  {branch.icon}
                  <h3 className="font-['Montserrat'] font-bold text-xl text-white tracking-wide">{branch.title}</h3>
                </div>
                <ul className="space-y-3.5 font-['Poppins'] text-sm text-slate-400 font-light">
                  {branch.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#00d2ff] font-bold select-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ==========================================
            HYBRID CONTACT FORM / SECTION
        ========================================== */}
        <section id="contact" className="py-24 bg-[#0a192f]/20 border-t border-[#1e293b] px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Desktop Viewport Grid Layout */}
            <motion.div 
              className="hidden lg:grid grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div className="bg-[#0a192f] border border-[#1e293b] p-10 rounded-2xl shadow-2xl" variants={fadeInUp}>
                <div className="mb-8">
                  <h2 className="font-['Montserrat'] font-extrabold text-3xl text-white tracking-tight">Get In Touch</h2>
                  <p className="font-['Poppins'] font-light text-sm text-slate-400 mt-2">Submit your service inquiry parameters for instant doorstep deployment routing.</p>
                </div>
                
                <form id="desktop-form" action="https://formsubmit.co/contact.electrolyesolutions@gmail.com" method="POST" className="flex flex-col gap-4">
                  <Form form={form} component={false}>
                    <Form.Item name="name" rules={[{ required: true, message: 'Identity parameter required.' }]}>
                      <Input style={inputStyle} placeholder="Enter Full Name" name="name" required />
                    </Form.Item>
                    <Form.Item name="phone" rules={[{ required: true, message: 'Communication numeric line required.' }]}>
                      <Input style={inputStyle} placeholder="Enter Contact Number" name="phone" required />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Valid inbox tracking pointer required.' }]}>
                      <Input style={inputStyle} placeholder="Enter Corporate Email" name="email" required />
                    </Form.Item>
                    <Form.Item name="message" rules={[{ required: true, message: 'Task parameters mapping details required.' }]}>
                      <Input.TextArea style={inputStyle} rows={4} placeholder="Describe task specifications (Computers, Mobile, App Dev, or CSC Services)..." name="message" required />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-[#07575b] hover:bg-[#00d2ff] hover:text-[#030f1a] border-0 h-12 text-white font-['Montserrat'] font-bold rounded-xl tracking-wider uppercase transition-all duration-300">
                      Transmit Parameters
                    </Button>
                  </Form>
                </form>
              </motion.div>

              <motion.div className="flex flex-col justify-between" variants={fadeInUp}>
                <div>
                  <h2 className="font-['Montserrat'] font-extrabold text-3xl text-white tracking-tight mb-2">Location Mapping Node</h2>
                  <p className="font-['Poppins'] font-light text-sm text-slate-400 mb-6">Central hardware engineering and diagnostic core facilities.</p>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
                    className="w-full border border-[#1e293b] shadow-2xl rounded-xl aspect-[3/1.85]" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Viewport Grid Layout */}
            <motion.div 
              className="lg:hidden flex flex-col gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.div className="bg-[#0a192f] border border-[#1e293b] p-6 rounded-xl" variants={fadeInUp}>
                <div className="text-center mb-6">
                  <h2 className="font-['Montserrat'] font-bold text-2xl text-white">Get In Touch</h2>
                  <p className="font-['Poppins'] font-light text-xs text-slate-400 mt-1">Submit parameters for doorstep technical deployment.</p>
                </div>
                
                <form id="mobile-form" action="https://formsubmit.co/contact.electrolyesolutions@gmail.com" method="POST" className="flex flex-col gap-3 w-100">
                  <Form form={form} component={false}>
                    <Form.Item name="name" className="mb-3"><Input style={inputStyle} placeholder="Enter Name" name="name" required /></Form.Item>
                    <Form.Item name="phone" className="mb-3"><Input style={inputStyle} placeholder="Enter Phone" name="phone" required /></Form.Item>
                    <Form.Item name="email" className="mb-3"><Input style={inputStyle} placeholder="Enter Email" name="email" required /></Form.Item>
                    <Form.Item name="message" className="mb-4"><Input.TextArea style={inputStyle} rows={4} placeholder="Enter Message Details" name="message" required /></Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-[#07575b] h-11 text-white font-['Montserrat'] font-bold rounded-lg tracking-wide uppercase border-0">
                      Transmit Parameters
                    </Button>
                  </Form>
                </form>
              </motion.div>

              <motion.div className="flex flex-col" variants={fadeInUp}>
                <h2 className="font-['Montserrat'] font-bold text-2xl text-center text-white mb-1">Location Mapping Node</h2>
                <p className="font-['Poppins'] text-center font-light text-xs text-slate-400 mb-4">Balrampur Main Workspace Center</p>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
                  className="w-full border border-[#1e293b] rounded-xl aspect-[3/1.85]" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            CUSTOM REFACTORED 4-COLUMN BRAND FOOTER
        ========================================== */}
        <footer className="bg-black text-white py-10 border-t border-[#1e293b]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="flex flex-col gap-2">
              <h2 className="font-['Montserrat'] text-2xl font-bold tracking-wide text-white">Electrolyte Solutions</h2>
              <p className="font-['Poppins'] text-sm text-gray-400 font-light leading-relaxed">
                Powering homes and businesses with reliable IT services.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-['Montserrat'] text-lg font-semibold mb-3 text-white">Quick Links</h3>
              <div className="font-['Poppins'] space-y-2 text-gray-400 text-sm flex flex-col gap-1">
                <a href="#services" className="hover:text-[#00d2ff] transition duration-300">Services</a>
                <a href="#about" className="hover:text-[#00d2ff] transition duration-300">About Us</a>
                <a href="#contact" className="hover:text-[#00d2ff] transition duration-300">Contact</a>
              </div>
            </div>

            {/* Column 3: Contact Channels */}
            <div className="flex flex-col gap-1.5">
              <h3 className="font-['Montserrat'] text-lg font-semibold mb-2 text-white">Contact</h3>
              <p className="font-['Poppins'] text-sm text-gray-400 font-light">Phone: +91 96481 46167</p>
              <p className="font-['Poppins'] text-sm text-gray-400 font-light break-all">Email: contact.electrolyesolutions@gmail.com</p>
              <a 
                href="https://wa.me/919648146167?text=Hello%20Electrolyte%20Solutions%2C%20I%20would%20like%20to%20book%20a%20service%21"
                className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg font-['Poppins'] font-medium transition duration-300 w-fit text-center"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Column 4: Social Media Trackers */}
            <div>
              <h3 className="font-['Montserrat'] text-lg font-semibold mb-3 text-white">Follow Us</h3>
              <div className="flex space-x-4 text-gray-400 text-lg">
                <a href="#" className="hover:text-[#00d2ff] transition duration-300" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-[#00d2ff] transition duration-300" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-[#00d2ff] transition duration-300" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Intellectual Baseline */}
          <div className="max-w-6xl mx-auto mt-10 border-t border-gray-800 pt-5 text-center text-sm text-gray-500 font-['Montserrat'] tracking-wide">
            © 2026 Electrolyte Solutions. All rights reserved.
          </div>
        </footer>

      </div>
    </ConfigProvider>
  );
}