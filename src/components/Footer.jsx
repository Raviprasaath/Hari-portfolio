import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/portfolio#contact-us");
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Name */}
          <div>
            <h3 className="text-lg font-semibold">Hariharan Selvan</h3>
            <p className="text-sm text-gray-400">
              3D Generalist • 3D Visualization Engineer
            </p>
            <p className="text-sm text-gray-400">
              3D Artist • CAD to Unreal Engine •  Product Animation
            </p>
            <p className="text-sm text-gray-400">
              Solid Works Engineer • Digital Twins
            </p>

          </div>

          <button
            onClick={handleContactClick}
            className="text-sm transition hover:text-gray-300"
          >
            Work With Me
          </button>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <a
              href="tel:9655074076"
              className="flex items-center gap-2 transition hover:text-gray-300"
            >
              <Phone size={18} />
              <span>96550-74076</span>
            </a>

            <a
              href="mailto:info@dimenxstudios.com"
              className="flex items-center gap-2 transition hover:text-gray-300"
            >
              <Mail size={18} />
              <span>info@dimenxstudios.com</span>
            </a>

            <a
              href="https://linkedin.com/in/hariharanselvan151997"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}