import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../App'; // Import ProjectContext to get the project data
import '../styles/ProjectDetail.scss'; // Import styles for ProjectDetail

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get projectId from the URL parameters
  const { projectData } = useContext(ProjectContext); // Get projectData from context

  // Find the project that matches the projectId
  const project = projectData.find(proj => proj.title.replace(/\s+/g, '-').toLowerCase() === projectId);

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <div className="project-detail">
      <div className="project-detail-card">
        <img src={project.image_src} alt={project.title} className="project-detail-image" />
        <h2 className="project-detail-title">{project.title}</h2>
        <p className="project-detail-date"><strong>Date:</strong> {project.date}</p>
        <p className="project-detail-description">{project.description}</p>
        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="project-detail-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
