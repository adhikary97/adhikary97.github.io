import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const projects = [
    {
      name: 'React Ecommerce Store',
      url: 'https://react-phones-store.netlify.app/',
      github: 'https://github.com/adhikary97/react-phone-store',
      languages: 'React.js',
      description:
        'View different phones in a pseudo-ecommerce store and purchase using PayPal sandbox',
      image: `${process.env.PUBLIC_URL}/project_images/react-phone.png`,
    },
    {
      name: 'Reddit Clone',
      url: 'https://tranquil-falls-61906.herokuapp.com/',
      github: 'https://github.com/adhikary97/reddit-clone',
      languages: 'Ruby on Rails',
      description:
        'Clone of Reddit in Ruby on Rails. You can subscribe/unsubscribe, post and comment',
      image: `${process.env.PUBLIC_URL}/project_images/reddit.png`,
    },
    {
      name: 'Gmail Automator',
      url: '',
      github: 'https://github.com/adhikary97/Gmail-Automator',
      languages: 'Python',
      description:
        'This program allows you to send multiple emails to different people using the Gmail API',
      image: '',
    },
    {
      name: 'TikTok Bot',
      url: '',
      github: 'https://github.com/adhikary97/TikTok-Bot',
      languages: 'Python',
      description: 'Automatically schedule your TikTok videos to be uploaded',
      image: '',
    },
    {
      name: 'TCP Scheme Simulator',
      url: '',
      github: 'https://github.com/adhikary97/TCP-Schemes',
      languages: 'Python',
      description:
        'Simulates different schemes of TCP i.e Stop-and-Go, Cumulative ACK, Selective ACK',
      image: '',
    },
    {
      name: 'Sokoban AI Solver',
      url: '',
      github: 'https://github.com/adhikary97/Sokoban-AI-Solver',
      languages: 'Python',
      description:
        'Solves Sokoban Puzzles using A* search, UCS algorithms and heuristic functions',
      image: '',
    },
  ];
  return (
    <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
      <h2 style={{ color: 'white' }}>What I've worked on...</h2>
      <div className="container ">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              url={project.url}
              name={project.name}
              github={project.github}
              languages={project.languages}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
