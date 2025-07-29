import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF6EE] text-gray-900">
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/40 to-transparent py-4 px-6">
        <div className="container mx-auto flex justify-center items-center">
           <Link to={"/"}>
 <img src={logo} className="h-15" alt="" />
</Link>
          {/* <nav>
            <ul className="flex space-x-8 text-white font-medium">
              <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Tours</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Destinations</a></li>
              <li><a href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </nav> */}
        </div>
      </header>

      <main className="flex-1 bg-[#FDF6EE]">
        {children}
      </main>
<Footer/>
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alpen</h3>
              <p className="text-gray-400 mb-4">Discover the world's most beautiful destinations with our carefully crafted travel experiences.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Discover</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tours</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Adventure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tour Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trekking</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Packages</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Honeymoon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Holiday</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacts</h4>
              <div className="text-gray-400 space-y-2">
                <p>📍 123 Adventure Street, City Name</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@alpen.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alpen. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomeLayout;
