import Link from 'next/link';
// Icons
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex flex-grow justify-center space-x-8'>
          <Link href="/" className='text-white hover:text-gray-300 transition duration-200'>Inicio</Link>
          <Link href="/about" className='text-white hover:text-gray-300 transition duration-200'>About</Link>
          <Link href="/projects" className='text-white hover:text-gray-300 transition duration-200'>Projects</Link>
          <Link href="/contact" className='text-white hover:text-gray-300 transition duration-200'>Contact</Link>
        </div>

        {/* Icons section */}
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/rocerclasing?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white"
          >
            <FaGithub className="icon-github" size={30} style={{ color: 'inherit' }} />
            <span className="mt-1 text-sm">rocerclasing</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/robert-mu%C3%B1oz-clasing-151bb2128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfWghjLOOR%2FKvCKmoGVucMA%3D%3D"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white"
          >
            <CiLinkedin className="icon-linkedin" size={30} style={{ color: '#0077b5' }} />
            <span className="mt-1 text-sm">Robert Muñoz Clasing</span>
          </a>
          <a 
            href="https://stackoverflow.com/users/27819268/robertclasing"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white"
          >
            <FaStackOverflow className="icon-stackoverflow" size={30} style={{ color: '#f48024' }} />
            <span className="mt-1 text-sm">robertclasing</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
