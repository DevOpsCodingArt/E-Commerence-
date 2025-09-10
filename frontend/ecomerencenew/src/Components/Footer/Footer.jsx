import React, { useState } from "react";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCarto } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = () => {
    if (email && isChecked) {
      // Open default email client with pre-filled email
      window.location.href = `mailto:someone@example.com?subject=Newsletter Subscription&body=I would like to subscribe with email: ${email}`;
      setEmail("");
      setIsChecked(false);
    }
  };

  return (
    <footer className="bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Us Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-800">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="text-gray-600">
                <p className="font-medium">Classyshop - Mega Super Store</p>
                <p>507-Union Trade Centre</p>
                <p>France</p>
              </div>
              <div>
                <p className="text-gray-600">sales@yourcompany.com</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-red-500">
                  (+92) 333-6869999
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <svg
                  className="h-8 w-8 text-2xl text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Online Chat</p>
                  <p className="text-gray-600">Get Expert Help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-800">
              Products
            </h3>
            <div className="space-y-3">
              <Link
                to="/prices-drop"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Prices Drop
              </Link>
              <Link
                to="/new-products"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                New Products
              </Link>
              <Link
                to="/best-sales"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Best Sales
              </Link>
              <Link
                to="/contact"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Contact Us
              </Link>
              <Link
                to="/sitemap"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Sitemap
              </Link>
              <Link
                to="/stores"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Stores
              </Link>
            </div>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-800">
              Our Company
            </h3>
            <div className="space-y-3">
              <Link
                to="/delivery"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Delivery
              </Link>
              <Link
                to="/legal-notice"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Legal Notice
              </Link>
              <Link
                to="/terms"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Terms And Conditions Of Use
              </Link>
              <Link
                to="/about"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                About Us
              </Link>
              <Link
                to="/secure-payment"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Secure Payment
              </Link>
              <Link
                to="/login"
                className="link block text-gray-600 transition-colors hover:text-gray-800"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-800">
              Subscribe To Newsletter
            </h3>
            <p className="mb-6 text-gray-600">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="w-full rounded-md bg-red-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-600"
              >
                SUBSCRIBE
              </button>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to the terms and conditions and the privacy policy
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Social Icons */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaXTwitter, FaYoutube, FaPinterestP, FaInstagram].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white hover:shadow-lg"
              >
                <Icon className="text-xl transition-transform group-hover:rotate-12 group-hover:transform" />
              </a>
            ),
          )}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm font-medium tracking-wide text-gray-500">
          © 2024 - Ecommerce software by{" "}
          <span className="text-red-500">PrestaShop™</span>
        </p>

        {/* Payment Icons */}
        <div className="flex items-center space-x-3 text-2xl">
          <div className="flex h-8 items-center space-x-3 rounded-xl bg-gray-50 px-4 py-6 shadow-sm">
            <SiCarto className="text-blue-600 transition-all hover:scale-110" />
            <FaCcVisa className="text-blue-700 transition-all hover:scale-110" />
            <FaCcMastercard className="text-orange-600 transition-all hover:scale-110" />
            <FaCcAmex className="text-blue-500 transition-all hover:scale-110" />
            <FaCcPaypal className="text-blue-800 transition-all hover:scale-110" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
