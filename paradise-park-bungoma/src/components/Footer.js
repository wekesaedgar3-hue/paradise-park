import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GiPalmTree className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">Paradise Park</span>
              <span className="text-sm text-green-400">Bungoma</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your perfect getaway for weddings, parties, picnics, and family
              fun in the heart of Bungoma Town, Kenya.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-green-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MdPhone className="h-4 w-4" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdPhone className="h-4 w-4" />
                <span>+254 723 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="h-4 w-4" />
                <span>info@paradiseparkbungoma.co.ke</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdLocationOn className="h-4 w-4" />
                <span>Off Webuye Road, Bungoma Town, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <p className="text-gray-400">Monday - Sunday</p>
            <p className="text-gray-400 font-medium">8:00 AM - 7:00 PM</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Paradise Park Bungoma. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
