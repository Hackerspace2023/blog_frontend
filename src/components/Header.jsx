import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
  <>
    <ToastContainer />
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className='py-2'><a href="#home" className="hover:underline">Home</a></li>
            <li className='py-2'><a href="#about" className="hover:underline">About</a></li>
            <li className='py-2'><a href="#contact" className="hover:underline">Contact</a></li>
          <button onClick={handleLoginClick} className="login hover:border hover:border-white px-5 py-2 bg-blue-900 rounded-[3rem]">Log In</button>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
