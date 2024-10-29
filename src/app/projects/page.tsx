import CardProject from '@/components/CardProject';

const projects = [
  { id: 1, title: "Portfolio", description: "Showcases my personal and professional projects.", githubLink: "https://github.com/rocerclasing/portafolio-rm.github.io.com.git" },
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

// Componente de página que muestra todos los proyectos
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="w-full text-center text-4xl font-bold text-gray-800 mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <CardProject
            key={project.id}
            title={project.title}
            description={project.description}
            index={index}
            githubLink={project.githubLink} // Se pasa el enlace de GitHub
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
