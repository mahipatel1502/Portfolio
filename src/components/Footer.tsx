import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 px-4 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
      <div className="container mx-auto text-center">
        <p className={`flex items-center justify-center gap-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Mahi Patel
        </p>
        <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
