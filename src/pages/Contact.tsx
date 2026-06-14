import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-blue-300 font-medium mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Get in touch with the Ministry of Science & Technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Ministry of Science & Technology</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                <strong>Address:</strong><br/>
                3rd Floor, Sethsiripaya Stage I,<br/>
                Battaramulla,<br/>
                Sri Lanka
              </p>
              <p>
                <strong>Email:</strong><br/>
                <a href="mailto:info@mostr.gov.lk" className="text-blue-600 hover:underline">info@mostr.gov.lk</a>
              </p>
              <p>
                <strong>Telephone:</strong><br/>
                +94 112 879 410
              </p>
              <p>
                <strong>Fax:</strong><br/>
                +94 112 879 412
              </p>
            </div>
          </div>
          
          {/* Contact Form Placeholder */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Send an Inquiry</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full border border-slate-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full border border-slate-300 rounded-md p-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" className="w-full border border-slate-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full border border-slate-300 rounded-md p-2 h-32"></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
