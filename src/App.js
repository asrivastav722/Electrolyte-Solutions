import React, { useState, useEffect } from 'react';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MenuOutlined,
  CloseOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
  UserOutlined,
  PhoneOutlined
} from '@ant-design/icons';

import ServicesSection from './services';



// Sample carousel images (Replace with your actual image paths or URLs)
const carouselImages = [
  {
    url: "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/hero2_n.png",
    title: "On-Site IT & Hardware Repair",
    type: "Electrolyte Mobile and Computers"
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/hero4_n.png",
    title: "Professional Website & App Building",
    type: "Electrolyte Web Services"
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0703/7147/5499/files/hero1_n.png",
    title: "Government Forms & Digital Services",
    type: "Electrolyte CSC Services"
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
   <section id="hero" className="pt-44 pb-24 px-6 relative overflow-hidden flex items-center min-h-[85vh]">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#161b22_1px,transparent_1px),linear-gradient(to_bottom,#161b22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#00f0ff]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
  
  <div className="max-w-7xl mx-auto relative z-10 w-full">
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
    >
      {/* Left Column: Text & CTA Content (7 Columns) */}
      <motion.div variants={fadeInUp} className="lg:col-span-6 text-left">
        <span className="inline-block secondarytext text-xs font-bold tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/15 border border-[#00f0ff]/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.15)] mb-6">
          Your Personal and Professional IT Partner
        </span>
     
        <h1 className="secondarytext font-black text-4xl sm:text-6xl text-white mb-6 tracking-tight leading-tight">
          Complete IT Services <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#58a6ff]">
            At Your Doorstep
          </span>
        </h1>

        <p className="primarytext text-slate-400 text-base sm:text-lg max-w-xl mb-8 font-light leading-relaxed">
          We handle repairs, installations, website building, and government digital forms. No need to visit a shop—our experts come directly to your home or office.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="bg-[#00f0ff] text-[#010409] !no-underline secondarytext font-bold px-8 py-4 rounded-xl tracking-wide uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            Contact Us Now
          </a>
          <a href="#services" className="border border-[#30363d] !no-underline bg-[#0d1117]/40 backdrop-blur-md text-white primarytext px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#161b22]">
            View All Services
          </a>
        </div>
      </motion.div>

      {/* Right Column: Professional Carousel Showcase (5 Columns) */}
      <motion.div variants={fadeInUp} className="lg:col-span-6">
        <div className="relative rounded-2xl overflow-hidden border border-[#30363d] bg-[#161b22]/50 backdrop-blur-xl p-2.5 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <div className="relative h-[320px] sm:h-[420px] w-full rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={carouselImages[currentIndex].url}
                  alt={carouselImages[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Clean Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/90 via-[#010409]/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[#00f0ff] text-xs font-semibold uppercase tracking-wider block mb-1">
                      {carouselImages[currentIndex].type}
                    </span>
                    <span className="text-white text-lg sm:text-xl font-bold tracking-wide secondarytext drop-shadow-md">
                      {carouselImages[currentIndex].title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators / Dots */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "w-8 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" 
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
  );
}

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
  const [showLandingModal, setShowLandingModal] = useState(true); // Controls the landing prompt

  const logoPath = "./assets/images/Electrolyte.png";

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showLandingModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showLandingModal]);

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
      <div className="bg-[#010409] text-[#c9d1d9] font-sans antialiased selection:bg-[#00f0ff] selection:text-[#010409] min-h-screen relative">
        
        {/* ==========================================
            LANDING PROMPT MODAL
        ========================================== */}
        <AnimatePresence>
          {showLandingModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setShowLandingModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-8 max-w-lg w-full shadow-[0_0_40px_rgba(0,240,255,0.1)] relative overflow-hidden"
              >
                {/* Decorative background blur */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00f0ff]/20 rounded-full filter blur-[60px]"></div>
                
                <h2 className="secondarytext font-black text-3xl text-white mb-2 text-center relative z-10">
                  Welcome to <br/><span className="text-[#00f0ff]">Electrolyte Solutions</span>
                </h2>
                <p className="primarytext text-slate-400 text-center mb-8 text-sm relative z-10">
                  Where would you like to go today? Select your destination below.
                </p>

                <div className="flex flex-col gap-4 relative z-10">
                  {/* Shop Redirect */}
                  <a href="https://store.electrolytesolutions.in" className="!no-underline group flex items-center p-4 bg-[#161b22] border border-[#21262d] hover:border-[#00f0ff] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <div className="bg-[#00f0ff]/10 p-3 rounded-lg mr-4 group-hover:bg-[#00f0ff] transition-colors">
                      <ShoppingCartOutlined className="text-xl text-[#00f0ff] group-hover:text-[#010409]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="secondarytext font-bold text-white text-lg">Visit Our Store</h3>
                      <p className="primarytext text-xs text-slate-400">Browse and purchase products</p>
                    </div>
                  </a>

                  {/* Main Website Route */}
                  <button onClick={() => setShowLandingModal(false)} className="group flex items-center p-4 bg-[#161b22] border border-[#21262d] hover:border-[#00f0ff] rounded-xl transition-all duration-300 text-left hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <div className="bg-[#00f0ff]/10 p-3 rounded-lg mr-4 group-hover:bg-[#00f0ff] transition-colors">
                      <UserOutlined className="text-xl text-[#00f0ff] group-hover:text-[#010409]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="secondarytext font-bold text-white text-lg">Continue as Visitor</h3>
                      <p className="primarytext text-xs text-slate-400">Explore IT services & repairs</p>
                    </div>
                  </button>

                  {/* Admin Panel Redirect */}
                  <a href="https://shop.electrolytesolutions.in" className="group !no-underline flex items-center p-4 bg-[#161b22] border border-[#21262d] hover:border-[#58a6ff] rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,166,255,0.2)]">
                    <div className="bg-[#58a6ff]/10 p-3 rounded-lg mr-4 group-hover:bg-[#58a6ff] transition-colors">
                      <DashboardOutlined className="text-xl text-[#58a6ff] group-hover:text-[#010409]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="secondarytext font-bold text-white text-lg">ERP Admin Panel</h3>
                      <p className="primarytext text-xs text-slate-400">Staff & Management Login</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==========================================
            EXISTING NAVBAR & WEBSITE CONTENT
        ========================================== */}
        <header className="fixed top-0 left-0 w-full bg-[#010409]/70 backdrop-blur-xl z-50 border-b border-[#21262d]">
          {/* ... [KEEP YOUR EXISTING HEADER CODE HERE] ... */}
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            
            <div className="flex items-center gap-3">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_4px_rgba(0,240,255,0.3)]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="secondarytext font-black text-lg tracking-wider text-white">ELECTROLYTE SOLUTIONS</span>
                <span className="text-[11px] primarytext font-semibold text-[#00f0ff] uppercase tracking-wide">⚡ Service at your doorstep</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-6 items-center primarytext text-sm font-medium">
              {/* Nav Links */}
              <a href="#hero" className="text-slate-400 hover:text-[#00f0ff] transition-colors !no-underline">
                Home
              </a>
              <a href="#services" className="text-slate-400 hover:text-[#00f0ff] transition-colors !no-underline">
                Our Services
              </a>

              {/* Book Service Button */}
              <a 
                href="#contact" 
                className="!no-underline border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#010409] px-4 py-2 rounded-lg font-bold transition-all duration-300"
              >
                Book Service
              </a>

              {/* Visit Store Button */}
              <a 
                href="https://store.electrolytesolutions.in" 
                className="group !no-underline flex items-center gap-2 bg-yellow-500 border border-[#00f0ff] text-black hover:bg-[#00f0ff] hover:text-[#010409] px-4 py-2 rounded-lg font-bold transition-all duration-300"
              >
                <ShoppingCartOutlined className="text-lg text-black group-hover:text-[#010409] transition-colors" />
                Visit Store
              </a>

              {/* ERP Admin Panel Button */}
              <a 
                href="https://shop.electrolytesolutions.in" 
                className="group !no-underline flex items-center gap-2.5 bg-[#161b22] border border-[#21262d] hover:border-[#58a6ff] px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,166,255,0.2)]"
              >
                <DashboardOutlined className="text-lg text-[#58a6ff] transition-colors" />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-white text-xs leading-tight">ERP Admin</span>
                  <span className="text-[10px] text-slate-400 leading-tight">Staff Login</span>
                </div>
              </a>
            </nav>

            <button className="lg:hidden text-xl text-[#00f0ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full bg-[#0d1117]/90 backdrop-blur-lg border-b border-[#21262d] px-6 py-4 flex flex-col gap-4 primarytext text-sm"
              >
                <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 !no-underline">Home</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 !no-underline">Our Services</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="!no-underline border border-[#00f0ff] text-center text-[#00f0ff] py-2 rounded-lg secondarytext font-bold">Book Service</a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ... [KEEP YOUR EXISTING HERO SECTION HERE] ... */}
        {<HeroSection/>}

        {/* ... [KEEP YOUR EXISTING SERVICES, CONTACT, AND FOOTER SECTIONS EXACTLY AS THEY WERE] ... */}
        {/* Intentionally abbreviated here to save token space - leave your existing code for these sections unchanged. */}
        
 

        {/* ==========================================
            ALL SERVICES GRID SECTION
        ========================================== */}
        <ServicesSection/>
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
                  <h2 className="secondarytext font-black text-2xl text-white uppercase tracking-wide">Get In Touch</h2>
                  <p className="primarytext text-xs text-slate-400 mt-1 font-light">Contact us today for fast, reliable service.</p>
                </div>
                
                <form id="desktop-form" action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST" className="flex flex-col gap-2">
                  <Form form={form} component={false}>
                    <Form.Item name="name" className="mb-4"><Input style={inputStyle} placeholder="Enter Name" name="name" required /></Form.Item>
                    <Form.Item name="phone" className="mb-4"><Input style={inputStyle} placeholder="Enter Phone" name="phone" required /></Form.Item>
                    <Form.Item name="email" className="mb-4"><Input style={inputStyle} placeholder="Enter Email" name="email" required /></Form.Item>
                    <Form.Item name="message" className="mb-4"><Input.TextArea style={inputStyle} rows={4} placeholder="Enter your Message" name="message" required /></Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-transparent hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#010409] border border-[#00f0ff] h-12 secondarytext font-bold rounded-lg uppercase tracking-wider transition-all duration-300">
                      Send
                    </Button>
                  </Form>
                </form>
              </motion.div>

              {/* Map Layout View */}
              <motion.div className="flex flex-col justify-between" variants={fadeInUp}>
                <div>
                  <h2 className="secondarytext font-black text-2xl text-white uppercase tracking-wide mb-1">Location on Map</h2>
                  <p className="primarytext text-xs text-slate-400 mb-6 font-light">Here is our Physical Location.</p>
                  <iframe 
                    title="Google Maps Location of Electrolyte Solutions Desktop"
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
                <h2 className="secondarytext font-bold text-xl text-white uppercase tracking-wider text-center mb-4">Get In Touch</h2>
                <form id="mobile-form" action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST" className="flex flex-col gap-1 w-100">
                  <Form form={form} component={false}>
                    <Form.Item name="name" className="mb-3"><Input style={inputStyle} placeholder="Enter Name" name="name" required /></Form.Item>
                    <Form.Item name="phone" className="mb-3"><Input style={inputStyle} placeholder="Enter Phone" name="phone" required /></Form.Item>
                    <Form.Item name="email" className="mb-3"><Input style={inputStyle} placeholder="Enter Email" name="email" required /></Form.Item>
                    <Form.Item name="message" className="mb-4"><Input.TextArea style={inputStyle} rows={4} placeholder="Enter your Message" name="message" required /></Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-transparent border border-[#00f0ff] text-[#00f0ff] h-11 secondarytext font-bold uppercase tracking-wide">
                      Send
                    </Button>
                  </Form>
                </form>
              </motion.div>

              <motion.div className="flex flex-col" variants={fadeInUp}>
                <h2 className="secondarytext font-bold text-xl text-center text-white mb-1">Location on Map</h2>
                <p className="primarytext text-center font-light text-xs text-slate-400 mb-4">Here is our Physical Location.</p>
                <iframe 
                  title="Google Maps Location of Electrolyte Solutions Mobile"
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
              <h2 className="secondarytext text-2xl font-bold tracking-wide text-white">Electrolyte Solutions</h2>
              <p className="primarytext text-xs text-gray-400 font-light leading-relaxed">
                Powering homes and businesses with reliable IT services.
              </p>
            </div>

            {/* Column 2: Easy Links */}
            <div>
              <h3 className="secondarytext text-sm font-bold uppercase tracking-widest mb-4 text-[#58a6ff]">Quick Links</h3>
              <div className="primarytext space-y-2.5 text-xs text-gray-400 flex flex-col">
                <a href="#hero" className="hover:text-[#00f0ff] transition-colors !no-underline">Home</a>
                <a href="#services" className="hover:text-[#00f0ff] transition-colors !no-underline">Services</a>
                <a href="#contact" className="hover:text-[#00f0ff] transition-colors !no-underline">Contact</a>
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className="flex flex-col gap-2">
              <h3 className="secondarytext text-sm font-bold uppercase tracking-widest mb-2 text-[#58a6ff]">Contact</h3>
              <p className="primarytext text-xs text-gray-400"><PhoneOutlined/> Phone: 09648146167. 08081111867</p>
              <p className="primarytext text-xs text-gray-400 break-all"><MailOutlined/> Email: contact.electrolytesolutions@gmail.com</p>
              <a 
                href="https://wa.me/919648146167?text=Hello%20Electrolyte%20Solutions%2C%20I%20would%20like%20to%20book%20a%20service%21"
                className="inline-block mt-2 !no-underline bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg primarytext font-bold transition-all duration-300 w-fit text-center"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppOutlined/> Chat on WhatsApp
              </a>
            </div>

            {/* Column 4: Social Items with Styled Buttons */}
            <div>
              <h3 className="secondarytext text-sm font-bold uppercase tracking-widest mb-4 text-[#58a6ff]">Follow Us</h3>
              <div className="flex space-x-4 text-gray-400 text-2xl">
                <button 
                  type="button"
                  className="bg-transparent border-0 p-0 text-gray-400 hover:text-[#00f0ff] cursor-pointer transition-colors" 
                  aria-label="Facebook"
                  onClick={() => window.open('#', '_blank')}
                >
                  <FacebookOutlined />
                </button>
                <button 
                  type="button"
                  className="bg-transparent border-0 p-0 text-gray-400 hover:text-[#00f0ff] cursor-pointer transition-colors" 
                  aria-label="Instagram"
                  onClick={() => window.open('#', '_blank')}
                >
                  <InstagramOutlined />
                </button>
                <button 
                  type="button"
                  className="bg-transparent border-0 p-0 text-gray-400 hover:text-[#00f0ff] cursor-pointer transition-colors" 
                  aria-label="LinkedIn"
                  onClick={() => window.open('#', '_blank')}
                >
                  <LinkedinOutlined />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Baseline */}
          <div className="max-w-6xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 secondarytext tracking-wide">
            © 2026 Electrolyte Solutions. All rights reserved.
          </div>
        </footer>

      </div>
    </ConfigProvider>
  );
}
