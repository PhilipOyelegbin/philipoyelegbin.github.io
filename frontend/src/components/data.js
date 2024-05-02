import figma from '../assets/figma.png';
import html from "../assets/html5.png";
import css from "../assets/css3.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.png";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import postgresql from "../assets/postgresql.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import vim from "../assets/vim.png";
import gcp from "../assets/gcp.png";
import terraform from "../assets/terraform.png";
import docker from "../assets/docker.svg";
import kubernetes from "../assets/kubernetes.png";
import nginx from "../assets/nginx.png";
import netlify from "../assets/netlify.png";
import binoculars from '../assets/binoculars.svg';
import pencil from '../assets/pencil.svg';
import columns from '../assets/columns.svg';

export const EducationData = [
    {certificate: "Cloud Engineer", institution: "3MTT AltSchool", duration: "2023 - 2024"},
    {certificate: "Meta Frontend Developer", institution: "Coursera", duration: "2022 - 2023"},
    {certificate: "HND, Industrial Maintenance Engineer", institution: "Yaba College of Technology", duration: "2019 - 2022"}
]

export const SkillsData = {
    FrontendSkills: [
        {cover_image: html, label: "HTML"},
        {cover_image: css, label: "CSS"},
        {cover_image: sass, label: "Sass"},
        {cover_image: bootstrap, label: "Bootsrap"},
        {cover_image: tailwind, label: "Tailwind"},
        {cover_image: javascript, label: "JavaScript"},
        {cover_image: react, label: "React"},
        {cover_image: redux, label: "Redux"},
    ],
    BackendSkills: [
        {cover_image: nodejs, label: "Nodejs"},
        {cover_image: express, label: "Express"},
        {cover_image: mongodb, label: "MongoDB"},
        {cover_image: mysql, label: "MySQL"},
        {cover_image: postgresql, label: "PostgreSQL"},
    ],
    CloudSkills: [
        {cover_image: gcp, label: "GCP"},
        {cover_image: nginx, label: "Nginx"},
        {cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-FLAWWfGq2LXzkQUQcEkpfFvRiaySiSn3A&usqp=CAU", label: "Ansible"},
        {cover_image: terraform, label: "Terraform"},
        {cover_image: docker, label: "Docker"},
        {cover_image: kubernetes, label: "Kubernetes"},
    ],
    OtherSkills: [
        {cover_image: figma, label: "Figma"},
        {cover_image: vscode, label: "VS Code"},
        {cover_image: git, label: "Git"},
        {cover_image: github, label: "GitHub"},
        {cover_image: vim, label: "Vim"},
        {cover_image: netlify, label: "Netlify"},
    ]
}

export const ExperienceData = [
    {role: "Customer Support Officer", company: "GO54 (Whogohost Limited)", duration: "2022 - till date"},
    {role: "Frontend Engineer (Volunteer)", company: "See9ja", duration: "2022 - 2024"},
    {role: "Frontend Engineer (Volunteer)", company: "Valorise Limited", duration: "2022 - 2023"},
    {role: "Robotics Instructor (Contract)", company: "WiFi Combat Academy", duration: "2021 - 2023"},
]

export const Services = [
    {id: 1, icon: binoculars, title: "Vision", summary: "You need a beautiful and functional website that will inspire and connect with their visitors, aiming to convert website visitors into clients."},
    {id: 2, icon: pencil, title: "Plan", summary: "Actualizing your vision requires a strategic plan. This is where we analyze your target market and tailor the look of your site to your vision and your ideal client's needs using Figma."},
    {id: 3, icon: columns, title: "Build", summary: "This is where I implement the plan to make your vision come alive on the web page. With the language of computers, I build the structure, give it an attractive look, make it interactive and host it on the web."}
]
