const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop by Category</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Books
                </a>
              </li>
              {/* Add more categories */}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Accepted Payment Methods
            </h4>
            <div className="flex items-center space-x-4">
              <img src="/images/visa.png" alt="Visa" className="h-6" />
              <img
                src="/images/mastercard.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="/images/creditcard.png"
                alt="Credit Card"
                className="h-6"
              />
              {/* Add more payment method logos */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-center">
          &copy; 2024 Created by Rimanshu Patel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
