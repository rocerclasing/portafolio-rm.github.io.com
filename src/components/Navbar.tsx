import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-10" id="mobile-menu">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-grow justify-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-300 transition duration-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition duration-200">About</Link>
          <Link href="/projects" className="text-white hover:text-gray-300 transition duration-200">Projects</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
