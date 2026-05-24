import React from 'react';
import { Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form] = Form.useForm();

  // Custom configuration for our dark/light theme overrides
  const inputStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    border: '1px solid #1e293b',
  };

  // Animation Variant Presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-slate-50 w-100 h-fit text-slate-800">
      
      {/* ================= DESKTOP VIEWPORT ================= */}
      <motion.section 
        id="contact-desktop" 
        className="d-lg-flex d-none p-20 w-100 h-fit gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Left Side: Antd Form Box */}
        <motion.div className="w-100 h-100" variants={fadeInUp}>
          <div>
            <h2 className="mont font-bold text-3xl mb-1 text-slate-900">Get In Touch</h2>
            <p className="poppins font-light text-slate-500 mb-4">Contact us today for fast, reliable doorstep service.</p>
          </div>
          
          {/* Pure HTML Form wrapped smoothly for formsubmit API processing */}
          <form 
            id="desktop-formsubmit"
            action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" 
            method="POST"
            className="d-flex flex-col gap-3 w-100"
          >
            <Form form={form} component={false}>
              <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input style={inputStyle} placeholder="Enter Name" name="name" required />
              </Form.Item>

              <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input style={inputStyle} placeholder="Enter Phone Number" name="phone" required />
              </Form.Item>

              <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
                <Input style={inputStyle} placeholder="Enter Email Address" name="email" required />
              </Form.Item>

              <Form.Item name="message" rules={[{ required: true, message: 'Please write your requirement!' }]}>
                <Input.TextArea style={inputStyle} rows={4} placeholder="How can we help you? (Computers, Mobile, Web development, or CSC Services?)" name="message" required />
              </Form.Item>

              <Button 
                type="primary" 
                htmlType="submit" 
                className="cursor-pointer h-fit w-fit px-5 py-2.5 rounded-lg border-0 font-semibold"
                style={{ backgroundColor: '#07575b', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}
              >
                Send Message
              </Button>
            </Form>
          </form>
        </motion.div>

        {/* Right Side: Map Placement Container */}
        <motion.div className="d-flex flex-col w-100 h-80" variants={fadeInUp}>
          <h2 className="mont font-bold text-3xl mb-1 text-slate-900">Location on Map</h2>
          <p className="poppins font-light text-slate-500 mb-4">Visit our main branch workshop center.</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
            className="border-1 shadow-sm transition-transform duration-500 hover:scale-[1.01]" 
            style={{ borderRadius: "12px", aspectRatio: "3/1.65", border: "1px solid #e2e8f0" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.section>

      {/* ================= MOBILE VIEWPORT ================= */}
      <motion.section 
        id="contact-mobile" 
        className="d-lg-none d-flex flex-col p-6 w-100 h-fit gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.div className="w-100 h-100" variants={fadeInUp}>
          <div>
            <h2 className="mont font-bold text-2xl text-center text-slate-900 mb-1">Get In Touch</h2>
            <p className="poppins font-light text-center text-slate-500 mb-5">Contact us today for fast, reliable service.</p>
          </div>
          
          <form 
            id="mobile-formsubmit"
            action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" 
            method="POST" 
            className="d-flex flex-col gap-3 w-100 align-items-center justify-center"
          >
            <Form form={form} component={false} style={{ width: '100%' }}>
              <Form.Item name="name" style={{ width: '100%' }}>
                <Input style={inputStyle} placeholder="Enter Name" name="name" required />
              </Form.Item>

              <Form.Item name="phone" style={{ width: '100%' }}>
                <Input style={inputStyle} placeholder="Enter Phone" name="phone" required />
              </Form.Item>

              <Form.Item name="email" style={{ width: '100%' }}>
                <Input style={inputStyle} placeholder="Enter Email" name="email" required />
              </Form.Item>

              <Form.Item name="message" style={{ width: '100%' }}>
                <Input.TextArea style={inputStyle} rows={4} placeholder="Enter your Message" name="message" required />
              </Form.Item>

              <Button 
                type="primary" 
                htmlType="submit" 
                className="cursor-pointer mt-2 h-fit w-fit px-6 py-2.5 rounded-lg border-0 font-semibold"
                style={{ backgroundColor: '#07575b', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}
              >
                Send Message
              </Button>
            </Form>
          </form>
        </motion.div>

        <motion.div className="d-flex flex-col w-100 h-80" variants={fadeInUp}>
          <h2 className="mont font-bold text-2xl text-center text-slate-900 mb-1">Location on Map</h2>
          <p className="poppins text-center font-light text-slate-500 mb-4">Here is our Physical Location.</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" 
            className="border-1 shadow-sm" 
            style={{ borderRadius: "12px", aspectRatio: "3/1.65", border: "1px solid #e2e8f0" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.section>

    </div>
  );
}