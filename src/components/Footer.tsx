
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Shelteric</h2>
            <p className="text-gray-300 mb-6">
              Your one-stop platform for stays, food, and travel services in Hyderabad.
              Bringing convenience to your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/stays" className="text-gray-300 hover:text-white transition-colors">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/stays" className="text-gray-300 hover:text-white transition-colors">
                  Room Rentals
                </Link>
              </li>
              <li>
                <Link to="/food" className="text-gray-300 hover:text-white transition-colors">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-gray-300 hover:text-white transition-colors">
                  Cab Services
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Rides
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Help and Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300">support@shelteric.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button className="bg-brand-blue px-3 py-2 rounded-r-md hover:bg-brand-blue/90 transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Shelteric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
