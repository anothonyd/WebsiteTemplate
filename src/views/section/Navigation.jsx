import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Navigation = () => {
  // State variable to track whether the mobile menu is open or not
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to handle the toggle of the mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block w-full">
      {/* Navigation Bar Container */}
      <div className="container max-w-7xl mx-auto md:px-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className='flex items-center'>
          <div className="md:hidden">
            {/* Toggle button for mobile menu */}
            <button
              className="text-black p-2"
              onClick={handleMenuToggle}
            >
              {/* Show "Menu" icon when the menu is closed, and "Close" icon when the menu is open */}
              {isMenuOpen ? (
                <img src='/src/assets/close.svg' className='h-6 w-6' alt="Close Menu" />
              ) : (
                <img src='/src/assets/bars.svg' className='h-6 w-6' alt="Open Menu" />
              )}
            </button>
          </div>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div>
              <img src="/src/assets/react.svg" alt="Logo" className="h-8" />
            </div>
          </div>
        </div>
        {/* Other Icons */}
        <div className='p-2 flex items-center gap-3'>
          {/* SearchBar (hidden on mobile) */}
          <div className="hidden md:flex"><SearchBar /></div>
          <img src='/src/assets/heart.svg' className='h-6 w-6' alt="Favorite" />
          <img src='/src/assets/user.svg' className='h-6 w-6' alt="User" />
          <img src='/src/assets/cart.svg' className='h-6 w-6' alt="Cart" />
        </div>
      </div>

      {/* Mobile Menu (visible on mobile) */}
      <div className="relative flex w-full p-2 pt-0 md:hidden">
        {/* SearchBar (visible on mobile) */}
        <SearchBar />
        {/* Mobile menu content */}
        <div
          className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
            } bg-slate-400 left-0 absolute w-full flex items-center md:hidden transition-transform duration-300`}
        >
          <ul className="block items-center space-y-3 p-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div>
        {/* Navbar Links */}
        <div className='w-full bg-slate-100'>
          <div className={`max-w-7xl w-full mx-auto md:flex md:justify-center hidden `}>
            <ul className="md:flex items-center">
              <li className='group flex p-3'>
                <a href="/"className='group-hover:text-blue-800'>Home</a>
                <div className='absolute w-full left-0 hidden group-hover:flex transition-all duration-500 mt-9 h-[400px] bg-slate-400'>
                  <div className='flex items-center justify-center w-full'><h1 className='text-2xl'>HOME</h1></div>
                </div>
              </li>
              <li className='group flex p-3'>
                <a href="/"className='group-hover:text-blue-800'>About</a>
                <div className='absolute w-full left-0 hidden group-hover:flex transition-all duration-500 mt-9 h-[400px] bg-slate-400'>
                  <div className='flex items-center justify-center w-full'><h1 className='text-2xl'>ABOUT</h1></div>

                </div>
              </li>
              <li className='group flex p-3'>
                <a href="/" className='group-hover:text-blue-800'>Contact</a>
                <div className='absolute w-full left-0 hidden group-hover:flex transition-all duration-500 mt-9 h-[400px] bg-slate-400'>
                  <div className='flex items-center justify-center w-full'><h1 className='text-2xl'>CONTACT</h1></div>

                </div>
              </li>
              <li className='group flex p-3'>
                <a href="/"className='group-hover:text-blue-800'>Services</a>
                <div className='absolute w-full left-0 hidden group-hover:flex transition-all duration-500 mt-9 h-[400px] bg-slate-400'>
                  <div className='flex items-center justify-center w-full'><h1 className='text-2xl'>SERVICES</h1></div>

                </div>
              </li>
              <li className='group flex p-3'>
                <a href="/"className='group-hover:text-blue-800'>Products</a>
                <div className='absolute w-full left-0 hidden group-hover:flex transition-all duration-500 mt-9 h-[400px] bg-slate-400'>
                  <div className='flex items-center justify-center w-full'><h1 className='text-2xl'>PRODUCTS</h1></div>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
