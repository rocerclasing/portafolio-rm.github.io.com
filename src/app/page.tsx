import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const Home = () => {
    return (
        <>
            <h1 className='flex items-center justify-center mt-20 text-5xl font-extrabold text-gray-800 leading-tight tracking-tight shadow-lg'>
                Robert Sebastián Muñoz Clasing
            </h1>

            <section className="max-w-4xl mx-auto p-4">
                <h2 className="flex items-center justify-center text-3xl font-semibold text-gray-700 mb-5 mt-10 underline">About</h2>
                <p className="text-gray-700 mb-4">
                    I am a Full Stack developer passionate about technology with experience in web application development. I specialize in creating innovative and efficient solutions, always working as part of a team and seeking continuous growth.
                </p>
            </section>

            <section className="flex items-center justify-center mb-10">
                <div className="tech-stack text-center">
                    <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
                    <ul className="list-disc list-inside">
                        <li className="flex items-center justify-center">
                            React <FaReact className="text-blue-500 ml-2" />
                        </li>
                        <li className="flex items-center justify-center">
                            JavaScript <FaJs className="text-yellow-500 ml-2 text-xl" />
                        </li>
                        <li className="flex items-center justify-center">
                            HTML <FaHtml5 className="text-orange-600 ml-2 text-lg" />
                        </li>
                        <li className="flex items-center justify-center">
                            Tailwind <RiTailwindCssFill className="text-cyan-500 ml-2 text-lg" />
                        </li>
                        <li className="flex items-center justify-center">
                            Node.js <FaNodeJs className="text-yellow-500 ml-2" style={{ color: '#68A063' }} />
                        </li>
                        <li className="flex items-center justify-center">
                            Next.js <RiNextjsLine className="text-gray-700 ml-2 text-lg" /> {/* Cambié el color y el tamaño aquí */}
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
