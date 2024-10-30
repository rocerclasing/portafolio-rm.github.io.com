import { FaHtml5, FaReact, FaJsSquare, FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  index: number;
  githubLink: string;
}

const CardProject = ({ title, description, index, githubLink }: Props) => {
  return (
    <div className="max-w-sm w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {index + 1}. {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <div className="flex justify-center mb-2 space-x-4 text-blue-500">
        <div className="flex flex-col items-center" aria-label="HTML5">
          <FaHtml5 className="text-3xl transition-colors duration-200 hover:text-red-500" title="HTML5" />
          <span className="text-sm">HTML5</span>
        </div>
        <div className="flex flex-col items-center" aria-label="React">
          <FaReact className="text-3xl transition-colors duration-200 hover:text-blue-400" title="React" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center" aria-label="JavaScript">
          <FaJsSquare className="text-3xl transition-colors duration-200 hover:text-yellow-500" title="JavaScript" />
          <span className="text-sm">JS</span>
        </div>
        <div className="flex flex-col items-center" aria-label="GitHub">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl transition-transform transform hover:scale-125 hover:text-gray-500" title="GitHub" />
          </a>
          <span className="text-sm">GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
