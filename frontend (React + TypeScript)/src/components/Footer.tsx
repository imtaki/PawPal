const Footer: React.FC = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-6">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">
                © {new Date().getFullYear()} <span className="font-bold">PawPal</span>. All rights reserved.
              </p>
            </div>
  
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white hover:text-gray-200 transition font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition font-medium"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-white hover:text-gray-200 transition font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
  
          <div className="mt-6 border-t border-gray-300 pt-4 text-center">
            <p className="text-sm text-gray-200">
              Made with ❤️ by the PawPal Team
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
