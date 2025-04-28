export default function Contact(){
      // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    // Simple validation
    if (!name || !phone || !message) {
      alert('Please fill out all fields!');
    } else {
      alert('Thanks for reaching out, we will get back to you soon!');
    }

    // Reset the form
    e.target.reset();
  };
    return <section id="contact">
    <h2>Get In Touch</h2>
    <p>Contact us today for fast, reliable service.</p>
    <form onSubmit={handleSubmit} id="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="tel" name="phone" placeholder="Your Phone" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
}