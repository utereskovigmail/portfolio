import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase,   } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDotnet, SiPostgresql, SiBootstrap, SiSqlite, SiMysql, SiCplusplus, SiSharp,   SiFigma,
    SiPostman, } from "react-icons/si";
import type {JSX} from "react";

const iconSize = "h-12 w-12";

export const techIcons: Record<string, JSX.Element> = {
    "React (Vite)": <FaReact className={`${iconSize} text-sky-500`} />,
    TypeScript: <SiTypescript className={`${iconSize} text-blue-500`} />,
    TailwindCSS: <SiTailwindcss className={`${iconSize} text-cyan-400`} />,
    GitHub: <FaGithub className={`${iconSize} text-gray-800`} />,
    "C#": <SiSharp className={`${iconSize} text-violet-600`} />,
    "C++": <SiCplusplus className={`${iconSize} text-blue-600`} />,
    Python: <FaPython className={`${iconSize} text-yellow-400`} />,
    "ASP.NET": <SiDotnet className={`${iconSize} text-indigo-600`} />,
    PostgreSQL: <SiPostgresql className={`${iconSize} text-blue-600`} />,
    MySQL: <SiMysql className={`${iconSize} text-sky-600`} />,
    SQLite: <SiSqlite className={`${iconSize} text-blue-500`} />,
    SQL: <FaDatabase className={`${iconSize} text-blue-500`} />,
    HTML: <FaHtml5 className={`${iconSize} text-orange-500`} />,
    CSS: <FaCss3Alt className={`${iconSize} text-blue-500`} />,
    JavaScript: <FaJs className={`${iconSize} text-yellow-400`} />,
    Bootstrap: <SiBootstrap className={`${iconSize} text-purple-600`} />,
    Figma: <SiFigma className={`${iconSize} text-pink-500`} />,
    Postman: <SiPostman className={`${iconSize} text-orange-500`} />,
};
