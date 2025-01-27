import { FaPaw, FaUserCircle, FaDog, FaHome } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";

const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const navItems = [
    { id: 0, name: "Home", href: "/", icon: <FaHome /> },
    { id: 1, name: "Pets", href: "/pets", icon: <FaDog /> },
    { id: 2, name: "Reminders", href: "/reminders", icon: <FaCalendarDays /> },
    { id: 3, name: "Contact", href: "/contact", icon: <BiSolidContact /> },
  ];

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="text-3xl font-extrabold text-white">
          <a href="/" className="flex justify-between gap-4 hover:text-blue-200 transition ease-in-out duration-200">
            <FaPaw className="h-8 w-8 animate-pulse opacity-90" />
            <span className="font-lusitanaBold text-xl md:text-3xl">PawPal</span>
          </a>
        </div>

          {!isLoginPage && !isRegisterPage && (
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <>
          
                  <a
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-2 text-blue-50 text-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isActive ? 'border-b-2 border-blue-300' : ''
                    }`}
                  >
                    <span className="text-white">{item.icon}</span>
                    {item.name}
                  </a>
                  </>
                );
              })}
            </div>
          )}

          <div className="flex items-center space-x-6">
            {!isLoginPage && !isRegisterPage && user ? (
              <>
                <div
                  className="cursor-pointer relative text-white hover:text-gray-300 transition-all transform"
                  onClick={handleProfileClick}
                >
                  <FaUserCircle size={40} className="rounded-full border-2 border-white p-1 transition-transform duration-300 ease-in-out hover:scale-125" />
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-lg focus:outline-none transform hover:scale-105 transition duration-200 ease-in-out"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {!isLoginPage && (
                  <a
                    href="/login"
                    className="px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Login
                  </a>
                )}
                {!isRegisterPage && (
                  <a
                  href="/register"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                  Register
                  </a>
                )}

              </>
            )}
              </div>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800/95 rounded-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center justify-center space-x-3 px-4 py-3 text-blue-50 ${
                  location.pathname === item.href ? 'bg-blue-700' : 'hover:bg-blue-700/50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
    </nav>
  );
};

export default NavBar;