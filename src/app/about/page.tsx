
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Robert Sebastián Muñoz Clasing",
  description: "Conoce más sobre Robert Sebastián Muñoz Clasing, un Desarrollador Full Stack apasionado por crear sitios web limpios, responsivos y amigables para el usuario. Explora su trayectoria profesional, habilidades técnicas y proyectos destacados.",
};

const Page = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 flex justify-center items-center">
      <div className="w-full max-w-2xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hello, I am Robert Sebastián Muñoz Clasing, a Full Stack Developer with a passion for creating clean, responsive, and user-friendly websites. My expertise lies in technologies such as React, Next.js, and Tailwind CSS, and I strive to deliver seamless web experiences that help businesses achieve their goals. 
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My journey in web development began with a strong curiosity about how the web works. As I delved deeper, I developed a keen eye for design and functionality. With two years of experience, I am constantly learning and evolving in this fast-paced industry, excited to collaborate on innovative projects that push the boundaries of what is possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Besides coding, I enjoy exploring new tools and frameworks, always seeking ways to optimize performance and enhance the user experience. I am committed to writing maintainable and scalable code, ensuring that the solutions I develop are efficient and elegant. My goal is to create impactful digital solutions that resonate with users and drive success for businesses.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            In my free time, I love contributing to open-source projects and engaging with the developer community. I believe that collaboration and knowledge sharing are key to growth in this field. I look forward to leveraging my skills in front-end development and back-end integration to create innovative applications.
          </p>
          <div className="mt-8">
            <Link href="/projects" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
              View My Work
            </Link>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
