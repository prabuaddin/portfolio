import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-slate-600 text-neutral-content">
        <aside>
          <h1 className="font-silkscreen text-5xl">P</h1>
          <p>Copyright © 2024 Prabu Addin Almuhasibi</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
            <div className="hover:text-gray-800">
            <Link to="https://www.instagram.com/prabu.a.a/">
              <FaInstagram size={30} />
            </Link>
            </div>
            <div className="hover:text-gray-800">
            <Link to="https://www.linkedin.com/in/prabu-addin-almuhasibi-395b60240/">
              <AiOutlineLinkedin size={30}/>
            </Link>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
}
