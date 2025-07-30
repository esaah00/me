import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Let's Connect!</p>
        <div className="flex justify-center gap-6 mt-3">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-400" />
            <span>+33 758 66 39 32</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-400" />
            <span>manu.project@outlook.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-400" />
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Manu.Projec. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
