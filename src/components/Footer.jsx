import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Column */}
        <div className="md:col-span-1">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-sm mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:videokrojacnica@gmail.com"
              className="hover:text-red-800 transition-colors"
            >
              videokrojacnica@gmail.com
            </a>
          </p>
          <p className="text-sm mb-4">
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+385912250443"
              className="hover:text-red-800 transition-colors"
            >
              +385 91 225 0443
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24z" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-red-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7.02h-2.3v-2.9h2.3V9.05c0-2.27 1.36-3.53 3.44-3.53.99 0 2.02.18 2.02.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.9h-2.12V22A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-6 pt-4 pb-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} KROJAČNICA. Sva prava pridržana.
      </div>
    </footer>
  );
}
