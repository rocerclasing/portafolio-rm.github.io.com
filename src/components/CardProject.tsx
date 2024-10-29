import Link from "next/link";
import { FaHtml5, FaReact, FaJsSquare, FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  index: number;
  githubLink: string;
}

const projects = [
  { id: 1, title: "Portfolio", description: "Showcases my personal and professional projects.", githubLink: "https://github.com/rocerclasing/portafolio-rm.github.io.git" },
  { id: 2, title: "Blog", description: "An article publishing platform with pagination, retrieving data from the server.", githubLink: "https://github.com/rocerclasing/blog-basic-ts-next-react-js" },
  { id: 3, title: "Form", description: "Example of best practices in form creation using TypeScript.", githubLink: "https://github.com/rocerclasing/todos-ts-js-react-vite-basic" },
  { id: 4, title: "Simple URL", description: "A URL shortener that allows adding, editing, and deleting URLs.", githubLink: "https://github.com/rocerclasing/url-simple" },
  { id: 5, title: "Formik", description: "Example of best practices in form handling using the Formik library.", githubLink: "https://github.com/rocerclasing/formik-basic-react" },
  { id: 6, title: "Firebase Basic React", description: "Basic implementation of Firebase in a React application.", githubLink: "https://github.com/rocerclasing/firebase-basic-simple-react" },
  { id: 7, title: "Context API and React Router", description: "Practice using Context API along with routes in React Router v6.4.", githubLink: "https://github.com/rocerclasing/context-api-react-router6.4" },
  { id: 8, title: "React Router", description: "Basic routing practice in React applications using React Router v6.0.", githubLink: "https://github.com/rocerclasing/react-route-dom-vite6.4" },
  { id: 9, title: "Vite React and Tailwind", description: "An example project combining Vite, React, and Tailwind CSS for responsive design.", githubLink: "https://github.com/rocerclasing/vite-react-tailwind-todo-frontendmentor-main" },
  { id: 10, title: "Dynamic Form", description: "Practical example of creating dynamic forms in React.", githubLink: "https://github.com/rocerclasing/Formulario-dinamico" },
];

const CardProject = ({ title, description, index, githubLink }: Props) => {
  return (
    <div className="max-w-sm w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <Link href={`/projects/${index + 1}`} aria-label={`View details for ${title}`}>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {index + 1}. {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </Link>
      <div className="flex justify-center mb-2 space-x-4 text-blue-500">
        <div className="flex flex-col items-center" aria-label="HTML5">
          <FaHtml5 className="text-3xl" title="HTML5" />
          <span className="text-sm">HTML5</span>
        </div>
        <div className="flex flex-col items-center" aria-label="React">
          <FaReact className="text-3xl" title="React" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center" aria-label="JavaScript">
          <FaJsSquare className="text-3xl" title="JavaScript" />
          <span className="text-sm">JS</span>
        </div>
        <div className="flex flex-col items-center" aria-label="GitHub">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View code on GitHub for ${title}`}>
            <FaGithub className="text-3xl" title="GitHub" />
          </Link>
          <span className="text-sm">GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
