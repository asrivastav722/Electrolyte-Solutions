import { Form, Input, Button } from 'antd';

export default function Contact(){
      // Form submission handler
      const handleFinish = (values) => {
        console.log('Form values:', values);
        // handle form submission here
      };






    return <section className="d-flex flex-col p-5 w-100 bg-slate-50 align-items-center justify-center">
      
    <h2 className="mont">Get In Touch</h2>
    <p className="poppins font-light">Contact us today for fast, reliable service.</p>
    <Form onFinish={handleFinish} className='w-50 d-flex flex-col'>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input className="poppins p-2.5" placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone' }]}
      >
        <Input className="poppins p-2.5" type="tel" placeholder="Your Phone" />
      </Form.Item>

      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
      >
        <Input.TextArea className="poppins p-2.5 h-px-100" placeholder="Your Message" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className='mont' htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </section>
}