import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCopyrightThin } from "react-icons/pi";
import "./Footer.css";

export const Footer = () => {
    return(
        <footer>
            <div className="heading3">
                <p>You Can</p>
                <h2>Follow Me On</h2>
            </div>
         <div className="logo-container">
            <div className="logo">
              <a href="https://www.linkedin.com/in/%F0%9D%99%91%F0%9D%99%9E%F0%9D%99%A8%F0%9D%99%9D%F0%9D%99%96%F0%9D%99%A1-%F0%9D%98%BF%F0%9D%99%9D%F0%9D%99%A4%F0%9D%99%A3%F0%9D%99%9A-34419a289/"><h2><FaLinkedin /></h2></a>
              <a href="https://github.com/vishalpatil321"><h2><FaGithub /></h2></a>
              <a href="https://www.instagram.com/02coolvishal/?next=%2F"><h2><FaInstagram /></h2></a>
            
            </div>
        </div>
        <div className="copyright">
          <small>Copyright<PiCopyrightThin />2023 Vishal Dhone.All Right Reserved</small>
        </div>
        </footer>
    );
};