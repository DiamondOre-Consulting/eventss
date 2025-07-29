import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BNILogo from "../assets/BNILogo.png";
import IOTOLogo from "../assets/IATOLogo.jpg";
type ContactItem = {
  icon: JSX.Element;
  text: string;
  link?: string;
};

type SocialLink = {
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  href: string;
};

type FooterLink = {
  label: string;
  path: string;
};

function Footer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      setLoading(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    )
    .then(() => {
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setEmail('');
      if (formRef.current) {
        formRef.current.reset();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    })
    .finally(() => setLoading(false));
  };

  const contactItems: ContactItem[] = [
    {
      icon: <FaMapMarkerAlt className="text-amber-400 mr-2" size={16} />,
      text: "52 A, Aravali, Sector 52, Noida, India"
    },
    {
      icon: <FaEnvelope className="text-amber-400 mr-2" size={16} />,
      text: "contact@eventoursindia.com",
      link: "mailto:contact@eventoursindia.com"
    },
    {
      icon: <FaPhone className="text-amber-400 mr-2" size={16} />,
      text: "+91 120 4232822",
      link: "tel:+911204232822"
    }
  ];

  const socialLinks: SocialLink[] = [
    { Icon: FaFacebookF, href: 'https://www.facebook.com/people/Eventours/100063523525573/#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaWhatsapp, href: 'https://wa.me/919810698226?text=Hello!%20I%20am%20interested%20in%20your%20packages' }
  ];

  const footerLinks: FooterLink[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Approach', path: '/our-approach' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Refund and Cancellation Policy', path: '/refund-policy' },
    // { label: 'Visa', path: '/visa' }
  ];

  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Top Section - Newsletter & Contact */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-light mb-6 uppercase tracking-wider border-b border-amber-400 pb-2 inline-block">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded text-sm font-medium transition-colors ${
                    loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
                >
                  {loading ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
            </form>
          <div className='flex items-center gap-6 p-4'>
              <img src={IOTOLogo} alt="" className='w-17' />
            <img src={BNILogo} alt=""  className='w-28'/>
          </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-6 uppercase tracking-wider border-b border-amber-400 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  {item.link ? (
                    <a href={item.link} className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="text-gray-300 hover:text-amber-400 transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} EVENTOURS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
