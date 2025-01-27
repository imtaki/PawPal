import { FaPaw, FaUserCircle, FaDog } from "react-icons/fa";
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
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg ">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-extrabold text-white">
            <a href="/" className="flex justify-between gap-4 hover:text-gray-200 transition ease-in-out duration-200">
              <FaPaw className="h-8 w-8 animate-pulse" />
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
                    className={`flex items-center gap-2 text-white text-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isActive ? 'border-b-2 border-white pb-1' : ''
                    }`}
                    aria-current="page"
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
                  className="cursor-pointer relative text-white hover:text-gray-300 transition-all transform hover:scale-125"
                  onClick={handleProfileClick}
                >
                  <FaUserCircle size={40} className="rounded-full border-2 border-white p-1 transition-transform duration-300 ease-in-out hover:scale-125" />
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transform hover:scale-105 transition duration-200 ease-in-out"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {!isLoginPage && (
                  <a
                    href="/login"
                    className="px-4 py-2 text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Login
                  </a>
                )}
                {!isRegisterPage && (
                  <a
                    href="/register"
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-blue-600 text-white hover:bg-gradient-to-l rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
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
          <div className="lg:hidden bg-white/10 rounded-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center justify-center space-x-3 px-4 py-3 text-white ${
                  location.pathname === item.href ? 'bg-white/20' : 'hover:bg-white/10'
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