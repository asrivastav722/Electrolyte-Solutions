import { Form, Input, Button } from 'antd';

export default function Contact(){
      // Form submission handler
      const handleFinish = (values) => {
        console.log('Form values:', values);
        // handle form submission here
      };






    return <section id="contact" className="d-flex py-5 flex-col w-100 bg-slate-50 gap-3 align-items-center justify-center">
      
    <div><h2 className="mont">Get In Touch</h2>
    <p className="poppins font-light">Contact us today for fast, reliable service.</p>
    </div>
    
    <form className='d-flex flex-col gap-2 w-80' action="https://formsubmit.co/contact.electrolytesolutions@gmail.com" method="POST">
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Name' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Phone' type="text" name="name" required></input>
     <input className='poppins p-3 rounded-lg text-sm border-1' placeholder='Enter Email' type="phone" name="phone" required></input>
     <textarea className='poppins p-3 rounded-lg text-sm border-1' rows="4" placeholder='Enter your Message' type="message" name="message" required></textarea>
     <button type="submit" className='colorwhite cursor-pointer  h-fit w-fit px-4 py-2 rounded-lg'>Send</button>
    </form>
  </section>
}