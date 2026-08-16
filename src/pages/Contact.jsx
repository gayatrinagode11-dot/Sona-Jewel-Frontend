export default function Contact() {
  return (
    <div className="bg-[#FFF8F0] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold font-serif text-center text-[#8B4513] mb-3">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">Amhala message kara, amhi 24 tasat reply deu</p>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Side: Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Store Details</h3>
            
            <div className="mb-5">
              <h4 className="font-semibold text-lg">📍 Address</h4>
              <p className="text-gray-700">Sona Jewels, FC Road, Shivaji Nagar, Pune - 411005, Maharashtra</p>
            </div>

            <div className="mb-5">
              <h4 className="font-semibold text-lg">📞 Phone</h4>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>

            <div className="mb-5">
              <h4 className="font-semibold text-lg">📧 Email</h4>
              <p className="text-gray-700">support@sonajewels.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">⏰ Store Timings</h4>
              <p className="text-gray-700">Mon - Sun: 10:00 AM to 9:00 PM</p>
            </div>

            {/* Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v123456"
              className="w-full h-48 rounded-xl mt-6"
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                required
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                required
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-[#8B4513] hover:bg-[#6b3410] text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}