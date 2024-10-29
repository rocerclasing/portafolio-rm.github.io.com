import Link from 'next/link';

const Page = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 flex justify-center items-center">
      <div className="w-full max-w-2xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hello, I am Robert Sebastián Muñoz Clasing, a Full Stack developer passionate about creating clean, responsive, and user-friendly websites. I have experience in technologies such as React, Next.js, and Tailwind CSS, and I strive to deliver seamless web experiences that help businesses achieve their goals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My journey in web development began with a strong curiosity about how the web works. Since then, I have developed a keen eye for design and functionality. I am constantly learning and evolving in this fast-paced industry, and I am excited to collaborate on innovative projects that push the boundaries of what is possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Besides coding, I enjoy exploring new tools and frameworks, constantly looking for ways to optimize performance and enhance the user experience. I am committed to writing maintainable and scalable code, ensuring that the solutions I develop are efficient and elegant.
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
