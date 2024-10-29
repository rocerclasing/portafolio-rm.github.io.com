import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content flex flex-col items-center">
          <p>&copy; 2024 Robert Sebastián Muñoz Clasing. Todos los derechos reservados.</p>
          <div className="flex items-center mt-8"> {/* Asegura que los íconos estén en la misma fila */}
            <a 
              href="https://github.com/rocerclasing?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center" // Agrupa ícono y label
            >
              <FaGithub className="icon-github" size={25} style={{ color: 'inherit' }} /> {/* Sin color */}
              <label htmlFor="github" className="mt-2">rocerclasing</label>
            </a>
            <a 
              href="https://www.linkedin.com/in/robert-mu%C3%B1oz-clasing-151bb2128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfWghjLOOR%2FKvCKmoGVucMA%3D%3D" // Cambia esto por tu URL de LinkedIn
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center ml-8" // Margen izquierdo para separar íconos
            >
              <CiLinkedin className="icon-linkedin" size={25} style={{ color: '#0077b5' }} /> {/* Color azul de LinkedIn */}
              <label htmlFor="linkedin" className="mt-2">Robert Muñoz Clasing</label>
            </a>
            <a 
              href="https://stackoverflow.com/users/27819268/robertclasing" // Cambia esto por tu URL de Stack Overflow
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center ml-8" // Margen izquierdo para separar íconos
            >
              <FaStackOverflow className="icon-stackoverflow" size={25} style={{ color: '#f48024' }} /> {/* Color de Stack Overflow */}
              <label htmlFor="stackoverflow" className="mt-2">robertclasing</label>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
