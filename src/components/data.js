import figma from '/src/assets/figma.png';
import html from "/src/assets/html.png";
import css from "/src/assets/css.png";
import sass from "/src/assets/sass.png";
import bootstrap from "/src/assets/bootstrap.jpg";
import tailwind from "/src/assets/tailwind.png";
import javascript from "/src/assets/javascript.png";
import react from "/src/assets/react.png";
import redux from "/src/assets/redux.png";
import git from "/src/assets/git.png";
import vs_code from "/src/assets/vs-code.jpg";
import binoculars from '../assets/binoculars.svg';
import pencil from '../assets/pencil.svg';
import columns from '../assets/columns.svg';

export const Skills = [
    {cover_image: figma, label: "Figma"},
    {cover_image: html, label: "HTML"},
    {cover_image: css, label: "CSS"},
    {cover_image: sass, label: "Sass"},
    {cover_image: bootstrap, label: "Bootsrap"},
    {cover_image: tailwind, label: "Tailwind"},
    {cover_image: javascript, label: "JavaScript"},
    {cover_image: react, label: "React"},
    {cover_image: redux, label: "Redux"},
    {cover_image: git, label: "Git"},
    {cover_image: vs_code, label: "VS Code"},
]

export const Services = [
    {id: 1, icon: binoculars, title: "Vision", summary: "You need a beautiful and functional website that will inspire and connect with their visitors, aiming to convert website visitors into clients."},
    {id: 2, icon: pencil, title: "Plan", summary: "Actualizing your vision requires a strategic plan. This is where we analyze your target market and tailor the look of your site to your vision and your ideal client's needs using Figma."},
    {id: 3, icon: columns, title: "Build", summary: "This is where I implement the plan to make your vision come alive on the web page. With the language of computers, I build the structure, give it an attractive look, make it interactive and host it on the web."}
]