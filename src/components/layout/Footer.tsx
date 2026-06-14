import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Ministry of Science & Technology</h3>
          <p className="text-sm mb-4">Empowering Sri Lanka through Science, Technology, and Innovation.</p>
          <p className="text-sm">3rd Floor, Sethsiripaya Stage I,<br/>Battaramulla, Sri Lanka</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/institutions" className="hover:text-white transition-colors">Institutions</Link></li>
            <li><Link to="/news" className="hover:text-white transition-colors">News & Events</Link></li>
            <li><Link to="/downloads" className="hover:text-white transition-colors">Resource Library</Link></li>
            <li><Link to="/procurement" className="hover:text-white transition-colors">Procurement Notices</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Info</h4>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:info@mostr.gov.lk" className="hover:text-white">info@mostr.gov.lk</a></li>
            <li>Phone: +94 112 879 410</li>
            <li>Fax: +94 112 879 412</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-700 text-sm text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Ministry of Science & Technology, Sri Lanka. All Rights Reserved.</p>
        <p className="text-slate-400">Design & Developed by <a href="https://www.etechmultisolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white">E-Tech Solutions</a></p>
      </div>
    </footer>
  );
}
