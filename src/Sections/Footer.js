export default function Footer(){
    return <footer className="bg-gray-900 text-white py-10">
    {/* // <footer className=" p-4"> */}
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <!-- Brand Info --> */}
    <div>
      <h2 className="text-2xl font-bold mb-2">Electrolyte Solutions</h2>
      <p className="text-sm text-gray-400">Powering homes and businesses with reliable IT services. </p>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <div className="space-y-1 text-gray-400 text-sm d-flex flex-col gap-1">
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#about" className="hover:text-white transition">About Us</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
    </div>
    </div>

    {/* <!-- Contact Info --> */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <p className="text-sm m-1 text-gray-400">Phone: +91 96481 46167</p>
      <p className="text-sm m-1 text-gray-400">Email: sasgriggs329@gmail.com</p>
      <a href="https://wa.me/919648146167?text=Hello%20Electrolyte%20Solutions%2C%20I%20would%20like%20to%20book%20a%20service%21"
         className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded transition">
        Chat on WhatsApp
      </a>
    </div>

    {/* <!-- Social Media --> */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
      <div className="flex space-x-4 text-gray-400">
        <a href="#" className="hover:text-white transition" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-white transition" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-white transition" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © 2025 Electrolyte Solutions. All rights reserved.
  </div>
</footer>

    {/* <p className="poppins text-white font-extralight text-sm">&copy; 2025 Electrolyte Solutions | All Rights Reserved</p> */}
  {/* </footer> */}
}