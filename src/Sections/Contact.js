import { Form, Input, Button } from 'antd';

export default function Contact(){
      // Form submission handler
      const handleFinish = (values) => {
        console.log('Form values:', values);
        // handle form submission here
      };






    return <> <section id="contact" className="d-lg-flex d-none p-20 w-100 h-fit bg-slate-50   gap-5">
      <div className=' w-100 h-100'>
    <div>
      <h2 className="mont">Get In Touch</h2>
    <p className="poppins font-light">Contact us today for fast, reliable service.</p>
    </div>
    
    <form className='d-flex flex-col gap-2 w-100' action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST">
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Name' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Phone' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Email' type="phone" name="phone" required></input>
     <textarea className='poppins p-3 rounded-lg text-sm border-1' rows="4" placeholder='Enter your Message' type="message" name="message" required></textarea>
     <button type="submit" className='colorwhite cursor-pointer  h-fit w-fit px-4 py-2 rounded-lg'>Send</button>
    </form>
    </div>
    <div className=' d-flex flex-col w-100 h-80'>
    <h2 className="mont">Location on Map</h2>
    <p className="poppins font-light">Here is our Physical Location.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" className="border-1 shadow-sm" style={{borderRadius:"10px",aspectRatio:"3/1.65"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  <section id="contact" className="d-lg-none d-flex flex-col p-4 w-100 h-fit bg-slate-50   gap-5">
      <div className=' w-100 h-100'>
    <div>
      <h2 className="mont">Get In Touch</h2>
    <p className="poppins font-light">Contact us today for fast, reliable service.</p>
    </div>
    
    <form className='d-flex flex-col gap-2 w-100' action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST">
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Name' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Phone' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Email' type="phone" name="phone" required></input>
     <textarea className='poppins p-3 rounded-lg text-sm border-1' rows="4" placeholder='Enter your Message' type="message" name="message" required></textarea>
     <button type="submit" className='colorwhite cursor-pointer  h-fit w-fit px-4 py-2 rounded-lg'>Send</button>
    </form>
    </div>
    <div className=' d-flex flex-col w-100 h-80'>
    <h2 className="mont">Location on Map</h2>
    <p className="poppins font-light">Here is our Physical Location.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.925400166601!2d82.1851739!3d27.4092567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999df796136117d%3A0x2e0c4dbffc706446!2sElectrolyte%20Solutions!5e0!3m2!1sen!2sin!4v1746004641917!5m2!1sen!2sin" className="border-1 shadow-sm" style={{borderRadius:"10px",aspectRatio:"3/1.65"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  </>
}