import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* 1. Brand Info */}
          <div>
            <h2 className="text-2xl font-bold font-serif text-white mb-4">Sona Jewels</h2>
            <p className="text-sm mb-4">
              Pune chi trusted jewellery brand. 100% BIS Hallmarked Gold & Diamond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400">📘</a>
              <a href="#" className="hover:text-yellow-400">📷</a>
              <a href="#" className="hover:text-yellow-400">💬</a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
              <li><Link to="/sale" className="hover:text-yellow-400">Sale</Link></li>
            </ul>
          </div>

          {/* 3. Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rings" className="hover:text-yellow-400">Rings</Link></li>
              <li><Link to="/necklace" className="hover:text-yellow-400">Necklace</Link></li>
              <li><Link to="/earrings" className="hover:text-yellow-400">Earrings</Link></li>
              <li><Link to="/products" className="hover:text-yellow-400">Bangles</Link></li>
              <li><Link to="/products" className="hover:text-yellow-400">Mangalsutra</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 FC Road, Shivaji Nagar, Pune - 411005</li>
              <li>📞 +91 98765 43210</li>
              <li>📧 support@sonajewels.com</li>
              <li>⏰ Mon - Sun: 10AM - 9PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>© 2026 Sona Jewels. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}